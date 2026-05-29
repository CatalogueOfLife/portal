---
title: "Distribution maps, gazetteers, and how to publish your own"
author: "Markus Döring"
excerpt: "The new taxon distribution map draws structured distributions and an optional GBIF occurrence overlay. Here is how the col-gazetteers project underpins it — and how to publish distributions that the map can actually draw."
categories: ["distributions", "gazetteers", "maps", "GBIF", "ColDP", "data-publishing"]
images: images/posts/Astragalus_angustifolius.png
---

Distribution of Astragalus angustifolius on the CoL portal, with the seven subspecies coloured separately and GBIF occurrences overlaid as points.

> _The distribution of_ Astragalus angustifolius _on the CoL portal: the seven accepted subspecies (aegeicus, erinaceus, balcanicus, postianus, odonianus, angustifolius, echinoides) are drawn as separate coloured areas, with GBIF occurrences overlaid as points. Explore it yourself from the [species page](https://www.catalogueoflife.org/data/taxon/HWCX)._

One of the most visible additions in [portal components v2](/2026/05/29/portal-components-v2) is an interactive **distribution map**. On every taxon page — and now also as a standalone `TaxonDistribution` component you can embed anywhere — distributions with a known geometry are rendered on a MapLibre GL vector map, with an optional **GBIF occurrence overlay** layered on top. This post explains what powers the map, and what you can do as a data publisher to make the most of it.

## Two layers: curated areas and live occurrences

The map combines two very different kinds of evidence.

**Curated distributions** are the areas a dataset asserts for a taxon — expert-reviewed statements like "native to Turkey and the southern Balkans". They are drawn as filled polygons, one per area, and on a taxon with infraspecific children (such as our _Astragalus_ example) each subspecies can be shown as its own coloured layer, so you can read the geographic structure of the species at a glance.

**GBIF occurrences** are the raw, aggregated records GBIF holds for the taxon, overlaid as occurrence points (drawn from GBIF's multitaxonomy occurrence tiles, binned into a density layer when zoomed out). They are not curated and they carry the usual sampling and identification caveats — but precisely because they are independent, they are extremely useful: occurrences that fall neatly inside the curated areas **corroborate** the distribution, while occurrences well outside it **challenge** it and flag either an introduction, a misidentification, or a gap in the curated data worth investigating.

Seeing both at once turns the map into a quick quality-control tool. For _Astragalus angustifolius_, the GBIF cloud over Greece, the Aegean and Anatolia tracks the curated subspecies areas closely; stray points elsewhere are exactly the kind of thing a taxonomic editor will want to look at.

## What makes an area drawable: gazetteers

A curated distribution can only be drawn if the map knows the **geometry** of the area it refers to. That is the job of the [**col-gazetteers**](https://github.com/CatalogueOfLife/col-gazetteers) project. It collects and (re)generates the GeoJSON geometries CoL serves for the standard area systems — including TDWG World Geographical Scheme regions, ISO country codes, FAO Major Fishing Areas, IHO Sea Areas, MarineRegions / VLIZ MRGID areas and the Terrestrial Ecoregions of the World (TEOW) — and the ChecklistBank backend uses them to label and serve area geometries to the map.

You can browse the assets on the project's GitHub Pages site:

👉 [catalogueoflife.github.io/col-gazetteers](https://catalogueoflife.github.io/col-gazetteers/)

## How to publish a distribution the map can draw

If you publish your data as [ColDP](https://github.com/CatalogueOfLife/coldp), distributions live in the `Distribution` file. The key is to publish **structured** distributions rather than free text. For each record:

- Set **`gazetteer`** to one of the supported standards: `tdwg`, `iso`, `fao`, `fao-fishing`, `longhurst`, `teow`, `iho`, `mrgid` (or `text` as the free-text fallback).
- Set **`areaID`** to the code for the area, taken from that gazetteer — e.g. an ISO 2-letter country code, a TDWG level-3/4 code, or an MRGID. This is what links your record to a geometry.
- Optionally set **`area`** to the human-readable name, and **`taxonID`** to the taxon the record applies to — including infraspecific taxa, which is exactly how the per-subspecies layers above are produced.

```csv
taxonID,gazetteer,areaID,area,status
A_angustifolius_erinaceus,tdwg,GRC,Greece,native
A_angustifolius_aegeicus,tdwg,GRC-OO,East Aegean Is.,native
```

A record that only provides free `text` (no `areaID`) will still be listed, but it **cannot be placed on the map**. So the single highest-impact thing you can do for map coverage is to attach a gazetteer + `areaID` to your distributions. The full field definitions are in the [ColDP `Distribution` documentation](https://github.com/CatalogueOfLife/coldp/blob/master/README.md#distribution).

When your dataset is keyed by COL identifiers and you want the GBIF overlay to align, point it at the Catalogue of Life backbone in GBIF via the `gbifChecklistKey` prop (`7ddf754f-d193-4cc9-b351-99906754a03b`); see the [`TaxonDistribution` docs](https://github.com/CatalogueOfLife/portal-components#colbrowsertaxondistribution).

## See it in the wild

- Genus and species pages for _Astragalus angustifolius_: [catalogueoflife.org/data/taxon/HWCX](https://www.catalogueoflife.org/data/taxon/HWCX)
- The same taxon in GBIF, the source of the occurrence overlay: [gbif.org/species/5346048](https://www.gbif.org/species/5346048)
- Live component demo, including the standalone distribution map: [catalogueoflife.github.io/portal-components](https://catalogueoflife.github.io/portal-components/)

Better, structured distribution data makes every one of these maps sharper — and makes it far easier to spot where the occurrence record agrees with, or quietly disputes, the curated range. We'd love to see more datasets publish their distributions this way.
