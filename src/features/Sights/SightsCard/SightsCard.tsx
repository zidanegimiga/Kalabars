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
  if (cardData?.square_image === null) {
    return null;
  }
  console.log("Cards: ", cardData)

  return (
    <Link href={`/video/${cardData?.public_id}`}>
      <div className={styles.categoryCardWrapper}>
        <div className={styles.innerCard}>
          <img
            src={`${process.env.NEXT_PUBLIC_API}/static/media/videos_images/${cardData?.square_image}`}
            alt={cardData?.title}
            className={styles.cardImage}
          />

          <div className={styles.innerContainer}>
            <div className={styles.movieTitle}>
              {cardData?.title.toUpperCase()}
            </div>
            <div className={styles.movieType}>
              {/* Thriller | 7 Minutes | Directed by {cardData?.creators_name} */}
              7 Minutes | Directed by {cardData?.creators_name}
            </div>
            <div className={styles.movieSummary}>
              {cardData?.description}
            </div>

            <Link href={`/video/${cardData?.public_id}`}>
              <div
                className={styles.cardBtn}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <PlayIcon hovered={hovered} initialColor={"gray"} />
                <p>Play Title</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SightsCard;
