/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SightsCard.module.scss";
import Link from "next/link";
import { PlayIcon } from "shared/Icons/Playback";
import PlayIconButton from "../../public/src/PlayIconButton.svg";

const SightsCard = ({ cardData }) => {
  const [hovered, setHovered] = useState(false);
  const [number, setNumber] = useState();
  //Some videos lack images
  if (cardData?.portrait_image === null) {
    return null;
  }

  return (
    <div className={styles.categoryCardWrapper}>
      <Link href={`/video/${cardData?.public_id}`}>
        <img
          src={`${process.env.NEXT_PUBLIC_API}/static/media/videos_images/${cardData?.portrait_image}`}
          alt={cardData?.title}
          className={styles.cardImage}
        />
      </Link>
      <div className={styles.innerContainer}>
        <div className={styles.movieTitle}>{cardData?.title.toUpperCase()}</div>
        <div className={styles.movieType}>
          {cardData?.genres[0]?.title} | {cardData?.duration} Minutes | Directed by <span style={{fontWeight: "500"}}> {cardData?.creators_name}</span>
        </div>
        <div className={styles.movieSummary}>
          {`${cardData?.description.slice(0, 100)}...`}
        </div>

        <Link href={`/video/${cardData?.public_id}`}>
          <div
            className={styles.cardBtn}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className={styles.playIcon}>
              <PlayIcon hovered={hovered} initialColor={"#2b2b2b"} />
            </div>
            <p>Play Title</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SightsCard;
