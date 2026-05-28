---
layout: content
toc: true
title: Metrics
tagline: Metrics about the current Catalogue of Life
section_id: data
imageUrl: /images/species/Asplenium_trichomanes.jpg
imageCaption: _Asplenium trichomanes_ L. - [Photo CC By Markus Döring](https://www.inaturalist.org/observations/15132827)
permalink: /data/metrics
---

<style>
  /* Extra breathing room above each chart section after the Eukaryota
     breakdown. The first two headings (Headline numbers, Composition of
     Eukaryota) keep their natural spacing. */
  #usages-by-status,
  #names-by-nomenclatural-code,
  #accepted-taxa-by-rank,
  #vernacular-names-by-language,
  #extended-release-additions {
    margin-top: 56px;
  }
</style>

These metrics describe the current <a href="/data/metadata">release</a> of the Catalogue of Life. They are computed at release time from the full assembled checklist and refreshed automatically as new releases are issued.

## Headline numbers

<div id="metrics-headline" class="row" style="margin: 16px 0 32px; display: flex; flex-wrap: wrap; gap: 12px;">
  <div class="metric-card" style="flex: 1 1 160px; padding: 16px; background: #f7f7f7; border-radius: 4px; text-align: center;">
    <div id="m-taxa" style="font-size: 24px; font-weight: 600; line-height: 1.2;">—</div>
    <div style="font-size: 13px; color: #666; margin-top: 4px;">Accepted taxa</div>
  </div>
  <div class="metric-card" style="flex: 1 1 160px; padding: 16px; background: #f7f7f7; border-radius: 4px; text-align: center;">
    <div id="m-synonyms" style="font-size: 24px; font-weight: 600; line-height: 1.2;">—</div>
    <div style="font-size: 13px; color: #666; margin-top: 4px;">Synonyms</div>
  </div>
  <div class="metric-card" style="flex: 1 1 160px; padding: 16px; background: #f7f7f7; border-radius: 4px; text-align: center;">
    <div id="m-names" style="font-size: 24px; font-weight: 600; line-height: 1.2;">—</div>
    <div style="font-size: 13px; color: #666; margin-top: 4px;">Total names</div>
  </div>
  <div class="metric-card" style="flex: 1 1 160px; padding: 16px; background: #f7f7f7; border-radius: 4px; text-align: center;">
    <div id="m-vernaculars" style="font-size: 24px; font-weight: 600; line-height: 1.2;">—</div>
    <div style="font-size: 13px; color: #666; margin-top: 4px;">Vernacular names</div>
  </div>
  <div class="metric-card" style="flex: 1 1 160px; padding: 16px; background: #f7f7f7; border-radius: 4px; text-align: center;">
    <div id="m-distributions" style="font-size: 24px; font-weight: 600; line-height: 1.2;">—</div>
    <div style="font-size: 13px; color: #666; margin-top: 4px;">Distributions</div>
  </div>
  <div class="metric-card" style="flex: 1 1 160px; padding: 16px; background: #f7f7f7; border-radius: 4px; text-align: center;">
    <div id="m-references" style="font-size: 24px; font-weight: 600; line-height: 1.2;">—</div>
    <div style="font-size: 13px; color: #666; margin-top: 4px;">References</div>
  </div>
</div>

## Composition of Eukaryota

A pie of the major groups within Eukaryota. Click a slice to drill down into that taxon, or use the switch to toggle between one and two rings.

<div class='full'>
	<div id="breakdown" class="catalogue-of-life">chart</div>
</div>

## Usages by status

How the {{ "" }}<span id="m-usage-total">…</span> usages in the catalogue break down between accepted, provisionally accepted, synonyms and the rest.

<div id="chart-usage-status" style="height: 360px;"></div>

## Names by nomenclatural code

Every scientific name in the catalogue is governed by one of the international codes of nomenclature.

<div id="chart-codes" style="height: 360px;"></div>

## Accepted taxa by rank

The twenty-five most populous ranks among accepted taxa, split between taxa that come from the base release and those merged into the [eXtended Release](/building/releases).

<div id="chart-ranks" style="height: 640px;"></div>

## Vernacular names by language

The twenty languages with the most vernacular names in the catalogue. Total languages covered: <span id="m-lang-total">…</span>.

<div id="chart-langs" style="height: 600px;"></div>

## Extended release additions

