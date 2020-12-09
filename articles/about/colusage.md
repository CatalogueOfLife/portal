---
layout: content
title: Using the COL Checklist
tagline: Accessing and citing the Checklist
section_id: about
toc: true
imageUrl: /images/banner/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /about/colusage
---

This page provides guidance on how to use the content included in the COL Checklist, including API access, and on the importance of properly citing the data.

## Ways to access the COL Checklist
The Catalogue of Life Checklist is constantly evolving through monthly updates. Persistent name identifiers will enable the user to track changes in scientific names. Every year, COL produces an annual version of the COL Checklist that receives long-term support and becomes part of the yearly archives. Monthly COL Checklists released between annual editions may not be kept indefinitely. These lose support once an annual COL Checklist is issued.   

The latest version of the COL Checklist can always be accessed through the COL website through the [Browse](/data/browse.html) and [Search](/data/search.html) tools and through the application programming interface (API). Historic annual COL Checklists can be accessed through web services, Darwin Core Archive downloads, and MySQL dumps.

### Browse and Search
[Browsing the COL Checklist](/data/browse.html) offers an intuitive way to explore the Catalogue of Life, providing a visual perspective on the diversity of organisms that are included. Starting from the highest level of the taxonomic hierarchy (the kingdom), it is possible to:
 
* Expand the next level of the tree using the <svg viewBox="0 0 1024 1024" focusable="false" class="" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg> button to show taxa included within each group
* Continue working down the tree to locate a species or other taxon (the tree only shows the accepted names)
* Click on the name of any species or other taxon to access the relevant details page
* Expand multiple branches of the hierarchy to visualise relationships between taxa
* Use the **Find taxon** search field to go directly to a named taxon in the tree (including synonyms as well as accepted names)

