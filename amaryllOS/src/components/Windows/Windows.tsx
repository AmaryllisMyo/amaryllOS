import type { ComponentType, ReactNode } from "react";
import styles from "./Windows.module.css";
import { ControlButton } from "../Button/ControlButton";
import type { IconProps } from "../../assets/icons/types";
import CloseDeactivated from "../../assets/icons/CloseDeactivated.svg?react"
import MinimizeDeactivated from "../../assets/icons/MinimizeDeactivated.svg?react"
import MaximizeDeactivated from "../../assets/icons/MaximizeDeactivated.svg?react"

 
export type WindowProps = {
  title: string;
  Icon?: ComponentType<IconProps>;
  children: ReactNode;
  footer?: ReactNode;
  scrollable?: boolean;
  className?: string;
  bodyHeight?: string;
};
 
export function Window({
  title,
  Icon,
  children,
  footer,
  scrollable = false,
  className,
  bodyHeight
}: WindowProps) {
  return (
    <section className={[styles.window, className].filter(Boolean).join(" ")}>
      <header className={styles.titlebar}>
        <div className={styles.titleGroup}>
          {Icon && <Icon />}
          <span className={styles.title}>{title}</span>
        </div>
 
        <div className={styles.controls}>
            <ControlButton Icon={MinimizeDeactivated} disabled={true}/>
            <ControlButton Icon={MaximizeDeactivated} disabled={true}/>
            <ControlButton Icon={CloseDeactivated} disabled={true}/>
        </div>
      </header>
 
      <div
        className={styles.body}
        data-scrollable={scrollable}
        style={bodyHeight ? { height: bodyHeight } : undefined}
      >
        {children}
      </div>
 
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </section>
  );
}