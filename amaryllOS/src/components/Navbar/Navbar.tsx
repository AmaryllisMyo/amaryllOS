import styles from "./Navbar.module.css"
import { ControlButton } from "../ControlButton/ControlButton";
import CloseDeactivated from "../../assets/icons/CloseDeactivated.svg?react"
import MinimizeDeactivated from "../../assets/icons/MinimizeDeactivated.svg?react"
import MaximizeDeactivated from "../../assets/icons/MaximizeDeactivated.svg?react"

export function Navbar() {
    return(
        <nav className={styles.titlebar}>
            <div>
                <span>
                    A
                </span>
                <span>
                    A
                </span>
                <span>
                    A
                </span>
            </div>
        <div className={styles.controls}>
            <ControlButton Icon={MinimizeDeactivated} disabled={true}/>
            <ControlButton Icon={MaximizeDeactivated} disabled={true}/>
            <ControlButton Icon={CloseDeactivated} disabled={true}/>
        </div>
        </nav>
    );
};