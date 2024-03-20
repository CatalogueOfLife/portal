---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: xcol
permalink: /xcol/search
imageUrl: /images/species/Aphomia_sociella.jpg
imageCaption: _Aphomia sociella_, Linnaeus, 1758 - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/18189103153)
---

# Search the extended Catalogue of Life Checklist
Use this search form to find any name in the current <a href="/xcol/metadata">version {{site.metadata.current.version}}</a> of the COL Checklist.


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
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTaxon: '{{ site.react_xcol.pathToTaxon }}', auth: '{{ site.react.auth }}' }
      );
    }
  }

const domContainer = document.querySelector('#search');
ReactDOM.render(e(PublicSearch), domContainer);
  </script>