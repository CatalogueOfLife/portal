---
layout: default
title: Dataset
section_id: data
permalink: /data/dataset
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">


  <!-- img src="/images/placeholder_for_js_lib.png" style="display: block; margin: auto;"/ -->
  <div id="dataset"></div>
</div>
  <script>
      'use strict';

const e = React.createElement;

class PublicTaxon extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Dataset,
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react.pathToTree }}', auth: '{{ site.react.auth }}', pathToSearch: '{{ site.react.pathToSearch }}'}
      );
    }
  }

const domContainer = document.querySelector('#dataset');
ReactDOM.render(e(PublicTaxon), domContainer);
  </script>