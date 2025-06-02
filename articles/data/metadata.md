---
layout: content
toc: false
title: Metadata
tagline: About the current Catalogue of Life
section_id: data
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data/metadata
seo_include: seo_metadata.html
---

## Version

<div id="version">  
  Issued: <i>{{site.metadata.current.issued}}</i>
  <br/>
  DOI: <a href="https://doi.org/{{site.metadata.current.doi}}">{{site.metadata.current.doi}}</a>
  <br/>
  ChecklistBank: <a href="https://www.checklistbank.org/dataset/{{site.metadata.current.key}}/about">{{site.metadata.current.key}}</a>
  <br/>
  <br/>
</div>


## Abstract

{{site.metadata.current.description}}

## Recommended citation

<div id="bibtex" style="float: right;">
<a href="https://api.checklistbank.org/dataset/{{ site.react.datasetKey }}.bib"><img src="/images/logos/bibtex_logo.png" style="height: 32px;"></a>
</div>

{{site.metadata.current.citation}}
<br/>
Please also read the <a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the Catalogue of Life.</a>

### License
<a href="https://creativecommons.org/licenses/by/4.0/"><img src="/images/cc-by-icon.svg" /> Creative Commons Attribution 4.0 International</a>

### Publisher
{{site.metadata.current.publisher.label}}

### Authors

<div id="authors">  
  <ul>
  {% for a in site.metadata.current.creator %}
    <li>{{a.label}}</li>
  {% endfor %}
  </ul>
</div>

