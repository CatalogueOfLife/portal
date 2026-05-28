---
layout: default
title: Taxon
tagline: This would probably be a custom page
section_id: data
permalink: /data/taxon
seo_include: seo_taxon.html
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">
  <div id="taxon"></div>
</div>
  <script>
      'use strict';

const URLTaxon = ColBrowser.withRouting(ColBrowser.Taxon, {
  kind: 'taxon',
  mode: 'path',
  paths: window.ColBrowserPaths,
});

ColBrowser.ReactDOM.createRoot(document.querySelector('#taxon')).render(
  ColBrowser.React.createElement(URLTaxon, {
    datasetKey: '{{ site.react.datasetKey }}',
    auth: '{{ site.react.auth }}',
    pageTitleTemplate: 'COL | __taxon__',
    showDistributionMap: true,
    gbifChecklistKey: '7ddf754f-d193-4cc9-b351-99906754a03b',
    ...window.ColBrowserNav,
  })
);
</script>
