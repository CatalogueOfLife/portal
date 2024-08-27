---
layout: default
title: Dataset
section_id: data-x
permalink: /data-x/dataset
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">
  <div id="dataset"></div>
</div>
  <script>
      'use strict';

const e = React.createElement;

class PublicTaxon extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Dataset,
        { catalogueKey: '{{ site.react-x.datasetKey }}' , pathToTree: '{{ site.react-x.pathToTree }}', auth: '{{ site.react-x.auth }}', pathToSearch: '{{ site.react-x.pathToSearch }}', pageTitleTemplate: 'COL | __dataset__'}
      );
    }
  }

const domContainer = document.querySelector('#dataset');
ReactDOM.render(e(PublicTaxon), domContainer);
  </script>