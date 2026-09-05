import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MDXProvider } from "@mdx-js/react";
import { loadSection } from "./loadSection";
import styles from "./AboutMe.module.css"

const mdxComponents = {
    h2: (props: any) => <h2 className="section-title" {...props}/>,
    h3: (props: any) => <h3 className="section-subtitle" {...props}/>,
    p: (props: any) => <p className="section-text" {...props} />,
    a: (props: any) => <a className="link" {...props} />,
    ul: (props: any) => <ul className="section-list" {...props} />,
};

export function AboutMe() {
    const { i18n } = useTranslation();
    const [Content, setContent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        if (!i18n.language) return;
        let cancelled = false;
        setContent(null);
        loadSection('aboutMe', i18n.language).then((C) => {
            if(!cancelled) setContent(() => C);
        });
        return () => {
            cancelled = true;
        };
    }, [i18n.language]);

    if(!Content) return <div className="section-skeleton" />;

    return(
        <section className={styles.root}>
            <MDXProvider components={mdxComponents} >
                <Content />
            </MDXProvider>
        </section>
    )

}