/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import styles from "./SightsCard.module.scss";
import Link from 'next/link';

const SightsCard = ({cardData}) => {
    
  //Some videos lack images
  if(cardData?.square_image === null){
    return null;
  }

  return (
	<Link href={`/videos/${cardData?.public_id}`}>
		<div className={styles.categoryCardWrapper}>
			{/* <div className={styles.categoryCardWrapper} onClick={()=>router.push(`/videos/9186eefa-e7d4-45e1-a34b-d4bb6bd7e799`)}> */}
			<img src={`${process.env.NEXT_PUBLIC_API}/static/media/videos_images/${cardData?.square_image}`} alt={cardData?.title} className={styles.cardImage}/>
			<div className={styles.movieTitle}>{cardData?.title}</div>
			<Link href={`/videos/${cardData?.public_id}`}><div className={styles.cardBtn}>Watch</div></Link>
		</div>
	</Link>
  )
}

export default SightsCard;