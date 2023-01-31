import React from "react";
import styles from "./SightsCategory.module.scss";
import Down from "../../../../public/downIcon.svg";
import SightsCard from "../SightsCard/";

const SightsCategory = ({name, data}) => {
  return (
    <div className={styles.sightsCategory}>
      <div className={styles.top}>
        <div className={styles.sightsCategoryTitle}>{name}</div>
        <div className={styles.moreButton}>
          More <Down />
        </div>
      </div>
      <div className={styles.categoryCards}>
        {
          data?.map((video, index) => (
            <div key={index}>
              <SightsCard cardData={video}/>
            </div>
          ))          
        }
      </div>
    </div>
  );
};

export default SightsCategory;
