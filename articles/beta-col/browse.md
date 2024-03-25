---
layout: content
title: Browse
tagline: Explore the world's species through their classification
section_id: beta-col
permalink: /beta-col/browse
imageUrl: /images/species/Cortinarius_cupreorufus.jpg
imageCaption: _Cortinarius cupreorufus_ Brandrud - Photo CC By Thomas Stjernegaard
---

# Browse the BETA Catalogue of Life Checklist
Use this tree to explore the full classification from the current <a href="/beta-col/metadata">version {{site.metadata_base.current.version}}</a> of the BETA COL Checklist. 
The **Find taxon** field allows for direct access using any name known to the BETA COL.
Merged taxa are marked with an <code>*</code>


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
        { catalogueKey: '{{ site.react_base.datasetKey }}' , pathToTaxon: '{{ site.react_base.pathToTaxon }}', pathToDataset: '{{ site.react_base.pathToDataset }}' , auth: '{{ site.react_base.auth }}', showTreeOptions: true}
      );
    }
  }

const domContainer = document.querySelector('#tree');
ReactDOM.render(e(PublicTree), domContainer);
  </script>