import { useTranslation } from "react-i18next";
import { LangSwitcherBTN, type Lang } from "./LangSwitcherBTN/LangSwitchBTN";

const SUPPORTED: Lang[] = ["en", "it"];

export function LanguageSwitcher({ className }: { className?: string }) {
    const { i18n } = useTranslation();

    const base = (i18n.resolvedLanguage ?? i18n.language ?? "en").split("-")[0] as Lang;
    const current: Lang = SUPPORTED.includes(base) ? base : "en";

    const next: Lang = current === "en" ? "it" : "en";

    return (
        <LangSwitcherBTN
            lang={next}
            text={next.toUpperCase()}
            label={next === "it" ? "IT" : "EN"}
            onClick={() => i18n.changeLanguage(next)}
            className={className}
        />
    );
}