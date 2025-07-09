---
layout: content
toc: false
title: Source datasets
tagline: Taxonomic communities contributing data to COL
section_id: data
imageUrl: /images/species/Oedemera_nobilis.jpg    
imageCaption: _Oedemera nobilis_ (Scopoli, 1763) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/8738737007)
permalink: /data/sources
---


The data in the current <a href="/data/metadata">version {{site.metadata.current.version}}</a> of the Catalogue of Life have been provided by the resources listed below.

Per data source the number of accepted familes, genera amd species are indicated that contribute to the Catalogue of Life. 
These include all [accepted and provisionally accepted species]({{ site.url }}/about/glossary.html). 
Most datasets include one or more sectors that feed into COL and cover all of the world's species in a particular group of organisms. 

These result from collaboration and editing by many expert taxonomists, whose names are found in the information for each dataset. 
A few datasets are listed as containing no species. These usually contribute to the higher classification for the Catalogue of Life.

The XR icon indicates sources that only contribute to the extended release. 
You can hide all these sources and just view the global sources of the base release.

Detailed statistics on species and other ranks can be found on the taxon pages, for example under [Eukaryota]({{ site.url }}/data/taxon/P78ZC). 
A [detailed summary of sources and their changes to previous releases](https://www.checklistbank.org/dataset/{{ site.react.datasetKey }}/sourcemetrics?hideUnchanged=true&releaseKey={{ site.metadata.previous.key }}) is available in Checklist Bank.

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
