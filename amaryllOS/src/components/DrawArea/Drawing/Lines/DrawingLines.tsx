import type { Line } from "./../../DrawArea";

export function DrawingLine({ line }: { line: Line }) {
  const pathData =
    'M ' + line.points.map((p) => p.get('x') + ' ' + p.get('y')).join(' L ');

  return <path d={pathData} stroke={line.color} strokeWidth={2} fill="none" />;
}