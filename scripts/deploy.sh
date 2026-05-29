#!/bin/bash -e
#
# Unified Jenkins build + deploy for the Astro portal. Runs in a freshly cloned
# repo. Replaces the old per-environment Jekyll scripts.
#
#   ENV=prod|preview|dev   PWD_PORTAL=<colportal read-only password>   (Jenkins creds)
#
# All three environments build identically and pull data from the *prod*
# ChecklistBank; they differ only in which release alias they pin and where they
# deploy. The build produces:
#   dist/client/         static HTML + assets  -> served by Apache/CDN
#   dist/server/entry.mjs  Node SSR server      -> systemd service behind Varnish,
#                                                  serves /data/taxon and /data/dataset
#
# This is the full cutover from the backend Freemarker renderer: the old
# release-key PUT and the 404/taxon/dataset/metadata/tombstone template PUTs are
# gone — Astro renders those itself.

echo "Build environment: $ENV"
PROD_API="https://api.checklistbank.org"   # releases resolved & queried here for every env

case $ENV in
  prod)
    RELEASE_ALIAS=3LXR
    DEPLOY_HOST=apps.checklistbank.org
    STATIC_DIR=/var/www/html/col-portal/
    TARGET=www.catalogueoflife.org
    SSR_PORT=4321
    ;;
  preview)
    RELEASE_ALIAS=3LRC
    DEPLOY_HOST=apps.checklistbank.org
    STATIC_DIR=/var/www/html/col-portal-preview/
    TARGET=preview.catalogueoflife.org
    SSR_PORT=4322
    ;;
  dev)
    RELEASE_ALIAS=3LXRC
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

# preview/dev pin private candidate releases, so all their API calls
# (build, SSR and client islands) authenticate as the read-only colportal
# account; prod's release is public, so no auth is exposed there.
case $ENV in
  prod) AUTH="" ;;
  *)    AUTH="colportal:${PWD_PORTAL}" ;;
esac

# Resolve the magic release alias to a concrete key against the prod CLB.
RELEASE_KEY=$(curl -s --fail --user "colportal:${PWD_PORTAL}" "${PROD_API}/dataset/${RELEASE_ALIAS}.json" | jq '.key')
[ -n "$RELEASE_KEY" ] && [ "$RELEASE_KEY" != "null" ] || { echo "Could not resolve release $RELEASE_ALIAS"; exit 1; }
echo "Release $RELEASE_ALIAS -> $RELEASE_KEY"

echo "Cleaning previous build"
rm -rf dist

echo "Building site (Node 22 in Docker)"
docker run --rm -u "$(id -u):$(id -g)" \
  -e HOME=/tmp -e npm_config_cache=/tmp/.npm \
  -e SITE_ENV="$ENV" \
  -e CLB_API="$PROD_API" \
  -e COL_KEY=3 \
  -e COL_RELEASE="$RELEASE_KEY" \
  -e PUBLIC_COL_AUTH="$AUTH" \
  --volume "$PWD:/app" -w /app \
  node:22 bash -lc "npm ci && npm run build"

echo "Deploying static assets -> ${DEPLOY}:${STATIC_DIR}"
rsync -rO --delete dist/client/ "${DEPLOY}:${STATIC_DIR}"

echo "Deploying SSR server -> ${DEPLOY}:${SSR_DIR}"
ssh "$DEPLOY" "mkdir -p ${SSR_DIR}"
rsync -rO --delete dist/          "${DEPLOY}:${SSR_DIR}/dist/"
rsync -rO --delete node_modules/  "${DEPLOY}:${SSR_DIR}/node_modules/"
rsync -O package.json package-lock.json "${DEPLOY}:${SSR_DIR}/"
# Runtime env for the systemd service: host/port + COL_AUTH so the SSR routes
# can read private candidate releases (empty on prod). Lock the file down since
# it holds the credential.
ssh "$DEPLOY" "umask 077; printf 'HOST=127.0.0.1\nPORT=%s\nCOL_AUTH=%s\n' '${SSR_PORT}' '${AUTH}' > ${SSR_DIR}/service.env"
ssh "$DEPLOY" "sudo systemctl restart col-portal@${ENV}"

echo "Flushing Varnish for $TARGET"
curl -sSI -X FLUSH "https://${TARGET}/"
