const modules = import.meta.glob<{ default: React.ComponentType<any>}>(
    '../content/*/*.mdx'
);

export function loadSection (section: string, lang: string
) {
    const path = `../content/${lang}/${section}.mdx`
    const loader = modules[path];

    if(!loader){
        throw new Error(`Section ${section} not found for language ${lang}`);
    }

    return loader().then((m) => m.default);
}