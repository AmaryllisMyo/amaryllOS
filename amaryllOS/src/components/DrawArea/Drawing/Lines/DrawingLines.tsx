export function DrawingLine({ line }) {
  const pathData =
    'M ' + line.map((p) => p.get('x') + ' ' + p.get('y')).join(' L ');

  return <path d={pathData} stroke="black" strokeWidth={2} fill="none" />;
}