import { Window } from "./Windows/Windows";
import styles from "./LandingPage.module.css"
import { ControlButton } from "./ControlButton/ControlButton";
import BunnyIcon from "../assets/placeholder/BunnyIcon.png"
import { Minigame } from "./Minigame/Minigame";
import { SectionLoader } from "../sections/sectionLoaderProps";
import { ExplorerIcon } from "assets/icons/ExplorerIcon/ExplorerIcon";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import LittleRepair from "../assets/images/LittleRepair.png"
import TaskBun from "../assets/images/TaskBun.jpg"


export function LandingPage() {
  return (
    <div className={styles.pageColumn}>
      <section id="aboutMe">
        <div className={styles.rowDiv}>
          <div className={styles.columnDiv}>
            <Window title='Amaryllis.exe' className={styles.windowSmall}>
              <Minigame />
            </Window>

            <div className={styles.buttonRow}>
              <img src={BunnyIcon} className={`${styles.bunnyIcon} ${styles.bunnyIconFlipped}`} />
              <ControlButton text="Download my Resume" className={styles.button} />
              <img src={BunnyIcon} className={styles.bunnyIcon} />
            </div>

          </div>
          <Window title='About_Me.txt' className={styles.windowBig}>
            <SectionLoader sections={["aboutMe"]} />
          </Window>
        </div>
      </section>

      <section id="skills">
        <div className={styles.rowDiv}>
          <Window title="Skills_1.txt" className={styles.windowMedium}>
            <SectionLoader sections={["skills_1"]} />
          </Window>
          <Window title="Skills_2.txt" className={styles.windowMedium}>
            <SectionLoader sections={["skills_3"]} className={styles.skills2} />
          </Window>
          <Window title="Skills_3.txt" className={styles.windowMedium}>
            <SectionLoader sections={["skills_2"]} className={styles.skills3} />
          </Window>
        </div>
      </section>

      <section id="projects">
        <Window Icon={ExplorerIcon} title="Some-Projects - amaryllOS Explorer">
          <ProjectItem title="Little Repair Shop" description={<SectionLoader sections={["projectdescription_1"]} />}>
            <img src={LittleRepair} />
          </ProjectItem>

          <ProjectItem title="TaskBun" description={<SectionLoader sections={["projectdescription_2"]} />}>
            <img src={TaskBun} />
          </ProjectItem>
        </Window>
      </section>

      <section id="doodleboard">
        <Window title="AmaOS Paint">
          aaaaa
        </Window>
      </section>

    </div>
  );
}