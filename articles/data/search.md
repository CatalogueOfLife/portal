---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: data
permalink: /data/search
imageUrl: https://inaturalist-open-data.s3.amazonaws.com/photos/73792684/original.jpeg
imageCaption: _Suricata suricatta_ (Schreber, 1776) - [Photo CC By Justin Ponder](https://www.inaturalist.org/photos/73792684?size=large)
---

Find any scientific name in the current <a href="/data/metadata">version {{site.metadata.current.version}}</a> of the Catalogue of Life, [learn How To](/howto/access#search).

<div class="row" style="background: white; margin-top: 0px; margin-bottom: 0px">
  <div id="search"></div>
</div>
  <script>
    'use strict';

const e = React.createElement;

class PublicSearch extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Search,
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTaxon: '{{ site.react.pathToTaxon }}', auth: '{{ site.react.auth }}' }
      );
    }
  }

const domContainer = document.querySelector('#search');
ReactDOM.render(e(PublicSearch), domContainer);
  </script>
