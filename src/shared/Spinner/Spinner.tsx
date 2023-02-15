import React, { useState } from "react";
import styles from "./Spinner.module.scss";

const Spinner = ({handleLoadingState}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
