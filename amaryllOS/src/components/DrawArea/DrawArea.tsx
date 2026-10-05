import { useState, useRef, useEffect } from "react";
import * as Immutable from 'immutable';
import type { MouseEvent } from "react";
import { Drawing } from "./Drawing/Drawing";
import styles from './DrawArea.module.css'
import { PaintToolsBar } from "./../PaintToolsBar/PaintToolsBar";
import { PaintBucketBar } from "./../PaintBucketBar/PaintBucketBar";
import { ControlButton } from "./../ControlButton/ControlButton";
import { PAINT_COLORS } from "./../../utils/paintColors";
import { eraseAtPoint } from "./Drawing/Eraser/Eraser";
import { LoadingIcon } from "assets/icons/LoadingIcon/LoadingIcon";
import emailjs from "@emailjs/browser";

export type Point = Immutable.Map<string, number>;
export type Line = { color: string; points: Immutable.List<Point> };
export type Tool = "pencil" | "eraser";

export const DrawArea = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [lines, setLines] = useState(Immutable.List<Line>());
    const [color, setColor] = useState<string>(PAINT_COLORS[0]);
    const [tool, setTool] = useState<Tool>("pencil");
    const [isSending, setIsSending] = useState(false);

    const MAX_BYTES = 45 * 1024;

    const drawAreaRef = useRef(null);

    const relativeCoordinatesForEvent = (mouseEvent: MouseEvent) => {
        const boundingRect = drawAreaRef.current.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - boundingRect.left,
            y: mouseEvent.clientY - boundingRect.top,
        };
    };

    const handleMouseDown = (mouseEvent: MouseEvent) => {
        if (mouseEvent.button !== 0) {
            return;
        }

        const coords = relativeCoordinatesForEvent(mouseEvent);

        if (tool === "eraser") {
            setLines((prevLines) => eraseAtPoint(prevLines, coords));
        } else {
            const point = Immutable.Map(coords);
            setLines((prevLines) => prevLines.push({ color, points: Immutable.List([point]) }));
        }

        setIsDrawing(true);
    }

    const handleMouseMove = (mouseEvent) => {
        if (!isDrawing) {
            return;
        }

        const coords = relativeCoordinatesForEvent(mouseEvent);

        if (tool === "eraser") {
            setLines((prevLines) => eraseAtPoint(prevLines, coords));
        } else {
            const point = Immutable.Map(coords);
            setLines((prevLines) => prevLines.update(prevLines.size - 1, (line: Line) => ({
                ...line,
                points: line.points.push(point),
            })));
        }
    };

    const handleMouseUp = (mouseEvent) => {
        if (!isDrawing) {
            return;
        }

        if (tool !== "eraser") {
            const coords = relativeCoordinatesForEvent(mouseEvent);
            const point = Immutable.Map(coords);
            setLines((prevLines) => prevLines.update(prevLines.size - 1, (line: Line) => ({
                ...line,
                points: line.points.push(point),
            })));
        }

        setIsDrawing(false);
    };

    const handleReset = () => {
        setLines(Immutable.List<Line>());
    };


    const svgRef = useRef<SVGSVGElement>(null);

    const buildExportSvg = (svgEl: SVGSVGElement) => {
        const { width, height } = svgEl.getBoundingClientRect();
        const clone = svgEl.cloneNode(true) as SVGSVGElement;

        clone.removeAttribute("style");
        clone.setAttribute("width", String(width));
        clone.setAttribute("height", String(height));
        clone.setAttribute("viewBox", `0 0 ${width} ${height}`);

        const originals = svgEl.querySelectorAll("path");
        clone.querySelectorAll("path").forEach((p, i) => {
            p.setAttribute("stroke", getComputedStyle(originals[i]).stroke);
        });

        const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bg.setAttribute("width", "100%");
        bg.setAttribute("height", "100%");
        bg.setAttribute("fill", "white");
        clone.insertBefore(bg, clone.firstChild);


        return new XMLSerializer()
            .serializeToString(clone)
            .replace(/(\d+\.\d)\d+/g, "$1");
    };

    const handleSend = async () => {

        if (!svgRef.current || lines.isEmpty() || isSending) return;

        const { width, height } = svgRef.current.getBoundingClientRect();
        const svg = buildExportSvg(svgRef.current);

        let jpg_b64 = "";
        for (const q of [0.8, 0.6, 0.4]) {
            jpg_b64 = await svgToJpegBase64(svg, Math.round(width), Math.round(height), q);
            if (jpg_b64.length <= MAX_BYTES) break;
        }
        if (jpg_b64.length > MAX_BYTES) {
            console.error("Immagine troppo pesante");
            return;
        }

        try {
            setIsSending(true);
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { jpg_b64 },
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            handleReset();
        } catch (err) {
            console.error(err);
        } finally {
            setIsSending(false);
        }
    };


    const svgToJpegBase64 = (svg: string, width: number, height: number, quality = 1) =>
        new Promise<string>((resolve, reject) => {
            const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
            const img = new Image();

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d")!;
                ctx.drawImage(img, 0, 0, width, height);
                URL.revokeObjectURL(url);
                resolve(canvas.toDataURL("image/jpeg", quality).split(",")[1]);
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                reject(new Error("Failed SVG conversion"));
            };
            img.src = url;
        });

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDrawing, tool, color]);

    return (
        <div className={styles.paintBucket}>
            <div className={styles.toolsLayout}>
                <PaintToolsBar tool={tool} onToolChange={setTool} onReset={handleReset} />
                <div ref={drawAreaRef} onMouseDown={handleMouseDown} className={styles.body}>
                    <Drawing svgRef={svgRef} lines={lines} />
                </div>
            </div>
            <div className={styles.rowDiv}>
                <PaintBucketBar colors={PAINT_COLORS} color={color} onColorChange={setColor} onColorPick={() => setTool("pencil")} />
                <ControlButton className={styles.button} text={isSending ? "" : "Send!"} Icon = {isSending ? LoadingIcon : null } label="send-doodle" onClick={handleSend} disabled={isSending} />
            </div>
        </div>
    );
}