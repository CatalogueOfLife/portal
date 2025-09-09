---
layout: content
title: CITE DATA
tagline: Acknowledging our community of taxonomic experts
section_id: howto
toc: false
imageUrl: https://inaturalist-open-data.s3.amazonaws.com/photos/554586087/large.jpg
imageCaption: _Opisthoncus polyphemus_ (L. Koch, 1867) - [Photo CC By skolio](https://www.inaturalist.org/observations/307462913)
permalink: /howto/cite
---


The Catalogue of Life offers the following elements to ensure scientific transparency and reproducibility:

- Each version has its own DOI and includes a citation of all contributing sources.
- Every name has its own unique identifier that links to the corresponding record in a source. 
- Every data source in COL’s infrastructure ChecklistBank will receive its own Digital Object Identifier (DOI).
- Every name in every data source in ChecklistBank has  its own unique identifier and can be cited directly.
- Catalogue of Life will as far as possible maintain the stability of all these identifiers between different versions.

Our platform brings together communities of taxonomic experts to make Catalogue of Life possible. To provide appropriate acknowledgment to this collective effort we strongly recommended that users adopt the DOI for citations in all publications and other uses of data. 

Monitoring use of these DOIs will enable our entity community to demonstrate the importance both of taxonomic research and of the work needed to build the catalogue.

## Recommended citations

**Please use the following recommended citation:**

<div id="citation">
{{site.metadata.current.citation}}
</div>

**Please use the following recommended citations for the individual datasets contributing to the Catalogue of Life:**


<div class="sources">
	{% assign sources = site.metadata.sources | sort: "alias" %}
	{% for src in sources %}
		<div>{{src.citation}} <a href="/data/dataset/{{src.key}}"><img style="height: 12px; opacity: 60%" src="/images/link.png"/></a></div>
	{% endfor %}
</div>
