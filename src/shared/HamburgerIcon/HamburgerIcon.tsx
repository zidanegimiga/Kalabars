import styles from "./HamburgerIcon.module.scss";
import React, { useState, useContext } from "react";
import { KalabarsContext } from "global/KalabarsContext";

const HamburgerIcon = () => {
  const { openMenu, setOpenMenu } = useContext(KalabarsContext);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  
  return (
    <div
      className={
        openMenu
          ? styles["NavMenuIconWrapper"] +
            " " +
            styles["NavMenuIconWrapperActive"]
          : styles["NavMenuIconWrapper"]
      }
      onClick={handleMenuClick}
    >
      <div className={styles.NavMenuIconBar}>
        {" "}
        <div className={styles.NavMenuItemChild}></div>
      </div>
      <div className={styles.NavMenuIconBar}>
        <div className={styles.NavMenuItemChild}></div>
      </div>
      <div className={styles.NavMenuIconBar}>
        <div className={styles.NavMenuItemChild}></div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
