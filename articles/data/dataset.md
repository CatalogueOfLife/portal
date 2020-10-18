---
layout: default
title: Browse
tagline: This would probably be a custom page
section_id: dataAccess
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
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react.pathToTree }}'}
      );
    }
  }

const domContainer = document.querySelector('#dataset');
ReactDOM.render(e(PublicTaxon), domContainer);
  </script>