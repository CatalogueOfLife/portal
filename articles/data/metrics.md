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
  #changes-over-time,
  #usages-by-status,
  #names-by-nomenclatural-code,
  #accepted-taxa-by-rank,
  #vernacular-names-by-language,
  #extended-release-additions {
    margin-top: 56px;
  }

  /* Base / eXtended toggle for the release-timeline chart. */
  #timeline-toggle {
    display: inline-flex;
    margin: 4px 0 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
  }
  #timeline-toggle button {
    margin: 0;
    border: 0;
    background: #fff;
    color: #333;
    padding: 6px 14px;
    font-size: 13px;
    line-height: 1.4;
    cursor: pointer;
  }
  #timeline-toggle button + button {
    border-left: 1px solid #ccc;
  }
  #timeline-toggle button.active {
    background: #1d7ea9;
    color: #fff;
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

<div id="chart-ranks" style="height: 775px;"></div>

## Vernacular names by language

The twenty languages with the most vernacular names in the catalogue. Total languages covered: <span id="m-lang-total">…</span>.

<div id="chart-langs" style="height: 600px;"></div>

## Extended release additions

For names that originate in the base release, the [eXtended Release](/building/releases) supplements them with secondary information drawn from additional sources. The breakdown below shows how many base-release names received each kind of added information.

<div id="chart-secondary" style="height: 320px;"></div>

## Changes over time

