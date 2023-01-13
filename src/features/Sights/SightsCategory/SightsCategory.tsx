import React from "react";
import styles from "./SightsCategory.module.scss";
import Down from "../../../../public/downIcon.svg";
import SightsCard from "../SightsCard/";

const SightsCategory = ({children, name}) => {
  return (
    <div className={styles.sightsCategory}>
      <div className={styles.top}>
        <div className={styles.sightsCategoryTitle}>{name}</div>
        <div className={styles.moreButton}>
          More <Down />
        </div>
      </div>
      <div className={styles.categoryCards}>
        {children}
      </div>
    </div>
  );
};

export default SightsCategory;
