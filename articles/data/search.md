---
layout: content
title: Search
tagline: Find species and other taxa by name
section_id: data
permalink: /data/search
imageUrl: /images/species/Aphomia_sociella.jpg
imageCaption: _Aphomia sociella_, Linnaeus, 1758 - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/18189103153)
---

# Search the Catalogue of Life
Find any scientific name in the current <a href="/data/metadata">version {{site.metadata.current.version}}</a> of the Catalogue of Life, [learn How To](/howto/access#search).

The Catalogue of Life (COL) includes information with different gradients of quality. The **Base Release** is verified by taxonomic experts specifically for COL. The **eXtended Release** includes additional data from other sources (indicated with the XR icon). Read about the [different releases](/building/releases) COL provides. 

Explore two new features to search the catalogue: 

  **Content** to switch between releases

  **Filter by source dataset** to constraint your search to names provided by a specific [source](/data/sources).

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
