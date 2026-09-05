import { Window } from "./Windows/Windows";
import styles from "./LandingPage.module.css"
import { AboutMe } from "../sections/AboutMe";

export function LandingPage() {
    return (
      <div className={styles.rowDiv}>
        <Window title='About_Me.txt' className={styles.windowSmall}> 
          {<AboutMe />}
        </Window>
        <Window title='About_Me.txt' className={styles.windowSmall}> 
          {<AboutMe />}
        </Window>
      </div>
    );
}