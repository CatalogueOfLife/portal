---
layout: default
title: Dataset
section_id: data
permalink: /data/dataset
seo_include: seo_dataset.html
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">
  <div id="dataset"></div>
</div>
  <script>
      'use strict';

const URLSourceDataset = ColBrowser.withRouting(ColBrowser.SourceDataset, {
  kind: 'source',
  mode: 'path',
  navigation: 'reload',
  paths: window.ColBrowserPaths,
});

ColBrowser.ReactDOM.createRoot(document.querySelector('#dataset')).render(
  ColBrowser.React.createElement(URLSourceDataset, {
    datasetKey: '{{ site.react.datasetKey }}',
    auth: '{{ site.react.auth }}',
    pageTitleTemplate: 'COL | __dataset__',
  })
);
  </script>