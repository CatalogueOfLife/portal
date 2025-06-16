---
layout: content
title: Using the Catalogue of Life
tagline: Accessing and citing the Catalogue of Life
section_id: howto
toc: true
imageUrl: /images/species/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /howto/access
---
## TODO:
 - how to identify merged information
 - how to restrict searches to base / x only
 - annual vs monthly release
 - download filters in CLB incl simple vs extended format!
 

## Ways to access the Catalogue of Life
The Catalogue of Life is constantly evolving through monthly updates. Persistent name identifiers will enable the user to track changes in scientific names. Every year, COL produces an annual version of the Catalogue of Life that receives long-term support and becomes part of the yearly archives. Monthly Catalogue of Lifes released between annual editions may not be kept indefinitely. These lose support once an annual Catalogue of Life is issued.   

The latest version of the Catalogue of Life can always be accessed through the COL website through the [Browse](/data/browse) and [Search](/data/search) tools and through the application programming interface (API). Historic annual Catalogue of Lifes can be accessed through web services, Darwin Core Archive downloads, and MySQL dumps.

### Browse and Search
[Browsing the Catalogue of Life](/data/browse) offers an intuitive way to explore the Catalogue of Life, providing a visual perspective on the diversity of organisms that are included. Starting from the highest level of the taxonomic hierarchy (the kingdom), it is possible to:
 
* Expand the next level of the tree using the <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg> button to show taxa included within each group
* Continue working down the tree to locate a species or other taxon (the tree only shows the accepted names)
* Click on the name of any species or other taxon to access the relevant details page
* Expand multiple branches of the hierarchy to visualise relationships between taxa
* Use the **Find taxon** search field to go directly to a named taxon in the tree (including synonyms as well as accepted names)

Alternatively, the [Search](/data/search) function supports searching by name for any species or taxon in the Catalogue of Life:

* The **input search text** box supports taxon names or any other attribute parts of the name, such as author name or year. Searches are case-insensitive. Names matching the search term are returned below. 
* The **higher taxon** box adds a filter to return only names from within the selected group. This returns a full list of matching scientific names, including synonyms and higher ranks. 
* Results can be ordered by **Status** (accepted/synonym) or **Rank**
* Further filters are available for **Rank** and **Status** or (under **Advanced**) for **Nomenclatural status** or **Name type**
* Also under **Advanced**, the **Name field** option allows searches to be narrowed to particular parts of the name (e.g. genus, specific epithet or nomenclatural code)

Once a taxon has been found by either route, more information is available on the taxon details page. Information available may include:
* **Name**: the complete scientific name for the species, including authorship
* **Checklist status**: current status of the name
* **Synonyms**: a list of synonyms for a species or taxon
* **Classification**: a list showing each of the higher taxa within which this species is included within the consensus taxonomy established for the Catalogue of Life
* **Vernacular names**: a list of common names for the species
* **Distribution** (if available): a list of regions and countries in which the species is recorded
* **Environment** (if available): in which the species is known to occur, e.g. marine, freshwater, terrestrial
* **Source database**: link to the page that describes the source database for the species record.
* **Link to original resource** (if available): this links to the corresponding species page in the original resource

### Downloads
The current and previous [Catalogue of Life can be downloaded](/data/download) in various formats and in parts, optionally specifying a root taxon retrieving just a subtree of the checklist.

## Data formats
Through ChecklistBank the Catalogue is available in [various formats](https://www.checklistbank.org/about/formats).

### Catalogue of Life Data Package (ColDP)
For Catalogue of Life, the recommended exchange format for submitting data to and downloading data from ChecklistBank 
is the [Catalogue of Life Data Package](https://catalogueoflife.github.io/coldp/) (ColDP), 
a tabular text format with a standard set of files and columns and it is inspired by [Frictionless Data](https://frictionlessdata.io/). 
The format is a single ZIP archive that bundles data in various delimited text files together with 
a [metadata.yaml](https://catalogueoflife.github.io/coldp/metadata.yaml) file to provide basic metadata about the entire dataset.

The ColDP format was developed to overcome limitations in existing formats for sharing taxonomic information, particularly Darwin Core Archives and the Annual Checklist Exchange Format used previously in COL. 
Darwin Core Archives and ACEF are still supported for data exchange to and from the Catalogue of LifeBank, but the [ColDP format supports a wider range of features](https://github.com/CatalogueOfLife/coldp#format-comparison). 

![ColDP Schema](https://catalogueoflife.github.io/coldp/docs/schema.png)
