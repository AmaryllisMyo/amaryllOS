import styles from "./Navbar.module.css"
import { ControlButton } from "../ControlButton/ControlButton";
import CloseDeactivated from "../../assets/icons/CloseDeactivated.svg?react"
import MinimizeDeactivated from "../../assets/icons/MinimizeDeactivated.svg?react"
import MaximizeDeactivated from "../../assets/icons/MaximizeDeactivated.svg?react"
import { useTranslation } from "../../hooks/useTranslation";

export function Navbar() {

    const t = useTranslation('common');

    return(
        <header className={styles.titlebar}>
            <div className={styles.buttons}>
                <h4>{t.nav.home}</h4>
                <h4>{t.nav.resume}</h4>
                <h4>{t.nav.projects}</h4>
                <h4>{t.nav.doodle}</h4>
            </div>


        <div className={styles.controls}>
            <ControlButton Icon={MinimizeDeactivated} disabled={true}/>
            <ControlButton Icon={MaximizeDeactivated} disabled={true}/>
            <ControlButton Icon={CloseDeactivated} disabled={true}/>
        </div>
        </header>
    );
};