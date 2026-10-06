import TextSize from "./../../assets/icons/TextSize.png"
import { ControlButton } from "../ControlButton/ControlButton";
import styles from "./FontSizeSwitcherBTN.module.css"

export type FontSizeSwitcherProps = {
    text?: string;
    label?: string;
    onClick?: () => void;
    className?: string;
}

export const FontSizeSwitcherBTN = ({ text, label, onClick, className }: FontSizeSwitcherProps) => {
    return (
        <ControlButton
            text={text}
            label={label}
            onClick={onClick}
            className={`${styles.button} ${className ?? ""}`}>
            <img src={TextSize} alt="" width={30} height={20} />
        </ControlButton>
    );
}