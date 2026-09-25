import { DrawingLine } from "./Lines/DrawingLines";

export function Drawing({ lines }) {
  return (
    <svg width="100%" height="500" style={{ position: "absolute", top: 0, left: 0 }}>
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}
