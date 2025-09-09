---
layout: content
toc: false
title: Metadata
tagline: About the current Catalogue of Life
section_id: data
imageUrl: https://inaturalist-open-data.s3.amazonaws.com/photos/564545909/large.jpg
imageCaption: _Misumena vatia_ (Clerck, 1757) - [Photo CC BY Marcel_Pepin](https://www.inaturalist.org/observations/312666211)
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

