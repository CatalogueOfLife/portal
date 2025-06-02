---
layout: content
title: Using the Catalogue of Life
tagline: Accessing and citing the Checklist
section_id: about
toc: true
imageUrl: /images/species/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /about/colusage
---

This page provides guidance on how to use the content included in the Catalogue of Life, including API access, and on the importance of properly citing the data.

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

### COL API
The dynamic Catalogue of Life can be accessed through the JSON-based [ChecklistBank API](https://www.checklistbank.org/about/API). 
Authentication is via GBIF user accounts. In order to access datasets in ChecklistBank you need to know their integer dataset key first. 
See the Datasets section in the API introduction to learn about dataset keys of COL releases.

### Downloads
The current and previous [Catalogue of Life can be downloaded](/data/download) in various formats and in parts, optionally specifying a root taxon retrieving just a subtree of the checklist.

### Deprecated legacy API
To facilitate a smooth change-over to the new Catalogue of Life infrastructure, the deprecated legacy API for the dynamic monthly Catalogue of Lifes will remain available for some period. 
However, we strongly recommend users to switch over to the new ChecklistBank API as soon as possible.

## Data formats

### Catalogue of Life Data Package (ColDP)
For the new Catalogue of Life, the recommended exchange format for submitting data to and downloading data from ChecklistBank 
is the [Catalogue of Life Data Package](https://github.com/CatalogueOfLife/coldp) (ColDP), 
a tabular text format with a standard set of files and columns and it is inspired by [Frictionless Data](https://frictionlessdata.io/). 
The format is a single ZIP archive that bundles various delimited text files:

 - [Name](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#name)
 - [NameRelation](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#namerelation)
 - [Taxon](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#taxon)
 - [Synonym](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#synonym)
 - [NameUsage](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#nameusage)
 - [Reference](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#reference)
 - [TypeMaterial](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#typematerial)
 - [Distribution](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#distribution)
 - [VernacularName](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#vernacularname)
 - [Media](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#media)
 - [SpeciesInteraction](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#speciesinteraction)
 - [TaxonConceptRelation](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#taxonconceptrelation)
 - [SpeciesEstimate](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#speciesestimate)
 - [Treatments](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#treatment)

A [metadata.yaml](https://github.com/CatalogueOfLife/coldp/blob/master/metadata.yaml) file should also be included to provide basic metadata about the entire dataset.
For sharing structured bibliographic references the [BibTex](https://github.com/CatalogueOfLife/coldp#reference-bibtex) 
and [CSL-JSON](https://github.com/CatalogueOfLife/coldp#reference-json-csl) format is also supported.

The ColDP format was developed to overcome limitations in existing formats for sharing taxonomic information, particularly Darwin Core Archives and the Annual Checklist Exchange Format used previously in COL. 
Darwin Core Archives and ACEF are still supported for data exchange to and from the Catalogue of LifeBank, but the [ColDP format supports a wider range of features](https://github.com/CatalogueOfLife/coldp#format-comparison). 

### Darwin Core Archive (DwC-A)
Darwin Core Archive (DwC-A) is a standard for biodiversity informatics data that makes use of the [Darwin Core](https://dwc.tdwg.org/list/) terms to produce a single, self-contained dataset for sharing species-level (checklist) data, species-occurrence data or sampling-event data. Each archive contains a set of text files, in standard comma- or tab-delimited format, along with a simple descriptor file (_meta.xml_) to document how the files are organised. The format is defined in the [Darwin Core Text Guidelines](https://dwc.tdwg.org/text/) (GBIF 2017).

Darwin Core Archives may include one or many data files, depending on the scope of the dataset published. As a minimum, they should include a required core data file with values for a standard set of Darwin Core terms. For checklist data, each record should include an identifier supplied as dwc:taxonID. The definitive list of core Taxon terms can be found in the [Darwin Core Taxon Extension](http://rs.gbif.org/core/dwc_taxon_2015-04-24.xml). For more information about preparation of a DwC-A, please refer to the GBIF [DwC-A How-to Guide](https://github.com/gbif/ipt/wiki/DwCAHowToGuide).

ChecklistBank currently interprets the following DwC extensions:

 - [gbif:VernacularName](https://rs.gbif.org/extension/gbif/1.0/vernacularname.xml)
 - [gbif:Distribution](https://rs.gbif.org/extension/gbif/1.0/distribution.xml)
 - [gbif:Reference](https://rs.gbif.org/extension/gbif/1.0/references.xml)
 - [gbif:Multimedia](https://rs.gbif.org/extension/gbif/1.0/multimedia.xml)
 
Data from all other DwC extensions is available via the [verbatim browser](https://www.checklistbank.org/dataset/1010/verbatim) though.

### Annual Checklist Exchange Format (ACEF)
The previous data format used by COL, the Annual Checklist Exchange Format (ACEF), can still be used to submit data, 
although the new ColDP format is recommended. 
The [ACEF format](/images/acef/2014_CoL_Standard_Dataset_v7_23Sep2014.pdf) includes several tables with pre-defined fields ([list of tables and fields](/images/acef/List_of_tables_and_fields_2014.pdf), [entity relationship diagram](/images/acef/ERD_DataSubmissionFormat_29Sep2014.pdf)). Version 4 from 29 September 2014 is the latest release.

### TextTree
[TextTree](https://github.com/gbif/text-tree) is a simple format to represent taxonomic trees using indented, plain text. Each row in a TextTree represent a scientific name. Each name can include the authorship and should be given a rank following the name in angular brackets. Synonyms are represented as direct, nested children that are prefixed by a * asterisk. The format focuses on the tree, is very human readable and lightweight. ChecklistBank archives every version of imported datasets as TextTree files which then drives various diff tools.

### Excel
ChecklistBank supports the upload and download of Excel spreadsheets as a variant for the ColDP and DwC-A formats.
Worksheets with a header row are used instead of CSV files to represent a single entity like Taxon or VernacularName.

Excel restricts the maximum amount of records to just above 1 million, so spreadsheets cannot be used to download the entire COL checklist.

### Newick
[Newick](https://en.wikipedia.org/wiki/Newick_format) format is a way of representing graph-theoretical trees with edge lengths using parentheses and commas.
It is often used with phylogenetic data.
The New Hampshire eXtended format (which COL implements) uses Newick comments to encode additional key value pairs, e.g. the id, scientificName ond rank.

### DOT
[Graphviz DOT](http://www.graphviz.org/doc/info/lang.html) is a simple widely used format for representing graphs as nodes and edges. 
ChecklistBank exports will include synonym and basionym relations in the final graph that can be rendered with many software tools.


## Citing the Catalogue of Life and data from ChecklistBank
COL's goal is to make sure that the Catalogue of Life and all content published through ChecklistBank have stable web identifiers and can easily be cited. To support this aim, COL is moving to DOI-based citation tools for all checklist datasets. This work is still under development as of November 2020. In the meantime, please cite COL and its contributors using the [recommended citations](#recommended-citations) listed further down on this page.

The future model for citing COL will include the following features:

* Every checklist in ChecklistBank will receive its own [Digital Object Identifier](https://doi.org/) (DOI).
* Each version of the Catalogue of Life will have its own DOI. The information shared for each version includes citation of all contributing sector checklists and other sources contributing content. 
* Every name in every checklist in ChecklistBank will also have its own unique identifier and can be cited directly. 
* Every name in each version of the Catalogue of Life will have its own unique identifier that links to the corresponding record in a source checklist. COL will as far as possible maintain the stability of these identifiers between different versions.

Once these identifiers are in place, it is strongly recommended that [users](colcommunity#the-role-of-users) adopt them for citations in all publications and other uses of COL data. Monitoring use of these DOIs will enable COL to demonstrate the importance both of taxonomic research and of the work needed to build the Checklist itself. Usage information from DOI citations will be included as part of the metadata for each checklist version and each contributing dataset. This will allow COL to report usage (including references inside publications) more accurately to the data contributors of the content, making it easier for them to highlight the importance of maintaining these datasets.

## Recommended citations

Please use the following recommended citation for the current version of the Catalogue of Life:

<div id="citation">
{{site.metadata.current.citation}}
</div>

<br/>
Please use the following recommended citations for the individual datasets contributing to the Catalogue of Life:

<div class="sources">
	{% assign sources = site.metadata.sources | sort: "alias" %}
	{% for src in sources %}
		<div>{{src.citation}} <a href="/data/dataset/{{src.key}}"><img style="height: 12px; opacity: 60%" src="/images/link.png"/></a></div>
	{% endfor %}
</div>
