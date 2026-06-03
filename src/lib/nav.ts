import { parse } from 'yaml';
// Inline the YAML at build time (?raw) so the parsed nav is bundled into both
// the static output and the SSR server — readFileSync(import.meta.url) would
// break once the modules are bundled into dist/.
import navYaml from '../../_data/nav.yml?raw';

// Navigation stays editor-owned in _data/nav.yml (single source of truth, as before).
export interface NavChild {
  name: string;
  path: string;
  desc?: string;
}
export interface NavItem {
  name: string;
  section_id: string;
  path?: string;
  children?: NavChild[];
}

export const nav: NavItem[] = parse(navYaml) as NavItem[];
