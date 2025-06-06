---
layout: default
permalink: /
section_id: home
partners:
  - image: "/images/logos/Smithsonian.svg"
    link: "https://www.si.edu/"
  - image: "/images/logos/ITIS_logo.svg"
    link: "https://www.itis.gov/"
  - image: "/images/logos/logo-gbif.svg"
    link: "https://www.gbif.org/"
  - image: "/images/logos/INHS.png"
    link: "https://inhs.illinois.edu/"
---

<div class='full' id="homepage">
  <div class='row'>
    <div class="introduction">The most complete authoritative list of the world's species - maintained by hundreds of global taxonomists - <a href="/about/catalogueoflife.html">Learn more</a></div>
  </div>
  <div class='row'>
    <div class="medium-8 columns" style="background: white; margin-top: 20px;">
        <div class='row kingdoms'>
            {% for milestone in site.milestones.items %}
                  <a href="{{milestone.link}}">
                    <div class='small-3 small-3 columns' style='background-color: #fff;'>
                      <div class='mod modMilestone' style='background-image: url(/images/kingdoms/{{milestone.image}}); background-size: cover;'>
                          <div class="milestoneText" style='background-color: #{{milestone.bgcolor}}; color: #{{milestone.fgcolor}};'>
                              <div class="milestoneTitle">{{milestone.title}}</div>
                             <div class="milestoneCount"> <span count='{{milestone.count}}' count-selector='{{milestone.selector}}' ></span> species in COL</div>
                          </div>
                      </div>
                    </div>
                  </a>
            {% endfor %}
        </div>

        <div class='row'>
            <div class='full main-tree'>
                <div id="tree" class="catalogue-of-life"></div>
            </div>
            <script >
                'use strict';

                const e = React.createElement;

                class PublicTree extends React.Component {

                    render() {

                      return e(
                        ColBrowser.Tree,
                        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTaxon: '{{ site.react.pathToTaxon }}', pathToDataset: '{{ site.react.pathToDataset }}', auth: '{{ site.react.auth }}', showTreeOptions: true, linkToSpeciesPage: true, type: 'project' }
                      );
                    }
                  }

                const domContainer = document.querySelector('#tree');
                ReactDOM.render(e(PublicTree), domContainer);
            </script>
        </div>
    </div>
    <div class='medium-4 columns'>
      <br/>
      <h3>Current Release</h3>
      <div id="version">
        Issued: <i>{{site.metadata.current.issued}}</i>
        <br/>
        DOI: <a href="https://doi.org/{{site.metadata.current.doi}}">{{site.metadata.current.doi}}</a>
        <br/>
        ChecklistBank: <a href="https://www.checklistbank.org/dataset/{{site.metadata.current.key}}/about">{{site.metadata.current.key}}</a>
      </div>
      <br/>
      <br/>

      <h3>Documentation</h3>
      <p>
       The <span class="xr-icon" style="">XR</span> icon indicates additional content from the eXtended Release which are not present in the scrutinized base release.
       If you never heard about the XR, start by reading about the <a href="/about/assembly">different releases</a> COL provides.
      </p>
      <br/>
      
      <div class='links'>
        <h3>Recent News</h3>
        <ul class="posticon">
          {% for post in site.posts limit:8  %}
          <li class="hang">
            <a href='{{post.url}}'>{{post.title}}</a>
          </li>
          {% endfor %}
        </ul>
      </div>

  </div>

  </div>
  <div class='spacing' style='background-color: #ccc; height: 2px;'></div>
  <div class='spacing'></div>
  <div class="row partners">
    {% for partner in page.partners %}
        <a href="{{partner.link}}" target="_blank"><img src="{{partner.image}}" height="48"></a>
    {% endfor %}
  </div>
  <div class='spacing'></div>
</div>
