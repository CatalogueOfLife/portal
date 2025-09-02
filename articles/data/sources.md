---
layout: content
toc: false
title: Source datasets
tagline: A Global Network of Taxonomic Contributors
section_id: data
imageUrl: /images/species/Oedemera_nobilis.jpg    
imageCaption: _Oedemera nobilis_ (Scopoli, 1763) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/8738737007)
permalink: /data/sources
---


The Catalogue of Life (COL) is built through collaboration and careful editing by taxonomic experts. Explore here the data sources that make this possible and find out how many families, genera, and species each source has contributed to the Catalogue. 

Some sources contribute in multiple ways and may appear more than once in the list. You can also browse sources grouped by publishers, many of which include several datasets. Sources without species data provide higher-level classifications (like genera and above), references, or vernacular names. 

The XR icon indicates sources that only contribute to the **eXtended Release**. You can choose to include or exclude these sources from the list using the checkbox next to the XR icon. Read about the [different releases](/building/releases) COL provides. 

Detailed changes of sources between versions can be viewed on the [Changelog](/data/changelog). 

<div class="row" style="background: white; margin-top: 0px; margin-bottom: 0px">
  <div id="datasetSearch"></div>
</div>
  <script>
      'use strict';

const e = React.createElement;

class DatasetSearch extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.DatasetSearch,
        { catalogueKey: '{{ site.react.datasetKey }}' ,  pathToDataset: '{{ site.react.pathToDataset }}', pathToSearch: '{{ site.react.pathToSearch }}', auth: '{{ site.react.auth }}'}
      );
    }
  }

const domContainer = document.querySelector('#datasetSearch');
ReactDOM.render(e(DatasetSearch), domContainer);
  </script>
