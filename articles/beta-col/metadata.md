---
layout: content
toc: false
title: Metadata
tagline: About the current BETA COL Checklist
section_id: beta-col
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /beta-col/metadata
seo_include: seo_metadata.html
---

## Version

<div id="version">  
  Issued: <i>{{site.metadata_base.current.version}}</i>
  <br/>
  DOI: <a href="https://doi.org/{{site.metadata_base.current.doi}}">{{site.metadata_base.current.doi}}</a>
  <br/>
  ChecklistBank: <a href="https://www.checklistbank.org/dataset/{{site.metadata_base.current.key}}/about">{{site.metadata_base.current.key}}</a>
  <br/>
  <br/>
</div>


## Abstract

{{site.metadata_base.current.description}}

## Recommended citation

<div id="bibtex" style="float: right;">
<a href="https://api.checklistbank.org/dataset/{{ site.react_base.datasetKey }}.bib"><img src="/images/bibtex_logo.png" style="height: 32px;"></a>
</div>

{{site.metadata_base.current.citation}}
<br/>
Please also read the <a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the COL Checklist.</a>

### Authors

<div id="authors">  
  <ul>
  {% for a in site.metadata_base.current.creator %}
    <li>{{a.label}}</li>
  {% endfor %}
  </ul>
</div>

### Publisher
{{site.metadata_base.current.publisher.label}}

