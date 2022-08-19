---
layout: post
title:  Data repository
author: "Markus D&ouml;ring"
excerpt: Storing all dataset archives
categories: API ChecklistBank Archive
---

Today we improved the capabilities of ChecklistBank (CLB) to be a better data repository.
Since the start CLB only offers the latest version of each dataset and makes it accessible via it's API.
The full data from previous versions were only kept for Catalogue of Life releases, but not for other datasets.

Today we have started to store every data archive that was imported into ChecklistBank as a zip file
together with metrics and a list of all included scientific names so CLB is capable to produce diffs between versions. 
You cannot use the API to search and work with records from data of older versions (which we call an *import attempt*), but you can now access the original data as it was supplied.

The ![import history](/images/posts/import-history.png) of every dataset gives you a quick overview about the changes, metrics, logs and access to the data.

You can access specific archives for a dataset by an attempt parameter through the API:
https://api.checklistbank.org/dataset/2004/archive?attempt=13

Or the latest when leaving out the parameter: 
https://api.checklistbank.org/dataset/2004/archive