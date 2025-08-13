---
layout: content
title: Download
tagline: Current, monthly and annual versions of the Catalogue of Life
section_id: data
imageUrl: /images/species/Hyposmocoma_fractistriata.jpg    
imageCaption: _Hyposmocoma fractistriata_  Walsingham, 1907 - [Photo CC By Donald Hobern](https://www.flickr.com/photos/dhobern/13442602504)
permalink: /data/download
---


Download the **full latest** release of the Catalogue of Life, updated monthly.

<div class="row">
  <div class="large-6 columns">
	<ul class="pricing-table">
	  <li class="title">Extended Release</li>
	  <li class="price">Version {{site.metadata.current.version}}</li>
	  <li class="description">The COL <a href="/building/releases#extended">extended release</a> maximises completeness 
	  	by <a href="/building/assembly">programmatically integrating additional sources</a> to fill gaps in the Base Release including molecular identifiers.
	  </li>
	  <li class="bullet-item"><span class="number">{{site.metadata.metrics.nameCount}}</span> Names</li>
	  <li class="bullet-item"><span class="number">{{site.metadata.metrics.taxaByRankCount.species}}</span> Species</li>
	  <li class="bullet-item"><span class="number">{{site.metadata.sources | size}}</span> Sources + <span class="number">{{site.metadata.publisher-sources | size}}</span> Publisher Sources</li>
	  <li class="bullet-item">
	  	<a href="https://api.checklistbank.org/dataset/{{site.metadata.current.key}}/export.zip?extended=true&format=ColDP">ColDP</a> - 
	  	<a href="https://api.checklistbank.org/dataset/{{site.metadata.current.key}}/export.zip?extended=true&format=DwCA">Darwin Core Archive</a> - 
	  	<a href="https://api.checklistbank.org/dataset/{{site.metadata.current.key}}/export.zip?format=TextTree">TextTree</a>
	  </li>
	  <li class="cta-button"><a class="button" href="https://api.checklistbank.org/dataset/{{site.metadata.current.key}}/export.zip?extended=true&format=ColDP">Download</a></li>
	</ul>	
  </div>
  <div class="large-6 columns">
	<ul class="pricing-table">
	  <li class="title">Base Release</li>
	  <li class="price">Version {{site.base-metadata.current.version}}</li>
	  <li class="description">The COL <a href="/building/releases#base">Base Release</a> prioritises accurracy and only includes scrutinized, global sources. 
	  It <i>excludes</i> all information marked up with the XR icon.
	  </li>
	  <li class="bullet-item"><span class="number">{{site.base-metadata.metrics.nameCount}}</span> Names</li>
	  <li class="bullet-item"><span class="number">{{site.base-metadata.metrics.taxaByRankCount.species}}</span> Species</li>
	  <li class="bullet-item"><span class="number">{{site.base-metadata.sources | size}}</span> Sources</li>
	  <li class="bullet-item">
	  	<a href="https://api.checklistbank.org/dataset/{{site.base-metadata.current.key}}/export.zip?extended=true&format=ColDP">ColDP</a> - 
	  	<a href="https://api.checklistbank.org/dataset/{{site.base-metadata.current.key}}/export.zip?extended=true&format=DwCA">Darwin Core Archive</a> - 
	  	<a href="https://api.checklistbank.org/dataset/{{site.base-metadata.current.key}}/export.zip?format=TextTree">TextTree</a></li>
	  <li class="cta-button"><a class="button" href="https://api.checklistbank.org/dataset/{{site.base-metadata.current.key}}/export.zip?extended=true&format=ColDP">Download</a></li>
	</ul>
  </div>	
</div>


Not sure which format to choose? Check out the ChecklistBank's information on the [available formats](https://www.checklistbank.org/about/formats).
For versions from previous months, please visit the [COL downloads site](https://download.catalogueoflife.org/col/).
ChecklistBank also offers [partial downloads](https://www.checklistbank.org/dataset/{{site.metadata.current.key}}/download) if you are only interested in a certain group of the checklist. Please note that this requires a free [GBIF user account](https://www.gbif.org/).

## Looking for just a part of the Catalogue of Life?
You can easily download data for a specific taxon or taxonomic group, such as an order, family, or any other rank.
On each taxon’s page, click  the download icon. This option redirects you to a pre-filled download form the Catalogue of Life’s infrastructure, ChecklistBank.
Example for [Myriapoda](/taxon/CW2TY)

You can  also customise your download directly in [ChecklistBank](https://www.checklistbank.org/) by following these steps:

1. Log in to ChecklistBank using your GBIF account. Don’t have one? You can register at [gbif.org](https://www.gbif.org/).
2. In the left menu, go to Datasets where you can look for the COL version of your preference.
3. The list of available releases begins with the most recent, choose the one you prefer.
4. In the left menu, click Download.
5. Refine your download with the advanced filters: 
	- Taxon of your interest 
	- Archive format
	- Fields to include
	- Minimum rank for search: Family, Genus, or Species
	- Exclude ranks below a selected level
	- Exclude synonyms
	- Extinct only

Please read the information on the available [data formats](https://www.checklistbank.org/about/formats) if you are unclear which one to use. 

## Monthly and annual versions

**Monthly versions:** Catalogue of Life is released monthly between annual versions.  Monthly versions will not be kept indefinitely and lose support once an annual Catalogue of Life is issued. You can explore the [Monthly Checklist Archive](https://download.catalogueoflife.org/col/monthly/) for versions since 2017 to the month before the current release. Some months are missing due to changes in infrastructure, which affected the regular publishing schedule.

**Annual versions:** Every year, COL produces an annual version of the Catalogue of Life that receives long-term support and becomes part of the yearly archives. Are available in different formats. Since 2021 the annual versions remain permanently accessible via [ChecklistBank](https://www.checklistbank.org/dataset?releasedFrom=3&sortBy=created).

The following links give access to annual versions of the Catalogue from 2005 to 2019. 
MySQL dump files are available for versions from 2005 to 2019. Darwin Core Archive ZIP files from 2012 to 2019.

* [Catalogue of Life 2025](https://www.checklistbank.org/dataset/COL25) - 2,068,366 living and 152,871 extinct species ([ColDP](https://download.catalogueoflife.org/col/annual/2025_coldp.zip), [Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2025_dwca.zip), [TextTree](https://download.catalogueoflife.org/col/annual/2025_txtree.zip))
* [Catalogue of Life 2024](https://www.checklistbank.org/dataset/COL24) - 2,025,351 living and 147,120 extinct species ([ColDP](https://download.catalogueoflife.org/col/annual/2024_coldp.zip), [Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2024_dwca.zip), [TextTree](https://download.catalogueoflife.org/col/annual/2024_txtree.zip))
* [Catalogue of Life 2023](https://www.checklistbank.org/dataset/COL23) - 1,827,305 living and 132,309 extinct species ([ColDP](https://download.catalogueoflife.org/col/annual/2023_coldp.zip), [Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2023_dwca.zip), [TextTree](https://download.catalogueoflife.org/col/annual/2023_txtree.zip))
* [Catalogue of Life 2022](https://www.checklistbank.org/dataset/COL22) - 1,726,835 living and 110,790 extinct species ([ColDP](https://download.catalogueoflife.org/col/annual/2022_coldp.zip), [Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2022_dwca.zip), [TextTree](https://download.catalogueoflife.org/col/annual/2022_txtree.zip))
* [Catalogue of Life 2021](https://www.checklistbank.org/dataset/2328) - 1,898,157 living and 110,790 extinct species ([ColDP](https://download.catalogueoflife.org/col/annual/2021_coldp.zip), [Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2021_dwca.zip), [ACEF](https://download.catalogueoflife.org/col/annual/2021_acef.zip), [TextTree](https://download.catalogueoflife.org/col/annual/2021_txtree.zip))
* [Catalogue of Life 2019](/annual-checklist/2019) - 1,837,565 living and 63,419 extinct species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2019_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2019_mysql.sql.gz))
* [Catalogue of Life 2018](/annual-checklist/2018) - 1,744,204 living and 59,284 extinct species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2018_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2018_mysql.sql.gz))
* [Catalogue of Life 2017](/annual-checklist/2017) - 1,664,506 living and 49,346 extinct species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2017_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2017_mysql.sql.gz))
* [Catalogue of Life 2016](/annual-checklist/2016) - 1,635,250 living and 5,719 extinct species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2016_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2016_mysql.sql.gz))
* [Catalogue of Life 2015](/annual-checklist/2015) - 1,606,554 species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2015_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2015_mysql.sql.gz))
* [Catalogue of Life 2014](/annual-checklist/2014) - 1,578,063 species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2014_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2014_mysql.sql.gz))
* [Catalogue of Life 2013](/annual-checklist/2013) - 1,352,112 species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2013_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2013_mysql.sql.gz))
* [Catalogue of Life 2012](/annual-checklist/2012) - 1,404,038 species ([Darwin Core Archive](https://download.catalogueoflife.org/col/annual/2012_dwca.zip), [MySQL](https://download.catalogueoflife.org/col/annual/2012_mysql.sql.gz))
* [Catalogue of Life 2011](/annual-checklist/2011) - 1,347,224 species ([MySQL](https://download.catalogueoflife.org/col/annual/2011_mysql.sql.gz))
* [Catalogue of Life 2010](/annual-checklist/2010) - 1,257,735 species ([MySQL](https://download.catalogueoflife.org/col/annual/2010_mysql.sql.gz))
* [Catalogue of Life 2009](/annual-checklist/2009) - 1,160,711 species ([MySQL](https://download.catalogueoflife.org/col/annual/2009_mysql.sql.gz))
* [Catalogue of Life 2008](/annual-checklist/2008) - 1,105,589 species ([MySQL](https://download.catalogueoflife.org/col/annual/2008_mysql.sql.gz))
* [Catalogue of Life 2007](/annual-checklist/2007) - 1,008,965 species ([MySQL](https://download.catalogueoflife.org/col/annual/2007_mysql.sql.gz))
* [Catalogue of Life 2006](/annual-checklist/2006) - 884,000 species ([MySQL](https://download.catalogueoflife.org/col/annual/2006_mysql.sql.gz))
* [Catalogue of Life 2005](/annual-checklist/2005) - 527,000 species ([MySQL](https://download.catalogueoflife.org/col/annual/2005_mysql.sql.gz))
* Catalogue of Life 2004 - 323,000 species
* Catalogue of Life 2003 - 304,000 species
* Catalogue of Life 2002 - 260,000 species
* Catalogue of Life 2000 - 220,000 species



<script >
'use strict';

function numberWithCommas(value) {
	//return value.toLocaleString()
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateNumericValues() {
    const myNumber = document.querySelectorAll('.number');
    myNumber.forEach((e) => {
        const numericValue = e.textContent;
    	console.log(numericValue);
        const formattedValue = numberWithCommas(numericValue);
        e.textContent = formattedValue;
    });
 }

 updateNumericValues();
</script>
