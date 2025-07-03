---
layout: content
title: Name Matching
tagline: Match & link your names to COL
section_id: tools
toc: true
imageUrl: /images/species/Gillmeria_ochrodactyla.jpg    
imageCaption: _Gillmeria ochrodactyla_ ([Denis & Schifferm&uuml;ller], 1775) - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/14304880198)
permalink: /tools/matching
---

## Introduction
 - TODO: Markus
 - why matching, add COL IDs for GBIF, classification, verify names, ...
 - How does matching work


## Matching names to the Catalogue of Life
   - CLB UI, async jobs

You can of course also use the [matching API](https://www.checklistbank.org/about/API#name-matching) directly.



### Docker containers
With every release of COL XR we also provide docker containers for name matching, that can be used locally without depending on our online services.
The matching service provided currently uses the [GBIF matching API](https://techdocs.gbif.org/en/openapi/v1/species#/Searching%20names/matchNames), which is slightly different to how CheckistBank does the matching.
In the future we expect also ChecklistBank matching services to be provided in containers.

You can list all available matching containers from the GBIF image registry:

`https://docker.gbif.org/v2/matching-ws/tags/list`

The image tags are made up of several pieces of information: 

`{taxonomy}-{architecture}-{datasetKey}-{date}-{time}`

So the image `xcol-arm64-308651-20250516-145444` exposes the COL eXtended Release with [datasetKey=308651](https://www.checklistbank.org/dataset/308651) and was build on the 16th of May 2025.


You can also pull and run the latest COL XR like this
```
# use arm64 instead of amd64 on a mac with apple silicon
docker pull docker.gbif.org/matching-ws:xcol-amd64-latest
# exposes the service on port 8080
docker run -d -p 8080:8080 --name colxr docker.gbif.org/matching-ws:xcol-amd64-latest
```

<br/>
You can then access the matching service locally using the current v1 GBIF API:

`curl -s "http://localhost:8080/v1/species/match?name=Oenanthe&authorship=L.&rank=genus&kingdom=Plantae&verbose=true"`


The service also exposes a [new v2 API](https://techdocs.gbif-test.org/en/openapi/v1/species#/Searching%20names/matchNames), 
which adopts more Darwin Core terminology and a different response.
V2 has not been officially released yet and it might still (slightly) change:
```
# return metadata about the indexed data
curl -s "http://localhost:8080/metadata"

# new v2 matching 
curl -s "http://localhost:8080/v2/species/match?scientificName=Oenanthe&scientificNameAuthorship=L.&taxonRank=genus&kingdom=Plantae&verbose=true"
```
