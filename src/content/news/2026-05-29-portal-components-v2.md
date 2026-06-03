---
title: "Portal components v2: a major, breaking release"
author: "Markus Döring"
excerpt: "The col-browser ReactJS components have moved to React 19 and a fully controlled API. Pin to v1 to keep your pages working, or upgrade to the more flexible v2."
categories: ["portal-components", "developers", "release"]
---

We have just released **version 2 of the Catalogue of Life portal components** — the `col-browser` ReactJS library many of you embed to show ChecklistBank trees, search forms, taxon pages and citations on your own sites. This is a **major, breaking release**, so if you embed our components anywhere it is worth a few minutes of your time.

## If you do nothing else, pin to v1

Anyone currently loading the components from a `@latest` URL should switch to a pinned **`@1`** URL now. v1 is unchanged and stays in maintenance mode (critical fixes only), so pinning to it keeps your existing pages working exactly as before:

```html
<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@1/umd/col-browser.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@1/umd/main.css">
```

The `@latest` selector now resolves to v2, and a future v3 would silently migrate you again. We recommend pinning to a major (`@1` or `@2`) on every page rather than tracking `@latest`.

## What changed in v2

The stack is now current — **React 19** and **Ant Design 6** — and every top-level component is **fully controlled**: the library no longer reads or writes the page URL itself. For embedders this means three concrete changes:

- **Drop the separate React / ReactDOM `<script>` tags.** React 19 no longer ships a UMD build, so the v2 bundle includes React and `react-dom/client` and re-exposes them as `ColBrowser.React` and `ColBrowser.ReactDOM`.
- **Mount via `createRoot`** instead of the old `ReactDOM.render`.
- **Supply navigation as props.** Each component takes its identifier (`taxonKey`, `taxonId`, …) and its links (`hrefForTaxon`, `onNavigateToTaxon`, …) as plain props.

A couple of names also changed: `catalogueKey` → `datasetKey`, and the source-dataset components `Dataset` / `DatasetSearch` → `SourceDataset` / `SourceDatasetList`.

To keep the wiring painless there is a built-in **`withRouting`** adapter that reconnects components to the URL from a single `paths` map, so most static-site embeds remain only a few lines:

```html
<script src="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@2/umd/col-browser.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/CatalogueOfLife/portal-components@2/umd/main.css">
<div id="tree"></div>
<script>
  const URLTree = ColBrowser.withRouting(ColBrowser.Tree, {
    kind: 'tree',
    mode: 'path',
    navigation: 'reload', // static / multi-page hosts; use 'spa' for SPAs
    paths: { taxon: '/taxon/', tree: '/tree', search: '/search', source: '/source/' },
  });
  ColBrowser.ReactDOM.createRoot(document.querySelector('#tree'))
    .render(ColBrowser.React.createElement(URLTree, { datasetKey: '3LR' }));
</script>
```

The full upgrade guide, per-component prop tables and copy-paste snippets are in the [README's upgrade section](https://github.com/CatalogueOfLife/portal-components#upgrading-from-1x-to-20).

## Why upgrade

Decoupling navigation from the URL makes the components much more flexible. They now drop cleanly into static portals, react-router, Next.js or any custom router without fighting the library, and you control link shapes and routing entirely from props. It is also the groundwork for our own portal move to Astro (more on that soon).

## Try it

A hosted demo exercises every component against the production ChecklistBank API:

👉 [catalogueoflife.github.io/portal-components](https://catalogueoflife.github.io/portal-components/)

Questions, issues and pull requests are very welcome on [GitHub](https://github.com/CatalogueOfLife/portal-components).
