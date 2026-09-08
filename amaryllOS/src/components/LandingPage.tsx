import { Window } from "./Windows/Windows";
import styles from "./LandingPage.module.css"
import { ControlButton } from "./ControlButton/ControlButton";
import BunnyIcon from "../assets/placeholder/BunnyIcon.png"
import { Minigame } from "./Minigame/Minigame";
import { SectionLoader } from "../sections/sectionLoaderProps";
import { ExplorerIcon } from "assets/icons/ExplorerIcon/ExplorerIcon";

export function LandingPage() {
  return (
   <div className={styles.pageColumn}>
    <div className={styles.rowDiv}>
      <div className={styles.columnDiv}>
        <Window title='Amaryllis.exe' className={styles.windowSmall}>
          <Minigame/>
        </Window>
        
        <div className={styles.buttonRow}>
          <img src={BunnyIcon} className={`${styles.bunnyIcon} ${styles.bunnyIconFlipped}`}/>
          <ControlButton text="Download my Resume" className={styles.button}/>
          <img src={BunnyIcon} className={styles.bunnyIcon}/>
        </div>

      </div>
      <Window title='About_Me.txt' className={styles.windowBig}>
        <SectionLoader sections={["aboutMe"]}/>
      </Window>
    </div>
    <div className={styles.rowDiv}>
      <Window title="Skills_1.txt" className={styles.windowMedium}>
        <SectionLoader sections={["skills_1"]}/>
      </Window>
      <Window title="Skills_2.txt" className={styles.windowMedium}>
        <SectionLoader sections={["skills_3"]}  className={styles.skills2}/>
      </Window>
      <Window title="Skills_3.txt" className={styles.windowMedium}>
        <SectionLoader sections={["skills_2"]} className={styles.skills3}/>
      </Window>
    </div>

    <div>
      <Window Icon={ExplorerIcon} title="Some-Projects - amaryllOS Explorer">
        aaaaa
      </Window>
    </div>
   
   </div>
  );
}