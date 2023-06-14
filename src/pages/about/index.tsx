import React, { useState } from "react";
import Head from "next/head";
import styles from "./about.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const About = () => {
  const [navOption, setNavOption] = useState(false);
  const handleNavbarOptionClick = () => {
    setNavOption(!navOption);
  };
  const router = useRouter();
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>About - Kalabars</title>
      </Head>
      <div className={styles.navigator}>
        <Link href="/about">
            <div className={router.pathname === '/about' ? styles['pathActive'] : styles['path']}>
                About us
            </div>
        </Link>
        <Link href="/privacy">
        <div className={router.pathname === '/privacy' ? styles['pathActive'] : styles['path']}>
            Privacy Policy
        </div>
        </Link>
        <Link href="/termsofuse">
        <div className={router.pathname === '/termsofuse' ? styles['pathActive'] : styles['path']}>
            Terms of Use
        </div>
        </Link>
      </div>
      <div className={styles.pageContent}>
        <h1>About Kalabars</h1>
        <p>
          Kalabars is a content creation and distribution platform that enables
          African creatives to share their content, reclaim the African
          narrative, and gain market access.
        </p>
        <p>
          Kalabars, as a content creation platform, serves as a medium for
          African creatives to share their content and showcase bold and
          authentic productions, contributing to the empowerment and visibility
          of African creatives. It provides market access for African content
          creators, allowing them to reach an audience that desires African
          productions. The platform, available at www.kalabars.com, promotes and
          distributes quality African content, including audio and films, to
          share African stories with the world.
        </p>
        <p>
          One of the key aspects of Kalabars is that it allows content creators
          to upload their own content, thereby contributing to the growth and
          sustainability of the platform. This means that African creatives with
          unique content can utilize Kalabars to share their work and gain
          exposure. In addition to providing a platform for content
          distribution, Kalabars, through Creatives Garage, offers capacity
          building and funding opportunities for content creators with
          exceptional ideas and content, supporting them in bringing their
          creations to life.
        </p>
        <h1>About Creatives Garage</h1>
        <p>
          One of the key aspects of Kalabars is that it allows content creators
          to upload their own content, thereby contributing to the growth and
          sustainability of the platform. This means that African creatives with
          unique content can utilize Kalabars to share their work and gain
          exposure. In addition to providing a platform for content
          distribution, Kalabars, through Creatives Garage, offers capacity
          building and funding opportunities for content creators with
          exceptional ideas and content, supporting them in bringing their
          creations to life.
        </p>
      </div>
    </div>
  );
};

export default About;
