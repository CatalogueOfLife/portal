---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: data-x
permalink: /data-x/search
imageUrl: /images/species/Aphomia_sociella.jpg
imageCaption: _Aphomia sociella_, Linnaeus, 1758 - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/18189103153)
---

# Search the Catalogue of Life
Use this search form to find any name in the current <a href="/data-x/metadata">version {{site.metadata-x.current.version}}</a> of the Catalogue of Life.


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
        { catalogueKey: '{{ site.react-x.datasetKey }}' , pathToTaxon: '{{ site.react-x.pathToTaxon }}', auth: '{{ site.react-x.auth }}' }
      );
    }
  }

const domContainer = document.querySelector('#search');
ReactDOM.render(e(PublicSearch), domContainer);
  </script>