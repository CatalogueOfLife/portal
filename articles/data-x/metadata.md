---
layout: content
toc: false
title: Metadata
tagline: About the current Catalogue of Life
section_id: data-x
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data-x/metadata
---

## Version

<div id="version">  
  Issued: <i>{{site.metadata-x.current.version}}</i>
  <br/>
  DOI: <a href="https://doi.org/{{site.metadata-x.current.doi}}">{{site.metadata-x.current.doi}}</a>
  <br/>
  ChecklistBank: <a href="https://www.checklistbank.org/dataset/{{site.metadata-x.current.key}}/about">{{site.metadata-x.current.key}}</a>
  <br/>
  <br/>
</div>



## Abstract

{{site.metadata-x.current.description}}

## Recommended citation

<div id="bibtex" style="float: right;">
<a href="https://api.checklistbank.org/dataset/{{ site.react-x.datasetKey }}.bib"><img src="/images/bibtex_logo.png" style="height: 32px;"></a>
</div>

{{site.metadata-x.current.citation}}
<br/>
Please also read the <a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the Catalogue of Life.</a>

### Authors

<div id="authors">  
  <ul>
  {% for a in site.metadata-x.current.creator %}
    <li>{{a.label}}</li>
  {% endfor %}
  </ul>
</div>

### Publisher
{{site.metadata-x.current.publisher.label}}

