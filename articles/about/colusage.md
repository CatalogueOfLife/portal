---
layout: content
title: Using the COL Checklist
tagline: Accessing and citing the Checklist
section_id: about
toc: true
imageUrl: /images/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /content/colusage
---
# Using the Checklist
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
The dynamic COL Checklist can be accessed through the JSON-based [COL ChecklistBank API](https://api.catalogue.life/). 
The API is still under active development and not finalized, so small changes are still expected to take place before the release of version 1.0. 
Authentication is via GBIF user accounts. Datasets in the ChecklistBank are accessible through dataset keys. 
The latest version of the COL Checklist can always be accessed through the dataset Key [3LR](https://api.catalogue.life/dataset/3LR). 
More information on the new COL ChecklistBank will follow soon.

### Downloads
Historical versions of the annual COL Checklist (2005 - 2019) can be accessed under [previous versions](https://www.dev.catalogue.life/data/archives.html). 
Darwin Core Archives of historic annual COL Checklists (2012-2019) and/or MySQL dumps (2005-2019) can also be [downloaded from here](http://api.catalogue.life/download/col/annual/).

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

DwC-A archives may include one or many data files, depending on the scope of the dataset published. As a minumum, they should include a required core data file with values for a standard set of Darwin Core terms. For checklist data, the each record should be include an identifier supplied as dwc:taxonID. The definitive list of core Taxon terms can be found in the [Darwin Core Taxon Extension](http://rs.gbif.org/core/dwc_taxon_2015-04-24.xml). For more information about preparation of a DwC-A, please refer to the GBIF [DwC-A How-to Guide](https://github.com/gbif/ipt/wiki/DwCAHowToGuide).

### Annual Checklist Exchange Format
The previous data format used by COL, the Annual Checklist Exchange Format (ACEF), can still be used to submit data, 
although the new ColDP format is recommended. 
The [ACEF format](/images/acef/2014_CoL_Standard_Dataset_v7_23Sep2014.pdf) includes several tables with pre-defined fields ([list of tables and fields](/images/acef/List_of_tables_and_fields_2014.pdf), [entity relationship diagram](/images/acef/ERD_DataSubmissionFormat_29Sep2014.pdf)). Version 4 from 29 September 2014 is the latest release.

## Citing the COL Checklist and data from ChecklistBank
COL's goal is to make sure that the COL Checklist and all content published through ChecklistBank have stable web identifiers and can easily be cited. This will include the following features (some still under development as of October 2020:

* Every checklist in ChecklistBank will receive its own [Digital Object Identifier](https://doi.org/) (DOI).
* Each version of the COL Checklist will have its own DOI. The information shared for each version includes citation of all contributing sector checklists and other sources contributing content. 
* Every name in every checklist in ChecklistBank will also have its own unique identifier and can be cited directly. 
* Every name in each version of the COL Checklist will have its own unique identifier that links to the corresponding record in a source checklist. COL will as far as possible maintain the stability of these identifiers between different versions.

[Users](colcommunity#the-role-of-users) are strongly encouraged to use these identifiers in all publications and other uses of COL data. Doing so enables COL to demonstrate the importance both of taxonomic research and of the work to build the Checklist.

COL monitors use of all DOIs associated with checklists and aggregates this usage information as part of the metadata for each checklist (including each contributing checklist in the case of the COL Checklist itself). 

Usage (including references inside publications) are then reported back to the contributors of the content, making it easier to highlight the importance of maintaining these datasets.

## Recommended citations

Please use the following recommended citation for the current version of the COL Checklist:

Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). **Species 2000 & ITIS Catalogue of Life, 3rd November 2020.** Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Please use the following recommended citation for the individual datasets contributing to the COL Checklist:

Oosterbroek P. [**CCW: Catalogue of Craneflies of the World (version Jul 2013).**](/data/dataset/1005) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Vignes-Lebbe R., Gallut C. [**CIPA: Computer Aided Identification of Phlebotomine sandflies of Americas (version 3, Mar 2011).**](/data/dataset/1006) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Uetz P., Ho&scaron;ek J. [**ReptileDB: The Reptile Database (version Dec 2015).**](/data/dataset/1008) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Brinton E., Ohman M.D., Townsend A.W., Knight M.D., Bridgeman A.L. [**ETI WBD (Euphausiacea): World Biodiversity Database (Euphausiacea) (version 2.1, Nov 2002).**](/data/dataset/1009) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Froese R., Pauly D. (eds.). [**FishBase: FishBase (version Feb 2018).**](/data/dataset/1010) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bourgoin T. [**FLOW: Fulgoromorpha Lists On the Web (version 8).**](/data/dataset/1011) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Lefkowitz E. [**J. (ed.). ICTV MSL: ICTV Master Species List (version MSL35, 2019, v1).**](/data/dataset/1014) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Roskov Y., Bisby F., Zarucchi J., Novoselova M. (eds.). [**ILDIS: World Database of Legumes (version 12, May 2014).**](/data/dataset/1015) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Beccaloni G., Scoble M., Kitching I., Simonsen T., Robinson G., Pitkin B., Hine A., Lyal C. [**LepIndex: The Global Lepidoptera Names Index (version 12.3, Jan 2012).**](/data/dataset/1018) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Crosby M.R., Magill R. (eds.). [**MOST: Moss TROPICOS Database (version 1, Jul 2004).**](/data/dataset/1019) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Tol J. [**van. Odonata: Global Species Database of Odonata (version Dec 2011).**](/data/dataset/1020) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Cigliano M.M., Braun H., Eades D.C., Otte D. [**SF Orthoptera: Orthoptera Species File (version 5.0, Jun 2018).**](/data/dataset/1021) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Medvedev S., Lobanov A., Lyangouzov I. [**Parhost: Parhost World Database of Fleas (version 2, Nov 2005).**](/data/dataset/1022) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Govaerts R. [**(ed.). WCSP: World Checklist of Selected Plant Families (version Aug 2017).**](/data/dataset/1024) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Ben-Dov Y., Miller D.R. [**ScaleNet: Systematic Database of the Scale Insects of the World (version Dec 2004).**](/data/dataset/1026) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Schoolmeesters P. [**Scarabs: World Scarabaeidae Database (version 2020-10-06).**](/data/dataset/1027) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kropf C., Nentwig W., Blick T., Gloor D. [**WSC: World Spider Catalog (version 20).**](/data/dataset/1029) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Nijhof A.M., Guglielmone A.A., Horak I.G. [**TicksBase: TicksBase (version 5.6, Jun 2005).**](/data/dataset/1030) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Robinson G.S. [**Tineidae NHM: Global taxonomic database of Tineidae (Lepidoptera) (version 9.0, Nov 2011).**](/data/dataset/1031) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Tavakilian G., Chevillotte H. [**TITAN: Cerambycidae database (version Apr 2015).**](/data/dataset/1032) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Lichtwardt R.W. [**Trichomycetes: Fungi Associated with Arthropods (version Oct 2017).**](/data/dataset/1033) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Noyes J. [**UCD: Universal Chalcidoidea Database (version Sep 2007).**](/data/dataset/1034) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Gusenleitner J. [**ZOBODAT Vespoidea: Zoological-Botanical Database (Vespoidea) (version 4.0, Oct 2011).**](/data/dataset/1037) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Alonso-Zarazaga M.A., Lyal C.H.C. [**WTaxa: Electronic Catalogue of Weevil names (Curculionoidea) (version Oct 2016).**](/data/dataset/1039) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Rainer H., Chatrou L.W. (eds.). [**AnnonBase: Annonaceae GSD (version Jan 2014).**](/data/dataset/1040) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Minelli A. [**(ed.). ChiloBase: A World Catalogue of Centipedes (Chilopoda) for the Web (version 1.01, May 2006).**](/data/dataset/1042) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Van Soest R.W.M, Boury-Esnault N., Hooper J.N.A., R&uuml;tzler K., de Voogd N.J., Alvarez B., Hajdu E., Pisera A.B., Manconi R., Sch&ouml;nberg C., Klautau M., Picton B., Kelly M., Vacelet J., Dohrmann M., D&iacute;az M.-C., C&aacute;rdenas P., Carballo J. [**L., R&iacute;os P., Downey R. WoRMS Porifera: World Porifera Database (version 2019-03-05).**](/data/dataset/1044) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Farjon A., Gardner M., Thomas P. [**Conifer Database: Conifer Database (version Jan 2014).**](/data/dataset/1045) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

H&auml;user C., Holstein J., Kroupa A.S., Steiner A., Turiault M. (eds.). [**GloBIS (GART): Global Butterfly Information System (version Sep 2013).**](/data/dataset/1046) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Segers H. [**FADA Rotifera: Annotated checklist of the rotifers (Phylum Rotifera) (version May 2012).**](/data/dataset/1047) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Aedo C. [**RJB Geranium: Geranium Taxonomic Information System (version Sep 2017).**](/data/dataset/1048) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

De Prins J., De Prins W. [**Global Gracillariidae: Global Taxonomic Database of Gracillariidae (version Jan 2011).**](/data/dataset/1049) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Brock P.D., B&uuml;scher T., Baker E., Otte D. [**SF Phasmida: Phasmida Species File (version 5.0, Jun 2018).**](/data/dataset/1050) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Beccaloni G.W. [**SF Cockroach: Cockroach Species File (version 5.0, Jun 2018).**](/data/dataset/1051) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Soulier-Perkins A. [**COOL: Cercopoidea Organised On Line (version Feb 2019).**](/data/dataset/1052) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Lado C., Hern&aacute;ndez-Crespo J.C. [**Nomen.eumycetozoa.com: Nomenclatural Database of Eumycetozoa (Myxomycota) (version 2020-03).**](/data/dataset/1053) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Ouvrard D. [**Psyl'list: Psylloidea database (version Feb 2019).**](/data/dataset/1054) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Oswald J.D. [**LDL Neuropterida: Neuropterida Species of the World (version Jul 2018).**](/data/dataset/1055) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Emig C.C., Bitner M.A., Alvarez F. [**Brachiopoda Database: Brachiopoda Database (version Feb 2016).**](/data/dataset/1057) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Watling L., Gerken S. [**WoRMS Cumacea: World Cumacea Database (version 2019-03-05).**](/data/dataset/1058) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

St&ouml;hr S., O'Hara T., Thuy B. (eds.). [**WoRMS Ophiuroidea: World Ophiuroidea database (version 2019-03-05).**](/data/dataset/1059) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Favret C. [**SF Aphid: Aphid Species File (version 5.0, Jun 2018).**](/data/dataset/1061) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Otte D., Spearman L., Stiewe M.B.D. [**SF Mantodea: Mantodea Species File (version 5.0/5.0, Jun 2018).**](/data/dataset/1062) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Castilho R.C., Silva E.S., Moraes G.J. [**de. Mites GSD Ologamasidae: Mites GSD Ologamasidae (version Oct 2009).**](/data/dataset/1063) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

DeWalt R.E., Maehr M.D., Neu-Becker U., Stueber G. [**SF Plecoptera: Plecoptera Species File (version 5.0, Jun 2018).**](/data/dataset/1065) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Culham A., Yesson C. [**Droseraceae Database: Droseraceae Database (version 0.1, Dec 2008).**](/data/dataset/1066) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Yu D.S.K. [**Taxapad Ichneumonoidea: Taxapad Ichneumonoidea (version May 2009).**](/data/dataset/1068) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Castilho R.C., Moraes G.J. [**de. Mites GSD Rhodacaridae: Mites GSD Rhodacaridae (version Oct 2009).**](/data/dataset/1069) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Castilho R.C., Narita J.P.Z., Moraes G.J. [**de, McMurtry J.A. Mites GSD Phytoseiidae: Mites GSD Phytoseiidae (version Sep 2009).**](/data/dataset/1070) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Warwick S.I., Francis A., Al-Shehbaz I.A. [**Brassicaceae: Brassicaceae species checklist and database (version 2, Oct 2009).**](/data/dataset/1073) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

S&ouml;derstr&ouml;m L., Hagborg A., von Konrat M. (eds.). [**ELPT: Early Land Plants Today (version Jan 2019).**](/data/dataset/1074) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Burckhardt D. [**MBB: Moss Bug Base (version 1.0, Sep 2009).**](/data/dataset/1076) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Mesa N.C., Ochoa R., Welbourn W.C., Evans G.A., Castilho R.C., Moraes G.J. [**de. Mites GSD Tenuipalpidae: Mites GSD Tenuipalpidae (version Nov 2009).**](/data/dataset/1078) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Den Heyer J., Hernandes F.A. [**BdelloideaBase: Bdellid & Cunaxid Databases (version Feb 2013).**](/data/dataset/1080) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bock P., Gordon D. [**WoRMS Bryozoa: World List of Bryozoa (version 2019-03-05).**](/data/dataset/1081) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Migeon A., Dorkeld F. [**SpmWeb: Spider Mites Web (version Jul 2011).**](/data/dataset/1082) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Norenburg J., Gibson R., Herrera Bachiller A., Strand M. [**WoRMS Nemertea: World Nemertea Database (version 2019-03-05).**](/data/dataset/1085) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Boxshall G.A. [**WoRMS Bochusacea: World List of Bochusacea (version 2019-02-05).**](/data/dataset/1086) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Boxshall G.A. [**WoRMS Brachypoda: World List of Brachypoda (version 2019-03-05).**](/data/dataset/1087) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Boxshall G.A. [**WoRMS Mystacocarida: World List of Mystacocarida (version 2019-03-05).**](/data/dataset/1088) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Maehr M.D. [**SF Embioptera: Embioptera Species File (version 5.0, Jun 2018).**](/data/dataset/1089) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Read G., Fauchald K. (eds.). [**WoRMS Polychaeta: World Polychaeta database (version 2019-03-05).**](/data/dataset/1090) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Koenemann S., Hoenemann M., Stemme T. [**WoRMS Remipedia: World Remipedia Database (version 2019-03-05).**](/data/dataset/1091) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Boxshall G.A. [**WoRMS Tantulocarida: World List of Tantulocarida (version 2019-03-05).**](/data/dataset/1092) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Poore G. [**WoRMS Thermosbaenacea: World List of Thermosbaenacea (version 2019-03-05).**](/data/dataset/1093) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Boyko C.B, Bruce N.L., Hadfield K.A., Merrin K.L., Ota Y., Poore G.C.B., Taiti S., Schotte M., Wilson G.D.F. (eds.). [**WoRMS Isopoda: World Marine, Freshwater and Terrestrial Isopod Crustaceans database (version 2019-03-05).**](/data/dataset/1094) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Mah C.L. [**WoRMS Asteroidea: World Asteroidea Database (version 2019-02-05).**](/data/dataset/1095) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

McKamey S. [**MOWD: Membracoidea of the World Database (version 1011, Nov 2010).**](/data/dataset/1096) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Timm T., Ers&eacute;us C. [**WoRMS Oligochaeta: World List of Marine Oligochaeta (version 2019-03-05).**](/data/dataset/1099) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Gofas S. [**WoRMS Xenoturbellida: World List of Xenoturbellida (version 2019-03-05).**](/data/dataset/1100) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Pape T., Thompson F.C. (eds.). [**Systema Dipterorum: Systema Dipterorum (version 2.0, Jan 2011).**](/data/dataset/1101) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kathirithamby J. [**Strepsiptera Database: Global Strepsiptera Database (version May 2017).**](/data/dataset/1103) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Emig C.C. [**Phoronida Database: Phoronida Database (version Feb 2016).**](/data/dataset/1104) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Mees J., Walker-Smith G. [**WoRMS Leptostraca: World List of Leptostraca (version 2019-03-05).**](/data/dataset/1105) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kroh A., Mooi R. [**WoRMS Echinoidea: World Echinoidea Database (version 2019-03-05).**](/data/dataset/1106) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Paulay G. [**WoRMS Holothuroidea: World List of Holothuroidea (version 2019-03-05).**](/data/dataset/1107) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Ng P.K.L., Davie P. [**WoRMS Brachyura: World List of marine Brachyura (version 2015-09-01).**](/data/dataset/1108) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Lazarus D. [**WoRMS Polycystina: World List of Polycystina (Radiolaria) (version 2019-03-05).**](/data/dataset/1109) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Anderson G., Blazewicz M. [**WoRMS Tanaidacea: World List of Tanaidacea (version 2019-03-05).**](/data/dataset/1110) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Schuchert P. [**WoRMS Hydrozoa: World Hydrozoa Database (version 2019-03-05).**](/data/dataset/1112) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Aescht E. [**CilCat: The World Ciliate Catalog (version 4.0, Jan 2012).**](/data/dataset/1113) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kroupa A.S., Lohrmann V., Pulawski W.J., Schmid-Egger C. [**HymIS Crabronidae & Rhopalosomatidae: Hymenoptera Information System (version Jul 2017).**](/data/dataset/1118) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Schmidt-Rhaesa A. [**FADA Nematomorpha: World checklist of freshwater Nematomorpha species (version Dec 2010).**](/data/dataset/1119) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Barber-James H., Sartori M., Gattolliat J.-L., Webb J. [**FADA Ephemeroptera: World checklist of freshwater Ephemeroptera species (version Feb 2013).**](/data/dataset/1120) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Todaro A., d'Hondt J-L., Hummon W. [**WoRMS Gastrotricha: World Gastrotricha Database (version 2019-03-05).**](/data/dataset/1122) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Schierwater B., Eitel M., DeSalle R. [**WoRMS Placozoa: World Placozoa Database (version 2019-03-05).**](/data/dataset/1123) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Neuhaus B. [**WoRMS Priapulida: World List of Priapulida (version 2019-03-05).**](/data/dataset/1124) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Sterrer W. [**WoRMS Gnathostomulida: World List of Gnathostomulida (version 2019-03-05).**](/data/dataset/1125) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Gibson D., Bray R. [**WoRMS Monogenea: World List of Monogenea (version 2019-03-06).**](/data/dataset/1126) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bray R., Tyler S. [**WoRMS Cestoda: World List of Cestoda (version 2019-03-06).**](/data/dataset/1127) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Cribb T., Gibson D. [**WoRMS Trematoda: World List of Trematoda (version 2019-03-06).**](/data/dataset/1128) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Adlard R., Feist S., Longshaw M. [**WoRMS Myxozoa: World list of Myxozoa (version Feb 2013).**](/data/dataset/1129) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

MolluscaBase. [**WoRMS Mollusca: MolluscaBase (version 2019-03-06).**](/data/dataset/1130) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Cordeiro R., van Ofwegen L., Williams G. [**WoRMS Octocorallia: World List of Octocorallia (version 2019-03-06).**](/data/dataset/1131) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Thuesen E.V., Pierrot-Bults A. [**WoRMS Chaetognatha: World List of Chaetognatha (version 2019-03-05).**](/data/dataset/1132) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Johnson K.P., Smith V.S., Hopkins H., Eades D.C. [**SF Psocodea: Psocodea Species File (version 5.0, Jun 2018).**](/data/dataset/1133) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

CoreoideaSF Team. [**SF Coreoidea: Coreoidea Species File (version 5.0, Jun 2018).**](/data/dataset/1134) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kotov A., Forr&oacute; L., Korovchinsky N.M., Petrusek A. [**FADA Cladocera: World checklist of freshwater Cladocera species (version Jan 2013).**](/data/dataset/1138) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bartsch I. [**FADA Halacaridae: World checklist of freshwater Halacaridae species (version Jan 2013).**](/data/dataset/1139) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hassler M. [**World Ferns: Checklist of Ferns and Lycophytes of the World (version Sep 2020).**](/data/dataset/1140) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hassler M. [**World Plants: Synonymic Checklists of the Vascular Plants of the World (version Sep 2020).**](/data/dataset/1141) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Ouvrard D., Martin J.H. [**The White-Files: Taxonomic checklist of the world's whiteflies (Insecta: Hemiptera: Aleyrodidae) (version Feb 2019).**](/data/dataset/1142) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Magnien P. [**Tessaratomidae Database: Illustrated catalog of Tessaratomidae (version Feb 2019).**](/data/dataset/1143) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Guilbert E. [**Lace Bugs Database: Lace Bugs Database (Hemiptera: Tingidae) (version Feb 2019).**](/data/dataset/1144) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Lorenz W. [**CarabCat: Global database of ground beetles (version Oct 2017).**](/data/dataset/1146) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kirk P.M. [**Microsporidia: Unicellular spore-forming protozoan parasites (version Nov 2015).**](/data/dataset/1148) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Furuya H. [**(ed.). WoRMS Orthonectida: World List of Orthonectida (version 2019-03-05).**](/data/dataset/1149) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Catalano S. (ed.). [**WoRMS Rhombozoa: World List of Rhombozoa (version 2019-03-05).**](/data/dataset/1150) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Boxshall G.A. [**WoRMS Merostomata: World List of Merostomata (version 2019-03-05).**](/data/dataset/1152) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Neuhaus B. [**WoRMS Kinorhyncha: World List of Kinorhyncha (version 2019-03-05).**](/data/dataset/1153) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Nishikawa T. [**WoRMS Cephalochordata: World List of Cephalochordata (version 2019-03-05).**](/data/dataset/1154) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hayward B.W., Le Coze F., Gross O. [**WoRMS Foraminifera: World Foraminifera Database (version 2019-03-05).**](/data/dataset/1157) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hopkins H., Maehr M.D., Haas F., Deem L.S. [**SF Dermaptera: Dermaptera Species File (version 5.0, Jun 2018).**](/data/dataset/1158) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Sforzi A., Bartolozzi L., Cianferoni F., Zinetti F. (eds.). [**Brentids: Brentidae of the World (version Feb 2019).**](/data/dataset/1161) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Maslin B. [**WWW: World Wide Wattle (version 2, Jan 2018).**](/data/dataset/1162) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Calonje M., Stevenson D.W., Osborne R. [**The World List of Cycads: The World List of Cycads, online edition (version Feb 2019).**](/data/dataset/1163) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Rein J.O. [**(ed.). The Scorpion Files: The Scorpion Files (version Aug 2020).**](/data/dataset/1164) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Yunakov N. [**3i Curculio: 3i taxonomic databases, Curculionidae, subfamily Entiminae (version Jan 2019).**](/data/dataset/1166) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Maehr M.D., Hopkins H. [**SF Zoraptera: Zoraptera Species File (version 5.0, Jun 2018).**](/data/dataset/1167) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Maehr M.D., Hopkins H. [**SF Mantophasmatodea: Mantophasmatodea Species File (version 5.0, Jun 2018).**](/data/dataset/1168) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Baker E. [**SF Chrysididae: Chrysididae Species File (version 5.0, Jun 2018).**](/data/dataset/1169) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hopkins H., Maehr M.D. [**SF Grylloblattodea: Grylloblattodea Species File (version 5.0, Jun 2018).**](/data/dataset/1170) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Schuh R.T. [**PBI Plant Bug: On-line Systematic Catalog of Plant Bugs (Insecta: Heteroptera: Miridae) (version Mar 2013).**](/data/dataset/1171) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

van Nieukerken E.J. [**(ed.). Nepticuloidea: Nepticulidae and Opostegidae of the World (version Oct 2016).**](/data/dataset/1172) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Dellap&eacute; P.M., Henry T.J. [**SF Lygaeoidea: Lygaeoidea Species File (version 5.0, Jun 2018).**](/data/dataset/1173) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Paleobiology Database contributors. [**PaleoBioDB: The Paleobiology Database (version Feb 2018).**](/data/dataset/1174) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Brand&atilde;o S.N., Angel M.V., Karanovic I., Perrier V., Meidla T. [**WoRMS Ostracoda: World Ostracoda Database (version 2018-03-05).**](/data/dataset/1175) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Daly M., Fautin D. [**WoRMS Hexacoral: Hexacorallians (Actiniaria) of the World (version 2019-03-05).**](/data/dataset/1176) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Thessen A. [**Gymnodinium: The dinoflagellate genus Gymnodinium checklist (version 0.1).**](/data/dataset/1177) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hopcroft R. [**WoRMS Appendicularia: World List of Appendicularia (version 2019-03-05).**](/data/dataset/1178) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Molodtsova T., Stampar S.N. [**WoRMS Ceriantharia: World list of Ceriantharia (version 2019-03-05).**](/data/dataset/1179) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Mills C.E. [**WoRMS Ctenophora: Phylum Ctenophora, a list of all valid species names harvested from the Internet between 1998 - pres (version 2019-03-05).**](/data/dataset/1180) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Collins A.G., Jarms G. [**WoRMS Cubozoa: World list of Cubozoa (version 2019-03-05).**](/data/dataset/1181) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kristensen R. [**WoRMS Loricifera: World list of Loricifera (version 2019-03-05).**](/data/dataset/1182) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bamber R.N., El Nagar A., Arango C. (eds.). [**WoRMS PycnoBase: World Pycnogonida Database (version 2019-03-25).**](/data/dataset/1183) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Collins A.G., Jarms G. [**WoRMS Staurozoa: World list of Staurozoa (version 2019-03-05).**](/data/dataset/1184) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Madin L. [**WoRMS Thaliacea: World list of Thaliacea (version 2019-03-05).**](/data/dataset/1185) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Shenkar N., Gittenberger A., Lambert G., Rius M., Moreira Da Rocha R., Swalla B.J., Turon X. [**WoRMS Ascidiacea: Ascidiacea World Database (version 2019-03-05).**](/data/dataset/1186) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Jarms G., Morandini A.C. [**WoRMS Scyphozoa: World list of Scyphozoa (version 2019-03-05).**](/data/dataset/1188) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Dmitriev D., Sanborn A., Takiya D. [**3i Auchenorrhyncha: World Auchenorrhyncha Database (version Nov 2017).**](/data/dataset/1189) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bellamy C.L. [**Jewel Beetles: The World of Jewel Beetles (version Aug 2014).**](/data/dataset/1190) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Walter T.C., Boxshall G.A. [**WoRMS Copepoda: World of Copepods database (version 2019-03-05).**](/data/dataset/1191) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Heads S.W., Maehr M.D. [**SF Coleorrhyncha: Coleorrhyncha Species File (version 5.0, Jun 2018).**](/data/dataset/1192) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Tyler S., Artois T., Schilling S., Hooge M., Bush L.F. (eds.). [**WoRMS Turbellarians: World List of turbellarian worms (Acoelomorpha, Catenulida, Rhabditophora) (version 2019-03-05).**](/data/dataset/1193) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Molodtsova T., Opresko D. [**WoRMS Antipatharia: World List of Antipatharia (version 2019-03-05).**](/data/dataset/1194) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Fautin D.G. [**WoRMS Corallimorpharia: World List of Corallimorpharia (version 2019-03-05).**](/data/dataset/1195) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hoeksema B.W., Cairns S. [**WoRMS Scleractinia: World List of Scleractinia (version 2019-03-05).**](/data/dataset/1196) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Reimer J., Sinniger F. [**WoRMS Zoantharia: World List of Zoantharia (version 2019-03-05).**](/data/dataset/1197) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

South E.J. [**after Krishna K., Grimaldi D.A., Krishna V., Engel M.S. SF Isoptera: Isoptera Species File (version Jan 2018).**](/data/dataset/1198) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Gielis C., Hobern D. [**Pterophoroidea: Catalogue of the Pterophoroidea of the World (version ver. 1.1 (09/2020)).**](/data/dataset/1199) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Sierwald P., Spelda J. [**WoRMS MilliBase: MilliBase (version 2019-03-05).**](/data/dataset/1200) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kva&ccaron;ek J. [**Fossil Ginkgoales: Fossil Ginkgoales (version Dec 2018).**](/data/dataset/1201) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Horton T., Lowry J., De Broyer C., Bellan-Santini D., Coleman C.O., Corbari L., Costello M.J., Daneliya M., Dauvin J-C., Fi&scaron;er C., Gasca R., Grabowski M., Guerra-Garc&iacute;a J.M., Hendrycks E., Hughes L., Jaume D., Jazdzewski K., Kim Y.-H., King R., Krapp-Schickel T., LeCroy S., L&ouml;rz A.-N., Mamos T., Senna A.R., Serejo C., Sket B., Souza-Filho J.F., Tandberg A.H., Thomas J., Thurston M., Vader W., V&auml;in&ouml;l&auml; R., Vonk R., White K., Zeidler W. [**WoRMS Amphipoda: World Amphipoda Database (version 2019-02-05).**](/data/dataset/1202) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

ThripsWiki. [**ThripsWiki: Providing information on the World's thrips (version Sep 2020).**](/data/dataset/1203) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Newton A.F. [**StaphBase: Staphyliniformia world catalog database (version Nov 2018).**](/data/dataset/1204) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kami&nacute;ski M.J., Kanda K., Lumen R., Ulmer J.M., Wirth C.C., Bouchard P., Aalbu R., Mal N., Smith A. [**Sepidiini tribe: World catalogue of the tribe Sepidiini (Tenebrionidae, Coleoptera) (version 22, 2019-04).**](/data/dataset/1206) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Zhang Z.Q. [**(ed.). Animal Biodiversity: An Outline of Higher-level Classification and Survey of Taxonomic Richness (Addenda 2013) (version 2013).**](/data/dataset/1502) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Rees T. [**IRMNG: The Interim Register of Marine and Nonmarine Genera (version 2019-03).**](/data/dataset/2007) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kirk P.M. [**(ed.). Species Fungorum Plus: Species Fungorum for CoL+ (version Feb 2020).**](/data/dataset/2073) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Bellinger P.F., Christiansen K.A., Janssens F. [**Collembola.org: Checklist of the Collembola of the World (version Apr 2020).**](/data/dataset/2130) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Kroupa A.S., Schmid-Egger C. [**HymIS Pompilidae: Hymenoptera Information System, Pompilidae of the World (version 2019-09).**](/data/dataset/2141) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

ITIS. [**ITIS: The Integrated Taxonomic Information System (version 2020-09-26).**](/data/dataset/2144) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.

Hobern D., Gielis C. [**Alucitoidea: Catalogue of the Alucitoidea of the World (version ver. 1.0 (09/2020)).**](/data/dataset/2207) In: Roskov Y., Ower G., Orrell T., Nicolson D., Bailly N., Kirk P. M., Bourgoin T., DeWalt R. E., Decock W., van Nieukerken E. J., Penev L. (eds.). Species 2000 & ITIS Catalogue of Life, 3rd November 2020. Digital resource at www.catalogueoflife.org. Species 2000: Naturalis, Leiden, the Netherlands. ISSN 2405-8858.
