import styles from "./ControlButton.module.css"
import type { IconProps } from "../../assets/icons/types";
import type { ComponentType } from "react";

export type ControlButtonProps = {
    Icon?: ComponentType<IconProps>;
    text?: string;
    label?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
};

export function ControlButton({
    Icon,
    text,
    label,
    onClick,
    className,
    disabled
}: ControlButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            disabled={disabled}
            className={[styles.controlBtn, className].filter(Boolean).join(" ")}>
            {Icon && <Icon className={styles.iconSvg} />}
            {text}
        </button>
    );
};