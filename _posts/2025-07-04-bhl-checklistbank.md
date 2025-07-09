---
layout: post
title:  Biodiversity Heritage Library's Call for Support & integration with COL
author: "Geoff Ower & Dmitry Mozzherin"
excerpt: BHL is seeking new hosting partners
categories: Partnerships Infrastructure Literature Identifier
---

## Call for Support

The [Biodiversity Heritage Library (BHL)](https://www.biodiversitylibrary.org) is the world’s largest open-access digital library of biodiversity literature and archives. BHL plays a vital role in the development of Catalogue of Life (COL) because COL data contributors heavily rely on BHL to conduct the scientific research needed to build taxonomic and nomenclatural databases. [BHL is currently seeking new partners](https://blog.biodiversitylibrary.org/2025/06/transition-update-2-call-for-support-now-open.html) to support and sustain this essential infrastructure following the [Smithsonian Institution’s decision](https://blog.biodiversitylibrary.org/2025/04/new-future-for-bhl.html) to conclude its 20 year role as BHL’s host on January 1, 2026\. Finding new partners to sustain BHL’s future is extremely important. Please help share BHL’s [Call for Support](https://about.biodiversitylibrary.org/call-for-support/) widely.

## Integrating BHL with COL

It is important for taxonomists, policy makers and the general public to be able to quickly access nomenclatural acts and original descriptions for taxa for purposes of identification of organisms, to assess taxonomic validity, understand the historical context of taxonomic concepts, to resolve ambiguities, and to cite the original literature (among many other use cases). The [BHLnames project](https://github.com/gnames/bhlnames) was established to help directly link scientific names to their original description page in BHL (Mozzherin & Ower, 2020; Ower & Mozzherin, 2021). Several algorithms were developed to automatically score scientific name occurrences in BHL on the likelihood that they are the original description of a taxon. Matches are assessed using normalized scientific name annotations (e.g., sp. nov., comb. nov., subsp. nov.), journal title abbreviations, years, volumes, and page numbers. 3000 matches were manually scored as correct or incorrect links, which was used as a training dataset for Bayesian scoring.

<div class="right"><a href="https://about.biodiversitylibrary.org/call-for-support/" target="_new"><img src="https://github.com/user-attachments/assets/99fce041-ff97-46ff-829d-57ab08dbb3d9" width="250"/></a></div>A new [BHL dataset](https://www.checklistbank.org/dataset/310770) (BHL Staff and Community, 2025\) was recently published in Catalogue of Life's data infrastructure [ChecklistBank](https://www.checklistbank.org) with the aim of supplementing [COL eXtended Releases](https://www.checklistbank.org/dataset/3LXR/about) with direct links and references to taxon original descriptions in BHL. The dataset contains scientific names with at least an 80% probability of being the original description and presently includes 538,288 names with BHL links (\~10% of scientific names in COL). These scientific names are included in the dataset with the COL nameUsageID as the name ID, a direct link to the BHL page, the BHL page as an alternative identifier (e.g., [bhl:page:39205667](https://www.checklistbank.org/dataset/310770/verbatim?q=bhl%3Apage%3A39205667&type=col%3AName)), and a reference record. The reference records were created using BHL metadata from either “items” (bound works such as books or journals) or preferably “parts” (journal articles or chapters within a bound work). Part metadata (Table 1\) has been contributed by a wide range of BHL institutional partners, and the [BioStor](https://biostor.org/) project which helps extract scientific articles within BHL items (Page, 2011). In coming weeks, COL aims to merge these BHL direct links and references into the COL eXtended Releases.

To make the BHL dataset itself more browseable, we included the COL classification for taxa with BHL original description matches. The COL classification will likely conflict with the taxonomic classification in the original literature because taxonomy changes over time with increased knowledge.

Somewhat frequently, the BHL links may be to the table of contents or index of the book or journal in which a species was described. This happens because it might be the first name occurrence within the item that had the full scientific name with sp. nov. (e.g., it appeared in the table of contents first), the image of text on the page could have been distorted leading to bad OCR transcription of the actual description, or sometimes the scientific names are abbreviated which makes them significantly harder to detect with [GNfinder](https://finder.globalnames.org)/[GNverifier](https://verifier.globalnames.org) (Mozzherin, 2024). We will soon add a feedback system that will allow users to help correct these problems and also contribute new direct links to pages that the BHLnames tool missed. For now you may [open an issue in the BHLnames GitHub repository](https://github.com/gnames/bhlnames/issues) if you find a link that needs to be corrected. BHL is also continuously adding new digitized materials, part and item metadata which over time will increase the number of original description matches.

## References

BHL Staff and Community. 2025\. *Biodiversity Heritage Library* (0.0.1). [https://www.checklistbank.org/dataset/310770](https://www.checklistbank.org/dataset/310770) 

Mozzherin, D. 2024\. GNfinder \-- a finder of scientific names in a variety of media. (Version v1.1.5) \[Computer software\]. [https://doi.org/10.5281/zenodo.10070488](https://doi.org/10.5281/zenodo.10070488) 

Mozzherin, D.; Ower, G. 2020\. Adding Taxonomic Dimensions to the Scientific Names Index in the Biodiversity Heritage Library via Integration with the Catalogue of Life. Biodiversity Information Science and Standards 4: e59130. [https://doi.org/10.3897/biss.4.59130](https://doi.org/10.3897/biss.4.59130)

Mozzherin, D.; Ower, G. 2024\. SQLite: A “Frictionless” Solution for Exchange of Biodiversity Data? Biodiversity Information Science and Standards 8: e138931. [https://doi.org/10.3897/biss.8.138931](https://doi.org/10.3897/biss.8.138931) 

Ower, G.; Mozzherin, D. 2021\. Algorithms for connecting scientific names with literature in the Biodiversity Heritage Library via the Global Names Project and Catalogue of Life.  Biodiversity Information Science and Standards 5: e74114. [https://doi.org/10.3897/biss.5.74114](https://doi.org/10.3897/biss.5.74114) 

Page, R.D. 2011\. Extracting scientific articles from a large digital archive: BioStor and the Biodiversity Heritage Library.     BMC Bioinformatics 12: 187\. [https://doi.org/10.1186/1471-2105-12-187](https://doi.org/10.1186/1471-2105-12-187)

