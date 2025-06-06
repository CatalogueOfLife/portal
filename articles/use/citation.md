---
layout: content
title: COL Citations
tagline: Citing the Catalogue of Life and it's sources
section_id: use
toc: true
imageUrl: /images/species/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /use/citation
---

## TODO:
 - update & review text
 - do we want source citations listed here? its on the source page. Do we want people to cite us in this specific way or rather use the DOI or
 - how to cite using CSL in different formats!
 - how we add authors & contributors
 - ORCIDs
 - DOI rotation from COL to CLB
 - retrieve DOI metadata


## Citing the Catalogue of Life and it's sources
COL's goal is to make sure that all releases of the Catalogue of Life and it's sources can uniquely be identified and cited.

## Digital Object Identifiers
To support this aim, COL makes use of [Digital Object Identifiers](https://doi.org/) (DOI) provided to us by [DataCite](https://datacite.org/). 

Each version of the Catalogue of Life has it's own DOI. 
The information shared for each version includes citation of all contributing sector checklists and other sources contributing content. 

We recommend that [users](community#the-role-of-users) adopt our DOIs for citations in all publications and other uses of COL data. 
Monitoring use of these DOIs will enable COL to demonstrate the importance both of taxonomic research and of the work needed to build the Checklist itself. 
Usage information from DOI citations will be included as part of the metadata for each checklist version and each contributing dataset. 
This will allow COL to report usage (including references inside publications) more accurately to the data contributors of the content, 
making it easier for them to highlight the importance of maintaining these datasets.

### Retrieving DOI metadata
tbd

## Recommended citation

### Catalogue of Life

Please use the following recommended citation for the current version of the Catalogue of Life:

<div id="citation">
{{site.metadata.current.citation}}
</div>

### Sources of the Catalogue of Life
Please use the following recommended citations for the individual datasets contributing to the Catalogue of Life:

<div class="sources">
	{% assign sources = site.metadata.sources | sort: "alias" %}
	{% for src in sources %}
		<div>{{src.citation}} <a href="/data/dataset/{{src.key}}"><img style="height: 12px; opacity: 60%" src="/images/link.png"/></a></div>
	{% endfor %}
</div>
