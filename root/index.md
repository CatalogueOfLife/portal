---
layout: default
permalink: /
section_id: home

sections:
  - icon: filter
    title: Explore
    path: /somewhere
    desc: Acusamus laborum totam omnis inventore et error aut et eos aut. fuga mollitia vitae id enim omnis perspiciatis. modi maxime eos.
  - icon: question
    title: About the catalogue
    path: /somewhere
    desc: Acusamus laborum totam omnis inventore et error aut et eos aut. fuga mollitia vitae id enim omnis perspiciatis. modi maxime eos.
  - icon: code
    title: Developers
    path: /somewhere
    desc: Acusamus laborum totam omnis inventore et error aut et eos aut. fuga mollitia vitae id enim omnis perspiciatis. modi maxime eos.
  - icon: comments-o
    title: Help us curate
    path: /somewhere
    desc: Acusamus laborum totam omnis inventore et error aut et eos aut. fuga mollitia vitae id enim omnis perspiciatis. modi maxime eos.

milestones:
  items:
    - image: Podarcis.jpg
      count: //api.catalogue.life/dataset/3LR/nameusage/search?TAXON_ID=061950e4-9782-4d1a-9c87-dcf375788e6b&limit=0&rank=species&status=accepted&status=provisionally%20accepted
      selector: total
      title: Animalia
      bgcolor: 0480b5
      fgcolor: ccedfa
      link: /index.html?taxonKey=061950e4-9782-4d1a-9c87-dcf375788e6b
    - image: Pultenaea.jpg
      count: //api.catalogue.life/dataset/3LR/nameusage/search?TAXON_ID=fc995438-b561-4616-a896-f479fca6e3d4&limit=0&rank=species&status=accepted&status=provisionally%20accepted
      selector: total
      title: Plantae
      bgcolor: d0bd34
      fgcolor: fcfbe7
      link: /index.html?taxonKey=fc995438-b561-4616-a896-f479fca6e3d4
    - image: Teloschistes.jpg
      count: //api.catalogue.life/dataset/3LR/nameusage/search?TAXON_ID=d64f9d40-cbe5-4908-b4c2-16a9d6429401&limit=0&rank=species&status=accepted&status=provisionally%20accepted
      selector: total
      title: Fungi
      bgcolor: e83143
      fgcolor: feebed
      link: /index.html?taxonKey=d64f9d40-cbe5-4908-b4c2-16a9d6429401
    - image: Protozoa.jpg
      count: //api.catalogue.life/dataset/3LR/nameusage/search?TAXON_ID=dc38164e-ddff-4305-85a1-b320a0216cef&TAXON_ID=56f9bfb4-e63c-4ef7-b8e5-66f40b9233cd&TAXON_ID=63e291b2-9018-4cdb-a599-ed6404d06ab4&TAXON_ID=7b3a7eb4-e311-4521-813b-c288e408e005&TAXON_ID=4f6fabd6-2431-4a77-b77f-de60e4a7accc&limit=0&rank=species&status=accepted&status=provisionally%20accepted
      selector: total
      title: Other kingdoms
      bgcolor: 2db261
      fgcolor: ecf7ef
      link: /index.html?taxonKey=0

posts:
  title: Latest news
  desc: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.
  moreTitle: See more news

partners:
  title: Our partners
  partners:
    - image: "/images/partners/species-2000.png"
      link: "https://sp2000.org/"
    - image: "/images/partners/itis.png"
      link: "https://www.itis.gov/"
    - image: "/images/partners/GBIF-2015.png"
      link: "/partners.html#gbif"
---

<div class='full'>
  <div class='row'>
    <div class="medium-8 columns" style="background: white; margin-top: 20px;">
        <div class='row kingdoms'>
            {% for milestone in page.milestones.items %}
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
                        { catalogueKey: '{{ site.react.datasetKey }}' , pathToTaxon: '{{ site.react.pathToTaxon }}', pathToDataset: '{{ site.react.pathToDataset }}' }
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
            <h4><a href="#">{{post.title}}</a></h4>
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
        <a href="{{partner.link}}" target="_blank"><img src="{{partner.image}}"></a>
    {% endfor %}
  </div>
  <div class='spacing'></div>
</div>
