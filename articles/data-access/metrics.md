---
layout: default
title: Catalogue metrics
tagline: I imagine this is a custom js driven page that Thomas implement.
section_id: dataAccess
permalink: /data/metrics
skills:
  - title: Animalia
    percentage: 84
  - title: Plantae
    percentage: 95
  - title: Protozoa
    percentage: 70
  - title: Other
    percentage: 61
---
<div class='full parallax' style='background-image: url(/images/default-bg.jpg); color: #fff;'>
  <div class='row'>
    <div class='twelve columns'>
      {% include section-header.html title="Metrics" color="#fff" tagline="Summary stats about the catalogue" class="big" %}
    </div>
  </div>
  <div class='four spacing'></div>
</div>


<div class='full'>
  <div class='row'>
    <div class='medium-6 columns'>
      <h3>Core metrics</h3>
      <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing.</p>
    </div>
    <div class='medium-6 columns'>
      <h3>Kingdoms</h3>
      <div class='mod modBarGraph'>
        <ul class='bars'>
          {% for skill in page.skills %}
            <li>
              <h4 style=''>
                {{skill.title}}
                <strong>{{skill.percentage}}%</strong>
              </h4>
              <p class='highlighted' data-percent='{{skill.percentage}}'></p>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>