import React from 'react';
import { useRouter } from 'next/router';
import styles from "./SightsCard.module.scss";

const SightsCard = ({cardData}) => {
  const router = useRouter();
  function handleRoute(){
    router.push("/video");
  }
    
  //Some videos lack images
  if(cardData?.square_image === null){
    return null;
  }

  return (
    <div className={styles.categoryCardWrapper} onClick={()=>router.push(`/videos/${cardData?.public_id}`)}>
    {/* <div className={styles.categoryCardWrapper} onClick={()=>router.push(`/videos/9186eefa-e7d4-45e1-a34b-d4bb6bd7e799`)}> */}
      <img src={`https:content.kalabars.com/static/media/videos_images/${cardData?.square_image}`} alt="toilet chronicles" className={styles.cardImage}/>
      <div className={styles.movieTitle}>{cardData?.title}</div>
    </div>
  )
}

export default SightsCard;