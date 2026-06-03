// Number formatting matching the old _includes/numf.html: thousands grouped
// with '.', decimal separator ',' (European style). Default 0 decimals.
export function numf(n: number | string | undefined | null, decimals = 0, ts = '.', ds = ','): string {
  if (n === undefined || n === null || n === '') return '';
  const num = typeof n === 'string' ? Number(n) : n;
  if (Number.isNaN(num)) return String(n);
  const fixed = num.toFixed(decimals);
  const [intPart, decPart] = fixed.split('.');
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ts);
  return decimals > 0 ? `${grouped}${ds}${decPart}` : grouped;
}
