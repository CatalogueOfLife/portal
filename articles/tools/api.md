---
layout: content
title: COL API
tagline: Programmatically access the Catalogue of Life
section_id: tools
toc: true
imageUrl: /images/species/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /tools/api
---

## COL API
The content included in the Catalogue of Life can be openly accessed through the JSON-based [ChecklistBank API](https://www.checklistbank.org/about/API). 
For a few things like bulk downloads authentication is required via a GBIF/ChecklistBank user account. 
In order to access releases in ChecklistBank, you first need to know their integer dataset key. 
See the [Datasets section](https://www.checklistbank.org/about/API#datasets) in the API introduction to learn about dataset keys for COL releases.

### Local matching containers
With every release of COL we provide docker containers for name matching, that can be used locally without depending on our online services.
