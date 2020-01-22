---
layout: default
title: Browse
tagline: This would probably be a custom page
section_id: dataAccess
permalink: /data/taxon
---
<link rel="stylesheet" href="/javascripts/main.5fd59b91.css">

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">


  <!-- img src="/images/placeholder_for_js_lib.png" style="display: block; margin: auto;"/ -->
  <div id="taxon"></div>
</div>
  <script>
      'use strict';

const e = React.createElement;

class PublicTaxon extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Taxon,
        { catalogueKey: 3 , pathToTree: "/data/browse.html"}
      );
    }
  }

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);
  </script>