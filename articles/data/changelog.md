---
layout: content
toc: false
title: Changelog
tagline: Catalogue of Life Version History
section_id: data
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data/changelog
---

<style>
  #changes h2 {
    margin-top: 32px;
    margin-bottom: 4px;
  }
  #changes h4 {
    margin-bottom: 2px;
    text-transform: none;
  }
  #changes p {
    margin-bottom: 6px;
  }  
  #changes span.add {
    color: green;
    font-weight: bold;
  }
  #changes span.remove {
    color: red;
    font-weight: bold;
  }  
  #changes ul {
    margin-left: 0.5rem;

  }
  #changes ul li {
    list-style-type: none;

  }
  .date {
    background-color: lightblue;
    color: black;
    padding: 2px 6px;
  }
  .stats {
    text-decoration: underline;
    color: black;
  }  
</style>

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
{% for r in site.changelog.entries %}
  <h2 id="r-{{r.d.alias}}"><a href="https://www.checklistbank.org/dataset/{{r.d.key}}">{{r.d.alias}}</a></h2>
  <p>
    <span class="date">{{r.d.created | date_to_long_string}}</span> build from 
    <span class="stats">{% include numf.html number=r.sources %}</span> sources.
    <br/>
    <span class="stats">{% include numf.html number=r.imp.taxaByRankCount.family %}</span> families, 
    <span class="stats">{% include numf.html number=r.imp.taxaByRankCount.genus %}</span> genera and 
    <span class="stats">{% include numf.html number=r.imp.taxaByRankCount.species %}</span> accepted species.
  </p>

  {% if r.removed and r.removed.size != 0 %}
    {% assign show_src = true %}
  {% elsif r.added and r.added.size != 0 %}
    {% assign show_src = true %}
  {% else %}
    {% assign show_src = false %}
  {% endif %}
 
  {% if show_src %}
  <p class="stats">Source changes:</p>
  <p>
    <ul>
    {% for src in r.added %}
      <li><span class="add">+</span> <a href="https://www.checklistbank.org/dataset/{{r.d.key}}/source/{{src.key}}">{{src.alias}}</a></li>
    {% endfor %}
    {% for src in r.removed %}
      <li><span class="remove">-</span> <a href="https://www.checklistbank.org/dataset/{{r.prev.key}}/source/{{src.key}}">{{src.alias}}</a></li>
    {% endfor %}
    </ul>
  </p>
  {% endif %}

{% endfor %}
</div>


