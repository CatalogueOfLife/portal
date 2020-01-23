---
layout: default
title: Browse
tagline: This would probably be a custom page
section_id: dataAccess
permalink: /data/browse
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">


  <!-- img src="/images/placeholder_for_js_lib.png" style="display: block; margin: auto;"/ -->
  <div id="tree" class="catalogue-of-life"></div>
</div>
  <script >
    'use strict';

const e = React.createElement;

class PublicTree extends React.Component {

    render() {
     
  
      return e(
        ColBrowser.Tree,
        { catalogueKey: 3 , pathToTaxon: "/data/taxon/"}
      );
    }
  }

const domContainer = document.querySelector('#tree');
ReactDOM.render(e(PublicTree), domContainer);
  </script>