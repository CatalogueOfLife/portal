---
layout: content
title: The COL community
tagline: A global collaboration to list the world's species
section_id: about
toc: true
imageUrl: https://inaturalist-open-data.s3.amazonaws.com/photos/120571865/large.jpg
imageCaption: _Ginglymostoma cirratum_ (Bonnaterre, 1788) - [Photo CC BY Amelia Tauber](https://www.inaturalist.org/photos/550084688)
permalink: /about/community
---

The Catalogue of Life relies on hundreds of specialists, taxonomists and informatics experts, who keep it updated and evolving. 

## Community-managed checklists

No single expert can know all species. That’s why the Catalogue of Life brings together checklists developed by taxonomic communities and individual specialists from around the world. Each contributor focuses on one or more groups of organisms, helping to build a globally complete and up-to-date list that includes both current species names and synonyms.

These community-managed checklists form the building blocks (“sectors”) of the Catalogue of Life. Taxonomists develop and maintain them as part of their own research and interests or directly for the Catalogue, using various tools and data standards. Through the Catalogue of life infrastructure ChecklistBank, researchers can freely share their data.

COL works closely with these communities to deliver a high-quality product that credits contributors and depends on shared principles for building reliable, consensus-based checklists. Together, we keep the Catalogue of Life accurate, current, and of the highest quality.

## The role of taxonomic communities

Each community  that contributes to the Catalogue of Life is responsible for the quality and accuracy of its data. While their structures and methods may vary, all share the goal of providing reliable taxonomic information and commit to:

- Providing a comprehensive listing of names, species, and classifications for their taxonomic group, with original references and based on the best current scientific understanding.
- Publishing data in a supported, machine-readable format (with helpdesk support if needed).
- Using the COL licensing model (CC0 preferred; CC BY also supported).
- Optionally including additional species information in their datasets.
- Operating as an open community that allows other taxonomists to contribute and participate.
- Having a process for addressing differences in taxonomic opinion, for example by presenting consensus views alongside alternative perspectives where appropriate.
- Responding efficiently to new additions, updates, user feedback, and corrections.


## The role of the Catalogue of Life

Catalogue of Life ’s main role is to integrate all contributions into a single, global resource, provide tools like ChecklistBank to support data sharing, and ensure contributors receive proper recognition. We collaborate closely with contributors and users to support diverse needs, promote best practices for citing and acknowledging taxonomic work. Our commitments include:

**Deliver and maintain the Catalogue**

- Provide a comprehensive, high-quality global reference of all species names.
- Maintain stable unique identifiers and version histories for all data and releases.
- Use semi-automated processes to build checklists for groups without active taxonomic communities.

**Support taxonomic communities**

- Oversee endorsement processes to select and support taxonomic contributors for each sector.
- Manage smooth transitions when a community can no longer maintain its checklist.
- Streamline updates, new content, and suggested corrections for easy curation by the experts.
- Share regular reports with contributors on how their data is used in COL.

**Support users and promote recognition**

- Provide guidance on using the Catalogue of Life and its infrastructure ChecklistBank, to enhance usability and impact.
- Provide tools and guidance for proper citation of the Catalogue, individual checklists, and individual taxonomists.
- Track usage and citations of the Catalogue, individual checklists, and records.

**Sustain and grow the infrastructure**

- Continuously evolve COL tools and services to meet new opportunities and challenges.
- Develop new pathways to enrich species names and ancillary data.
- Secure funding to maintain the infrastructure and support taxonomic curation where possible.


## The role of users

Taxonomic research is complex and often built on years of work by dedicated scientists.Their contributions make it possible to survey, monitor, and understand the world’s biodiversity. Users play a key role by acknowledging these efforts, helping to recognise and support the expertise behind the Catalogue of Life.

Users can help by:

- Acknowledging contributions, use COL’s citation and DOI to give adequate credit to the contributing communities, individual taxonomists and to the Catalogue’s of Life team.
- Being aware of the limitations or known gaps or unresolved  issues, especially in groups not yet reviewed by a taxonomic community.
- Submit updates, corrections, and supporting references when you notice errors or missing information in the Catalogue.



## Contributors
List of all the current Catalogue of Life contributors.

<div id="contributors">  
  <ul>
    <!--
  assign sorted = site.metadata.current.creator | sort: 'family', "last"
    -->
  {% for a in site.metadata.current.creator %}
    <li>{{a.label}}</li>
  {% endfor %}
  </ul>
</div>
