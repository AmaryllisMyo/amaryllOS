import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import styles from "./Minigame.module.css";
import { ControlButton } from "../ControlButton/ControlButton";
import { SectionLoader } from "./../../sections/sectionLoaderProps";

type Section = "frontend" | "ux";

const FILES: Record<Section, string> = {
    frontend: "mini_skills_1",
    ux: "mini_skills_2"
};

const miniComponents = {
    li: ({ children }: { children?: ReactNode }) => (
        <li style={{ "--chars": typeof children === "string" ? children.length : 24 } as CSSProperties}>
            {children}
        </li>
    ),
};

export function Minigame() {

    const [section, setSection] = useState<Section>("frontend");


    return (


        <div className={styles.body}>

            <div className={styles.rowDiv}>
                <ControlButton className={styles.button}
                    text="Frontend Developer"
                    pressed={section === "frontend"}
                    onClick={() => setSection("frontend")} />
                <ControlButton className={styles.button}
                    text="UI/UX Designer"
                    pressed={section === "ux"}
                    onClick={() => setSection("ux")} />
            </div>

            <div className={styles.rowDiv}>
                <div>
                    <MDXProvider components={miniComponents}>
                        <SectionLoader sections={[FILES[section]]} className={styles.skills} />
                    </MDXProvider>
                </div>
                <div className={styles.sprite} />
            </div>
        </div>
    );
}