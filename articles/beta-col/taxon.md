---
layout: default
title: Taxon
tagline: This would probably be a custom page
section_id: beta-col
permalink: /beta-col/taxon
seo_include: seo_taxon.html
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
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react_xcol.pathToTree }}', pathToSearch: '{{ site.react_xcol.pathToSearch }}', pathToDataset: '{{ site.react_xcol.pathToDataset }}', pathToTaxon: '{{ site.react_xcol.pathToTaxon }}', auth: '{{ site.react.auth }}', pageTitleTemplate: 'COL | __taxon__'}
      );
    }

}

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);
</script>
