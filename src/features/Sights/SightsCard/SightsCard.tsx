import React from 'react';
import { useRouter } from 'next/router';
import styles from "./SightsCard.module.scss";

const SightsCard = () => {
  const router = useRouter();
  function handleRoute(){
    router.push("/video");
  }

  return (
    <div className={styles.categoryCardWrapper} onClick={()=>router.push("/video")}>
      <img src="/toiletChronicles.png" alt="toilet chronicles" className={styles.cardImage}/>
      <div className={styles.movieTitle}>Toilet Chronicles</div>
    </div>
  )
}

export default SightsCard;