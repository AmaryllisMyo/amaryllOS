import styles from "./Navbar.module.css"
import { ControlButton } from "../ControlButton/ControlButton";
import CloseDeactivated from "../../assets/icons/CloseDeactivated.svg?react"
import MinimizeDeactivated from "../../assets/icons/MinimizeDeactivated.svg?react"
import MaximizeDeactivated from "../../assets/icons/MaximizeDeactivated.svg?react"
import { useTranslation } from "../../hooks/useTranslation";
import AmaryllOS from "../../assets/icons/AmaryllOS.svg?react"

export function Navbar() {

    const t = useTranslation('common');

    return (
        <header className={styles.titlebar}>
            <div className={styles.buttons}>
                <AmaryllOS style={{height: "3rem", width: "3rem"}}/>
                <button className={styles.button}>
                    <a href="#aboutMe" className={styles.link}>
                        <h4>{t.nav.home}</h4>
                    </a>
                </button>

                <button className={styles.button}>
                    <a href="#skills" className={styles.link}>
                        <h4>{t.nav.skills}</h4>
                    </a>
                </button>

                <button className={styles.button}>
                    <a href="#projects" className={styles.link}>
                        <h4>{t.nav.projects}</h4>
                    </a>
                </button>

                <button className={styles.button}>
                    <a className={styles.link} href="#doodleboard">
                        <h4>{t.nav.doodle}</h4>
                    </a>
                </button>
            </div>


            <div className={styles.controls}>
                <ControlButton Icon={MinimizeDeactivated} disabled={true} />
                <ControlButton Icon={MaximizeDeactivated} disabled={true} />
                <ControlButton Icon={CloseDeactivated} disabled={true} />
            </div>
        </header>
    );
};