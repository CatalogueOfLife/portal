---
layout: content
title: Browse
tagline: Explore the world's species through their classification
section_id: data-x
permalink: /data-x/browse
imageUrl: /images/species/Patiriella_calcar.jpg
imageCaption: _Patiriella calcar_ (Lamarck, 1816) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/42551733071)
---

# Browse the Catalogue of Life XRelease
Use this tree to explore the full classification from the current <a href="/data-x/metadata">version {{site.metadata-x.current.version}}</a> of the Catalogue of Life. 
The **Find taxon** field allows for direct access using any name known to COL.


<div class="row" style="background: white; margin-top: 00px; margin-bottom: 00px">
  <div id="tree" class="catalogue-of-life"></div>
</div>
  <script >
    'use strict';

const e = React.createElement;

class PublicTree extends React.Component {

    render() {
       
      return e(
        ColBrowser.Tree,
        { catalogueKey: '{{ site.react-x.datasetKey }}' , pathToTaxon: '{{ site.react-x.pathToTaxon }}', pathToDataset: '{{ site.react-x.pathToDataset }}' , auth: '{{ site.react-x.auth }}', showTreeOptions: true}
      );
    }
  }

const domContainer = document.querySelector('#tree');
ReactDOM.render(e(PublicTree), domContainer);
  </script>