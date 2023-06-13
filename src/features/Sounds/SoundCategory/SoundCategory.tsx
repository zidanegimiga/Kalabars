import React from "react";
import styles from "./SoundCategory.module.scss";
import SoundsCard from "../SoundsCard/SoundsCard";

const SoundCategory = ({ title }) => {
  return (
    <div className={styles.categoryContainer}>
      <h1>{title}</h1>
      <div className={styles.categoryCardsContainer}>
        <SoundsCard />
        <SoundsCard />
        <SoundsCard />
        <SoundsCard />
        <SoundsCard />
      </div>
    </div>
  );
};

export default SoundCategory;
