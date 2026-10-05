import styles from "./ControlButton.module.css"
import type { IconProps } from "../../assets/icons/types";
import type { ComponentType, CSSProperties } from "react";
import type { ReactNode } from "react";

export type ControlButtonProps = {
    Icon?: ComponentType<IconProps>;
    text?: string;
    label?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    pressed?: boolean;
    style?: CSSProperties;
    children?: ReactNode;
    href?: string;
    target?: string;
};

export function ControlButton({
    Icon, text, label, onClick, className,
    disabled, pressed, style, children, href, target
}: ControlButtonProps) {
    const classes = [styles.controlBtn, className].filter(Boolean).join(" ");

    const content = (
        <>
            {Icon && <Icon className={styles.iconSvg} />}
            {text}
            {children}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className={classes}
                style={style}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            aria-label={label}
            aria-pressed={pressed}
            onClick={onClick}
            disabled={disabled}
            style={style}
            className={classes}
        >
            {content}
        </button>
    );
}