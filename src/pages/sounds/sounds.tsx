import React, { useEffect, useContext, useState } from "react";
import styles from "./sounds.module.scss";
import { Home, Playstore, Sights, Sound } from "shared/Icons/SidebarIcons";
import SoundCategory from "features/Sounds/SoundCategory/SoundCategory";
import Player from "features/Sounds/Player/Player";
import { KalabarsContext } from "global/KalabarsContext";
import { usePlaylist } from "global/AudioPlaylistContext";
import Link from "next/link";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import { ToastContainer, toast } from "react-toastify";

const Sounds = ({}) => {
  const {
    currentAudio,
    playlist,
    addToPlaylist,
    removeFromPlaylist,
    playAudio,
    stopAudiocurrentAudio,
  } = usePlaylist();
  const [data, setData] = useState([]);
  const [pods, setPods] = useState([]);
  const [topAudio, setTopAudio] = useState([]);
  const [trueStory, setTrueStory] = useState([]);

  const loadAudioBook = async () => {
    const musicRes = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/audio-book/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const musicData = await musicRes.json();

    return musicData;
  };

  const loadPodcasts = async () => {
    const podAudios = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/podcast/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const podcasts = await podAudios.json();

    return podcasts;
  };

  const loadTopAudios = async () => {
    const topAudiosRes = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/top-audio/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const topAudiosData = await topAudiosRes.json();
    return topAudiosData;
  };

  const loadTrueStory = async () => {
    const topAudiosRes = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/true-story/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const topAudiosData = await topAudiosRes.json();
    return topAudiosData;
  };

  useEffect(() => {
    setTimeout(() => {
      loadAudioBook().then((musicData) => {
        setData(musicData?.response?.result);
      });
    }, 3000);

    setTimeout(() => {
      loadPodcasts().then((podcast) => {
        setPods(podcast?.response?.result);
      });
    }, 1000);

    setTimeout(() => {
      loadTopAudios().then((topAudio) => {
        setTopAudio(topAudio?.response?.result);
      });
    }, 5000);

    setTimeout(() => {
      loadTrueStory().then((trueStory) => {
        setTrueStory(trueStory?.response?.result);
      });
    }, 7000);
  }, []);

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
          <SoundCategory title="Podcasts" category="podcasts" data={pods}/>
          <SoundCategory title="Audio Book" category="podcasts" data={data}/>
          <SoundCategory title="Top Audio" category="podcasts" data={trueStory}/>
          <SoundCategory title="Top Audio" category="podcasts" data={topAudio}/>
        </div>
      </div>
      {isObjectEmpty(currentAudio) === false && <Player />}
      <ToastContainer />
    </div>
  );
};

export default Sounds;
