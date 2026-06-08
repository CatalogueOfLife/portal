# `_assets/` — source images kept out of the build

This folder holds **original / unused image sources** that we want to keep in the
repo but **must not ship** to visitors. Like `_data/`, it sits outside `public/`
and `src/`, so Astro neither serves it nor copies it into `dist/`.

| Path | What it is |
|---|---|
| `images/species/_original/` | Full-resolution sources for the species banners. The web-sized banners live in `public/images/species/`. |
| `images/species_unused/` | Candidate banner photos not currently used by any article. |
| `images/@stock/` | Stock photo library (header candidates). None are referenced today. |
| `images/background/` | Decorative backgrounds (trees, unsplash) not referenced today. |
| `images/kingdoms/*-large.jpg` | Large variants of the home-page kingdom tiles; the page uses the small 170×222 versions in `public/`. |
| `images/gif/` | Original screen-capture GIFs, superseded by the `<video>` clips in `public/videos/`. |

**To put one of these back into use:** export a web-optimised copy (resize,
recompress, prefer WebP — see `CLAUDE.md`) into `public/images/…` and reference
that. Don't reference files under `_assets/` from `src/` — they aren't served.
