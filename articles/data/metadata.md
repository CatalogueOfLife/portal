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

**ChecklistBank**: [{{site.metadata.current.key}}](https://data.catalogueoflife.org/dataset/{{site.metadata.current.key}}/about)

## Abstract

{{site.metadata.current.description}}

## Recommended citation

<div id="bibtex" style="float: right;">
<a href="https://api.catalogueoflife.org/dataset/{{ site.react.datasetKey }}.bib"><img src="/images/bibtex_logo.png" style="height: 32px;"></a>
</div>

{{site.metadata.current.citation}}

Please also read the <a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the COL Checklist.</a>

### Authors

<div id="authors">  
  <ul>
  {% for a in site.metadata.current.creator %}
    <li>{{a.label}}</li>
  {% endfor %}
  </ul>
</div>

### Publisher

<div id="publisher">  
  {{site.metadata.current.publisher.label}}
</div>

### Contact

<div id="contact">  
  {{site.metadata.current.contact.label}}
</div>

