import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Timer from "../../../../public/timerIcon.svg";
import Play from "../../../../public/playIcon.svg";
import Down from "../../../../public/downIcon.svg";
import styles from "./MovieCarousel.module.scss";

const Hero = ({ videos }) => {
  const router = useRouter();

  return (
    <div>
      <Carousel
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        dynamicHeight={false}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={
                isSelected
                  ? styles["ind"] + " " + styles["active"]
                  : styles["ind"]
              }
              key={index}
              role="button"
            />
          );
        }}
      >
        {videos.map(function (video, index) {
          if(video.landscape_image === null){
            return null;
          }
          return (
            <div className={styles.hero} key={index}>
            <img
              src={
                `https:content.kalabars.com/static/media/videos_images/` +
                video.landscape_image
              }
              alt="poster"
              className={styles.poster}
            />
            <div className={styles.detailsWrapper}>
              <div className={styles.detailsContainer}>
                <div className={styles.detailsInnerContainer} >
                <div className={styles.title}>{video.title}</div>
                <div className={styles.description}>{video.description}</div>
                <div className={styles.tags}>
                  <div className={styles.tag}>THRILLER</div>
                  {video.genre?.length !== 0 &&
                    video.genre?.map((tag, index) => (
                      <div className={styles.tag} key={index}>
                        tag
                      </div>
                    ))}
                  <div className={styles.time}>
                    <Timer className={styles.timeicon} />
                    <p>{video.duration} min</p>
                  </div>
                </div>
                <div className={styles.buttonsContainer}>
                  <div
                    className={styles.button1}
                    onClick={() => router.push(`/videos/${video.public_id}`)}
                  >
                    {" "}
                    <Play className={styles.playicon} />
                    <p>Start Watching</p>
                  </div>
                  <div className={styles.button2} onClick={() => router.push(`/sights/#more`)}>
                    {" "}
                    <Down className={styles.timeicon} /> Explore More
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        )
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
