import React from 'react';
import styles from "./SightsCard.module.scss";

const SightsCard = () => {
  return (
    <div className={styles.categoryCardWrapper}>
      <img src="/toiletChronicles.png" alt="toilet chronicles" className={styles.cardImage}/>
      <div className={styles.movieTitle}>Toilet Chronicles</div>
    </div>
  )
}

export default SightsCard;