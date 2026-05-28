---
layout: content
toc: false
title: Metrics
tagline: Metrics about the current Catalogue of Life
section_id: data
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data/metrics
---

## TODO:
 - number of accepted families, genera, species (over time of releases ???)
 - names by type
 - names by status
 - vernaculars by lang

## Metrics 


### Composition of Eukaryota

<div class='full'>
	<div id="breakdown" class="catalogue-of-life">chart</div>
</div>

<script >
    'use strict';

    const URLTaxonBreakdown = ColBrowser.withRouting(ColBrowser.TaxonBreakdown, {
      kind: 'taxonBreakdown',
      mode: 'path',
      navigation: 'reload',
      paths: window.ColBrowserPaths,
    });

    ColBrowser.ReactDOM.createRoot(document.querySelector('#breakdown')).render(
      ColBrowser.React.createElement(URLTaxonBreakdown, {
        datasetKey: '{{ site.react.datasetKey }}',
        taxonId: 'CS5HF',
        showLevelSwitch: true,
      })
    );

</script>
