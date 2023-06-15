import React, { useEffect, useContext, useState } from "react";
import styles from "./sounds.module.scss";
import { Home, Playstore, Sights, Sound } from "shared/Icons/SidebarIcons";
import SoundCategory from "features/Sounds/SoundCategory/SoundCategory";
import Player from "features/Sounds/Player/Player";
import { KalabarsContext } from "global/KalabarsContext";
import Link from "next/link";
import SideBarItem from "shared/SideBarItem/SideBarItem";

const Sounds = ({ podcasts }) => { 
  const [ pods, setPodcasts ] = useState([])
  const [ topAudio, setTopAudio ] = useState([])
  const [ music, setMusic ] = useState([])

  async function loadVideos() {
    //All Videos
    const podAudios = await fetch(process.env.NEXT_PUBLIC_API + `/tags/podcast/audios`, {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    });
    const podcasts = await podAudios.json();
    setPodcasts( podcasts.response.result)

    const topAudiosRes = await fetch(process.env.NEXT_PUBLIC_API + `/tags/top-audio/audios`, {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    });
    const topAudiosData = await topAudiosRes.json();
    setTopAudio( topAudiosData.response.result) 

    const musicRes = await fetch(process.env.NEXT_PUBLIC_API + `/tags/audio-book/audios`, {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    });
    const musicData = await musicRes.json();
    setMusic( musicData.response.result) 


    // console.log("Audio: ", data)
  }
  useEffect(()=>{
    loadVideos()
  }, [])
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <SoundCategory title="Podcasts" data={pods} />
          <SoundCategory title="Top Audios" data={topAudio} />
          <SoundCategory title="Audio Book" data={music}/>
          {/* <SoundCategory title="New Sounds" /> */}
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
