import React, { useEffect, useContext, useState } from "react";
import styles from "./sounds.module.scss";
import { Home, Playstore, Sights, Sound } from "shared/Icons/SidebarIcons";
import SoundCategory from "features/Sounds/SoundCategory/SoundCategory";
import Player from "features/Sounds/Player/Player";
import { KalabarsContext } from "global/KalabarsContext";
import Link from "next/link";
import SideBarItem from "shared/SideBarItem/SideBarItem";

const Sounds = ({ podcasts }) => { 
  const [ data, setData] = useState([])

  async function loadVideos() {
    //All Videos
    const resAudios = await fetch(process.env.NEXT_PUBLIC_API + `/tags/podcast/audios`, {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    });
    const audios = await resAudios.json();
    setData( audios.response.result) 
    console.log("Audio: ", data)
  }
  useEffect(()=>{
    loadVideos()
  }, [])
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <SoundCategory title="Podcasts" data={data} />
          {/* <SoundCategory title="Podcasts" />
          <SoundCategory title="Masterclass" />
          <SoundCategory title="New Sounds" /> */}
        </div>
      </div>
      <div className={styles.player}>
        <Player />
      </div>
    </div>
  );
};

export async function loadAudios() {
  //Podcasts
  const podAudios = await fetch(process.env.NEXT_PUBLIC_API + `/tags/podcast/audios`, {
    headers: {
      "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const podcasts = await podAudios.json();

  return {
    podcasts    
  };
}
const genres = [
  "drama",
  "series",
  "in-session",
  "jams",
  "thriller",
  "jams",
  "local",
  "food",
  "comedy",
  "poetic",
];

export async function getStaticProps() {
  const { podcasts } = await loadAudios();

  return {
    props: {
      podcasts
    },
  };
}


export default Sounds;
