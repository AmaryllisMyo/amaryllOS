import { Window } from "../Windows/Windows";
import styles from "./LandingPage.module.css"
import { ControlButton } from "../ControlButton/ControlButton";
import BunnyIcon from "../../assets/icons/BunnyIcon.png"
import { Minigame } from "../Minigame/Minigame";
import { SectionLoader } from "../../sections/sectionLoaderProps";
import { ExplorerIcon } from "./../../assets/icons/ExplorerIcon/ExplorerIcon";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import LittleRepair from "../../assets/images/LittleRepair.png"
import TaskBun from "../../assets/images/TaskBun.jpg"
import { DrawArea } from "../DrawArea/DrawArea";


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
              <img src={BunnyIcon} className={styles.bunnyIcon} />
              <ControlButton text="Download my Resume" className={styles.button} href="https://drive.proton.me/urls/40K09V2B6R#RugydElfoNsf" target="_blank" />
              <img src={BunnyIcon} className={`${styles.bunnyIcon} ${styles.bunnyIconFlipped}`} />
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
            <SectionLoader sections={["skills_1"]} className={styles.skills1}/>
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
          <ProjectItem title="Little Repair Shop" href="https://amaryllismyo.itch.io/little-repair-shop" description={<SectionLoader sections={["projectdescription_1"]} />}>
            <img src={LittleRepair} />
          </ProjectItem>

          <ProjectItem title="TaskBun" href="https://drive.proton.me/urls/HT5V7NYM88#f0T80xF9nc7b" description={<SectionLoader sections={["projectdescription_2"]} />}>
            <img src={TaskBun} />
          </ProjectItem>
        </Window>
      </section>

      <section id="doodleboard">
        <Window title="AmaOS Paint" className={styles.paint}>
          <DrawArea />
        </Window>
      </section>

      <section id="readme">
        <Window title="README.md">
          <SectionLoader sections={["readme"]}/>
        </Window>
      </section>
    </div>
  );
}