import styles from "./HamburgerIcon.module.scss";
import React, { useState, useContext } from "react";
import { KalabarsContext } from "global/KalabarsContext";
import { useRouter } from "next/router";

const HamburgerIcon = () => {
  const { openMenu, setOpenMenu } = useContext(KalabarsContext);

  const router = useRouter();

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const barStyle = {
    backgroundColor: router.pathname == "/" || router.pathname == "/sounds" ? "black" : "white"
  }
  
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
        <div className={styles.NavMenuItemChild} style={barStyle}></div>
      </div>
      <div className={styles.NavMenuIconBar}>
        <div className={styles.NavMenuItemChild} style={barStyle}></div>
      </div>
      <div className={styles.NavMenuIconBar}>
        <div className={styles.NavMenuItemChild} style={barStyle}></div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
