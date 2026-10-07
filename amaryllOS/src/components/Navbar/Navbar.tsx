import styles from "./Navbar.module.css"
import { ControlButton } from "../ControlButton/ControlButton";
import CloseDeactivated from "../../assets/icons/CloseDeactivated.svg?react"
import MinimizeDeactivated from "../../assets/icons/MinimizeDeactivated.svg?react"
import MaximizeDeactivated from "../../assets/icons/MaximizeDeactivated.svg?react"
import { useTranslation } from "../../hooks/useTranslation";
import AmaryllOS from "../../assets/icons/AmaryllOS.svg?react"
import { LanguageSwitcher } from "../../components/LangSwitcher";
import { useFontSize } from "../../hooks/useFontSize";
import { FontSizeSwitcherBTN } from "../FontSizePicker/FontSizeSwitcherBTN";


export function Navbar() {

    const t = useTranslation('common');
    const { current, next, cycle } = useFontSize();

    return (
        <header className={styles.titlebar}>
            <div className={styles.buttons}>
                <AmaryllOS style={{ height: "3rem", width: "3rem" }} />
                <a href="#aboutMe" className={styles.link}>{t.nav.home}</a>

                <a href="#skills" className={styles.link}>{t.nav.skills}</a>

                <a href="#projects" className={styles.link}>{t.nav.projects}</a>

                <a className={styles.link} href="#doodleboard">{t.nav.doodle}</a>

                <a href="#readme" className={styles.link} >{t.nav.readme}</a>
            </div>


            <div className={styles.switcher}>
                <LanguageSwitcher />
                <FontSizeSwitcherBTN onClick={cycle} text={current.label} label={`current size: ${current.label}. Press to go to ${next.label}`} />
                <div className={styles.controls}>
                    <ControlButton Icon={MinimizeDeactivated} disabled={true} />
                    <ControlButton Icon={MaximizeDeactivated} disabled={true} />
                    <ControlButton Icon={CloseDeactivated} disabled={true} />
                </div>
            </div>
        </header>
    );
};