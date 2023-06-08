/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SightsCard.module.scss";
import Link from "next/link";
import { PlayIcon } from "shared/Icons/Playback";

const SightsCard = ({ cardData }) => {
  const [hovered, setHovered] = useState(false);
  const [number, setNumber] = useState();
  //Some videos lack images
  if (cardData?.square_image === null) {
    return null;
  }

  return (
    <Link href={`/video/${cardData?.public_id}`}>
      <div className={styles.categoryCardWrapper}>
      <div className = {styles.innerCard}>
        <img
          src={`${process.env.NEXT_PUBLIC_API}/static/media/videos_images/${cardData?.square_image}`}
          alt={cardData?.title}
          className={styles.cardImage}
        />
 
        
        <Link href={`/video/${cardData?.public_id}`}>
        <div
            className={styles.cardBtn}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <PlayIcon hovered={hovered} />
            <p>Watch</p>
          </div>
        
        </Link>

        <div className={styles.innerContainer}>
          <div className={styles.movieTitle}>{cardData?.title}</div>
          <Link href={`/video/${cardData?.public_id}`}>
            <div
              className={styles.cardBtn}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <PlayIcon hovered={hovered} />
              <p>Watch</p>
            </div>
          </Link>

        </div>
      </div>
    </Link>
  );
};

export default SightsCard;
