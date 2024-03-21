---
layout: content
toc: false
title: Source datasets
tagline: Taxonomic communities contributing data to COL
section_id: beta-col
imageUrl: /images/species/Oedemera_nobilis.jpg    
imageCaption: _Oedemera nobilis_ (Scopoli, 1763) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/8738737007)
permalink: /beta-col/sources
---


The data in the current <a href="/beta-col/metadata">version {{site.metadata_base.current.version}}</a> of the COL Checklist have been provided by the resources listed below.

Per data source the number of living and extinct species are indicated that contribute to the COL Checklist. These include all [accepted and provisionally accepted species]({{ site.url }}/about/glossary.html). Most datasets include one or more sectors that feed into COL and cover all of the world's species in a particular group of organisms. 
These result from collaboration and editing by many expert taxonomists, whose names are found in the information for each dataset. A few datasets are listed as containing no species. These contribute to the higher classification for the Catalogue of Life.

Detailed statistics on species and other ranks can be found on the taxon pages, for example under [biota]({{ site.url }}/data/taxon/5T6MX). A [detailed summary of sources and their changes to previous releases](https://www.checklistbank.org/dataset/{{ site.react_base.datasetKey }}/sourcemetrics?hideUnchanged=true&releaseKey={{ site.metadata_base.previous.key }}) is available in Checklist Bank.

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
        { catalogueKey: '{{ site.react_base.datasetKey }}' ,  pathToDataset: '{{ site.react_base.pathToDataset }}', pathToSearch: '{{ site.react_base.pathToSearch }}', auth: '{{ site.react_base.auth }}'}
      );
    }
  }

const domContainer = document.querySelector('#datasetSearch');
ReactDOM.render(e(DatasetSearch), domContainer);
  </script>
