---
layout: content
toc: false
title: Contributing datasets
tagline: This would probably be a custom page
section_id: dataAccess
permalink: /data/contributing-datasets
---

# Contributing datasets

The data in current edition of the Catalogue of Life have been provided by 164 resources. Most datasets include one or more global species database sectors (GSDs), i.e. datasets being developed to cover all of the world's species in a particular group of organisms. The datasets result from collaboration and editing by many expert taxonomists, whose names are found in the datasets themselves. A brief summary is listed below giving: database name; home page address; the author(s) or editor(s); host organisation; the group for which data are provided, preceded by its higher classification; and the number of species and infraspecific taxa included in this checklist.

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
        { catalogueKey: '{{ site.react.datasetKey }}' ,  pathToDataset: '{{ site.react.pathToDataset }}'}
      );
    }
  }

const domContainer = document.querySelector('#datasetSearch');
ReactDOM.render(e(DatasetSearch), domContainer);
  </script>