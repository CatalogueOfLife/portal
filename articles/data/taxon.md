---
layout: default
title: Taxon
tagline: This would probably be a custom page
section_id: data
permalink: /data/taxon
seo_include: seo_taxon.html
---

<div class="row" style="background: white; margin-top: 20px; margin-bottom: 60px">
  <div id="taxon"></div>
  
  <div id="feedback" class="catalogue-of-life" style="padding: 24px; margin: 16px 0px; font-size: 12px">  
    <div class="ant-row Component-formItem-0-2-1">
      <div class="ant-col Component-smallMargin-0-2-6 ant-col-sm-24 ant-col-md-5" style="margin-bottom: 0px;">
        <div><dt class="Component-label-0-2-2">Feedback and questions <i class="fa-solid fa-comment" style="margin-left: 8px;"></i></dt></div>
      </div>
      <div class="ant-col Component-smallMargin-0-2-6 ant-col-sm-24 ant-col-md-19" style="margin-top: 0px;">
        <span class="Component-content-0-2-3"><a id="fb-toggle" href="#">Report an issue</a> about this taxon.</span>
      </div>
    </div>    
    <div id="fb-form" style="display: none">
      <p>Please describe the problem and/or suggest a change, citing references and or sources if you can. 
      We will create a <a href="https://github.com/CatalogueofLife/data/issues" target="_blank">github issue</a> which you can monitor or use to further discuss with us.</p>
      <input type="text" id="fb-text" name="feedback">
      <button id="fb-button">submit</button>
    </div>
  </div>

</div>
  
  <script type="module">

    export function toggleFBForm() {
      var x = document.getElementById("fb-form");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };

    export function createIssue() {
      var text = document.getElementById("fb-text").value;
      var url = window.location.href;
      var taxID = url.match(/taxon\/([0-9A-Z]+)/)[1]
      console.log(taxID);
      jQuery.ajax({        
          url: "{{ site.metadata.api }}/dataset/{{ site.react.datasetKey }}/nameusage/"+taxID+"/feedback",
          data : text,
          contentType : 'application/json',
          type : 'POST',
          success: function (data) {
            alert("Created new issue: " + data);
          },
          error: function (request, status, error) {
            alert(request.responseText);
          }
      });
      toggleFBForm()
    };
    
    document.querySelector('#fb-button').addEventListener('click', createIssue);
    document.querySelector('#fb-toggle').addEventListener('click', toggleFBForm);

  </script>
  <script>
      'use strict';

const e = React.createElement;

class PublicTaxon extends React.Component {

    render() {


      return e(
        ColBrowser.Taxon,
        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTree: '{{ site.react.pathToTree }}', pathToSearch: '{{ site.react.pathToSearch }}', pathToDataset: '{{ site.react.pathToDataset }}', pathToTaxon: '{{ site.react.pathToTaxon }}', auth: '{{ site.react.auth }}', pageTitleTemplate: 'COL | __taxon__'}
      );
    }

}

const domContainer = document.querySelector('#taxon');
ReactDOM.render(e(PublicTaxon), domContainer);
</script>
