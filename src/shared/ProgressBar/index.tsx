import React from "react";
import styles from "./progressBar.module.scss"

const UploadProgressBar = ({ progress }) => {
  const barStyle = {
    width: `${progress}%`,
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarFill} style={barStyle}></div>
    </div>
  );
};

export default UploadProgressBar;
