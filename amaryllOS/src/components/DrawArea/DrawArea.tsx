import { useState, useRef, useEffect } from "react";
import * as Immutable from 'immutable';
import type { MouseEvent } from "react";
import { Drawing } from "./Drawing/Drawing";
import styles from './DrawArea.module.css'

type Point = Immutable.Map<string, number>;
type Line = Immutable.List<Point>;

export const DrawArea = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [lines, setLines] = useState(Immutable.List());

    const drawAreaRef = useRef(null);

    const relativeCoordinatesForEvent = (mouseEvent: MouseEvent) => {
        const boundingRect = drawAreaRef.current.getBoundingClientRect();
        return Immutable.Map({
            x: mouseEvent.clientX - boundingRect.left,
            y: mouseEvent.clientY - boundingRect.top,
        });
    };

    const handleMouseDown = (mouseEvent: MouseEvent) => {
        if (mouseEvent.button !== 0) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);

        setLines((prevLines) => prevLines.push(Immutable.List([point])));
        setIsDrawing(true);
    }

    const handleMouseMove = (mouseEvent) => {
        if (!isDrawing) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);

        setLines((prevLines) => prevLines.updateIn([prevLines.size - 1], (line: Line) =>
            line.push(point)))
    };

    const handleMouseUp = (mouseEvent) => {
        if (!isDrawing) {
            return;
        }

        const point = relativeCoordinatesForEvent(mouseEvent);

        setLines((prevLines) => prevLines.updateIn([prevLines.size - 1], (line: Line) =>
            line.push(point)))

        setIsDrawing(false);
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDrawing]);

    return (
        <div ref={drawAreaRef} onMouseDown={handleMouseDown} className={styles.body}>
             <Drawing lines={lines} />
        </div>
    );
}