Alternatively, the [Search](/data/search.html) function supports searching by name for any species or taxon in the COL Checklist:

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
The dynamic COL Checklist can be accessed through the JSON-based [COL ChecklistBank API](https://api.catalogueoflife.org/). 
The API is still under active development and not finalized, so small changes are still expected to take place before the release of version 1.0. 
Authentication is via GBIF user accounts. Datasets in the ChecklistBank are accessible through dataset keys. 
The latest version of the COL Checklist can always be accessed through the dataset Key [3LR](https://api.catalogueoflife.org/dataset/3LR). 
More information on the new COL ChecklistBank will follow soon.

### Downloads
Historical versions of the annual COL Checklist (2005 - 2019) can be accessed under [previous versions](/data/archives.html). 
Darwin Core Archives of historic annual COL Checklists (2012-2019) and/or MySQL dumps (2005-2019) can also be [downloaded from here](https://download.catalogueoflife.org/col/annual/).

### Deprecated legacy API
To facilitate a smooth change-over to the new Catalogue of Life infrastructure, the deprecated legacy API for the dynamic monthly COL Checklists will remain available for some period. 
However, we strongly recommend users to switch over to the new COL ChecklistBank API as soon as possible.

## Data formats

### Catalogue of Life Data Package
For the new Catalogue of Life, the recommended exchange format for submitting data to and downloading data from the COL ChecklistBank 
is the [Catalogue of Life Data Package](https://github.com/CatalogueOfLife/coldp) (ColDP), 
a tabular text format with a standard set of files and columns and it is inspired by [Frictionless Data](https://frictionlessdata.io/). 
The format is a single ZIP archive that bundles various delimited text files:

 - [Name](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#name)
 - [NameRelation](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#namerelation)
 - [Taxon](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#taxon)
 - [Synonym](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#synonym)
 - [NameUsage](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#nameusage)
 - [TaxonConceptRelation](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#taxonconceptrelation)
 - [SpeciesInteraction](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#speciesinteraction)
 - [SpeciesEstimate](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#speciesestimate)
 - [Reference](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#reference)
 - [NameReference](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#namereference)
 - [TypeMaterial](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#typematerial)
 - [Distribution](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#distribution)
 - [Media](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#media)
 - [VernacularName](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#vernacularname)
 - [Treatments](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#treatment)

A [metadata.yaml](https://github.com/CatalogueOfLife/coldp/blob/master/metadata.yaml) file can also be included to provide basic metadata about the entire dataset.
For sharing structured bibliographic references the [BibTex](https://github.com/CatalogueOfLife/coldp#reference-bibtex) 
and [CSL-JSON](https://github.com/CatalogueOfLife/coldp#reference-json-csl) format is also supported.

The ColDP format was developed to overcome limitations in existing formats for sharing taxonomic information, particularly Darwin Core Archives and the Annual Checklist Exchange Format used previously in COL. 
Darwin Core Archives and ACEF are still supported for data exchange to and from the Catalogue of Life ChecklistBank, but the [ColDP format supports a wider range of features](https://github.com/CatalogueOfLife/coldp#format-comparison). 

### Darwin Core Archive
Darwin Core Archive (DwC-A) is a standard for biodiversity informatics data that makes use of the [Darwin Core](https://dwc.tdwg.org/list/) terms to produce a single, self-contained dataset for sharing species-level (checklist) data, species-occurrence data or sampling-event data. Each archive contains a set of text files, in standard comma- or tab-delimited format, along with a simple descriptor file (_meta.xml_) to document how the files are organised. The format is defined in the [Darwin Core Text Guidelines](https://dwc.tdwg.org/text/) (GBIF 2017).

Darwin Core Archives may include one or many data files, depending on the scope of the dataset published. As a minimum, they should include a required core data file with values for a standard set of Darwin Core terms. For checklist data, each record should include an identifier supplied as dwc:taxonID. The definitive list of core Taxon terms can be found in the [Darwin Core Taxon Extension](http://rs.gbif.org/core/dwc_taxon_2015-04-24.xml). For more information about preparation of a DwC-A, please refer to the GBIF [DwC-A How-to Guide](https://github.com/gbif/ipt/wiki/DwCAHowToGuide).

### Annual Checklist Exchange Format
The previous data format used by COL, the Annual Checklist Exchange Format (ACEF), can still be used to submit data, 
although the new ColDP format is recommended. 
The [ACEF format](/images/acef/2014_CoL_Standard_Dataset_v7_23Sep2014.pdf) includes several tables with pre-defined fields ([list of tables and fields](/images/acef/List_of_tables_and_fields_2014.pdf), [entity relationship diagram](/images/acef/ERD_DataSubmissionFormat_29Sep2014.pdf)). Version 4 from 29 September 2014 is the latest release.

## Citing the COL Checklist and data from ChecklistBank
COL's goal is to make sure that the COL Checklist and all content published through ChecklistBank have stable web identifiers and can easily be cited. To support this aim, COL is moving to DOI-based citation tools for all checklist datasets. This work is still under development as of November 2020. In the meantime, please cite COL and its contributors using the [recommended citations](#recommended-citations) listed further down on this page.

The future model for citing COL will include the following features:

* Every checklist in ChecklistBank will receive its own [Digital Object Identifier](https://doi.org/) (DOI).
* Each version of the COL Checklist will have its own DOI. The information shared for each version includes citation of all contributing sector checklists and other sources contributing content. 
* Every name in every checklist in ChecklistBank will also have its own unique identifier and can be cited directly. 
* Every name in each version of the COL Checklist will have its own unique identifier that links to the corresponding record in a source checklist. COL will as far as possible maintain the stability of these identifiers between different versions.

Once these identifiers are in place, it is strongly recommended that [users](colcommunity#the-role-of-users) adopt them for citations in all publications and other uses of COL data. Monitoring use of these DOIs will enable COL to demonstrate the importance both of taxonomic research and of the work needed to build the Checklist itself. Usage information from DOI citations will be included as part of the metadata for each checklist version and each contributing dataset. This will allow COL to report usage (including references inside publications) more accurately to the data contributors of the content, making it easier for them to highlight the importance of maintaining these datasets.

## Recommended citations

Please use the following recommended citation for the current version of the COL Checklist:

<i>{{site.metadata.current.citation}}</i>

Please use the following recommended citations for the individual datasets contributing to the COL Checklist:

<div class="sources">
	{% assign sources = site.metadata.sources | sort: "alias" %}
	{% for src in sources %}
		<p><i>{{src.citation}}</i> <a href="/data/dataset/{{src.key}}"><img style="height: 12px; opacity: 60%" src="/images/link.png"/></a></p>
	{% endfor %}
</div>
