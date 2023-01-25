import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Timer from "../../../../public/timerIcon.svg";
import Play from "../../../../public/playIcon.svg";
import Down from "../../../../public/downIcon.svg";
import styles from "./MovieCarousel.module.scss";

const Hero = () => {
  return (
    <div>
      <Carousel
        showStatus={false} 
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={2000}
        dynamicHeight={false}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={isSelected ? styles["ind"] + " " + styles["active"] : styles["ind"]}
              key={index}
              role="button"
            />
          );
        }}
      >
        <div className={styles.hero}>
          <img src="/alice.png" alt="poster" className={styles.poster} />
          <div className={styles.detailsWrapper}>
            <div className={styles.detailsContainer}>
              <div className={styles.title}>Alice</div>
              <div className={styles.description}>
                The year is 2021, We live in smart homes where everything is
                connected. Mary, a 25-year-old lives in this world. Her phone,
                TV, lights, doors are all connected to ALICE a home device that
                takes voice commands{" "}
              </div>
              <div className={styles.tags}>
                <div className={styles.tag}>NEW</div>
                <div className={styles.tag}>THRILLER</div>
                <div className={styles.time}>
                  <Timer className={styles.timeicon} /><p>7 min</p>
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                <div className={styles.button1}>
                  {" "}
                  <Play className={styles.playicon} />
                  <p>Start Watching</p>
                </div>
                <div className={styles.button2}>
                  {" "}
                  <Down className={styles.timeicon} /> Explore More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hero}>
          <img src="/alice.png" alt="poster" className={styles.poster} />
          <div className={styles.detailsWrapper}>
            <div className={styles.detailsContainer}>
              <div className={styles.title}>Alice</div>
              <div className={styles.description}>
                The year is 2021, We live in smart homes where everything is
                connected. Mary, a 25-year-old lives in this world. Her phone,
                TV, lights, doors are all connected to ALICE a home device that
                takes voice commands{" "}
              </div>
              <div className={styles.tags}>
                <div className={styles.tag}>NEW</div>
                <div className={styles.tag}>THRILLER</div>
                <div className={styles.time}>
                  <Timer className={styles.timeicon} /><p>7 min</p>
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                <div className={styles.button1}>
                  {" "}
                  <Play className={styles.timeicon} />
                  <p>Start Watching</p>
                </div>
                <div className={styles.button2}>
                  {" "}
                  <Down className={styles.timeicon} /> Explore More
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
