---
layout: content
toc: false
title: Metadata
tagline: About the current COL Checklist
section_id: data
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data/metadata
---

## Version

COL Checklist {{site.metadata.current.version}}: [doi:{{site.metadata.current.doi}}](https://doi.org/{{site.metadata.current.doi}})

## Abstract

{{site.metadata.current.description}}

## Recommended citation

<div id="bibtex" style="float: right;">
<a href="https://api.catalogueoflife.org/dataset/{{ site.react.datasetKey }}.bib"><img src="/images/bibtex_logo.png" style="height: 32px;"></a>
</div>

{{site.metadata.current.citation}}

Please also read the <a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the COL Checklist.</a>

## Acknowledgements

The Catalogue of Life thanks [Naturalis](https://www.naturalis.nl) in the Netherlands, [GBIF](https://www.gbif.org) and the [Illinois Natural History Survey](https://www.inhs.illinois.edu) in the USA.
We further thank all that contributed to the COL Checklist:

<div id="authors">  
  <ul>
  {% for a in site.metadata.current.creator %}
    <li>{{a.label}}</li>
  {% endfor %}
  </ul>
</div>

