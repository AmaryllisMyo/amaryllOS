import type { ReactNode } from "react";
import styles from "./ProjectItem.module.css"

export type itemProps = {
    title: string,
    href?: string;
    children: ReactNode,
    description: ReactNode
}

export function ProjectItem(
    { title,
        children,
        href,
        description }: itemProps
) {
       return (
        <div className={styles.body}>
            {href ? (
                <a
                    className={`${styles.title} ${styles.link}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            ) : (
                <span className={styles.title}>{title}</span>
            )}
            <div className={styles.children}>{children}</div>
            <span className={styles.description}>{description}</span>
        </div>
    );
}