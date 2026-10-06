import { DrawingLine } from "./Lines/DrawingLines";
import type { RefObject } from "react";
import type { List } from "immutable";
import type { Line } from "../DrawArea";

interface DrawingProps {
    lines: List<Line>;
    svgRef: RefObject<SVGSVGElement | null>;
}


export function Drawing({ lines, svgRef }: DrawingProps) {
  return (
    <svg ref={svgRef} width="100%" height="500" style={{ position: "absolute", top: 0, left: 0 }}>
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}
