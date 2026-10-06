import { ControlButton } from "./../ControlButton/ControlButton";
import Rectangle from "../../assets/icons/Rectangle.svg?react";
import styles from "./PaintBucketBar.module.css";

type Props = {
    colors: string[];
    color: string;
    onColorChange: (c: string) => void;
    onColorPick?: () => void;
};

export const PaintBucketBar = ({ colors, color, onColorChange, onColorPick }: Props) => {
    const row1 = colors.slice(0, 9);
    const row2 = colors.slice(9, 18);

    const pick = (c: string) => {
        onColorChange(c);
        onColorPick?.();
    };

    return (
        <div className={styles.container}>
            <ControlButton Icon={Rectangle} className={styles.selectedColor} style={{ color }} disabled label="Selected color" />

            <div className={styles.palette}>
                <div className={styles.rowHorizontal}>
                    {row1.map((c) => (
                        <ControlButton key={c} Icon={Rectangle} className={styles.button} style={{ color: c }}
                            pressed={c === color} label={`Color ${c}`} onClick={() => pick(c)} />
                    ))}
                </div>
                <div className={styles.rowHorizontal}>
                    {row2.map((c) => (
                        <ControlButton key={c} Icon={Rectangle} className={styles.button} style={{ color: c }}
                            pressed={c === color} label={`Color ${c}`} onClick={() => pick(c)} />
                    ))}
                </div>
            </div>
        </div>
    );
};