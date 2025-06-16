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
	
    const e = React.createElement;

    class EukaryoteChart extends React.Component {
        render() {
	      return e(
            ColBrowser.TaxonBreakdown, { taxonId: "CS5HF", datasetKey: '{{ site.react.datasetKey }}' , pathToTaxon: "/data/taxon/"}
	      );	  
		}
    }

    const domContainer = document.querySelector('#breakdown');
    ReactDOM.render(e(EukaryoteChart), domContainer);

</script>
