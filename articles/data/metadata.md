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

This is version {{site.metadata.current.version}} of the COL Checklist.

## Abstract

{{site.metadata.current.description}}


## Editors
Editors of the COL Checklist are:

<div id="editors">  
  <ul>
  {% for e in site.metadata.current.editors %}
    <li>{{e.givenName}} {{e.familyName}}</li>
  {% endfor %}
  </ul>
</div>

## Organisations
<div id="organisations">  
  <ul>
  {% for org in site.metadata.current.organisations %}
    <li>{{org.label}}</li>
  {% endfor %}
  </ul>
</div>


## Recommended citation

<i>{{site.metadata.current.citation}}</i>

Please also read the 
<a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the COL Checklist.</a>

## Data Downloads
You can download this version of the COL checklist either as a 
 - [Darwin Core Archive](https://download.catalogueoflife.org/col/monthly/{{site.metadata.current.version}}_dwca.zip)
 - ColDP Archive coming soon...
 - PostgreSQL dump coming soon...

For other versions please see the [COL downloads site](https://download.catalogueoflife.org/col/).
