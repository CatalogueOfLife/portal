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
        { catalogueKey: '{{ site.react_base.datasetKey }}' , pathToTree: '{{ site.react_base.pathToTree }}', pathToSearch: '{{ site.react_base.pathToSearch }}', pathToDataset: '{{ site.react_base.pathToDataset }}', pathToTaxon: '{{ site.react_base.pathToTaxon }}', auth: '{{ site.react_base.auth }}', pageTitleTemplate: 'COL | __taxon__'}
      );
    }

}

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);
</script>
