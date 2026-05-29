// Minimal browser `Buffer` shim.
//
// col-browser's `btoa` dependency (and one other transitive dep) reference
// Node's global `Buffer` to base64-encode Basic-auth credentials. `Buffer` is
// undefined in the browser, so a bare `Buffer.from(...)` / `x instanceof Buffer`
// throws `ReferenceError: Buffer is not defined` and the col-browser islands
// crash on hydration — but only where an `auth` value is set (preview/dev),
// since prod passes no auth and never builds an Authorization header.
//
// col-browser's UMD build injects exactly this shim (native `btoa()`-backed)
// via Rollup's `output.intro`; its ESM build, which Astro consumes, does not.
// We install the same shim as a global so the bundled code resolves to it.
// (Importing this module — e.g. from colPaths — runs it during chunk init,
// before any island renders and calls btoa.)
//
// Long-term fix belongs in portal-components: mirror the UMD `intro` Buffer
// shim in its ESM Vite config so consumers don't need this.

class BufferShim {
  private _s: string;
  constructor(s: string) {
    this._s = s;
  }
  toString(encoding?: string): string {
    return encoding === 'base64' ? btoa(this._s) : this._s;
  }
  static from(s: unknown): BufferShim {
    return new BufferShim(String(s));
  }
  static isBuffer(): boolean {
    return false;
  }
}

const g = globalThis as unknown as { Buffer?: unknown };
if (typeof g.Buffer === 'undefined') {
  g.Buffer = BufferShim;
}