How the number of accepted families, genera and species — and the total of all names including synonyms — has changed across past COL releases. Figures from 2020 onward come from each ChecklistBank release; earlier points are the historical [annual checklists](/data/download#past-releases) back to 2005, recomputed from the original release databases. Use the switch to compare the [Base and eXtended Release](/building/releases) timelines, which sit at very different scales (note the logarithmic axis).

<div id="timeline-toggle" role="group" aria-label="Release type">
  <button type="button" data-mode="extended" class="active">eXtended Release</button>
  <button type="button" data-mode="base">Base Release</button>
</div>

<div id="chart-timeline" style="height: 440px;"></div>

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
        theme: window.ColBrowserTheme,
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

          // Bar length on the log axis = log(total), but each base/extended
          // segment occupies its linear proportion of the bar's pixel length.
          // Stacked + log: Highcharts plots segment 1 from log(yAxisMin) to
          // log(v1), segment 2 from log(v1) to log(v1+v2). With yAxisMin=1
          // (so log(min)=0) the bar runs 0 → log(v1+v2). Set v1 = total^p
          // and v2 = total − v1 (with p = base/total) so:
          //   v1 + v2 = total           → bar ends at log(total)
          //   log(v1) = p · log(total)  → segment 1 takes p of the bar's length
          // Real counts ride along on point.realCount / point.realTotal so
          // tooltip + end label show the actual numbers, not the fake y's.
          const totalByRank  = m.taxaByRankCount || {};
          const mergedByRank = m.mergedTaxaByRankCount || {};
          const topRanks = Object.entries(totalByRank)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 25)
            .map(([rank]) => rank);
          const baseData = [];
          const extData  = [];
          topRanks.forEach(function (r) {
            const total   = totalByRank[r] || 0;
            const merged  = mergedByRank[r] || 0;
            const regular = Math.max(0, total - merged);
            if (total <= 0) { baseData.push(null); extData.push(null); return; }
            const baseFrac = regular / total;
            const v1 = Math.pow(total, baseFrac);
            baseData.push({ y: v1,          realCount: regular, realTotal: total });
            extData .push({ y: total - v1,  realCount: merged,  realTotal: total });
          });
          Highcharts.chart('chart-ranks', {
            chart: { type: 'bar', backgroundColor: 'transparent' },
            title: { text: null },
            xAxis: {
              categories: topRanks,
              title: { text: null },
              labels: { style: { fontSize: '12px' } },
            },
            yAxis: {
              type: 'logarithmic',
              min: 1,    // pin log(min)=0 so segment proportions equal base/total
              minorTickInterval: 0.1,
              title: { text: 'Accepted taxa (log)' },
              allowDecimals: false,
              // For horizontal bar charts Highcharts defaults this to true,
              // which renders the LAST series on the left (closest to axis).
              // Flip so the series order matches the visual order: Base
              // first (left), Extended second (right).
              reversedStacks: false,
            },
            legend: { enabled: true, reversed: true },
            tooltip: {
              shared: true,
              useHTML: true,
              formatter: function () {
                // Plain inline tooltip; just a fixed-width inline-block for
                // the label ("Extended" is the longest word) so the counts
                // line up. Real counts on point.realCount / .realTotal
                // because the y values are the log-scaled fakes.
                const short = (n) => n.replace(/ release$/, '');
                const tag = '<span style="display:inline-block;width:5em;">';
                const total = this.points[0].point.realTotal;
                const lines = this.points.map(function (p) {
                  const count = p.point.realCount;
                  const percent = total > 0 ? (count / total) * 100 : 0;
                  return tag + short(p.series.name) + '</span><b>'
                       + count.toLocaleString() + '</b> (' + percent.toFixed(1) + '%)';
                });
                lines.push(tag + 'Total</span><b>' + total.toLocaleString() + '</b>');
                const rank = this.points[0].category;
                return '<b>' + rank + '</b><br/>' + lines.join('<br/>');
              },
            },
            plotOptions: {
              series: { stacking: 'normal' },
              bar: { dataLabels: { enabled: false } },
            },
            series: [
              {
                name: 'Base release',
                color: '#7cb5ec',
                data: baseData,
              },
              {
                name: 'Extended release',
                color: '#722ed1',
                data: extData,
                // Total sits just past the right end of the whole bar (= the
                // right end of the Extended segment, which is the last one now
                // that reversedStacks is off). align:'left' anchors the label's
                // left edge at the bar end so the number runs rightward, clear
                // of the bar — matching the vernacular-by-language chart below.
                dataLabels: {
                  enabled: true,
                  align: 'left',
                  inside: false,
                  crop: false,
                  overflow: 'allow',
                  // Plain dark text like the vernacular chart's labels. Without an
                  // explicit color, Highcharts' 'contrast' default paints the label
                  // white (it treats it as belonging to the purple bar) with a
                  // textOutline halo — the "outlined white" look we don't want.
                  style: { fontWeight: 'normal', color: '#000000', textOutline: 'none' },
                  formatter: function () { return this.point.realTotal.toLocaleString(); },
                },
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
          // the rank chart's merged segment. The backend's "parent" key
          // is shown as "classification" — clearer for end users.
          const secondaryLabel = { parent: 'classification' };
          const secondaryEntries = Object.entries(m.secondarySourceByInfoCount || {})
            .sort((a, b) => b[1] - a[1])
            .map(([k, v]) => [secondaryLabel[k] || k, v]);
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

<!-- ── Release timeline (static; built from cached release metrics) ──────── -->
<script>
    'use strict';
    // Emitted at build time from two static sources — no runtime API call:
    //   * site.changelog.entries: cached ChecklistBank release metrics
    //     (2020-12 onward), the same data the changelog page uses.
    //   * site.data.legacy_metrics: hand-collected annual-checklist figures
    //     for 2005-2019 (see _data/legacy_metrics.yml). All base releases;
    //     family/genus/names are null where they were never published.
    window.ColTimeline = [
    {% for log in site.changelog.entries %}{% assign m = log.rel.metrics %}{% if m and m.taxaByRankCount and m.taxaByRankCount.species %}{ t: "{{ log.rel.dataset.issued | default: log.rel.dataset.created | truncate: 10, '' }}", ext: {{ log.rel.extended | default: false }}, family: {{ m.taxaByRankCount.family | default: 0 }}, genus: {{ m.taxaByRankCount.genus | default: 0 }}, species: {{ m.taxaByRankCount.species | default: 0 }}, names: {{ m.nameCount | default: 0 }} },
    {% endif %}{% endfor %}{% for r in site.data.legacy_metrics %}{ t: "{{ r.date }}", ext: false, family: {{ r.family | default: 'null' }}, genus: {{ r.genus | default: 'null' }}, species: {{ r.species | default: 'null' }}, names: {{ r.names | default: 'null' }} },
    {% endfor %}];
</script>

<script>
    (function () {
      'use strict';

      var DATA = (window.ColTimeline || []).filter(function (d) { return d && d.t; });

      // Series in draw order; colors echo the page palette (Extended-release
      // purple for the all-names total, base blue for species).
      var SERIES = [
        { key: 'family',  name: 'Families',  color: '#f7a35c' },
        { key: 'genus',   name: 'Genera',    color: '#90ed7d' },
        { key: 'species', name: 'Species',   color: '#7cb5ec' },
        { key: 'names',   name: 'All names', color: '#722ed1' },
      ];

      var fmt = function (n) { return Number(n || 0).toLocaleString(); };
      // Release dates are ISO "YYYY-MM-DD"; build a UTC timestamp for the axis.
      var ts = function (s) {
        var p = String(s).slice(0, 10).split('-');
        return Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1);
      };

      function render(mode) {
        var ext = mode === 'extended';
        var rows = DATA.filter(function (d) { return !!d.ext === ext; })
                       .sort(function (a, b) { return ts(a.t) - ts(b.t); });

        Highcharts.chart('chart-timeline', {
          chart: { type: 'line', backgroundColor: 'transparent' },
          title: { text: null },
          xAxis: { type: 'datetime', title: { text: null } },
          yAxis: {
            type: 'logarithmic',
            title: { text: 'Count (log scale)' },
            allowDecimals: false,
          },
          legend: { enabled: true },
          tooltip: {
            shared: true,
            useHTML: true,
            formatter: function () {
              var lines = this.points.map(function (p) {
                return '<span style="color:' + p.color + '">●</span> '
                     + p.series.name + ': <b>' + fmt(p.y) + '</b>';
              });
              return '<b>' + Highcharts.dateFormat('%e %b %Y', this.x) + '</b><br/>'
                   + lines.join('<br/>');
            },
          },
          plotOptions: { series: { marker: { radius: 3 } } },
          series: SERIES.map(function (s) {
            return {
              name: s.name,
              color: s.color,
              data: rows.map(function (r) { return [ts(r.t), r[s.key] || null]; }),
            };
          }),
          credits: { enabled: false },
        });
      }

      var toggle = document.getElementById('timeline-toggle');
      if (toggle) {
        toggle.addEventListener('click', function (e) {
          var btn = e.target.closest('button[data-mode]');
          if (!btn) return;
          Array.prototype.forEach.call(toggle.querySelectorAll('button'), function (b) {
            b.classList.toggle('active', b === btn);
          });
          render(btn.getAttribute('data-mode'));
        });
      }

      render('extended');
    })();
</script>
