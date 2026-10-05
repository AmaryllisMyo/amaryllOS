import { ControlButton } from "./../ControlButton/ControlButton";
import Pencil from "../../assets/icons/Pencil.svg?react"
import Eraser from "../../assets/icons/Eraser.svg?react"
import styles from "./PaintToolsBar.module.css"
import type {Tool} from "components/DrawArea/DrawArea";

type Props = {
    tool: Tool;
    onToolChange: (t: Tool) => void;
    onReset?: () => void;
};

export const PaintToolsBar = ({ tool, onToolChange, onReset }: Props) => {
    return (
        <div className={styles.column}>
            <div className={styles.horizontalRow}>
                <ControlButton
                    Icon={Pencil}
                    className={styles.button}
                    label="Pencil"
                    pressed={tool === "pencil"}
                    onClick={() => onToolChange("pencil")}
                />
                <ControlButton
                    Icon={Eraser}
                    className={styles.button}
                    label="Eraser"
                    pressed={tool === "eraser"}
                    onClick={() => onToolChange("eraser")}
                />
            </div>
            <ControlButton label="reset-drawing" text="Reset" className={styles.resetButton} onClick={onReset} />
        </div>
    );
}