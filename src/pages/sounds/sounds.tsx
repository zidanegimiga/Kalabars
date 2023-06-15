import React, { useContext } from "react";
import styles from "./sounds.module.scss";
import { Home, Playstore, Sights, Sound } from "shared/Icons/SidebarIcons";
import SoundCategory from "features/Sounds/SoundCategory/SoundCategory";
import Player from "features/Sounds/Player/Player";
import { KalabarsContext } from "global/KalabarsContext";
import Link from "next/link";
import SideBarItem from "shared/SideBarItem/SideBarItem";

const Sounds = () => {
  const { openMenu } = useContext(KalabarsContext);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem/>
        <div className={styles.content}>
          <SoundCategory title="New Sounds" />
          <SoundCategory title="Podcasts" />
          <SoundCategory title="Masterclass" />
          <SoundCategory title="New Sounds" />
        </div>
      </div>
      <div className={styles.player}>
        <Player />
      </div>
    </div>
  );
};

export default Sounds;
