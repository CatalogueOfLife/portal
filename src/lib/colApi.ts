// Server-side fetch for the SSR data routes, with optional Basic auth so
// private candidate releases (preview/dev) can be read at request time.
// COL_AUTH = "user:pass" is provided at runtime via the systemd service.env;
// it falls back to the build-time PUBLIC_COL_AUTH, and is empty on prod (public).
const RAW_AUTH = process.env.COL_AUTH || process.env.PUBLIC_COL_AUTH || '';
const authHeaders: Record<string, string> = RAW_AUTH
  ? { Authorization: 'Basic ' + Buffer.from(RAW_AUTH).toString('base64') }
  : {};

export function colFetch(url: string, init: RequestInit = {}): Promise<Response> {
  return fetch(url, {
    ...init,
    headers: { ...authHeaders, ...((init.headers as Record<string, string>) ?? {}) },
  });
}
