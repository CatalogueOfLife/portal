import { marked } from 'marked';

// Small helpers for the bits of markdown that live in data/frontmatter
// (image captions, descriptions) rather than in page bodies.
export const mdInline = (s?: string): string => (s ? (marked.parseInline(s) as string) : '');
export const md = (s?: string): string => (s ? (marked.parse(s) as string) : '');
