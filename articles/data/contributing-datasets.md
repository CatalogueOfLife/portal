---
layout: content
toc: false
title: Contributing datasets
tagline: Taxonomic communities contributing data to COL
section_id: dataAccess
imageUrl: /images/Oedemera_nobilis.jpg    
imageCaption: _Oedemera nobilis_ (Scopoli, 1763) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/8738737007)
permalink: /data/contributing-datasets
---

# Contributing datasets

The data in current edition of the Catalogue of Life have been provided by 164 resources. Most datasets include one or more sectors that feed into COL and cover all of the world's species in a particular group of organisms. These result from collaboration and editing by many expert taxonomists, whose names are found in the information for each dataset. The datasets currently included in COL are listed below.

**{{site.data.colversion.title}}** - <a href="/content/colusage.html#recommended-citations">How to cite the COL Checklist and these datasets</a>

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">



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