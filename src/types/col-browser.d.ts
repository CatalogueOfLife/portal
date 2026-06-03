// col-browser (portal-components) ships no types; declare the exports we use.
declare module 'col-browser' {
  import type { ComponentType } from 'react';
  export const Tree: ComponentType<Record<string, unknown>>;
  export const Search: ComponentType<Record<string, unknown>>;
  export const SourceDataset: ComponentType<Record<string, unknown>>;
  export const SourceDatasetList: ComponentType<Record<string, unknown>>;
  export const Taxon: ComponentType<Record<string, unknown>>;
  export const TaxonBreakdown: ComponentType<Record<string, unknown>>;
  export const TaxonDistribution: ComponentType<Record<string, unknown>>;
  export const BibTex: ComponentType<Record<string, unknown>>;
  export function withRouting<P>(C: ComponentType<P>, opts: Record<string, unknown>): ComponentType<P>;
}
