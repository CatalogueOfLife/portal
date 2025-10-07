---
layout: content
title: Stable Identifiers
tagline: Helping you find the names you need, whenever you need them
section_id: building
toc: false
imageUrl: /images/species/Agalychnis_callidryas.jpg
imageCaption: _Agalychnis callidryas_ (Cope, 1862) - [Photo CC By Charlie Nadeau](https://www.inaturalist.org/observations/277180479)
permalink: /building/identifier
---

Identifiers are crucial for using and linking to the Catalogue of Life. 
We aim to use the same identifier for the same name across all versions of COL, regardless of monthly, annual or extended releases. 

So what is the same name? Is `Oenanthe` the same as `Oenathe L.` or `Oenathe Linnaeus`? Does it matter if the classification changes or a formerly accepted names is turned into a synonym?

In COL only changes to the name itself trigger a new name usage identifier. The taxonomic aspect (status & classification) does not matter.
We also allow for small changes in the name spelling and particulary in the authorship while still recognising it as the same name, thus applying the same identifier.

Currently this does mean that adding or entirely removing an authorship from a name does trigger an identifier change. 
We cannot tell from the name alone if `Oenanthe` is meant to be `Oenanthe L.` or `Oenanthe Vieillot`.
Hence we apply separate identifiers to "canonical" names without authorship. 

The Identifier format for names usages and logic are designed to be:

- Short with a maximum length of 5 characters.
- Human-readable, using a [LATIN29](https://github.com/CatalogueOfLife/backend/issues/491) alphanumeric encoding
- Non-ambiguous, avoiding similar-looking characters and vowels to prevent offensive or real words.
- Hierarchically meaningful, with special one-character IDs reserved for kingdoms

An example of identifiers are P for [Plantae](/data/taxon/P) and 4QHKG for [Puma concolor](/data/taxon/4QHKG)

When identifiers are removed, we still keep an archive that tells us which releases have been using that name.
This allows us to provide tombstone pages, 
listing the first and last use of the name in our release history and also presents similar names in the current release that you might be interested in instead.

Every COL version has a small report of changes in identifiers to help users monitor updates. 
[These reports](https://download.checklistbank.org/releases/3/) are useful to to assess the stability of identifiers and adjust accordingly:

 - created.tsv: newly issued identifiers
 - deleted.tsv: identifiers removed from the latest release
 - resurrected.tsv: previously used identifiers that reappear in the latest release
 - unstable.txt: potentially unstable identifiers (e.g., name changes without author changes)

Additionally, a [mapping file](https://download.checklistbank.org/col/legacy_id_map.zip) is available for users transitioning from the legacy identifiers in use by 2019.
 
If you encounter issues with COL identifiers, please [contact us](/howto/contact).


