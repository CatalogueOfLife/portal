---
layout: content
title: Stable Identifiers
tagline: Helping you find the names you need, whenever you need them
section_id: building
toc: false
imageUrl: /images/species/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /building/identifier
---

Identifiers are crucial for ensuring consistency and traceability across the different versions of Catalogue of Life. We have a conservative approach to keep them stable. Only changes to the name itself trigger a new name usage identifier. Status or parent/classification changes do not result in any ID changes. This helps reduce unnecessary ID churn and supports users in maintaining consistent mappings over time.
The Identifier format for names usages and logic are designed to be:

- Short with a maximum length of 5 characters.
- Human-readable, using a [LATIN29](https://github.com/CatalogueOfLife/backend/issues/491) alphanumeric encoding
- Non-ambiguous, avoiding similar-looking characters and vowels to prevent offensive or real words.
- Hierarchically meaningful, with special one-character IDs reserved for kingdoms

An example of identifiers are P for Plantae and 4QHKG for Puma concolor


Every COL version has a small report of changes in identifiers to help users monitor updates. These reports are useful to to assess the stability of identifiers and adjust accordingly:
    - created.tsv: newly issued identifiers
    - deleted.tsv: identifiers removed from the latest release
    - resurrected.tsv: previously used identifiers that reappear
    - unstable.txt: potentially unstable identifiers (e.g., name changes without author changes)

Additionally, a mapping file is available for users transitioning from the [pre-2020 system](https://www.catalogueoflife.org/2021/04/14/stable-ids), including improved handling of uninomial names and homonyms.
 
If you encounter issues with COL identifiers, please [contact us](/howto/contact).


{% comment %} 
 - https://www.catalogueoflife.org/2022/03/23/name-ids
 - https://www.catalogueoflife.org/2021/04/14/stable-ids

## TODO Markus:
 - how we coin stable ids
 - link to blog posts
 - name vs taxon identifiers
 - tombstone pages, what happens when we delete
 - resurrection 
 - stable across releases
 - identifiers can change in XR vs base release. new id from XR will also be used in based release once the names is added there
 - id reports
 - other items
{% endcomment %}
