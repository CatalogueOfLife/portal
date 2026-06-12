#!/bin/bash -e
#
# Unified Jenkins build + deploy for the Astro portal. Runs in a freshly cloned
# repo. Replaces the old per-environment Jekyll scripts.
#
#   ENV=prod|preview|dev   PWD_PORTAL=<colportal read-only password>   (Jenkins creds)
#
# All three environments build identically and pull data from the *prod*
# ChecklistBank; they differ only in which release they select (prod/dev pin the
# public 3LXR; preview takes the latest Extended+Base incl private drafts) and
# where they deploy. The build produces:
#   dist/client/         static HTML + assets  -> served by Apache/CDN
#   dist/server/entry.mjs  Node SSR server      -> systemd service behind Varnish,
#                                                  serves /data/taxon and /data/dataset
#
# This is the full cutover from the backend Freemarker renderer: the old
# release-key PUT and the 404/taxon/dataset/metadata/tombstone template PUTs are
# gone — Astro renders those itself.

# Run from the repo root regardless of how we're invoked ($PWD is used as the
# Docker build mount and for the rsync sources).
cd "$(dirname "$0")/.."

echo "Build environment: $ENV"
PROD_API="https://api.checklistbank.org"   # releases resolved & queried here for every env

# RELEASE_ALIAS pins a specific public release; empty means "no pin" so the build
# picks the latest release itself (see COL_PRIVATE below). COL_PRIVATE=any tells
# fetch-data.mjs to drop the public-only filter and take the absolute newest
# release incl private draft/candidate releases.
RELEASE_ALIAS=
COL_PRIVATE=
case $ENV in
  prod)
    RELEASE_ALIAS=3LXR
    DEPLOY_HOST=apps.checklistbank.org
    STATIC_DIR=/var/www/html/col-portal/
    TARGET=www.catalogueoflife.org
    SSR_PORT=4321
    ;;
  preview)
    # Bleeding edge: latest Extended + Base incl private drafts (no pin).
    COL_PRIVATE=any
    DEPLOY_HOST=apps.checklistbank.org
    STATIC_DIR=/var/www/html/col-portal-preview/
    TARGET=preview.catalogueoflife.org
    SSR_PORT=4322
    ;;
  dev)
    # Mirror prod: the current public Extended release (3LXR), no private data.
    RELEASE_ALIAS=3LXR
    DEPLOY_HOST=apps.dev.checklistbank.org
    STATIC_DIR=/var/www/html/col-portal/
    TARGET=www.dev.catalogueoflife.org
    SSR_PORT=4321
    ;;
  *)
    echo "Unknown ENV '$ENV' (expected prod|preview|dev)"; exit 1 ;;
esac

DEPLOY="jenkins-deploy@${DEPLOY_HOST}"
SSR_DIR="/opt/col-portal/${ENV}"

# Only preview reads private draft releases, so only its API calls (build, SSR
# and client islands) authenticate as the read-only colportal account; prod and
# dev run on the public Extended release, so no auth is exposed there.
case $ENV in
  preview) AUTH="colportal:${PWD_PORTAL}" ;;
  *)       AUTH="" ;;
esac

# Resolve the magic release alias to a concrete key against the prod CLB. Skipped
# for preview, which pins nothing and lets the build pick the latest (COL_PRIVATE).
RELEASE_KEY=
if [ -n "$RELEASE_ALIAS" ]; then
  RELEASE_KEY=$(curl -s --fail --user "colportal:${PWD_PORTAL}" "${PROD_API}/dataset/${RELEASE_ALIAS}.json" | jq '.key')
  [ -n "$RELEASE_KEY" ] && [ "$RELEASE_KEY" != "null" ] || { echo "Could not resolve release $RELEASE_ALIAS"; exit 1; }
  echo "Release $RELEASE_ALIAS -> $RELEASE_KEY"
else
  echo "No release pin (COL_PRIVATE=${COL_PRIVATE:-false}); build picks the latest"
fi

echo "Cleaning previous build"
rm -rf dist

echo "Building site (Node 22 in Docker)"
docker run --rm -u "$(id -u):$(id -g)" \
  -e HOME=/tmp -e npm_config_cache=/tmp/.npm \
  -e SITE_ENV="$ENV" \
  -e CLB_API="$PROD_API" \
  -e COL_KEY=3 \
  -e COL_RELEASE="$RELEASE_KEY" \
  -e COL_PRIVATE="$COL_PRIVATE" \
  -e PUBLIC_COL_AUTH="$AUTH" \
  --volume "$PWD:/app" -w /app \
  node:22 bash -lc "npm ci && npm install --no-save col-browser@^2 && npm run build"

echo "Deploying static assets -> ${DEPLOY}:${STATIC_DIR}"
rsync -rlO --delete dist/client/ "${DEPLOY}:${STATIC_DIR}"

echo "Deploying SSR server -> ${DEPLOY}:${SSR_DIR}"
ssh "$DEPLOY" "mkdir -p ${SSR_DIR}"
# -l preserves the many symlinks in node_modules (.bin/*, hoisted packages);
# without it rsync skips them ("non-regular file") and the install is broken.
rsync -rlO --delete dist/          "${DEPLOY}:${SSR_DIR}/dist/"
rsync -rlO --delete node_modules/  "${DEPLOY}:${SSR_DIR}/node_modules/"
rsync -O package.json package-lock.json "${DEPLOY}:${SSR_DIR}/"
# Runtime env for the systemd service: host/port + COL_AUTH so the SSR routes
# can read private candidate releases (empty on prod). Default perms so the
# service user (col) can read it; on preview/dev the credential is already
# public in the client bundle, and on prod COL_AUTH is empty.
ssh "$DEPLOY" "printf 'HOST=127.0.0.1\nPORT=%s\nCOL_AUTH=%s\n' '${SSR_PORT}' '${AUTH}' > ${SSR_DIR}/service.env"
# Needs a passwordless sudoers rule for the deploy user (see DEPLOY.md).
ssh "$DEPLOY" "sudo -n systemctl restart col-portal@${ENV}"

echo "Flushing Varnish for $TARGET"
curl -sSI -X FLUSH "https://${TARGET}/"
