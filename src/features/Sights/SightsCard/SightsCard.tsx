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
<<<<<<< HEAD
        />        
=======
        />
 
        
>>>>>>> 1863e52ef780f6b589e60854a4256d526f57233d
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
<<<<<<< HEAD
      </div>
=======

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
>>>>>>> 1863e52ef780f6b589e60854a4256d526f57233d
      </div>
    </Link>
  );
};

export default SightsCard;
