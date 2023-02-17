import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "shared/Button";
import { Twitter, Instagram } from "shared/Icons/Twitter";
import HeroLogo from "../../../../public/heroLogo.svg";
import styles from "./Hero.module.scss";

const Hero = () => {
  const router = useRouter();
  return (
    <div className={styles.HeroWrapper}>
      <div className={styles.HeroBody}>
        <div className={styles.HeroLogo}><HeroLogo/></div>
        <h1>Watch African-brewed stories</h1>
        <p className={styles.subTitle}><span>Kalabars</span> exists to  offer African creatives a chance to share their quality content to an audience that craves African productions.</p>
        <Button 
          text="Explore  our catalogue"
          fill="#FB1036"
          action={()=> router.push("/sights")}
        />
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.right}>
            <p>
              All rights reserved Creatives Garage <span>|</span>
            </p>
            <p>
              +254 202 600 313 <span>|</span>
            </p>
            <p>
              awesome@creativesgarage.com
            </p>
          </div>
          <div className={styles.left}>
            <span>
              <Instagram/>
            </span>
            <span>
              <Twitter />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
