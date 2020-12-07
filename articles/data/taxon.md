---
layout: default
title: Browse
tagline: This would probably be a custom page
section_id: data
permalink: /data/taxon
---

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
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react.pathToTree }}', pathToSearch: '{{ site.react.pathToSearch }}', pathToDataset: '{{ site.react.pathToDataset }}', pathToTaxon: '{{ site.react.pathToTaxon }}', auth: '{{ site.react.auth }}'}
      );
    }

}

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);
</script>
