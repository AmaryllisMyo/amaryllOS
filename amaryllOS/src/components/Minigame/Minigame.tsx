import styles from "./Minigame.module.css"
import { ControlButton } from "../ControlButton/ControlButton";

export function Minigame() {
    return(
        <div className={styles.body}>

            <div className={styles.rowDiv}>
                <ControlButton className={styles.button} text="Frontend Developer"/>
                <ControlButton className={styles.button} text="UI/UX Designer"/>
            </div>

           <div className={styles.rowDiv}>
                <div className={styles.placeholder}/>
                <div className={styles.sprite}/>
           </div>
        </div>
    );
}