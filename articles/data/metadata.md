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

<div id="version">  
  Issued: <i>{{site.metadata.current.version}}</i>
  <br/>
  DOI: <a href="https://doi.org/{{site.metadata.current.doi}}">{{site.metadata.current.doi}}</a>
  <br/>
  ChecklistBank: <a href="https://data.catalogueoflife.org/dataset/{{site.metadata.current.key}}/about">{{site.metadata.current.key}}</a>
  <br/>
  <br/>
</div>


## Abstract

{{site.metadata.current.description}}

## Recommended citation

<div id="bibtex" style="float: right;">
<a href="https://api.catalogueoflife.org/dataset/{{ site.react.datasetKey }}.bib"><img src="/images/bibtex_logo.png" style="height: 32px;"></a>
</div>

{{site.metadata.current.citation}}
<br/>
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
{{site.metadata.current.publisher.label}}

