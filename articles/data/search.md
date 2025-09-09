---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: data
permalink: /data/search
imageUrl: images/species/Helophilus_trivittatus.jpg
imageCaption: _Helophilus trivittatus_ (Fabricius, 1805)- [Photo CC BY Ian Ballam](https://www.inaturalist.org/photos/564561705)
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
