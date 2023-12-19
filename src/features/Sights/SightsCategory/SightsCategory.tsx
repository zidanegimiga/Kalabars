import React, { useState } from "react";
import styles from "./SightsCategory.module.scss";
import Down from "../../../../public/downIcon.svg";
import SightsCard from "../SightsCard/";

//TODO: Implement types for the video data
type SightsCategoryProps = {
  name?: string;
  data: any[];
}

const SightsCategory: React.FC<SightsCategoryProps> = ({ name, data }) => {  
  const classPerView = 6;
  /**
   * logic for the see more button
   */
  const [next, setNext] = useState(classPerView);
  const seeMore = () => {
    setNext(next + classPerView);
  };

  return (
    <div className={styles.sightsCategory}>
      <div className={styles.top}>
        <div className={styles.sightsCategoryTitle}>{name.toUpperCase()}</div>
      </div>
      <div className={styles.categoryCards}>
        {
          // data?.slice(0, next)?.map((video, index) => (
          data?.map((video, index) => (
            <SightsCard cardData={video} key={index} />
          ))
        }
      </div>
      {/* <div className={styles.top}>
        <div className={styles.sightsCategoryTitle} ></div>
        {
          next < data?.length && (
            <div className={styles.moreButton} onClick={seeMore}>
              More <Down />
            </div>
          )
        }
      </div> */}
    </div>
  );
};

export default SightsCategory;
