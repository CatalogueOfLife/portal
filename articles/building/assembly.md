---
layout: content
title: Constructing the Catalogue
tagline: How the Catalogue of Life is created
section_id: building
toc: true
imageUrl: /images/species/Mycena_kuurkacea.jpg
imageCaption: _Mycena kuurkacea_ Grgur. - [Photo CC By Matt Campbell](https://www.inaturalist.org/observations/25602056)
permalink: /building/assembly
---
The Catalogue of Life (COL) is the most comprehensive initiative in bringing basic species information from diverse data sources together into a single hierarchically structured global list of named species.

The assembly takes place on Catalogue of Life's infrastructure [ChecklistBank](https://www.checklistbank.org) using its project functionality. The editorial team manages the Catalogue by integrating diverse taxonomic data sources. They apply editorial decisions to resolve overlaps, eliminate conflicts, and harmonise data across sources. As datasets evolve and new taxonomic insights emerge, editors update rules to maintain consistency and reflect changes. This approach keeps the Catalogue coherent and current, while preserving the original content provided by contributing communities.

Bringing together independent checklists into a unified global resource is a complex task. It relies on a robust editorial process that maintains consistency and scientific integrity. It also preserves the original content supplied by taxonomic experts.

This section describes the two main phases involved in building the Catalogue of Life—from preparing and standardising data to publishing the different releases.

## Taxonomic Checklists: The Foundation of the Catalogue of Life
Taxonomic checklists are the essential building blocks of the Catalogue. They are created by taxonomic communities and independent experts. Their scope may vary from global coverage to regional or national lists of species. The content may also differ in detail and format. It can include basic name information to richly annotated databases. Regardless of their origin, they must be available in [ChecklistBank](https://www.checklistbank.org/) before their integration into the Catalogue.
The Taxonomy Group and editorial team jointly assess each candidate list to determine its suitability as a **global source** based on criteria described in [Hobern et al, 2021](https://doi.org/10.1007/s13127-021-00516-w). These sources will serve as the authoritative reference for a specific taxonomic or biological group. The assessment considers the following general criteria:

 1.  Aim to include **all known species within a group**, along with all published names that have been used to refer to them.
 2.  Provide **essential information for each taxon name** (e.g. authorship, status, synonyms, references).
 3.  Take **responsibility for a complete group** (taxonomic or biological).
 4.  Maintained in a standardised, structured format (ideally in a database or repository) that supports **long-term preservation** and easy data extraction.
 5.  Reflect **taxonomic and nomenclatural consistency** based on a synoptic view of the group, ideally reviewed by recognised taxonomic experts.
 6.  Species lists should be **maintained and updated** as new taxonomic treatments are published or errors are detected.
 7.  Openness to collaborate actively with **all relevant taxonomists** aiming to support the global list.
 8.  Openness to **collaborate actively with the editorial team** to address questions, resolve issues, and consider suggestions for adding new information. 
 9.  Be publicly available under a **[CC-0](https://creativecommons.org/publicdomain/zero/1.0/) or [CC-BY](https://creativecommons.org/licenses/by/4.0/)** license that ensures free and simple reuse.


A broader description of these criteria is provided in `[Hobern et al, 2021](https://doi.org/10.1007/s13127-021-00516-w)
Checklists that don’t meet all criteria may still be considered. For example, during the second phase of the Catalogue of Life assembly.


## Building the Catalogue of Life
Bringing together independent checklists into a unified global resource is a complex task. It relies on a robust editorial process that maintains consistency and scientific integrity. It also preserves the original content supplied by taxonomic experts.

This section describes the **two phases** involved in building the Catalogue of Life—from preparing and standardising data to publishing the Base and eXtended Releases.
 
## Phase 1 – Integration of Authoritative Global Checklists
### Data Conversion Pipelines
Original checklists exist in a variety of formats—from web platforms and editing tools to spreadsheets and text documents. The COL editorial team undertakes the time-consuming work of mobilising these datasets into [ChecklistBank](https://www.checklistbank.org/). This process involves reviewing, cleaning, and converting raw data into the [ColDP](https://catalogueoflife.github.io/coldp/) format or other recognised standard. In some cases, the lack of structured editing environments or the use of non-standardised data structures requires additional processing. This work is made possible through the close collaboration  with data providers,  who not only curate and maintain the original checklists but also assist in resolving structural and content-related issues. Once standardised, the datasets are published in [ChecklistBank](https://www.checklistbank.org/) and ready for the assembly process. 

### Management Classification
The Management Classification is a minimal taxonomic tree that serves as the attachment point for incoming source datasets. It is developed and maintained by the editorial team, with regular refinements supported by the Taxonomy Group and/or contributing taxonomic experts.

### Editorial Decisions
Data sources are cross-referenced with existing the Catalogue of Life (COL) content to detect overlaps and assess taxonomic alignment. The results guide:
- Identification of overlaps and gaps to determine if a data source should be split into multiple taxonomic groups – _**attach sectors**_.
- Placement of _**attach sectors**_ in the taxonomic hierarchy to ensure consistency and avoid duplication or taxonomic conflicts during the assembly.
- Minimal editing to harmonise content and standardise data across the catalogue.

### Assembly Process
The whole assembly process runs in monthly cycles to:
- Incorporate updates from existing sources
- Add newly accepted source datasets
- Remove or replace outdated or unmaintained sources
- Monitor stability and synchronise _attach sectors_
- Implement tooling updates and improvements
- Adjust editorial decisions at name and sector levels
- Resolve internal assembly errors
- Address issues reported by users
- Generate persistent identifiers for every scientific name

### Outcome
The result is the **Catalogue of Life Base Release**, published on the website, in ChecklistBank, and accessible via the [API](https://www.checklistbank.org/about/API). Every name has its own persistent  [identifier](/building/identifier).
The Catalogue is widely used as a [reference](/howto/use_cases) across biodiversity platforms.


## Phase 2: Integration of Additional Taxa and Data
This phase enhances the COL Base Release by addressing persistent gaps—particularly in underrepresented taxonomic groups. It incorporates content from all the potentially overlapping taxonomic and nomenclatural sources available on ChecklistBank. It enriches existing names with supplementary data. Importantly, the original information from the global sources in the Base Release remains unchanged.

The additional data to be integrated in this phase include:
- Names from family level downwards
- Recently described species
- Synonyms and missing combinations
- Fossil taxa
- Molecular identifiers (e.g. [BIN](https://bins.boldsystems.org/index.php/Public_BarcodeIndexNumber_Home), species hypothesis)
- Literature references and vernacular names
- Additional metadata from overlapping sources

### Sources to include
- Global multi-taxa checklists that address gaps left by existing global data sources
- Regional and national checklists
- Policy-relevant lists (e.g. invasive or threatened species)
- Molecular data sources (e.g. [BOLD](https://boldsystems.org/), [UNITE](https://unite.ut.ee/))
- Species lists extracted from digitised scientific literature (e.g. [PLAZI](https://plazi.org/treatmentbank/), [Biodiversity Data Journal](https://bdj.pensoft.net/))

### Editorial Decisions
Selection of new source datasets to consider:
- High counts of accepted names and synonyms
- Coverage of taxonomic gaps within COL
- Recent updates and active maintenance
- Open data licensing ([CC BY](https://creativecommons.org/licenses/by/4.0/) or [CC0](https://creativecommons.org/publicdomain/zero/1.0/))

Further decisions include:
+ Evaluating dataset quality and readiness for integration
+ Selecting data sources (or subsets) as _**merge sectors**_ —mainly contributing from family level downward
+ Prioritising the inclusion order of _**merge sectors**_
+ Configuring rules to block recurring name errors or unreliable content from digitised literature

### Assembly Process
The assembly runs directly after the publication of the COL Base Release aiming for:
- Updating the list of data sources to include or exclude
- Incorporating changes from previously merged sources
- Adjusting editorial decisions at both name and sector levels
- Applying tooling enhancements
- Monitoring stability and synchronising sectors
- Resolving internal errors
- Addressing issues or user feedback from previous versions

### Outcome
The result is the **Catalogue of Life eXtended Release (COL XR)**, published on the website, in ChecklistBank, and accessible via the API. Every merged name is assigned a persistent [identifier](/building/identifier).

