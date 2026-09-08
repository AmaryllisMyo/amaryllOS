import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MDXProvider } from "@mdx-js/react";
import { loadSection } from "./loadSection";
import styles from "./SectionLoaderProps.module.css"


const mdxComponents = {
    h2: (props: any) => <h2 className="section-title" {...props}/>,
    h3: (props: any) => <h3 className="section-subtitle" {...props}/>,
    p: (props: any) => <p className="section-text" {...props} />,
    a: (props: any) => <a className="link" {...props} />,
    ul: (props: any) => <ul className="section-list" {...props} />,
};

type SectionLoaderProps = {
    sections: string[];
    className?: string,
};

export function SectionLoader({ sections, className }: SectionLoaderProps) {
    const { i18n } = useTranslation();
    const [Sections, setSections] = useState<React.ComponentType[]>([]);

    useEffect(() => {
        if (!i18n.language) return;
        let cancelled = false;
        setSections([]);
        Promise.all(
            sections.map((s) => loadSection(s, i18n.language))
        ).then((comps) => {
            if (!cancelled) setSections(comps);
        });
        return () => { cancelled = true; };
    }, [i18n.language, sections.join(',')]);

    if (Sections.length === 0) return <div className="section-skeleton" />;

    return (
        <section  className={[styles.root, className].filter(Boolean).join(" ")}>
            <MDXProvider components={mdxComponents}>
                {Sections.map((C, i) => <C key={i} />)}
            </MDXProvider>
        </section>
    );
}