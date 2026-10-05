import * as Immutable from 'immutable';
import type { Point, Line } from "./../../DrawArea";

const ERASER_RADIUS = 12;

function distance(p: Point, center: { x: number; y: number }) {
    const dx = (p.get('x') as number) - center.x;
    const dy = (p.get('y') as number) - center.y;
    return Math.sqrt(dx * dx + dy * dy);
}

export function eraseAtPoint(
    lines: Immutable.List<Line>,
    center: { x: number; y: number },
    radius: number = ERASER_RADIUS
): Immutable.List<Line> {
    let result = Immutable.List<Line>();

    lines.forEach(({ color, points }) => {
        let current: Point[] = [];

        points.forEach((p) => {
            if (distance(p, center) <= radius) {
                if (current.length > 1) {
                    result = result.push({ color, points: Immutable.List(current) });
                }
                current = [];
            } else {
                current.push(p);
            }
        });

        if (current.length > 1) {
            result = result.push({ color, points: Immutable.List(current) });
        }
    });

    return result;
}