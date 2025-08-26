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


## Changes between COL releases

The Catalogue of Life has been released continuously since 2000 and you can [download](/data/download#past-releases) copies of all annual versions.
Since 2021, when the catalogue was first produced in ChecklistBank, we also keep a changelog of all our releases:

<div id="changes">  
{% for log in site.changelog.entries %}
  <h2 id="r-{{log.rel.dataset.alias}}"><a href="https://www.checklistbank.org/dataset/{{log.rel.key}}">{{log.rel.dataset.alias}}</a></h2>
  <p>
    <span class="date">{{log.rel.dataset.created | date_to_long_string}}</span> build from 
    <span class="stats">{% include numf.html number=log.rel.srcCnt %}</span> sources{% if log.rel.publisher and log.rel.publisher.size > 0 %} and <span class="stats">{% include numf.html number=log.rel.publisher.size %}</span> publisher{% endif %}.
    <br/>
    <span class="stats">{% include numf.html number=log.rel.metrics.taxaByRankCount.family %}</span> families, 
    <span class="stats">{% include numf.html number=log.rel.metrics.taxaByRankCount.genus %}</span> genera and 
    <span class="stats">{% include numf.html number=log.rel.metrics.taxaByRankCount.species %}</span> accepted species.
  </p>

 
  {% if log.hasChange and log.prev %}
  <p>Source changes since <a href="#r-{{log.prev.dataset.alias}}">{{log.prev.dataset.alias}}</a>:</p>
  <p>
    <ul>
    {% for src in log.added %}
      <li><span class="add">+</span> <a href="https://www.checklistbank.org/dataset/{{r.d.key}}/source/{{src.key}}">{{src.alias}}</a></li>
    {% endfor %}
    {% for src in log.removed %}
      <li><span class="remove">-</span> <a href="https://www.checklistbank.org/dataset/{{r.prev.key}}/source/{{src.key}}">{{src.alias}}</a></li>
    {% endfor %}
    </ul>
  </p>
  {% else %}
  <p>No sources changed since <a href="#r-{{log.prev.dataset.alias}}">{{log.prev.dataset.alias}}</a></p>
  {% endif %}


  {% if log.rel.extended and log.prev %} 
    {% if log.hasPubChange %}
    <p>Publisher changes since <a href="#r-{{log.prev.dataset.alias}}">{{log.prev.dataset.alias}}</a>:</p>
    <p>
      <ul>
      {% for src in log.p-added %}
        <li><span class="add">+</span> <a href="https://www.checklistbank.org/dataset/{{r.d.key}}/source/{{src.key}}">{{src.alias}}</a></li>
      {% endfor %}
      {% for src in log.p-removed %}
        <li><span class="remove">-</span> <a href="https://www.checklistbank.org/dataset/{{r.prev.key}}/source/{{src.key}}">{{src.alias}}</a></li>
      {% endfor %}
      </ul>
    </p>
    {% else %}
    <p>No publisher changed since <a href="#r-{{log.prev.dataset.alias}}">{{log.prev.dataset.alias}}</a></p>
    {% endif %}
  {% endif %}

{% endfor %}
</div>


