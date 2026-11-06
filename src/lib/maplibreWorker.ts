// MapLibre GL JS 6 (required by col-browser >= 2.8.0) no longer inlines its
// web worker: the host app must point it at the worker script before any map
// is created. Vite's `?worker&url` emits the worker as its own hashed asset and
// gives us its URL. Import this module for its side effect from every island
// that can render a map (today only the Taxon distribution map).
import { setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

setWorkerUrl(workerUrl);
