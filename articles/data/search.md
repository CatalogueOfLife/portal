---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: dataAccess
permalink: /data/search
imageUrl: /images/Aphomia_sociella.jpg
imageCaption: _Aphomia sociella_, Linnaeus, 1758 - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/18189103153)
---

# Search the Catalogue of Life Checklist
Use this search form to find any name in the current version of the COL Checklist.

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">


  <!-- img src="/images/placeholder_for_js_lib.png" style="display: block; margin: auto;"/ -->
  <div id="search"></div>
</div>
  <script>
    'use strict';

const e = React.createElement;

class PublicSearch extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Search,
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTaxon: '{{ site.react.pathToTaxon }}' }
      );
    }
  }

const domContainer = document.querySelector('#search');
ReactDOM.render(e(PublicSearch), domContainer);
  </script>