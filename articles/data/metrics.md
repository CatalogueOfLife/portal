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
 - pie chart breaking down [Eukaryota](https://www.checklistbank.org/dataset/309864/taxon/CS5HF)
 - number of accepted families, genera, species (over time of releases ???)
 - names by type
 - names by status
 - vernaculars by lang

## Metrics

<div class='full'>
	<div id="breakdown" class="catalogue-of-life">chart</div>
</div>

<script >
    'use strict';
	

	const d = {
		"key": 3,
		"title": "my COL",
		"version": "version",
		"doi": "1234",
		"url": "url"
	};
	const tax = {
		"id": "CS5HF",
		"name": {
			"rank": "domain",
			"scientificName": "Eukaryota"
		}
	};

	console.log(tax);
    const e = React.createElement;

    class EukaryoteChart extends React.Component {
        render() {
	      return e(
            ColBrowser.TaxonBreakdown,{ taxon: tax, datasetKey: '{{ site.react.datasetKey }}' , rank: 'phylum', pathToTaxon: '{{ site.react.pathToTaxon }}', dataset: d }
	      );	  
		}
    }

    const domContainer = document.querySelector('#breakdown');
    ReactDOM.render(e(EukaryoteChart), domContainer);

</script>
