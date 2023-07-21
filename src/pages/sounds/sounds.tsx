import React, { useEffect, useContext, useState } from "react";
import styles from "./sounds.module.scss";
import { Home, Playstore, Sights, Sound } from "shared/Icons/SidebarIcons";
import SoundCategory from "features/Sounds/SoundCategory/SoundCategory";
import Player from "features/Sounds/Player/Player";
import { KalabarsContext } from "global/KalabarsContext";
import { usePlaylist } from "global/AudioPlaylistContext";
import Link from "next/link";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import { ToastContainer, toast} from 'react-toastify'

const Sounds = ({ podcasts }) => {
  const {
    currentAudio,
    playlist,
    addToPlaylist,
    removeFromPlaylist,
    playAudio,
    stopAudiocurrentAudio,
  } = usePlaylist();


  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <SoundCategory title="Podcasts" category="podcasts"/>
          <SoundCategory title="Audio Book" category={"music"} />
          <SoundCategory title="Top Audios" category={"topAudio"} />          
          {/* <SoundCategory title="New Sounds" /> */}
        </div>
      </div>
      { isObjectEmpty(currentAudio) === false && <Player /> }
      <ToastContainer />
    </div>
  );
};

export default Sounds;
