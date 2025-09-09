---
layout: content
title: CONTRIBUTE DATA
tagline: Help us improve the Catalogue of Life 
section_id: howto
toc: true
imageUrl: https://inaturalist-open-data.s3.amazonaws.com/photos/453596254/large.jpeg
imageCaption: _Sphyraena viridensis_ Cuvier, 1829 - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/87857259)
permalink: /howto/contribute
---

You can contribute to the Catalogue of Life as a data provider, helping us to improve data management, or by providing feedback.

## Become a Data Provider

If you manage a global, regional, or national resource that could enrich the Catalogue of Life, we invite you to contribute your data through ChecklistBank – the Catalogue of Life’s infrastructure. Contributions may include taxonomic data, higher classifications, vernacular names, references, synonyms, and more.

Already familiar with the Global Biodiversity Information Facility (GBIF) publishing model? Mobilize your data via the Integrated Publishing Toolkit (IPT). Checklists published through GBIF are automatically harvested into ChecklistBank.

Alternatively, you can publish or create a dataset directly in ChecklistBank. For more data-savvy users, it’s also possible to host your own archive on GitHub and connect it to ChecklistBank, using one of our templates. We are currently developing a detailed tutorial to guide you through the publishing process. In the meantime, our support desk is available to assist you every step of the way.
Once your data is available on ChecklistBank, please [let us know](/howto/contact) so we can evaluate it for integration into the Catalogue of Life.

## Support COL’s Data Management

The advisory bodies of the Catalogue of Life, together with our secretariat, play complementary roles in guiding decisions around data management. But for these decisions to truly reflect global biodiversity across all regions, organisms, and taxonomic backgrounds, we are constantly looking to expand the expertise and diversity within our community.

If you’re interested in contributing to the Catalogue of Life’s development, there are many ways to get involved:

- Collaborate with COL editors to assess and improve coverage for specific taxonomic groups.
- Help create or maintain temporary data sources to address gaps or replace outdated checklists.
- Support the development of new databases for underrepresented groups.
- Join the Taxonomy Group to help oversee the management classification and data sources.
- Contribute occasionally to the Taxonomy Group by offering expert advice on specific taxonomic challenges.
- Work with our IT team to develop new tools or enhance existing ones tailored to your needs.

We welcome all contributions, whether regional, thematic, or technical, to help build a Catalogue that truly represents the diversity of life and the global community working to document it. [Please contact us.](/howto/contact)


## Recurrent or One Time Reviewer

Several levels of quality checks are in place. Both at the data source level by our data providers and at the aggregation level within the Catalogue of Life. Building a Catalogue of all known species names is a daunting task. We strive for accuracy, but errors can occur. That’s why we highly value external reviewers. Whether you are a regular user of the Catalogue of Life or visiting for the first time. If you spot an error, gap, name misuse, want to suggest a new source dataset, or any other issue. Please report your feedback via our [GitHub repository](https://github.com/CatalogueOfLife/data/issues), by email or directly via the [feedback button on each taxon page](/howto/contact#feedback-on-a-name-or-taxon).

https://github.com/CatalogueOfLife/data/issues

{% comment %}

## TODO:
 - Basic overview of options and procedures (should probalby live in CLB mostly)
    - publish on checkistbank
    - host your own archive, push it to CLB or use IPT or github templates
    - first tests using dev
    - start simple, iteratively improve dataset by using issues and mapping more fields
    - metadata is important
 - link to checklistbank for formats and technical guides
 - social component, how to interact with COL editors & taxonomy group
 - decision making between competing, overlapping datasets
 

## Contribute to Catalogue of Life


## Publish data on ChecklistBank

### Catalogue of Life Data Package (ColDP)
For Catalogue of Life, the recommended exchange format for submitting data to ChecklistBank 
is the [Catalogue of Life Data Package](https://catalogueoflife.github.io/coldp/) (ColDP), 
a tabular text format with a standard set of files and columns. 
The format is a single ZIP archive that bundles data in various delimited text files together with 
a [metadata.yaml](https://catalogueoflife.github.io/coldp/metadata.yaml) file to provide basic metadata about the entire dataset.

![ColDP Schema](https://catalogueoflife.github.io/coldp/docs/schema.png)
{% endcomment %}
