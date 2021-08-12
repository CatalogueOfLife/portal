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

## Recommended citation

{{site.metadata.current.citation}}

Please also read the <a href="/about/colusage#recommended-citations">recommended citations for individual datasets contributing to the COL Checklist.</a>

## Acknowledgements

The Catalogue of Life thanks Naturalis in the Netherlands, [GBIF](https://www.gbif.org) and the Illinois Natural History Survey in the USA.
We further thank all that contributed to the COL Checklist:

<div id="authors">  
  <ul>
  {% for a in site.metadata.current.creator %}
    <li>{{a.label}}
    {% if a.orcid %}
	<a href="https://orcid.org/{{a.orcid}}"><img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16" height="16" /></a>
    {% endif %}
	</li>
  {% endfor %}
  </ul>
</div>

