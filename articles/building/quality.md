---
layout: content
title: DATA QUALITY
tagline: A workflow to achieving quality 
section_id: building
toc: true
imageUrl: https://inaturalist-open-data.s3.amazonaws.com/photos/473223516/large.jpeg
imageCaption: _Sepioteuthis australis_ Quoy & Gaimard, 1832 - [Photo CC By Luca Davenport-Thomas](https://www.inaturalist.org/observations/263421246)
permalink: /building/quality
---

The Catalogue of Life places a strong emphasis on ensuring the integrity, accuracy, and consistency of its taxonomic data by applying a multi-step quality assurance workflow. This quality process addresses challenges inherent to working with raw data from diverse sources often provided in non-standardized formats, and ensures that data is thoroughly validated before inclusion, though some issues may still remain or be improved over time. Here we highlight some of the key moments of the  process where quality assurance is applied.

## Quality Assurance at the Origin 

Data is submitted in a variety of raw formats and processed through custom pipelines that convert it into the standardized [ColDP format](https://catalogueoflife.github.io/coldp/). During this stage, common issues such as non-standard data structures, Excel-induced autocorrect errors, and ambiguous internal codes are identified and addressed. Detected issues are communicated back to data providers for correction, while the pipelines are updated to prevent the recurrence of errors and improve data quality over time.

## Quality Assurance During the Assembly Process

During the [assembly process](/building/assembly) of the Catalogue of Life in ChecklistBank, data quality is maintained through a series of structured checks. Issues are reviewed and categorized based on who should address them: IT developers, data providers, or COL editors. Common problems like invalid identifiers, formatting errors, and outdated decisions are systematically resolved. Each dataset also undergoes a  review of its metadata (such as version, source, and authorship) and taxonomic classification, with checks for completeness, empty taxa, misclassifications, and duplicates. Quality control continues after assembly through regular updates, including monthly comparisons between dataset versions. ChecklistBank tools and metrics help detect new or lingering issues, allowing for timely corrections and ongoing improvements.

## Quality Assurance COL eXtended Release

Additional sources included in the Catalogue of Life eXtended Release also go through an initial quality check before being added. However, due to the nature of these sources, ongoing quality improvement with data custodians may not always be possible. When feasible, issues are reported back and corrected at the source. If not, editors may block parts of a data source, or the entire data source to prevent errors from reaching the final release. Special care is taken to avoid name duplications caused by differences across sources. Community taxonomic experts also contribute by occasionally reviewing the release, which allows us to refine the data sources selection.

Due to the more dynamic nature of this release, quality is less stringent than in the COL Base Release but completeness is higher. On the other hand, issues can be addressed faster, thus with the editorial and community input quality tends to improve over time.

You can also be part of our quality assurance workflow, [learn here how to submit your input](/howto/contribute).