For names that originate in the base release, the [eXtended Release](/building/releases) supplements them with secondary information drawn from additional sources. The breakdown below shows how many base-release names received each kind of added information.

<div id="chart-secondary" style="height: 320px;"></div>

<!-- Highcharts (only loaded on this page) -->
<script src="https://cdn.jsdelivr.net/npm/highcharts@12/highcharts.js"></script>

<script>
    'use strict';

    // Silence Highcharts' "include accessibility.js" warning — the
    // module isn't loaded here. Switch to enabled:true once we ship it.
    Highcharts.setOptions({ accessibility: { enabled: false } });

    // ── Existing Eukaryota breakdown via portal-components ──────────────────
    const URLTaxonBreakdown = ColBrowser.withRouting(ColBrowser.TaxonBreakdown, {
      kind: 'taxonBreakdown',
      mode: 'path',
      navigation: 'reload',
      paths: window.ColBrowserPaths,
    });

    ColBrowser.ReactDOM.createRoot(document.querySelector('#breakdown')).render(
      ColBrowser.React.createElement(URLTaxonBreakdown, {
        datasetKey: '{{ site.react.datasetKey }}',
        taxonId: 'CS5HF',
        level: 2,
        showLevelSwitch: true,
      })
    );

    // ── Release metrics from /dataset/{key}/import ──────────────────────────
    (function () {
      const API = '{{ site.metadata.api }}';
      const DATASET_KEY = '{{ site.react.datasetKey }}';

      const fmt = (n) => Number(n || 0).toLocaleString();

      // Languages come as ISO 639-3 codes; Intl.DisplayNames usually resolves
      // them. Fall back to the bare code where it doesn't.
      const langNames = (typeof Intl !== 'undefined' && Intl.DisplayNames)
        ? new Intl.DisplayNames(['en'], { type: 'language' })
        : null;
      const labelLanguage = (code) => {
        if (!langNames) return code;
        try {
          const name = langNames.of(code);
          return name && name.toLowerCase() !== code.toLowerCase() ? name : code;
        } catch (_) { return code; }
      };

      // Sort an object by value descending, take top N, map keys via `label`.
      const topN = (obj, n, label = (k) => k) => Object.entries(obj || {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map(([k, v]) => [label(k), v]);

      const renderPie = (id, obj, opts = {}) => {
        const total = Object.values(obj || {}).reduce((a, b) => a + b, 0);
        Highcharts.chart(id, {
          chart: { type: 'pie', backgroundColor: 'transparent' },
          title: { text: null },
          tooltip: { pointFormat: '<b>{point.y:,.0f}</b> ({point.percentage:.1f}%)' },
          plotOptions: {
            pie: {
              innerSize: opts.donut === false ? 0 : '55%',
              borderWidth: 1,
              dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f}%',
                style: { fontWeight: 'normal' },
              },
            },
          },
          series: [{
            name: opts.seriesName || 'Count',
            data: Object.entries(obj || {})
              .sort((a, b) => b[1] - a[1])
              .map(([name, y]) => ({ name, y })),
          }],
          credits: { enabled: false },
        });
      };

      const renderBar = (id, entries, opts = {}) => {
        Highcharts.chart(id, {
          chart: { type: 'bar', backgroundColor: 'transparent' },
          title: { text: null },
          xAxis: {
            categories: entries.map((e) => e[0]),
            title: { text: null },
            labels: { style: { fontSize: '12px' } },
          },
          yAxis: {
            type: opts.log ? 'logarithmic' : 'linear',
            title: { text: opts.yTitle || 'Count' },
            allowDecimals: false,
          },
          legend: { enabled: false },
          tooltip: { pointFormat: '<b>{point.y:,.0f}</b>' },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true,
                format: '{point.y:,.0f}',
                style: { fontWeight: 'normal' },
              },
            },
          },
          series: [{ name: opts.seriesName || 'Count', data: entries.map((e) => e[1]) }],
          credits: { enabled: false },
        });
      };

      const setText = (id, value) => {
        const el = document.querySelector(id);
        if (el) el.textContent = value;
      };

      fetch(`${API}/dataset/${DATASET_KEY}/import`)
        .then((r) => r.json())
        .then((arr) => {
          const m = Array.isArray(arr) ? arr[0] : arr;
          if (!m) throw new Error('no import metrics returned');

          // Headline numbers
          setText('#m-taxa', fmt(m.taxonCount));
          setText('#m-synonyms', fmt(m.synonymCount));
          setText('#m-names', fmt(m.nameCount));
          setText('#m-vernaculars', fmt(m.vernacularCount));
          setText('#m-distributions', fmt(m.distributionCount));
          setText('#m-references', fmt(m.referenceCount));
          setText('#m-usage-total', fmt(m.usagesCount));
          setText('#m-lang-total', fmt(Object.keys(m.vernacularsByLanguageCount || {}).length));

          // Pies
          renderPie('chart-usage-status', m.usagesByStatusCount, { seriesName: 'Usages' });
          renderPie('chart-codes', m.namesByCodeCount, { seriesName: 'Names' });

          // Stacked bar: regular (= total − merged) and merged per rank.
          // mergedTaxaByRankCount is a subset of taxaByRankCount, so their
          // sum equals the total for that rank. Linear scale only — log
          // doesn't compose meaningfully with stacking.
          const totalByRank  = m.taxaByRankCount || {};
          const mergedByRank = m.mergedTaxaByRankCount || {};
          const topRanks = Object.entries(totalByRank)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 25)
            .map(([rank]) => rank);
          Highcharts.chart('chart-ranks', {
            chart: { type: 'bar', backgroundColor: 'transparent' },
            title: { text: null },
            xAxis: {
              categories: topRanks,
              title: { text: null },
              labels: { style: { fontSize: '12px' } },
            },
            yAxis: {
              title: { text: 'Accepted taxa' },
              allowDecimals: false,
              stackLabels: {
                enabled: true,
                format: '{total:,.0f}',
                style: { fontWeight: 'normal', color: '#444' },
              },
            },
            legend: { enabled: true, reversed: true },
            tooltip: {
              shared: true,
              headerFormat: '<b>{point.x}</b><br/>',
              pointFormat: '{series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}%)<br/>',
              footerFormat: 'Total: <b>{point.total:,.0f}</b>',
            },
            plotOptions: {
              series: { stacking: 'normal' },
              bar: { dataLabels: { enabled: false } },
            },
            series: [
              {
                name: 'From a single source',
                color: '#1d7ea9',
                data: topRanks.map((r) => Math.max(0, (totalByRank[r] || 0) - (mergedByRank[r] || 0))),
              },
              {
                name: 'Merged from multiple sources',
                color: '#722ed1',
                data: topRanks.map((r) => mergedByRank[r] || 0),
              },
            ],
            credits: { enabled: false },
          });

          renderBar('chart-langs', topN(m.vernacularsByLanguageCount, 20, labelLanguage), {
            yTitle: 'Vernacular names',
            seriesName: 'Vernacular names',
          });

          // Extended-release secondary info: small dictionary (~5 kinds),
          // each entry is "names enriched with this kind of info from a
          // secondary source". Show all of them in the XR purple to mirror
          // the rank chart's merged segment.
          const secondaryEntries = Object.entries(m.secondarySourceByInfoCount || {})
            .sort((a, b) => b[1] - a[1]);
          Highcharts.chart('chart-secondary', {
            chart: { type: 'bar', backgroundColor: 'transparent' },
            title: { text: null },
            xAxis: {
              categories: secondaryEntries.map((e) => e[0]),
              title: { text: null },
              labels: { style: { fontSize: '12px' } },
            },
            yAxis: {
              title: { text: 'Names enriched' },
              allowDecimals: false,
            },
            legend: { enabled: false },
            tooltip: { pointFormat: '<b>{point.y:,.0f}</b> names' },
            plotOptions: {
              bar: {
                color: '#722ed1',
                dataLabels: {
                  enabled: true,
                  format: '{point.y:,.0f}',
                  style: { fontWeight: 'normal' },
                },
              },
            },
            series: [{ name: 'Names enriched', data: secondaryEntries.map((e) => e[1]) }],
            credits: { enabled: false },
          });
        })
        .catch((err) => {
          console.error('Failed to load /dataset/{key}/import metrics:', err);
          const note = document.createElement('p');
          note.style.cssText = 'color: #a00; margin: 16px 0;';
          note.textContent = 'Could not load release metrics. Please try again later.';
          const target = document.querySelector('#metrics-headline');
          if (target) target.parentNode.insertBefore(note, target);
        });
    })();
</script>
