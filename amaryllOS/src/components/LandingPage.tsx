import { Window } from "./Windows/Windows";
import styles from "./LandingPage.module.css"
import { AboutMe } from "../sections/AboutMe";

export function LandingPage() {
    return (
      <div className={styles.windowSmall}>
        <Window 
        title='About_Me.txt' 
        children={<AboutMe/>}
        />
      </div>
    );
}