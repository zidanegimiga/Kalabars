import React, { useState } from "react";
import styles from "./SightsCategory.module.scss";
import Down from "../../../../public/downIcon.svg";7
import SightsCard from "../SightsCard/";

const SightsCategory = ({ name, data }) => {
  const classPerView = 8;
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
        <div className={styles.sightsCategoryTitle}>{name}</div>
        {next < data?.length && (
          <div className={styles.moreButton}  onClick={seeMore}>
            More <Down />
          </div>
        )}
      </div>
      <div className={styles.categoryCards}>
        {data?.slice(0, next)?.map((video, index) => (
          <div key={index}>
            <SightsCard cardData={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SightsCategory;
