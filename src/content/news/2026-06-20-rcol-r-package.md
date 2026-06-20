---
title: "rcol: an R client for the Catalogue of Life"
author: "Markus Döring"
excerpt: "A new R package, rcol, brings Catalogue of Life name matching, taxon and dataset lookups, tree navigation and the ChecklistBank parsers straight into R — modelled on rgbif and taxadb."
categories: ["Release", "R", "tools", "API", "name-matching"]
---

R users working with biodiversity data now have a native way to talk to the Catalogue of Life. **[rcol](https://github.com/CatalogueOfLife/rcol)** is a new, open-source R package that wraps the [ChecklistBank API](https://api.checklistbank.org) — the same service that powers [checklistbank.org](https://www.checklistbank.org) and this portal — so you can match names, look up taxa and datasets, walk the taxonomic tree and run the ChecklistBank parsers without leaving R.

If you already use [rgbif](https://docs.ropensci.org/rgbif/) or [taxadb](https://docs.ropensci.org/taxadb/), rcol will feel familiar: it follows the same conventions, speaks `httr2`, and returns tidy [tibbles](https://tibble.tidyverse.org/) you can pipe straight into the tidyverse.

## Installation

rcol is hosted on GitHub under the Catalogue of Life organisation:

```r
# install.packages("pak")
pak::pak("CatalogueOfLife/rcol")
```

The reference documentation lives at **<https://catalogueoflife.github.io/rcol/>**.

## Name matching against the latest COL release

The headline feature is name matching — the Catalogue of Life analogue of GBIF's backbone matching. `col_match()` returns the single best match against the latest Catalogue of Life release:

```r
library(rcol)

col_match("Panthera leo")
#> # A tibble: 1 × 11
#>   match match_type usage_id name         authorship        rank    status   ...
#>   <lgl> <chr>      <chr>    <chr>        <chr>             <chr>   <chr>
#>   TRUE  exact      4CGXP    Panthera leo (Linnaeus, 1758) species accepted ...
```

You can disambiguate with a rank and nomenclatural code, ask for all candidate matches with `col_match_verbose()`, or match a whole vector or data frame at once — issued in parallel — with `col_match_checklist()`:

```r
col_match("Abies alba", rank = "species", code = "botanical")

col_match_checklist(c("Panthera leo", "Bufo bufo", "Abies alba"))
```

Your input columns are echoed back on every row with a `verbatim_` prefix, so results stay aligned with the source — ideal for reconciling a messy species list against COL.

## Two families: `col_*` and `clb_*`

Most functions come in two flavours:

- **`col_*()`** always target the latest Catalogue of Life release. They are the convenient default — no dataset argument to remember.
- **`clb_*()`** take a `dataset =` argument and work against **any** public dataset in ChecklistBank, including historical COL editions and the hundreds of source checklists.

```r
# the 2025 annual release
clb_match("Felis catus", dataset = "COL25")

# any public dataset by its key
clb_usage_search("Felidae", dataset = 2099)
```

The COL is published in two cadences (monthly and annual) and two flavours (a base release and an *extended* release, `XR`). `clb_col_release()` resolves the right identifier for you, and `clb_col_releases()` lists every edition back to COL13.

### Pinned to one release for reproducibility

Because long-running analyses should not silently jump to a newer release published halfway through, the `col_*()` functions resolve the latest extended release **once** to its concrete integer key and pin it for the rest of your session (via `col_key()`). When you do want to move to a freshly published release, `col_refresh()` re-pins on demand.

## Beyond matching

rcol exposes the rest of the ChecklistBank toolbox too:

```r
# Parsers — scientific names and controlled values
clb_parse_name("Abies alba Mill.")
clb_parse("rank", c("spec", "fam.", "ssp"))

# Taxon lookups and navigation
col_classification("4CGXP")   # lineage from kingdom down
col_synonyms("6DBT")          # homotypic & heterotypic synonyms
col_vernacular(id = "4CGXP")  # common names
roots <- col_tree()           # walk the tree
col_children(roots$id[1])

# Full-text search, suggestions and metrics
col_usage_search("Felidae")
col_suggest("Panth")
col_dataset_metrics()

# Dataset discovery across all of ChecklistBank
clb_dataset_search("reptile")
```

Need to point at a different deployment, such as the development API? Set the `CLB_BASE_URL` environment variable and every call follows.

## Get involved

rcol is at an early, experimental stage and we would love your feedback. Try it on your own name lists, and let us know what works and what is missing via the [issue tracker](https://github.com/CatalogueOfLife/rcol/issues). Contributions are very welcome.

- **Code:** <https://github.com/CatalogueOfLife/rcol>
- **Docs:** <https://catalogueoflife.github.io/rcol/>
