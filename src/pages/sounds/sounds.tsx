import React from "react";
import styles from "./sounds.module.scss";
import { Home, Playstore, Sights, Sound } from "shared/Icons/SidebarIcons";
import SoundCategory from "features/Sounds/SoundCategory/SoundCategory";

const Sounds = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <div className={styles.sidebar}>
          <div className={styles.pagesNavigator}>
            <div className={styles.sidebarItem}>
              <Home />
              <div className={styles.sidebarText}>Home</div>
            </div>
            <div className={styles.sidebarItem}>
              <Sound />
              <div className={styles.sidebarText}>Sounds</div>
            </div>
            <div className={styles.sidebarItem}>
              <Sights />
              <div className={styles.sidebarText}>Sights</div>
            </div>
          </div>
          <div className={styles.playstoreNavigator}>
            <p>WE&apos;RE ON MOBILE</p>
            <div className={styles.playstoreButton}>
              <div className={styles.playIcon}>
                <Playstore />
              </div>
              <div className={styles.playstoreButtonText}>
                <span>GET IT ON</span>
                <p>Google Play</p>
              </div>
            </div>
          </div>
          <div className={styles.cgLinksNavigator}>
            <p>PRIVACY POLICY</p>
            <p>CREATIVES GARAGE</p>
            <p>SUBMIT YOUR CONTENT</p>
          </div>
        </div>
        <div className={styles.content}>
          <SoundCategory
            title="New Sounds"
          />
          <SoundCategory
            title="Podcasts"
          />
          <SoundCategory
            title="Masterclass"
          />
          <SoundCategory
            title="New Sounds"
          />
        </div>
      </div>
      <div className={styles.player}></div>
    </div>
  );
};

export default Sounds;
