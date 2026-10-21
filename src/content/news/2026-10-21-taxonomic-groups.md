---
title: "Taxonomic groups and their new icons"
author: "Markus Döring"
excerpt: "ChecklistBank sorts every name into one of 37 broad taxonomic groups, which lets you filter tens of thousands of datasets by the organisms they cover. The groups now have new public domain icons from PhyloPic, served directly by the API."
categories: ["ChecklistBank", "API"]
---

Every name in ChecklistBank, and so every name in the Catalogue of Life (COL), is assigned to one of 37 broad **taxonomic groups**: Plants, Fungi, Insects, Beetles, Molluscs and so on. The groups started as an internal helper for name matching. They now also let you find datasets and names by the kind of organism they are about, across all of ChecklistBank. This week the groups got a new set of icons, made from public domain silhouettes from [PhyloPic](https://www.phylopic.org). The full set is shown in the [appendix](#appendix-all-37-groups) at the end of this post.

## Why we created the groups

Names alone are often not enough to tell taxa apart. *Oenanthe* is both a genus of birds (the wheatears) and a genus of plants (the water dropworts), and there are thousands of such homonyms across the nomenclatural codes. When ChecklistBank matches a name, it compares the classification of the candidates to tell them apart. But classifications differ a lot between datasets, and are often patchy: one source gives a family, another only a kingdom.

The taxonomic groups give us a common denominator. Instead of comparing whole classifications, we reduce each one to a single group, which most classifications can provide. A bird and a plant end up in different groups, so the match is rejected, however different the two classifications look. The same check keeps names apart when the [Extended Release](/2025/10/07/colxr-live) merges names from additional sources into COL.

The groups are chosen for this job, not to be a classification:

- They are **informal and often not monophyletic**. Algae, Protists or Pteridophytes are not clades, but they are well understood, and they line up with how the nomenclatural codes are applied. Algae, Fungi and Plants, for example, all follow the botanical code.
- They are **few and big**. A group usually has more than 50,000 species, and the list stays short on purpose. Large groups such as Insects are split into their big orders, plus an `OtherInsects` group that pools the rest. Every major group has such an "other" bucket.
- A group can sit under **more than one parent** where the science is unsettled. Algae belong to both Plants and Protists, and Pseudofungi to both Fungi and Algae.

A name's group is worked out from its classification, using hand-curated lists of more than 45,000 higher taxon names, down to families, that point to a single group. `Asteraceae`, for example, points to Angiosperms. Each entry records the dataset that places it there. Names used in several groups, such as *Tachinidae* for both a fly and a beetle family, are listed only in their lowest common group. The lists are open on [GitHub](https://github.com/CatalogueOfLife/backend/tree/master/parser/src/main/resources/parser/dicts/taxgroup), and so is the [explanation of how they are maintained](https://github.com/CatalogueOfLife/backend/blob/master/parser/src/main/resources/parser/dicts/taxgroup/README.md).

You can try the group parser yourself with the [Taxon Group Parser tool](https://www.checklistbank.org/tools/taxgroup-parser) in ChecklistBank, or with the API: [`/parser/taxgroup?q=Asteraceae`](https://api.checklistbank.org/parser/taxgroup?q=Asteraceae). There is also an OpenRefine reconciliation service at `/parser/taxgroup/reconcile`.

## Filtering across datasets in ChecklistBank

ChecklistBank holds tens of thousands of datasets, from global catalogues to small regional checklists. Their names and taxonomic scopes are written in many different ways, and that is where the groups help most. Whenever a dataset is indexed, ChecklistBank records every group its names fall into, together with their parent groups. This **taxonomic group scope** is shown as a row of icons on each dataset's metadata page. It also makes datasets searchable by the organisms they cover:

- **Find datasets about a group.** In the [dataset list](https://www.checklistbank.org/dataset), turn on the *Group Coverage* column and filter it, or link directly, e.g. to [all datasets with beetles](https://www.checklistbank.org/dataset?group=coleoptera). The API does the same with [`/dataset?group=coleoptera`](https://api.checklistbank.org/dataset?group=coleoptera).
- **Search names across all datasets by group.** The [cross-dataset name search](https://www.checklistbank.org/nameusage/search) has a *Taxonomic group* filter under *Advanced*. Use it to restrict a name to, say, Angiosperms, and leave out a bird or an insect with the same name. The filter becomes available once you enter a search term. In the API it is the `group` parameter of `/nameusage/search`.
- **Within a dataset**, the name search has the same filter, with counts per group. Clicking a segment in a dataset's taxonomic breakdown chart opens the names of that group.
- Taxon pages and name search results show a small group icon, and every classification download includes a `clb:taxGroup` column.

## In the COL portal

On catalogueoflife.org you will find the groups in the [COL search](/data/search): under the advanced filters, *Taxonomic group* narrows results to one or more groups and shows how many names each one holds. The [COL iPhone app](/2026/05/18/ios-app) offers the same filter. Behind the scenes, the groups help keep names from different kingdoms apart when COL is assembled, as described above.

## The new icons

All icons now come from [PhyloPic](https://www.phylopic.org) silhouettes that are in the public domain (CC0 or the Public Domain Mark). Anyone can reuse them, without attribution. Several groups have new icons:

- **Composite icons** for the big groups, so that no single organism has to stand in for a whole kingdom or phylum: Eukaryotes (birch, cep and red deer), Animals (beetle, trout and snail) and Chordates (trout, blackbird and frog).
- **New silhouettes** for Prokaryotes, Algae, Angiosperms, Diptera and Gastropods.

The icons used to be linked from PhyloPic. The ChecklistBank API now serves them itself, as SVG and as PNG in 64, 128 and 192 pixels:

```
https://api.checklistbank.org/vocab/taxgroup/Coleoptera/icon.svg
https://api.checklistbank.org/vocab/taxgroup/Coleoptera/icon/128.png
```

The [taxgroup vocabulary](https://api.checklistbank.org/vocab/taxgroup) lists every group with its description, parents, nomenclatural codes, icon URLs and the scientific names of the depicted organisms (`iconTaxa`). In ChecklistBank, the vocabulary page shows the groups [as a tree](https://www.checklistbank.org/vocabulary/taxgroup) and [as cards](https://www.checklistbank.org/vocabulary/taxgroup?view=cards), each card with a large icon, the group's place in the hierarchy, the depicted organisms and a description.

## Thank you, PhyloPic

A big thank you to [PhyloPic](https://www.phylopic.org) and to the many people who draw silhouettes and dedicate them to the public domain. Free, well-drawn and taxonomically identified images like these are rare, and they make biodiversity tools a lot easier to read. The appendix below links each icon to the PhyloPic image it is based on.

## Appendix: all 37 groups

Indented groups are subgroups of the one above. Each depicted organism links to its page in COL, and the PhyloPic column to the image the silhouette is drawn from.

#### Viruses and prokaryotes

| Icon | Group | Covers | Silhouette | PhyloPic |
|---|---|---|---|---|
| <img src="https://api.checklistbank.org/vocab/taxgroup/Viruses/icon.svg" alt="Viruses icon" style="width:48px;height:48px"> | Viruses | All viruses | [*Orthoflavivirus flavi*](/data/taxon/BXGNY) | [image](https://www.phylopic.org/images/6dba8988-8a64-4c10-8934-77d5880dc21c) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Prokaryotes/icon.svg" alt="Prokaryotes icon" style="width:48px;height:48px"> | Prokaryotes | Bacteria and archaea | [*Salmonella enterica*](/data/taxon/6XF3V) | [image](https://www.phylopic.org/images/0698c39f-9ab0-44e0-ba70-2faefaf22216) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Bacteria/icon.svg" alt="Bacteria icon" style="width:48px;height:48px"> | › Bacteria | Including cyanobacteria | [Saprospiria](/data/taxon/CT2ZQ) | [image](https://www.phylopic.org/images/7bd82403-a662-41bd-9710-cf095bea5809) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Archaea/icon.svg" alt="Archaea icon" style="width:48px;height:48px"> | › Archaea | Archaea | [*Thermococcus chitonophagus*](/data/taxon/7BX74) | [image](https://www.phylopic.org/images/d979c5bd-f760-427d-bd23-7b8779bd1c8f) |

#### Eukaryotes, protists and plants

| Icon | Group | Covers | Silhouette | PhyloPic |
|---|---|---|---|---|
| <img src="https://api.checklistbank.org/vocab/taxgroup/Eukaryotes/icon.svg" alt="Eukaryotes icon" style="width:48px;height:48px"> | Eukaryotes | Split into four groups, similar to Haeckel's kingdoms | [*Betula pendula*](/data/taxon/LPCQ)<br>[*Boletus edulis*](/data/taxon/MCH9)<br>[*Cervus elaphus*](/data/taxon/T56G) | [image](https://www.phylopic.org/images/5c6ae9a1-1405-4f81-b4c1-c169faef475e)<br>[image](https://www.phylopic.org/images/e5d32221-7ea9-46ed-8e0a-d9dbddab0b4a)<br>[image](https://www.phylopic.org/images/72f2f997-e474-4caf-bbd5-72fc8dbcc40d) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Protists/icon.svg" alt="Protists icon" style="width:48px;height:48px"> | › Protists | Any eukaryote that is not an animal, plant or fungus: protozoa, foraminifera, radiolaria | [*Pterocorys*](/data/taxon/BSGDL) | [image](https://www.phylopic.org/images/5fccc7f9-60b8-4aea-96cf-ce93f85c9e90) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Plants/icon.svg" alt="Plants icon" style="width:48px;height:48px"> | › Plants | Sensu lato, including red algae and glaucophytes | [*Betula pendula*](/data/taxon/LPCQ) | [image](https://www.phylopic.org/images/5c6ae9a1-1405-4f81-b4c1-c169faef475e) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Algae/icon.svg" alt="Algae icon" style="width:48px;height:48px"> | › › Algae | Eukaryotic algae including diatoms and red algae, not cyanobacteria | [*Fucus vesiculosus*](/data/taxon/PGN8V) | [image](https://www.phylopic.org/images/2bb3f2a4-1567-4a8e-bf33-16abb7f0c7c1) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Bryophytes/icon.svg" alt="Bryophytes icon" style="width:48px;height:48px"> | › › Bryophytes | Mosses, liverworts and hornworts | [*Rosulabryum capillare*](/data/taxon/4TFSD) | [image](https://www.phylopic.org/images/f4889f66-1904-479d-8a1f-f9449733c654) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Pteridophytes/icon.svg" alt="Pteridophytes icon" style="width:48px;height:48px"> | › › Pteridophytes | Ferns and fern allies, including clubmosses and horsetails | [*Polypodium vulgare*](/data/taxon/4LHCV) | [image](https://www.phylopic.org/images/ee243ea1-c311-4fa2-b730-928b80117515) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Angiosperms/icon.svg" alt="Angiosperms icon" style="width:48px;height:48px"> | › › Angiosperms | Flowering plants | [*Tulipa*](/data/taxon/8W4GT) | [image](https://www.phylopic.org/images/cc9f5826-afd9-480e-ad22-c9311de167c5) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Gymnosperms/icon.svg" alt="Gymnosperms icon" style="width:48px;height:48px"> | › › Gymnosperms | Cycads, *Ginkgo*, gnetophytes and conifers | [*Pseudotsuga*](/data/taxon/C84MB) | [image](https://www.phylopic.org/images/9b9d6b61-d571-4503-9107-50c54a2beedb) |

#### Fungi

| Icon | Group | Covers | Silhouette | PhyloPic |
|---|---|---|---|---|
| <img src="https://api.checklistbank.org/vocab/taxgroup/Fungi/icon.svg" alt="Fungi icon" style="width:48px;height:48px"> | Fungi | Including lichens | [*Boletus edulis*](/data/taxon/MCH9) | [image](https://www.phylopic.org/images/e5d32221-7ea9-46ed-8e0a-d9dbddab0b4a) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Ascomycetes/icon.svg" alt="Ascomycetes icon" style="width:48px;height:48px"> | › Ascomycetes | Ascomycota | [*Aspergillus nidulans*](/data/taxon/HC7X) | [image](https://www.phylopic.org/images/7ebbf05d-2084-4204-ad4c-2c0d6cbcdde1) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Basidiomycetes/icon.svg" alt="Basidiomycetes icon" style="width:48px;height:48px"> | › Basidiomycetes | Basidiomycota | [*Amanita muscaria*](/data/taxon/5TYZ9) | [image](https://www.phylopic.org/images/237a0fb1-7b73-43ec-b0a5-eff95e7237df) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Pseudofungi/icon.svg" alt="Pseudofungi icon" style="width:48px;height:48px"> | › Pseudofungi | Oomycetes and relatives, traditionally named under fungal nomenclature | [*Bremia lactucae*](/data/taxon/5WRH5) | [image](https://www.phylopic.org/images/53b543aa-2a5e-4407-88cd-6acbb0b5c3f9) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/OtherFungi/icon.svg" alt="Other fungi icon" style="width:48px;height:48px"> | › Other fungi | Chytrids, bread moulds, arbuscular mycorrhizal fungi and other basal fungi | [Glomeromycetes](/data/taxon/BY) | [image](https://www.phylopic.org/images/44c27c08-400f-4304-92b4-997fdd85ec4b) |

#### Animals

| Icon | Group | Covers | Silhouette | PhyloPic |
|---|---|---|---|---|
| <img src="https://api.checklistbank.org/vocab/taxgroup/Animals/icon.svg" alt="Animals icon" style="width:48px;height:48px"> | Animals | Animalia | [*Cantharis rustica*](/data/taxon/M6PX5)<br>[*Salmo trutta*](/data/taxon/79CZL)<br>[*Helix pomatia*](/data/taxon/6LLM4) | [image](https://www.phylopic.org/images/35bb269c-5ff2-48c1-a002-a6bf8d9e8eef)<br>[image](https://www.phylopic.org/images/23a7d09d-4a4d-4ad5-ad07-49a6b59a7fba)<br>[image](https://www.phylopic.org/images/d8f236a7-e36b-4313-9162-8f2dead31a8a) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Arthropods/icon.svg" alt="Arthropods icon" style="width:48px;height:48px"> | › Arthropods | Arthropoda | [*Lithobius forficatus*](/data/taxon/3VHYB) | [image](https://www.phylopic.org/images/83c995d5-0936-441b-8a27-089005086c61) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Insects/icon.svg" alt="Insects icon" style="width:48px;height:48px"> | › › Insects | Insecta, the most diverse animal group | [*Blattella germanica*](/data/taxon/5WLVY) | [image](https://www.phylopic.org/images/b2e26249-80be-441b-8648-4c0361892ee0) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Coleoptera/icon.svg" alt="Coleoptera icon" style="width:48px;height:48px"> | › › › Coleoptera | Beetles | [*Cantharis rustica*](/data/taxon/M6PX5) | [image](https://www.phylopic.org/images/35bb269c-5ff2-48c1-a002-a6bf8d9e8eef) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Diptera/icon.svg" alt="Diptera icon" style="width:48px;height:48px"> | › › › Diptera | True flies, mosquitoes and midges | [*Drosophila melanogaster*](/data/taxon/8BXCZ) | [image](https://www.phylopic.org/images/c5564abf-a920-4ee3-a6a1-02c4eca1a671) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Lepidoptera/icon.svg" alt="Lepidoptera icon" style="width:48px;height:48px"> | › › › Lepidoptera | Butterflies and moths | [*Papilio glaucus*](/data/taxon/4CKDK) | [image](https://www.phylopic.org/images/a36477e3-5e2c-4e28-94f8-90b397212c3b) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Hymenoptera/icon.svg" alt="Hymenoptera icon" style="width:48px;height:48px"> | › › › Hymenoptera | Ants, bees, wasps and sawflies | [*Vespula alascensis*](/data/taxon/7G2VR) | [image](https://www.phylopic.org/images/b00b5230-a08a-4413-a9ed-f8b3e5f795b0) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Hemiptera/icon.svg" alt="Hemiptera icon" style="width:48px;height:48px"> | › › › Hemiptera | True bugs, aphids and cicadas | [*Oncopeltus fasciatus*](/data/taxon/RGBZH) | [image](https://www.phylopic.org/images/61e306a9-9b19-4c9a-ba10-7856bd096356) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Orthoptera/icon.svg" alt="Orthoptera icon" style="width:48px;height:48px"> | › › › Orthoptera | Grasshoppers, locusts and crickets | [*Trimerotropis maritima*](/data/taxon/7D5B4) | [image](https://www.phylopic.org/images/e7ba011c-6172-47ca-84bf-0dfc87b47a32) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Trichoptera/icon.svg" alt="Trichoptera icon" style="width:48px;height:48px"> | › › › Trichoptera | Caddisflies | [Brachycentridae](/data/taxon/7CK) | [image](https://www.phylopic.org/images/e1307c88-3e8f-4ba8-9f93-751df3deb739) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/OtherInsects/icon.svg" alt="Other insects icon" style="width:48px;height:48px"> | › › › Other insects | Dragonflies, cockroaches, mayflies, earwigs, lacewings and more | [Libellulidae](/data/taxon/BZS) | [image](https://www.phylopic.org/images/2894776f-a2cf-4475-b13d-6d8ea1607ea4) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Arachnids/icon.svg" alt="Arachnids icon" style="width:48px;height:48px"> | › › Arachnids | Spiders, scorpions, mites and ticks | [*Atrax sutherlandi*](/data/taxon/5VWDB) | [image](https://www.phylopic.org/images/95908e68-8d10-4f48-91a2-b0d7d85c4c2d) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Crustacean/icon.svg" alt="Crustaceans icon" style="width:48px;height:48px"> | › › Crustaceans | Crabs, lobsters, shrimps, barnacles and copepods | [Caridea](/data/taxon/9CK9N) | [image](https://www.phylopic.org/images/a8dc4f0a-5b17-4ed4-bc4a-8af69db73c16) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/OtherArthropods/icon.svg" alt="Other arthropods icon" style="width:48px;height:48px"> | › › Other arthropods | Centipedes, millipedes, sea spiders and more | [*Derocheilocaris*](/data/taxon/84N4Q) | [image](https://www.phylopic.org/images/1d2c7cb7-4a62-4f4a-96ff-b62e225d6f91) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Molluscs/icon.svg" alt="Molluscs icon" style="width:48px;height:48px"> | › Molluscs | Mollusca | [Mollusca](/data/taxon/M2L) | [image](https://www.phylopic.org/images/e9ca8d1d-36cd-48bc-aa6e-8303be2b78f6) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Gastropods/icon.svg" alt="Gastropods icon" style="width:48px;height:48px"> | › › Gastropods | Snails and slugs | [*Helix pomatia*](/data/taxon/6LLM4) | [image](https://www.phylopic.org/images/d8f236a7-e36b-4313-9162-8f2dead31a8a) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Bivalves/icon.svg" alt="Bivalves icon" style="width:48px;height:48px"> | › › Bivalves | Oysters, mussels, scallops and clams | [*Corbicula fluminea*](/data/taxon/5ZYZK) | [image](https://www.phylopic.org/images/70d345ec-c53a-45b9-a4af-93cf6f3e2125) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/OtherMolluscs/icon.svg" alt="Other molluscs icon" style="width:48px;height:48px"> | › › Other molluscs | Squids, octopuses, chitons, tusk shells and more | [*Octopus*](/data/taxon/7PB4N) | [image](https://www.phylopic.org/images/f060bcc7-5725-46f7-8276-14553af3707f) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/Chordates/icon.svg" alt="Chordates icon" style="width:48px;height:48px"> | › Chordates | Fishes, amphibians, reptiles, birds and mammals | [*Salmo trutta*](/data/taxon/79CZL)<br>[*Turdus merula*](/data/taxon/7CYVX)<br>[*Rana temporaria*](/data/taxon/6WR99) | [image](https://www.phylopic.org/images/23a7d09d-4a4d-4ad5-ad07-49a6b59a7fba)<br>[image](https://www.phylopic.org/images/ec11f62e-ed3e-49bb-bcff-4e47b281d378)<br>[image](https://www.phylopic.org/images/e73c5c1c-7727-4687-bf0b-3957343edfc3) |
| <img src="https://api.checklistbank.org/vocab/taxgroup/OtherAnimals/icon.svg" alt="Other animals icon" style="width:48px;height:48px"> | › Other animals | Jellyfish, corals, starfish, worms, sponges and more | [*Lumbricus terrestris*](/data/taxon/6R26F) | [image](https://www.phylopic.org/images/f0d839a1-5a3e-42b2-828a-c5e536f0f7b7) |
