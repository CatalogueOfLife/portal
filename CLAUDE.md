# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the public-facing website for the [Catalogue of Life](https://www.catalogueoflife.org), built with [Jekyll](https://jekyllrb.com/) (Ruby). It is a content-driven static site with dynamic components powered by React and the ChecklistBank API.

## Commands

```bash
# Install dependencies
bundle install

# Run locally (development)
bundle exec jekyll serve --draft

# Run with dev config (uses dev API endpoint, shows future posts)
bundle exec jekyll serve --config _config.yml,_config_dev.yml

# Build for production
JEKYLL_ENV=prod bundle exec jekyll build
```

There is no test suite or linter. Jekyll will throw Ruby errors at build time if plugins have issues.

## Architecture

### Key architectural concepts

**Data-driven navigation**: All site navigation is defined in `_data/nav.yml`. The `section_id` frontmatter field in pages maps to this to highlight the correct menu item.

**Dual rendering**: Jekyll generates static HTML at build time; React components (loaded from CDN as `portal-components` v1.6.0) render dynamic taxonomy browsers, search, and dataset pages client-side.

**API integration at build time**: Two custom Jekyll plugins in `_plugins/` fetch data from ChecklistBank API (`https://api.checklistbank.org`) during build:
- `_plugins/get_release_metadata.rb` — fetches current release metadata and injects into `site.config['metadata']`
- `_plugins/changelog.rb` — fetches all releases, computes diffs, caches JSON in `_data/releases/`

**Multi-environment configs**: `_config_dev.yml` and `_config_preview.yml` override `_config.yml` to point to different API endpoints and enable basic auth.

### Content structure

- `articles/` — content pages organized by section (`about/`, `building/`, `data/`, `howto/`, `tools/`)
- `_posts/` — news stories, filename must be `YYYY-MM-DD-title.md`
- `root/` — homepage (`index.md`) and top-level pages (404, privacy, terms)
- `_data/nav.yml` — navigation structure (single source of truth for menus)
- `_layouts/` — `content.html` (markdown articles), `default.html` (HTML pages), `post.html` (news), `navPage.html` (section landing pages)

### Page frontmatter

**For markdown articles** (`layout: content`):
```yaml
---
layout: content
title: Page Title
tagline: Subtitle text
section_id: about        # maps to nav.yml for menu highlighting
imageUrl: /images/species/example.jpg   # 1800px wide, sRGB, 80% JPEG
imageCaption: Caption text
toc: true                # table of contents (default: false)
noindex: false           # robots indexing (default: false)
permalink: /custom/url   # optional override
published: true
---
```

**For HTML pages** (`layout: default`):
```yaml
---
layout: default
section_id: about
seo_ssi: true   # use server-side includes for SEO data (taxa/datasets)
---
```

**For news posts** (`_posts/`, `layout: post`):
```yaml
---
layout: post
title: "Post title"
categories: Release   # or ["Awards", "Communication"] etc.
author: "Name"
excerpt: Short description for search results
---
```

### Images

Banner images in articles go in `/images/species/`: 1800px wide, sRGB color profile, JPEG at 80% quality.

Use the custom include for captioned images in markdown:
```
{% include image.html url="/images/example.jpg" alt="Alt text" description="Caption" %}
```

### Icons

Font Awesome 6 — browse free icons at https://fontawesome.com/icons
