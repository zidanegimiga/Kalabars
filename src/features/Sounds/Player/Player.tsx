import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./Player.module.scss";
import Image from "next/image";
import {
  Download,
  Forward,
  Play,
  Repeat,
  Rewind,
  Shuffle,
} from "shared/Icons/SoundPlayerIcons";
import { KalabarsContext } from "global/KalabarsContext";

const Player = () => {
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const {
    openMenu,
    setOpenMenu,
    currentAudioPlaying,
    setCurrentAudioPlaying,
    audioPlaylist,
    handleAddToAudioPlaylist,
    handleClearAudioPlaylist,
  } = useContext(KalabarsContext);

  const [isQueVisible, setIsQueVisible] = useState(false);

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  const handleDisplayAudioPlaylist = () => {
    setIsQueVisible(!isQueVisible);
  };

  useEffect(() => {
    const playBufferStatus = isObjectEmpty(currentAudioPlaying);
    setAudioPlaying(playBufferStatus);
    console.log("Status: ", audioPlaying);
  }, [currentAudioPlaying]);

  const playAudio = () => {};
  return (
    <>
      <div className={styles.playerWrapper}>
        <div className={styles.audioMetadata}>
          {isObjectEmpty(currentAudioPlaying) === false && (
            <img
              alt={currentAudioPlaying?.title}
              src={`https://content.kalabars.com/static/media/audios_images/${currentAudioPlaying?.square_image}`}
              className={styles.coverArt}
            />
          )}
          <div className={styles.audioDetailsRight}>
            <div className={styles.audioTextualData}>
              <p className={styles.artistName}>
                {currentAudioPlaying?.creators_name}
              </p>
              <p className={styles.audioTitle}>{currentAudioPlaying?.title}</p>
            </div>
            {/* <div className={styles.downloadButton}>
                      {" "}
                      <Download />{" "}
                    </div> */}
          </div>
        </div>
        <div className={styles.playbackContainer}>
          <div className={styles.playbackIcons}>
            <div className={styles.repeat} onClick={handleDisplayAudioPlaylist}>
              <Repeat />
            </div>
            <div className={styles.rewind}>
              <Rewind />
            </div>
            <div className={styles.play}>
              <Play />
            </div>
            <div className={styles.forward}>
              <Forward />
            </div>
            <div className={styles.shuffle}>
              <Shuffle />
            </div>
          </div>
          <div className={styles.progressArea}>
            <div className={styles.progressBar}>
              <audio src={""} />
            </div>
            <div className={styles.timer}>
              <span className={styles.current}>10:09</span>
              <span className={styles.current}>10:09</span>
            </div>
          </div>
        </div>
        <div className={styles.volumeContainer}></div>
        {isQueVisible && (
          <div className={styles.audioPlaylistContainer}>
            {audioPlaylist.map((playlistItem, index) => (
              <div key={index} style={{ color: "white" }}>
                {playlistItem?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Player;
