---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: data
permalink: /data/search
imageUrl: /images/species/Fratercula_arctica.jpg
imageCaption:  _Fratercula arctica_ (Linnaeus, 1758)- [Photo CC BY Kalvin Chan](https://www.inaturalist.org/photos/548565784)
---

Find any scientific name in the current <a href="/data/metadata">version {{site.metadata.current.version}}</a> of the Catalogue of Life, [learn How To](/howto/access#search).

<div class="row" style="background: white; margin-top: 0px; margin-bottom: 0px">
  <div id="search"></div>
</div>
  <script>
    'use strict';

const URLSearch = ColBrowser.withRouting(ColBrowser.Search, {
  kind: 'search',
  mode: 'path',
  navigation: 'reload',
  paths: window.ColBrowserPaths,
});

ColBrowser.ReactDOM.createRoot(document.querySelector('#search')).render(
  ColBrowser.React.createElement(URLSearch, {
    datasetKey: '{{ site.react.datasetKey }}',
    auth: '{{ site.react.auth }}',
  })
);
  </script>
