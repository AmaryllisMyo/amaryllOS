import { Window } from "./Windows/Windows";
import styles from "./LandingPage.module.css"
import { AboutMe } from "../sections/AboutMe";
import PlaceholderContent from "../assets/placeholder/PlaceholderContent.png"
import { ControlButton } from "./ControlButton/ControlButton";
import BunnyIcon from "../assets/placeholder/BunnyIcon.png"

export function LandingPage() {
  return (
   <div className={styles.pageColumn}>
    <div className={styles.rowDiv}>
      <div className={styles.columnDiv}>
        <Window title='Amaryllis.exe' className={styles.windowSmall}>
          <img src={PlaceholderContent} alt="Placeholder" className={styles.imgPlaceholder} />
        </Window>
        
        <div className={styles.buttonRow}>
          <img src={BunnyIcon} className={`${styles.bunnyIcon} ${styles.bunnyIconFlipped}`}/>
          <ControlButton text="Download my Resume" className={styles.button}/>
          <img src={BunnyIcon} className={styles.bunnyIcon}/>
        </div>

      </div>
      <Window title='About_Me.txt' className={styles.windowBig}>
        <AboutMe />
      </Window>
    </div>
    <div className={styles.rowDiv}>
      <Window title="Skills_1.txt" className={styles.windowMedium}>
        <span>aaaaa</span>
      </Window>
      <Window title="Skills_2.txt" className={styles.windowMedium}>
        <span>aaaaa</span>
      </Window>
      <Window title="Skills_3.txt" className={styles.windowMedium}>
        <span>aaaaa</span>
      </Window>
    </div>
   </div>
  );
}