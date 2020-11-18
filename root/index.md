---
layout: default
permalink: /
section_id: home



partners:
  title: Our partners
  partners:
    - image: "/images/partners/species-2000.png"
      link: "https://sp2000.org/"
    - image: "/images/partners/itis.png"
      link: "https://www.itis.gov/"
    - image: "/images/partners/GBIF-2015.png"
      link: "https://gbif.org/"
    - image: "/images/partners/alliance.png"
      link: "https://www.allianceforbio.org/"
---

<div class='full'>
  <div class='row introduction'>The most complete authoritative list of the world's species - maintained by hundreds of global taxonomists - <a href="/content/catalogueoflife.html">Learn more</a></div>
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
                <div class='col-version'><strong>{{site.data.colversion.title}}</strong> - <a href="/content/colusage.html#recommended-citations">How to cite the COL Checklist</a></div>
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
                        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTaxon: '{{ site.react.pathToTaxon }}', pathToDataset: '{{ site.react.pathToDataset }}', auth: '{{ site.react.auth }}' }
                      );
                    }
                  }

                const domContainer = document.querySelector('#tree');
                ReactDOM.render(e(PublicTree), domContainer);
            </script>
        </div>
    </div>
    <div class='medium-4 columns'>
    {% for post in site.posts %}
      {% if forloop.index > 3 %}
        {% break %}
      {% endif %}

      <div class='row'>
        <div class='mod modBlogPost'>
          <div class='content'>
            <p class='date'>{{post.date | date: "%B %d, %Y" }}</p>
            <h4><a href="{{post.url}}">{{post.title}}</a></h4>
            <p>{{post.excerpt}}</p>
          </div>
        </div>
      </div>

    {% endfor %}
    </div>

  </div>
  <div class='spacing' style='background-color: #ccc; height: 2px;'></div>
  <div class='spacing'></div>
  <div class="row partners">
    {% for partner in page.partners.partners %}
        <a href="{{partner.link}}" target="_blank"><img src="{{partner.image}}" height="48"></a>
    {% endfor %}
  </div>
  <div class='spacing'></div>
</div>
