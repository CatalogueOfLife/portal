---
layout: post
title:  New Catalogue of Life infrastructure Live
author: "Chantal Huijbers"
excerpt: The new Catalogue of Life (COL) infrastructure is live on GBIF servers
categories: Infrastructure API
---

The new Catalogue of Life (COL) infrastructure is now live! 
With the first products of the new infrastructure, the COL launches a new [Portal](http://www.catalogueoflife.org), 
[ChecklistBank](https://www.checklistbank.org), and [API](https://api.checklistbank.org). 
These products help the Catalogue of Life to provide better support for the work of the taxonomic communities 
and a more sustainable service for users such as biodiversity information initiatives.

#### COL Portal
The Catalogue of Life Checklist is now integrated in the new [portal](http://www.catalogueoflife.org), 
which includes the following features, where users can:
 - View the current version of the COL Checklist through the homepage, 
or the [search](http://www.catalogueoflife.org/data/search) and [browse](http://www.catalogueoflife.org/data/browse) pages under Data.
 - Look up the metadata of a dataset on the [contributing datasets](http://www.catalogueoflife.org/data/contributing-datasets) page.
 - Access all [previous versions](http://www.catalogueoflife.org/data/archives) of the monthly and annual COL Checklists through their original interface at that time.

We have maintained the most important URLs of the previous portal and setup redirections to the new site:
 - Dataset pages: [http://www.catalogueoflife.org/col/details/database/id/8](http://www.catalogueoflife.org/col/details/database/id/8)
 - Species pages: [http://www.catalogueoflife.org/col/details/species/id/12dca9c49741815f82400bb7bff50553](http://www.catalogueoflife.org/col/details/species/id/12dca9c49741815f82400bb7bff50553)
 - Species searches: [http://www.catalogueoflife.org/col/search/all/key/Dracula+antonii/](http://www.catalogueoflife.org/col/search/all/key/Dracula+antonii/)

#### New species identifiers
The COL Checklist now includes a new set of persistent identifiers for species and higher taxa. 
Establishing these identifiers and making them stable across versions of the COL Checklist will enable users 
to build their own solutions against COL without needing to rebuild databases for each new version. 
Stable identifiers will also allow COL to fit seamlessly into linked open data solutions such as Wikidata 
or as part of a wider biodiversity knowledge graph. 

We maintain a [species ID mapping file](https://download.checklistbank.org/col/legacy_id_map.tsv.gz) that allows you
to update any local, older COL identifiers you might have. The COL API also offers a redirection service to the new
species pages in case you need that, e.g. [https://api.checklistbank.org/dataset/3LR/legacy/12dca9c49741815f82400bb7bff50553](https://api.checklistbank.org/dataset/3LR/legacy/12dca9c49741815f82400bb7bff50553) 
will take you to the [Abies alba portal page](https://www.catalogueoflife.org/data/taxon/8K9Y). 
The API can also redirect you to the JSON API if you request JSON via an "Accept: application/json" header.

#### COL API
The latest version of the COL Checklist can be accessed through the [ChecklistBank API](https://api.checklistbank.org). 
The API is still under active development and not finalized, so small changes are still expected to take place. 
The legacy API and website URLs will be retained for some time to ensure a smooth transition from the legacy to the new COL infrastructure.

#### ChecklistBank
[ChecklistBank](https://www.checklistbank.org) will serve as a common repository for publishing 
and making available authoritative taxonomic checklists. 
Here the taxonomic datasets can be further investigated in full for example in their original (verbatim) format. 
The parts of the taxonomic datasets that have been used in the COL Checklist can also further be investigated.

#### Feedback
Improvements to this new portal will be made continuously, and we welcome any feedback on missing information or features, bugs, or suggestions for enhancements. 
Please send us your comments and suggestions at [feedback@catalogueoflife.org](mailto:feedback@catalogueoflife.org).

#### Infrastructure collaboration
The first products of the new COL infrastructure project were made possible by the collaboration and funds provided by 
Global Biodiversity Information Facility, 
Illinois Natural History Survey, 
Naturalis Biodiversity Center, 
Netherlands Biodiversity Information Facility, 
Smithsonian Institution (Integrated Taxonomic Information System / Encyclopedia of Life), 
and Species 2000. 
The entire new COL infrastructure is hosted by the Global Biodiversity Information Facility. 
This marks the move of the COL infrastructure from the servers at Naturalis Biodiversity Center. 
Naturalis remains the host of the COL/Species 2000 Secretariat together with the Illinois Natural History Survey / Species Files group. 
Catalogue of Life/Species 2000 remains an independent organisation with its own governance. 

