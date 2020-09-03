---
layout: content
title: The COL data pipeline
tagline: "Catalogue of Life: processing and accessing checklist data"
section_id: about
toc: true
imageUrl: /images/Ocypode_ceratophthalma.jpg    
imageCaption: _Ocypode ceratophthalma_ (Pallas, 1872) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/6553381001)
permalink: /content/colpipeline
---
# The COL data pipeline

![COL data pipeline](/images/col_pipeline.png "COL data pipeline")

The illustration shows the key stages in the construction of the COL Checklist:

## 1: Preparing and curating checklists
[Taxonomic communities](roles#roles-and-responsibilities) (and individual taxonomists) prepare and develop checklists for a variety of purposes using a wide selection of software and tools. Some of these checklists aim to provide a clear and consistent view of all the species known from a given taxonomic group. In other cases, the checklist may be geographically scoped (a national species list, a checklist for a protected area, etc.) or may be thematically structured (invasive or threatened species, known consumers of a particular plant, etc.). Checklists may only contain the names of the included species or may contain rich detail on the naming and classification for each species or even include other information on the species in question (descriptions, distribution, links to multimedia, etc.). As a result, the source datasets may be as simple as a spreadsheet or text file or they may be maintained as complex databases. Before checklists can be shared with COL, they need to be organised in one of the formats that COL recognises and can interpret.

## 2: Publishing to ChecklistBank
The taxonomic community can publish a checklist to the web either (2a) by directly uploading it to [ChecklistBank](checklistbank) along with metadata describing its content or (2b) by publishing elsewhere on the Internet (for example through the [World Register of Marine Species](http://www.marinespecies.org/), WoRMS) in a form that COL can consume and then registering the dataset in ChecklistBank. In the latter case, ChecklistBank will maintain a local copy to ensure that users can always review how COL has interpreted the original data.

## 3: Standard processing
Regardless of the original data format, ChecklistBank generates a standardised interpretation in the COL Data Package (COLDP) format. Both the original and the interpreted versions are exposed to users, in close coordination with the data publishers. The COLDP format supports the generation of standardised views and access via the COL API. Every dataset in ChecklistBank is assigned a unique Digital Object Identifier (DOI) to support easy standardised citation. 

## 4: Building the COL Checklist
The COL Workbench is a web-based processing tool that allows the COL editorial team to standardise and automate construction of the COL Checklist from checklists published to ChecklistBank. The COL Checklist is constructed following defined rules that identify which checklists have been selected as the best available sectors for different groups and that address issues resulting from processing these checklists. Once the sector checklists have been composed to form the reviewed sections of the COL Checklist, the COL Workbench uses automated processes to insert missing taxa and names found in secondary sources. All content added in this way is marked as unreviewed and can be excluded from online views and through the API. It is clearly indicated that it has not been endorsed by the taxonomic community responsible for the sector. Names added in this way are shared with the relevant taxonomic community so that they can be formally evaluated and either accepted, rejected or processed correctly. 

## 5: Accessing and using the data
[Users](roles#the-role-of-users) are able to use standard tools and interfaces to access, browse, download and cite (5a) the COL Checklist and (5b) any other checklists in ChecklistBank. For the COL Checklist, users can access either the comprehensive view (including unreviewed automated additions) or just the content that has been formally reviewed by a sector community. Historical versions of the COL Checklist, including Annual Checklist versions, can also be accessed from ChecklistBank. Records in the COL Checklist link back to the source checklists inside ChecklistBank. Whether using the web interface, downloaded copies or the API, users are guided to cite all content using standard DOIs. COL monitors use of these DOIs to facilitate reporting to the contributing communities and other data sources on the use of the content.