---
title: "From hashes to evidence: the history of COL identifiers"
author: "Markus Döring"
excerpt: "Why COL identifiers changed over the years, what we fixed, what the rules are today and how to follow an identifier that has gone."
categories: ["Identifier", "API"]
---

Every name in the Catalogue of Life (COL) carries an identifier. [`4QHKG`](/data/taxon/4QHKG) is the puma,
*Puma concolor* (Linnaeus, 1771), and has been since 2021. These identifiers are what you cite, link to and store in
your own databases, so they are only useful if they stay the same from one release to the next.

They have not always done so. A user in New Zealand recently asked why 279 plant identifiers had changed between the
June and the October 2026 releases ([data#1867](https://github.com/CatalogueOfLife/data/issues/1867)). A proper answer
goes back a long way: to what a "name" actually is, to the identifiers of the old Annual Checklist, and to every change
in our rules since the current identifiers were introduced. This post tells that story with real examples and numbers.
It says plainly what went wrong, and explains what you can do when an identifier you hold has gone.

## What is "the same name"?

An identifier promises that two records are the same thing. For scientific names that is a surprisingly hard promise
to make. In 2017 we opened a discussion on
[rules for scientific name identity](https://github.com/CatalogueOfLife/general/issues/35) with examples like these,
which are all one and the same name:

```
Aus bus Linnaeus 1758
Aus bus Linn. 1758
Aus bus L.
Aus ba Linn 1758.
Aus (Hus) bus L.
```

Author names are abbreviated in many ways, and publication years are often cited a year out. Epithets change their
gender ending with the genus, and a subgenus may or may not be cited. On the other hand, *Xus cus* Smith, 1850 and
*Xus cus* Jones, 1900 are two different names, homonyms, which must never share an identifier. A new combination, a
change of rank and a replacement name are new names too. Some questions from that discussion are still open. Is a
misspelling the same name? Is a name that was never validly published? What about a name published under both the
zoological and the botanical code?

COL identifiers add one more layer. They identify a *name usage*: a name as COL uses it, accepted or as a synonym, at
its place in the classification. Since 2021 we have aimed for identifiers that follow the name rather than the usage.
Every rule below answers one question: how much may a name change before it stops being the same name? Both wrong
answers are costly. A needlessly new identifier breaks every citation of the old one, and a wrongly reused identifier
silently points your readers at a different organism.

## Before 2021: the Annual Checklist

The Annual Checklist was built by a different system, and its identifiers were never designed to last.

- **Record numbers.** The number in a species page address was a database record number. For the puma it was
  6862841 in the 2010–2014 editions, 21935433 in 2015 and 2016, 27704570 in 2017 and 35490149 in 2018 and 2019.
- **LSIDs.** From the 2008 edition COL issued Life Science Identifiers of the form
  `urn:lsid:catalogueoflife.org:taxon:<UUID>:ac2008`. A matching program carried the UUID of an unchanged taxon over
  to the next edition. The last part, however, named the edition, so the full identifier changed every year. LSIDs
  were given up in 2018, and nothing resolves them any more.
- **Natural keys.** The last editions up to 2019 used 32 character keys in their web addresses: an MD5 hash of the
  family, the name, its authorship and its status, in lower case. For the puma, the hash of
  `felidaepuma_concolor(linnaeus,_1771)1` gives `0b4c73f8591ab777e49e32be159e3a18`. The key held as long as nothing
  in it changed. Correcting one character of the author, moving a species to another family or turning it into a
  synonym gave a new key.

One more detail of the old system matters for what follows. Genera were not names in their own right there. They came
from the classification of the species records and had no author. COL21 inherited this: about half of its 207,000
genera had no author.

Old 2019 web addresses with a natural key now redirect to that taxon in the 2019 edition, which is archived in
ChecklistBank together with the earlier Annual Checklists. To translate a 2019 key into a current identifier, use the
mapping published with every Extended Release, the `<date>_xr_col19-idmap.tsv.gz` files in the
[monthly archive](https://download.checklistbank.org/col/monthly/). It matches every 2019 name against that release. A first mapping from April 2021,
[legacy_id_map.zip](https://download.checklistbank.org/col/legacy_id_map.zip), is still available but no longer
updated.

## 2021: short identifiers that follow the name

With the move to ChecklistBank in December 2020, COL introduced the identifiers it uses today
([2021 announcement](/2021/04/14/stable-ids)). They are numbers written with 29 characters,
`23456789BCDFGHJKLMNPQRSTVWXYZ`. The alphabet leaves out `0`, `O`, `1` and `I`, which are easily confused, and every
vowel, so that no identifier spells a word. Kingdoms got single letters by hand: [`P`](/data/taxon/P) is Plantae and
[`N`](/data/taxon/N) Animalia. Other identifiers were issued in order, so a shorter identifier is an older one:
[`75F9`](/data/taxon/75F9) is the genus *Puma*, [`623RM`](/data/taxon/623RM) the Felidae and
[`YNV`](/data/taxon/YNV) the honey bee genus *Apis*.

Every release decides its identifiers afresh, by comparing each name with the names that carried an identifier
before. The 2021 rules compared the name and its authorship and tolerated small differences in how authors were
written. They still issued a new identifier in three cases: an author was added to a name that had none, an accepted
name became a synonym or the other way round, or a synonym moved to another accepted name. Since then every release
has published reports of the identifiers it created, deleted and brought back.

## 2022: status no longer matters

The first reports showed that most changes came from status: a species sunk into synonymy, a synonym raised again, a
synonym moved to another accepted name. These are changes of taxonomic opinion, not of the name. From the March 2022
release (COL22.3) neither status nor classification changes an identifier any more
([2022 post](/2022/03/23/name-ids)).

At the same time COL started to keep every identifier a release drops in an archive. A name that disappears and comes
back later gets its old identifier back, which we call a resurrection, instead of a new one. Without the archive,
identifiers that only lived in monthly releases that were later deleted would have been lost
([backend#1083](https://github.com/CatalogueOfLife/backend/issues/1083)).

## The genus problem, 2021–2025

One of the 2021 rules turned out to be expensive. A name that gained an author got a new identifier, on the reasoning
that a name without an author could be any of several homonyms. Half of the genera had no author. As source datasets
supplied the missing authors, release after release, those genera were renumbered:

| Year | Genus identifiers replaced because an author was added |
|---|---:|
| 2021 | 50,905 |
| 2022 | 26,343 |
| 2023 | 7,873 |
| 2024 | 27,353 |
| 2025 | 10,166 |
| 2026 | 927 |

That is 123,567 in total, a number equal to more than half of all genera in COL21. The largest waves came with COL21.4
(April 2021, 22,333), COL22.6 (June 2022, 15,004), COL24.2 (February 2024, 9,950) and COL24.5 (May 2024, 16,380).
Across all ranks the rule replaced about 170,000 identifiers. Some examples:

| Genus | Without author | With author | Changed in |
|---|---|---|---|
| *Quercus* | `76HN` | [`8W2YL`](/data/taxon/8W2YL) *Quercus* L. | COL22.4 |
| *Garaeus* | `4M6V` | [`929HQ`](/data/taxon/929HQ) *Garaeus* Moore, 1868 | COL22.6 |
| *Celastrina* | `3JYB` | [`9CKBC`](/data/taxon/9CKBC) *Celastrina* Tutt, 1906 | COL22 |
| *Abies* | `627WF` | [`C66T4`](/data/taxon/C66T4) *Abies* Mill. | COL24.4 |

The rule was lifted with COL25.10 in October 2025. A release now compares a name with all earlier names of the same
spelling, with or without author, and an author added to a name no longer costs it its identifier. The 927 genera of
2026 are not that rule: almost all of them changed in COL26.9, for the reasons described below. The genera renumbered before kept their new identifiers, as changing them
back would have been one more change for everyone who had started using them.

## 2025: flapping, and the oldest identifier

In 2025 COL started to publish an Extended Release (XR) next to each base release, adding names from thousands of
further sources ([announcement](/2025/10/07/colxr-live)). Both releases draw on one pool of identifiers.

When several earlier identifiers fit one name, typically because the name had been in COL twice or its author had
been corrected, a release preferred the one used in the previous release. That made identifiers flap.
*Plagodis phlogosaria approximaria* started out as `5KH5P` with the author "Dyar, 1902". It became
[`94227`](/data/taxon/94227) when the year was corrected to 1899 in COL22.6, and `B779Q` in COL23.4, although nothing
had changed ([backend#1448](https://github.com/CatalogueOfLife/backend/issues/1448)).

Since COL25.8 (August 2025) the oldest identifier with a fitting author wins. COL25.9 fixed a bug in that choice and
moved 374,770 names in one go to an older identifier they had carried before. *Plagodis phlogosaria approximaria* has
been `94227` again ever since. It was a one-off cost, paid to end the flapping.

## 2026: changes we did not want

2026 brought identifier changes that no rule intended.

In COL26.6 (June) about 54,000 names, mostly from five Species File databases (aphids, Coreoidea, Lygaeoidea, Mantodea
and Phasmida), received new identifiers. *Hierodula nicobarica* Mukherjee, 1995 for example went from
[`3LVN8`](/data/taxon/3LVN8) to `VF39Q`. COL26.7 gave them their old identifiers back.

From COL26.7 to COL26.9 older identifiers began to displace identifiers in use. Three flaws lay underneath:

- **The archive compared against an outdated record.** It kept the first version of every identifier and never
  updated it. *Cedrus deodara* had carried `S24D` since 2021, but its archived record still had the COL21 author
  "(Lamb.) G. Don". A duplicate from another source in the June Extended Release, with today's author
  "(Roxb. ex D.Don) G.Don", therefore looked like the better match. COL26.7 switched the cedar to its identifier
  [`VK8VH`](/data/taxon/VK8VH) ([backend#1587](https://github.com/CatalogueOfLife/backend/issues/1587)).
- **Deleted releases counted as the oldest.** Identifiers from deleted releases were treated as older than any other,
  so they won ties they should have lost.
- **Better looking evidence beat an identifier in use.** The family Lycaenidae, without author, had been `C98` since
  2021. In COL26.9 it lost that identifier to [`PR9JG`](/data/taxon/PR9JG), which the July 2025 Extended Release had
  issued for Lycaenidae with Leach, 1815 as author.

The genus *Aellopos* shows both eras at once: `PLL` without author in COL21, `8ZYX9` "Hübner" from COL22.6, and back to
[`PLL`](/data/taxon/PLL), now with "Hübner, 1819", since COL26.8. COL26.9 alone moved about 35,000 names. Almost all of
the 279 New Zealand identifiers changed this way, in COL26.7 and COL26.8.

We fixed all three flaws in September 2026. We did not revert the identifiers that had already changed: by then the
new ones had been published for up to three months, and changing them back would have been yet another change.
Instead, every identifier that died now points to the one that replaced it, as described below.

## The rules today

Since COL26.9 XR (September 2026) a release compares every attribute of two names in three ways: they agree, they
contradict, or the data cannot tell. **A contradiction costs a name its identifier, missing information never does.**

| | gives a new identifier | keeps the identifier | tells nothing |
|---|---|---|---|
| author | a different author, or years more than 11 apart, also when one is cited in brackets and the other not: `Harrington, 1899` against `(Kirby, 1837)` | the same author cited differently: `Mill.` = `Miller`, `L.` = `Linné`; brackets added or lost: `Pascoe, 1864` = `(Pascoe, 1859)` | author added or removed |
| spelling | a different name | gender endings and common epithet variants: *Felis rufus* = *Felis rufa* | |
| rank | two different ranks, species against genus | the same rank | an unranked name |
| status | a misapplied name against any other | the same kind of status | accepted against synonym |
| code and group | zoological against botanical, animal against plant, unless the author agrees | the same code and group | one side unknown |

An author without brackets is the name's original author. Some zoological catalogues cite a later user of a name as
its author, sometimes for a misidentification of another species, so such a citation is a different name from the
original author in brackets. `L.` against `(L.) Mill.` is the same original author, but often two names in their own
right: an original name and a later transfer of a basionym of the same author from another genus, like
*Aechmea blanchetii* Baker and *Aechmea blanchetii* (Baker) Mez. A name keeps its identifier when a source adds the
combination author, but never takes the identifier of a name whose author matches exactly. We added these two rules in
November 2026, after reviewing the redirects described below.

When several earlier identifiers fit, the one the previous release used comes first, and nothing can take it away.
After that the evidence decides, and then longevity. An identifier used in a base release wins over one that only
appeared in Extended Releases, then the one used in more releases wins, then the one issued first. Bringing back an
identifier that has already been dropped needs positive agreement on the author or the rank, so that an identifier
removed as an error does not quietly reappear. The full rules, with all cases, are in
[IDENTIFIER.md](https://github.com/CatalogueOfLife/backend/blob/master/docs/IDENTIFIER.md).

Since COL26.6 XR (June 2026) the Extended Release also uses the codes of UNITE species hypotheses and BOLD BINs as
identifiers, with the colon of a BIN turned into a dot. `BOLD:AAA3374` is [`BOLD.AAA3374`](/data/taxon/BOLD.AAA3374);
until COL26.5 XR it was `FGK9N`.

Some things still change an identifier:

- **A genuinely different author.** If `Mill.` becomes `DC.`, it is not the same name, and a new identifier says so.
- **Spelling variants of a genus.** These are not folded: *Mammillaria* and *Mamillaria* are two names to COL.
- **Placeholder names.** Names such as "Mollusca incertae sedis" never get a stable identifier.

## When an identifier dies

An identifier that is no longer in the latest release still answers. Its page on the website, for example
[catalogueoflife.org/data/taxon/S24D](/data/taxon/S24D), shows the archived record and links the identifier that took
over. In the API the 404 response carries the archived name usage and, where one is known, its `supersededBy`:

```
GET https://api.checklistbank.org/dataset/3LXR/taxon/S24D/info
404 {"code": 404, "message": "Usage 3:S24D was deleted and archived in release: 315557, superseded by VK8VH",
     "usage": {"id": "S24D", ..., "supersededBy": "VK8VH"}}
```

Since September 2026 each release records the successor of the identifiers it drops. In November 2026 we also filled
in the successors of identifiers dropped since COL21. 830,350 dead identifiers now point to the one that took over, the renumbered genera
above included: `3JYB` leads to [`9CKBC`](/data/taxon/9CKBC). A redirect needs the same evidence as keeping an
identifier: no contradiction, and agreement on author or rank. There is no redirect where two current names fit
equally well (194,317 identifiers) or where the old and the new name contradict each other (143,313). The page of such
an identifier lists the current names of the same spelling instead. The old COL identifiers of BOLD BINs and UNITE
species hypotheses have no redirect yet, but each record's name is the BIN or SH code, which is now the identifier
itself.

## Following identifier changes yourself

Every release publishes reports of its identifier changes at
`https://download.checklistbank.org/releases/3/{attempt}/`, where the attempt is the release's build number. COL25.10,
for example, is [attempt 499](https://download.checklistbank.org/releases/3/499/id-reports.gz). The API lists all
releases with their attempts, including monthly releases that have since been deleted:
[`/dataset?releasedFrom=3&inclDeleted=true`](https://api.checklistbank.org/dataset?releasedFrom=3&inclDeleted=true).

| File | Lists |
|---|---|
| `created.tsv` | identifiers issued for the first time |
| `deleted.tsv` | identifiers the previous release had and this one does not |
| `resurrected.tsv` | earlier identifiers that came back |
| `superseded.tsv` | deleted identifiers and the identifier that took over |
| `unstable.txt` | names that lost one identifier and gained another, grouped by name |

If you store COL identifiers, keep the name and its author next to them. When an identifier stops working, follow its
`supersededBy`. If there is none, match the stored name against the current release, for example with
[`/dataset/3LR/match/nameusage?q=Abies&authorship=Mill.`](https://api.checklistbank.org/dataset/3LR/match/nameusage?q=Abies&authorship=Mill.).

## How we counted

The numbers in this post come from the public identifier reports of all base releases since April 2021, including
monthly releases that have since been deleted. A name counts as having changed its identifier when a release deleted
one identifier and issued a new or resurrected one for the same name, with the same rank and spelling. Extended
Releases are left out, as their reports are not comparable over time.

If you find an identifier that changed although the name did not, please tell us in the
[data issue tracker](https://github.com/CatalogueOfLife/data/issues) or at
[support@catalogueoflife.org](mailto:support@catalogueoflife.org). Questions about the API go to the
[backend issues](https://github.com/CatalogueOfLife/backend/issues).
