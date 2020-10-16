---
layout: default
permalink: /
section_id: home
slides:
  - bg: "/images/background/grass/grass.jpg"
    caption: Photo by [Ben Amaral](https://unsplash.com/@benamaral?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/developer-nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    title:
      klass: bottom-to-top
      text: A quality-assured checklist
    buttons:
      klass: bottom-to-top
      items:
        - text: Start exploring
          link_to: /about
  - bg: "/images/background/trees/trees.jpg"
    caption: "Photo by [Jakub Gorajek](https://unsplash.com/@cinegeek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/developer-nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
    title:
      klass: bottom-to-top
      text: Curated by experts from around the globe
    buttons:
      klass: bottom-to-top
      items:
        - text: Get involved
          link_to: /about
        - text: About curration
          link_to: /about
  - bg: "/images/background/code/code.jpg"
    caption: "Photo by [Florian Olivo](https://unsplash.com/@rxspawn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/developer-nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)"
    title:
      klass: bottom-to-top
      text: The data is open and freely available through our APIs
    buttons:
      klass: bottom-to-top
      items:
        - text: Developer documentation
          link_to: /about

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

intro:
  title: The Catalogue of Life
  desc: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.
  
milestones:
  title: something
  desc: "Dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing."
  imageUrl: "/images/background/trees/trees-dark.jpg"
  items:
    - image: Hecatesia.jpg
      count: "1,525,728"
      title: Animalia
      bgcolor: 0480b5
      fgcolor: ccedfa
      link: /index.html?taxonKey=061950e4-9782-4d1a-9c87-dcf375788e6b
    - image: Pultenaea.jpg
      count: "382,000"
      title: Plantae
      bgcolor: d0bd34
      fgcolor: fcfbe7
      link: /index.html?taxonKey=fc995438-b561-4616-a896-f479fca6e3d4
    - image: Teloschistes.jpg
      count: "140,000"
      title: Fungi
      bgcolor: e83143
      fgcolor: feebed
      link: /index.html?taxonKey=d64f9d40-cbe5-4908-b4c2-16a9d6429401
    - image: Protozoa.jpg
      count: "44,985"
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
  desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing."
  imageUrl: "/images/background/grass/grass-dark.jpg"
  imageCaption: "[Lorem ipsum](/deadlink) dolor sit amet, consectetuer adipiscing elit"
  partners: 
    - imageUrl: "/images/partners/GBIF-2015.svg"
      path: "/partners.html#gbif"
    - imageUrl: "/images/partners/client-2.png"
      path: "/2016"
    - imageUrl: "/images/partners/client-6.png"
      path: "/2015"
    - imageUrl: "/images/partners/client-1.png"
      path: "/2015"
    - imageUrl: "/images/partners/client-2.png"
      path: "/2016"
    - imageUrl: "/images/partners/client-6.png"
      path: "/2015"
---

<div class='full'>
  <div class='row'>
    <div class="medium-8 columns" style="background: white; margin-top: 20px; margin-bottom: 60px">
        <div class='row'>
            {% for milestone in page.milestones.items %}
                  <a href="{{milestone.link}}">
              <div class='small-3 small-3 columns' style='background-color: #fff;'>
                <div class='mod modMilestone' style='background-image: url(/images/kingdoms/{{milestone.image}}); background-size: cover;'>
                    <div class="milestoneText" style='background-color: #{{milestone.bgcolor}}; color: #{{milestone.fgcolor}};'>
                        <div class="milestoneTitle">{{milestone.title}}</div>
                        <div class="milestoneCount">{{milestone.count}} estimated species</div>
                    </div>
                </div>

              </div>
                  </a>
            {% endfor %}
        </div>

        <div class='row'>
            <div class='full'>
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
  <div class='spacing'></div>
</div>


{% comment %}
<div class='full'>
  <div class='row'>
    <div class='large-12 columns'>
      {% include section-header.html title="Our team" %}
      <div class='spacing'></div>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.
      </p>
      <div class='two spacing'></div>
    </div>
  </div>
  <div class='row'>
    {% for member in site.data.members %}
      <div class='small-6 medium-3 large-3 columns'>
        <div class='mod modTeamMember'>
          <div class='member'>
            <img class="avatar" alt="" src="{{ member.avatar }}" />
            <div class='overlay'>
              <div class='intro'>
                <h3>{{member.name}}</h3>
                <p>{{member.position}}</p>
                <ul class='socials'>
                  {% for social in member.socials %}
                    <li>
                      <a href='{{social.link}}'>
                        <i class='fa fa-{{social.icon}}'></i>
                      </a>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            </div>
          </div>
          <div class='two spacing'></div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
{% endcomment %}


{% include our-partners.html %}

{% comment %}
<div class='full no-padding' style='background: #fff'>
  <div class='two spacing'></div>
  <div class='mod modCallToAction'>
    <div class='row'>
      <div class='medium-9 large-9 columns'>
        <p>Like what you see here? Checkout this theme and start to build your site immediately.</p>
      </div>
      <div class='medium-3 large-3 columns'>
        <a class='button' href='http://themeforest.net/user/honryou/portfolio?ref=honryou'>Learn more</a>
      </div>
    </div>
  </div>
  <div class='spacing'></div>
</div>
{% endcomment %}
