import EN from "./../../assets/icons/EN.png"
import IT from "./../../assets/icons/IT.png"
import { ControlButton } from "./../../components/ControlButton/ControlButton";
import styles from "./LangSwitcherBTN.module.css"

export type Lang = "en" | "it";

const FLAGS: Record<Lang, string> = {
    en: EN,
    it: IT,
};


export type LangSwitcherProps = {
    lang: Lang;
    text?: string;
    label?: string;
    onClick?: () => void;
    className?: string;
}


export const LangSwitcherBTN = ({ lang, text, label, onClick, className }: LangSwitcherProps) => {
    return (
       <ControlButton
            text={text}
            label={label}
            onClick={onClick}
            className={styles.button}>
        <img src={FLAGS[lang]} alt="" width={30} height={20}/>
       </ControlButton>
    );
}