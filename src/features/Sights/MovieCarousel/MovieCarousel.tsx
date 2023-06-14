/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Timer from "../../../../public/timerIcon.svg";
import Play from "../../../../public/playIcon.svg";
import Down from "../../../../public/downIcon.svg";
import styles from "./MovieCarousel.module.scss";
import { PlayIcon } from "shared/Icons/Playback";

const Hero = ({ videos }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState();

  return (
    <div>
      <Carousel
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        // autoPlay={true}
        dynamicHeight={false}
        renderArrowNext={(clickHandler, hasNext) => {
          if(hasNext){
            return(
              <div className={styles.nextBtn} onClick={clickHandler}>
                <Image
                  src={'/next.png'}
                  width={32}
                  height={32}
                  alt="next"
                />              
              </div>
            )
          }
        }}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return(
            <div className={styles.prevBtn} onClick={clickHandler}>
                <Image
                  src={'/prev.png'}
                  width={32}
                  height={32}
                  alt="next"
                />              
            </div>
          )
        }}
      >
        {videos.map(function (video, index) {
          if (video.landscape_image === null) {
            return null;
          }
          return (
            <div className={styles.hero} key={index}>
              <div>
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_API}/static/media/videos_images/` +
                    video.landscape_image
                  }
                  alt="Image description"
                  className={styles.poster}
                />
              </div>
              <div className={styles.detailsWrapper}>
                <div className={styles.detailsContainer}>
                  <div className={styles.title}>
                    {" "}
                    {video.title}
                    {" "}
                  </div>
                  <div className={styles.tagsContainer}>
                    <div>Thriller</div>
                    <div> | </div>
                    <div> {video.duration} Minutes </div>
                    <div> | </div>
                    <div> Directed by the Shadow </div>
                  </div>
                  <div className={styles.description}>
                    {video.description}
                  </div>
                  <div className={styles.iconsContainer}>
                    <div className={styles.iconWrapper}  onClick={() => router.push(`/video/${video.public_id}`)}>
                      <div className={styles.icon}>
                        <PlayIcon hovered={hovered} initialColor={"white"} />
                      </div>
                      <div className={styles.iconsText} >Play Title</div>
                    </div>
                    <div className={styles.iconWrapper}>
                      <div className={styles.icon}>
                        <Image
                          src={"/clock.png"}
                          width={30}
                          height={30}
                          alt="clock icon"
                        />
                      </div>
                      <div className={styles.iconsText}>Add to watch list</div>
                    </div>
                    <div className={styles.iconWrapper}>
                      <div className={styles.icon}>
                        <Image
                          src={"/mouse.png"}
                          width={30}
                          height={30}
                          alt="clock icon"
                        />
                      </div>
                      <div className={styles.iconsText}>Scroll for more</div>
                    </div>
                  </div>
                  {/* <div className={styles.closeButton}>
                    <Image
                      src={"/close.png"}
                      width={44}
                      height={49}
                      alt="clock icon"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
