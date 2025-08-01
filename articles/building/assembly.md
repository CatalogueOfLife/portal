---
layout: content
title: Constructing the Catalogue
tagline: How the Catalogue of Life is created
section_id: building
toc: true
imageUrl: /images/species/Pultenaea_procumbens.jpg    
imageCaption: _Pultenaea procumbens_ A.Cunn. - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/5073041283)
permalink: /building/assembly
---
The Catalogue of Life (COL) is the most comprehensive initiative to bring together basic species information from diverse data sources into a single, hierarchically structured global list of named species.

The assembly takes place on Catalogue of Life’s data infrastructure ChecklistBank using its project functionality. The editorial team manages the Catalogue by integrating diverse taxonomic datasets. They apply editorial decisions to resolve overlaps, eliminate conflicts, and harmonise data across sources. As datasets evolve and new taxonomic insights emerge, editors update rules to maintain consistency and reflect changes. This approach keeps the Catalogue coherent and current, while preserving the original content provided by contributing communities.


## Taxonomic Checklists: The Foundation of the Catalogue of Life
Taxonomic checklists are the essential building blocks of the Catalogue. They are created by taxonomic communities and independent experts. Their scope may vary from global coverage to regional or thematic lists of species. The content may also differ in detail and format. It can include basic name information to richly annotated databases. Regardless of their origin, they must be available in ChecklistBank before their integration into the Catalogue.
The Taxonomy Group and editorial team jointly assess each candidate list to determine its suitability as a **global source**. These sources will serve as the authoritative reference for a specific taxonomic or biological group. The assessment consider the following general criteria:

 1.  Aim to include **all known species within a group**, along with all published names that have been used to refer to them.
 2.  Provide **essential information for each taxon name** (e.g. authorship, status, synonyms, references).
 3.  Should take responsibility for a **complete taxonomic or biological group**
 4.  Maintained in a standardised, structured format (ideally in a database or repository) that supports **long-term preservation** and easy data extraction.
 5.  Reflect **taxonomic and nomenclatural consistency** based on a synoptic view of the group, ideally reviewed by recognised taxonomic experts.
 6.  Species lists should be **maintained and updated** as new taxonomic treatments are published or errors are detected.
 7.  Openness to collaborate actively with **all relevant taxonomists** aiming to support the global list 
 8.  Openness to **collaborate actively with the editorial team** to address questions, resolve issues, and consider suggestions for adding new information. 
 9.  Be publicly available under a **CC-0 or CC-by** license that ensures free and simple reuse.


A broader description of these criteria is provided in the article `[Towards a global list of accepted species VI: The Catalogue of Life](https://doi.org/10.1007/s13127-021-00516-w)
Checklists that don’t meet all criteria may still be considered during the second phase of the Catalogue of Life assembly.


## Building the Catalogue of Life
Bringing together independent checklists into unified global resource is a complex task. It relies on a robust editorial process that maintains consistency and scientific integrity. It also preserves the original content supplied by taxonomic experts.

Below is a description of the process in **two phases**, from data mobilisation to publishing the assembled catalogue.

 
## Phase 1 – Integration of Authoritative Global Checklists
### Data Conversion Pipelines
Original checklists exist in a variety of formats—from web platforms and editing tools to spreadsheets and text documents. The COL editorial team carries out the necessary time consuming work to mobilise these datasets into ChecklistBank. This involves reviewing, cleaning, and converting raw data into the COLDP format or other standard formats. The absence of structured editing environments or non-standardised data structures often requires additional processing by the editorial team. Structural and content issues are resolved in close coordination with data providers. Once standardised, the datasets are published in ChecklistBank and ready for the assembly process.

### Management Classification
The Management Classification is a minimal taxonomic tree that serves as the attachment point for incoming source datasets. It is developed and maintained by the editorial team, with regular refinements supported by the Taxonomy Group and/or contributing taxonomic experts.

### Editorial Decisions
Data sources are cross-referenced with existing Catalogue of Life (COL) content to detect overlaps and assess taxonomic alignment. The results guide:
- Identification of overlaps and gaps to determine if a data source should be split into multiple _**attach sectors**_.
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
The result is the **Catalogue of Life Base Release**, published on the website, in ChecklistBank, and accessible via API. Every name has its own persistent  [identifier](/building/identifier).
The Catalogue is widely used as a [reference](/howto/use_cases) across biodiversity platforms.


## Phase 2: Integration of Additional Taxa and Data
This phase enhances the Base Release by addressing persistent gaps—particularly in underrepresented taxonomic groups. It incorporates content from over 57,000 overlapping taxonomic and nomenclatural sources. It enriches existing names with supplementary data. Importantly, the original information from the global sources in the Base Release remains unchanged.

The additional data to be integrated in this phase include:
- Names from family level downwards
- Recently described species
- Synonyms
- Fossil taxa
- Molecular identifiers (e.g. BINs, OTUs)
- Literature references and vernacular names
- Additional metadata from overlapping sources

### Sources to include
- Global multi-taxa checklists that address gaps left by existing global data sources
- Regional and national checklists
- Policy-relevant lists (e.g. invasive or threatened species)
- Molecular data sources (e.g. species hypotheses, BINs, OTUs)
- Species lists extracted from digitised scientific literature (e.g. PLAZI, Biodiversity Data Journal)

### Editorial Decisions
Selection of new source datasets to consider:
- High counts of accepted names and synonyms
- Coverage of taxonomic gaps within COL
- Recent updates and active maintenance
- Open data licensing (CC BY or CC0)

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

