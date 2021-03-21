---
layout: content
toc: false
title: Acknowledgements
tagline: Contributors to the Catalogue of Life
section_id: about
permalink: /about/acknowledgements
---


The Catalogue of Life (CoL) thanks Naturalis in the Netherlands, [GBIF](https://www.gbif.org) and the Illinois Natural History Survey in the USA. We further thank all those organisations and individuals that contributed to the CoL:

## Organisations

<div id="organisations">  
  <ul>
  {% for org in site.metadata.contribution.organisations %}
    <li>{{org.label}}</li>
  {% endfor %}
  </ul>
</div>


## Contributors

<div id="contributors">  
  <ul>
  {% for e in site.metadata.contribution.contributor %}
    <li>{{e.givenName}} {{e.familyName}}</li>
  {% endfor %}
  </ul>
</div>