---
layout: default
title: Dataset
section_id: beta-col
permalink: /beta-col/dataset
seo_include: seo_dataset.html
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
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react_xcol.pathToTree }}', auth: '{{ site.react.auth }}', pathToSearch: '{{ site.react_xcol.pathToSearch }}', pageTitleTemplate: 'COL | __dataset__'}
      );
    }
  }

const domContainer = document.querySelector('#dataset');
ReactDOM.render(e(PublicTaxon), domContainer);
  </script>