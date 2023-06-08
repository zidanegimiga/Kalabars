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
        
        
        <div className={styles.innerContainer}>
          

                        <div className={styles.movieTitle}>{cardData?.title}</div>
                        <div className={styles.movieType}>Thriller  | 7 Minutes  | Directed by The shadow</div>
                        <div className={styles.movieSummary}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>


                        <Link href={`/video/${cardData?.public_id}`}>

          <div
            className={styles.cardBtn}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <PlayIcon hovered={hovered} />
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
