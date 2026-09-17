import type { ReactNode } from "react";
import styles from "./ProjectItem.module.css"

export type itemProps = {
    title: string,
    children: ReactNode,
    description: ReactNode
}

export function ProjectItem (
        {title,
        children,
        description}: itemProps
) {
    return(
       <div className={styles.body}>
        <span className={styles.title}>{title}</span>
            <div className={styles.children}>
                {children}
            </div>
        <span className={styles.description}>{description}</span>
       </div>
    );
}