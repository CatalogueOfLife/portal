---
layout: content
toc: false
title: Changelog
tagline: COL Checklist Version History
section_id: data
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data/changelog
---

## Current Version

<div id="version">  
  Issued: <i>{{site.metadata.current.version}}</i>
  <br/>
  DOI: <a href="https://doi.org/{{site.metadata.current.doi}}">{{site.metadata.current.doi}}</a>
  <br/>
  ChecklistBank: <a href="https://www.checklistbank.org/dataset/{{site.metadata.current.key}}/about">{{site.metadata.current.key}}</a>
  <br/>
  <br/>
</div>


## Changes between monthly versions

<div id="changes">  
{% for r in site.changelog %}
  <h2><a href="https://www.checklistbank.org/dataset/{{r.d.key}}">{{r.d.alias}}</a></h2>
  <span>{{r.d.created}}</span>
  <dl>
      <dt>Sources</dt>
      <dd>{{r.sources}}</dd>

      <dt>Families</dt>
      <dd>{{r.imp.taxaByRankCount.family}}</dd>
      <dt>Genera</dt>
      <dd>{{r.imp.taxaByRankCount.genus}}</dd>
      <dt>Species</dt>
      <dd>{{r.imp.taxaByRankCount.species}}</dd>
  </dl>
  {% if r.removed and r.removed.size != 0 %}
    <h4>Removed Sources</h4>
    <ul>
    {% for src in r.removed %}
      <li><a href="https://www.checklistbank.org/dataset/{{r.prev.key}}/source/{{src.key}}">{{src.alias}}</a></li>
    {% endfor %}
    </ul>
  {% endif %}

  {% if r.added and r.added.size != 0 %}
    <h4>Added Sources</h4>
    <ul>
    {% for src in r.added %}
      <li><a href="https://www.checklistbank.org/dataset/{{r.d.key}}/source/{{src.key}}">{{src.alias}}</a></li>
    {% endfor %}
    </ul>
  {% endif %}
  

{% endfor %}
</div>


### Publisher
{{site.metadata.current.publisher.label}}

