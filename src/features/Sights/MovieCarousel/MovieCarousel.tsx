import Image from "next/image";
import React, { useState } from "react";
import Timer from "../../../../public/timerIcon.svg";
import Play from "../../../../public/playIcon.svg";
import Down from "../../../../public/downIcon.svg";
import styles from "./MovieCarousel.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src="/alice.png" alt="poster" className={styles.poster} />
      <div className={styles.detailsWrapper}>
        <div className={styles.detailsContainer}>
          <div className={styles.title}>Alice</div>
          <div className={styles.description}>
            The year is 2021, We live in smart homes where everything is
            connected. Mary, a 25-year-old lives in this world. Her phone, TV,
            lights, doors are all connected to ALICE a home device that takes
            voice commands{" "}
          </div>
          <div className={styles.tags}>
            <div className={styles.tag}>NEW</div>
            <div className={styles.tag}>THRILLER</div>
            <div className={styles.time}>
              <Timer className={styles.timeicon}/>7 min
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.button1}> <Play className={styles.timeicon}/>Start Watching</div>
            <div className={styles.button2}> <Down className={styles.timeicon}/> Explore More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
