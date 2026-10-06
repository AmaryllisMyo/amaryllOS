import { useEffect, useState } from "react";

const STORAGE_KEY = "a11y-font-token";

export const FONT_TOKENS = [
    { token: "--fs-body",  btn: "--fs-btns",  label: "S" },
    { token: "--fs-body-2", btn: "--fs-btns-2", label: "M" },
    { token: "--fs-body-3", btn: "--fs-btns-3", label: "L" },
] as const;

function load(): number {
    try {
        const i = FONT_TOKENS.findIndex(t => t.token === localStorage.getItem(STORAGE_KEY));
        return i >= 0 ? i : 0;
    } catch {
        return 0;
    }
}

export function useFontSize() {
    const [index, setIndex] = useState(load);
    const current = FONT_TOKENS[index];
    const next = FONT_TOKENS[(index + 1) % FONT_TOKENS.length];

    useEffect(() => {
        document.documentElement.style.setProperty("--fs-base", `var(${current.token})`);
        document.documentElement.style.setProperty("--fs-btn-base", `var(${current.token})`);
        try {
            localStorage.setItem(STORAGE_KEY, current.token);
        } catch {}
    }, [current.token]);

    const cycle = () => setIndex(i => (i + 1) % FONT_TOKENS.length);

    return { current, next, cycle };
}