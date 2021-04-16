---
layout: default
title: Dataset
section_id: data
permalink: /data/dataset
seo_ssi: true
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
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react.pathToTree }}', auth: '{{ site.react.auth }}', pathToSearch: '{{ site.react.pathToSearch }}', pageTitleTemplate: 'COL | __dataset__'}
      );
    }
  }

const domContainer = document.querySelector('#dataset');
ReactDOM.render(e(PublicTaxon), domContainer);
  </script>