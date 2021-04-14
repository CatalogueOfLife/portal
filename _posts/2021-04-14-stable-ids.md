---
layout: post
title:  COL stable identifiers
author: "Markus D&ouml;ring &amp; Geoff Ower"
date:   2021-04-14 8:48:38
excerpt: Stable identifiers for the Catalogue of Life
categories: API identifier
---

With the migration to the new infrastructure in December 2020, Catalogue of Life has also switched to a new algorithm to generate stable identifiers for name usages. 
Up until the 2019 annual edition a simple hashing of names has been applied to make sure the IDs between editions do not change. 
This resulted in name based identifiers that did change whenever a single character of the name or its authorship was altered. 
The new implementation is mostly also a name based system, but tries to keep the identifiers stable if the authorship of a name has only been slightly modified. 
It also forces a change in identifiers when

 - an authorship was added
 - a major status change occurs from accepted <-> synonym
 - if the accepted name of a synonym changes
 
In case there have been multiple previous IDs for the same name we prefer the ID from the oldest release to keep stability. 
This can for example happen when we later realize a genus was included twice in COL 
because it came in from different sources in different positions in the hierarchy - something we internally refer to as a _split genus_.

The new identifiers try to be short and readable, avoiding characters that can easily be confused. 
Because they are based on a set of 29 alphanumeric characters we call the encoding [LATIN29](https://github.com/CatalogueOfLife/backend/issues/491).
By preventing the use of vowels we also avoid most real words and potentially offensive meanings in various languages.
For the COL with currently ~4.2 million name usages we have a maximum length of 5 characters.
An example of identifers are `P` for [Plantae](https://www.catalogueoflife.org/data/taxon/P) 
or `4QHKG` for [Puma concolor](https://www.catalogueoflife.org/data/taxon/4QHKG). 
We have reserved single character identifiers for [kingdoms](https://www.catalogueoflife.org/data/search?rank=kingdom) and manually assigned these.

With every release we generate a small report of changes in identifiers. 
These reports consist of the following files as you can see in the current [April 2021 edition](https://download.catalogueoflife.org/releases/3/38/):

 - [created.tsv](https://download.catalogueoflife.org/releases/3/38/created.tsv) a list of identifiers with names that have been newly minted in this release and did not exist before
 - [deleted.tsv](https://download.catalogueoflife.org/releases/3/38/deleted.tsv) a list of identifiers with names that have been removed in this release but did exist in the previous release
 - [resurrected.tsv](https://download.catalogueoflife.org/releases/3/38/resurrected.tsv) a list of identifiers with names that have been added in this release and did not exist in the previous release, but which had been used in some older, previous release already
 - [unstable.txt](https://download.catalogueoflife.org/releases/3/38/unstable.txt) a short report of potentially unstable identifiers

The short report on potentially unstable identifiers intersects the created and deleted lists by grouping them on the canonical name without authorship.
This allows us to review changes and spot potential problems with the algorithm. 
The names listed in report of the April 2021 edition look correct as they usually have an addition in authorship, a status change or a synonyms parent change.
We hope that these reports help users in tracking changes in COL.

For users that want to migrate from the discontinued 2019 identifiers to the new system we provide an [ID mapping file](https://download.catalogueoflife.org/col/legacy_id_map.zip).
Since this April release the mapping also includes uninomials in which both the parent and child names are matched to avoid issues with homonyms. 
Prior to issuing the 2021 annual edition, we plan on issuing another update to the ID mapping that will include a more complete mapping of old uninomial identifiers to new uninomial identifiers.


If you find any issues with the new identifiers, please open a [bug ticket](https://github.com/CatalogueOfLife/backend/issues/new) or [email support](mailto:support@catalogueoflife.org).
To stay up to date on the latest news, please sign up for the [COL user mailing list](https://lists.gbif.org/mailman/listinfo/col-users).
