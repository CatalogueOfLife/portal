---
layout: default
title: Taxon
tagline: This would probably be a custom page
section_id: data-x
permalink: /data-x/taxon
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">
  <div id="taxon"></div>
</div>
  <script>
      'use strict';

const e = React.createElement;

class PublicTaxon extends React.Component {

    render() {


      return e(
        ColBrowser.Taxon,
        { catalogueKey: '{{ site.react-x.datasetKey }}' , pathToTree: '{{ site.react-x.pathToTree }}', pathToSearch: '{{ site.react-x.pathToSearch }}', pathToDataset: '{{ site.react-x.pathToDataset }}', pathToTaxon: '{{ site.react-x.pathToTaxon }}', auth: '{{ site.react-x.auth }}', pageTitleTemplate: 'COL | __taxon__'}
      );
    }

}

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);
</script>
