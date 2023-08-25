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
import { usePlaylist } from "global/AudioPlaylistContext";

const Hero = ({ videos }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState();
  const [width, setWidth] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const { addToWatchlist } = usePlaylist();
  // console.log(videos[0]);

  const handleAddToWatchlist = (data) => {
    addToWatchlist(data);
    console.log(data)
  };

  useEffect(() => {
    const w = window.innerWidth;
    setWidth(w);
  }, []);

  return (
    <div>
      <Carousel
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={false}
        renderArrowNext={(clickHandler, hasNext) => {
          if (hasNext) {
            return (
              <div className={styles.nextBtn} onClick={clickHandler}>
                <Image src={"/next.png"} width={32} height={32} alt="next" />
              </div>
            );
          }
        }}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div className={styles.prevBtn} onClick={clickHandler}>
              <Image src={"/prev.png"} width={32} height={32} alt="next" />
            </div>
          );
        }}
      >
        {videos?.map(function (video, index) {
          if (video?.large_image === null) {
            return null;
          }
          return (
            <div className={styles.hero} key={index}>
              <div>
                <img
                  src={
                    width >= 460
                      ? `${process.env.NEXT_PUBLIC_API}/static/media/videos_images/` +
                        video?.large_image
                      : `${process.env.NEXT_PUBLIC_API}/static/media/videos_images/` +
                        video?.portrait_image
                  }
                  alt="Image description"
                  className={styles.poster}
                />
              </div>
              <div className={styles.detailsWrapper}>
                <div className={styles.detailsContainer}>
                  <div className={styles.title}>
                    {" "}
                    {video.title.toUpperCase()}{" "}
                  </div>

                  {showDetails && (
                    <div>
                      <div className={styles.tagsContainer}>
                        <div key={index}>{video.genres[0]?.title}</div>
                        <div> | </div>
                        <div> {video.duration} Minutes </div>
                        <div> | </div>
                        <div> Directed by {video.creators_name} </div>
                      </div>
                      <div className={styles.description}>
                        {video.description}
                      </div>
                    </div>
                  )}
                  <div
                    className={styles.iconsContainer}
                    style={{ marginTop: "48px" }}
                  >
                    <div
                      className={styles.iconWrapper}
                      onClick={() => router.push(`/video/${video.public_id}`)}
                    >
                      <div className={styles.icon}>
                        <PlayIcon hovered={hovered} initialColor={"white"} />
                      </div>
                      <div className={styles.iconsText}>Play Title</div>
                    </div>
                    <div
                      className={styles.iconWrapper}
                      onClick={() => handleAddToWatchlist(video)}
                    >
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
                    <div
                      className={styles.iconWrapper}
                      onClick={() => router.push(`/#more`)}
                    >
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
                  <div
                    className={styles.closeButton}
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? (
                      <Image
                        src={"/close.png"}
                        width={44}
                        height={48}
                        alt="clock icon"
                      />
                    ) : (
                      <Image
                        src={"/maximize.png"}
                        width={44}
                        height={44}
                        alt="clock icon"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.detailsWrapperMobile}>
                <div className={styles.detailsWrapperMobileContent}>
                  <h2>{video.title}</h2>
                  <div className={styles.videoDetails}>
                    <div className={styles.genre}>Thriller</div>
                    <div className={styles.category}>Short Film</div>
                    <div className={styles.category}>{video.creators_name}</div>
                    <div className={styles.category}>{video.duration} min</div>
                  </div>
                  <div className={styles.buttonRow}>
                    <div
                      className={styles.redButton}
                      onClick={() => router.push(`/video/${video.public_id}`)}
                    >
                      <PlayIcon hovered={hovered} initialColor={"white"} />
                      <p>Start Watching</p>
                    </div>
                    <div className={styles.addToWatchList}>
                      <p>Add to watchlist</p>
                    </div>
                  </div>
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
