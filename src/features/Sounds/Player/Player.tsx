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
import { Pause } from "shared/Icons/Playback";
import { KalabarsContext } from "global/KalabarsContext";

const Player = () => {
  const [isQueVisible, setIsQueVisible] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState("");
  const [currentTime, setCurrentTime] = useState(1);
  const [buffered, setBuffered] = useState(0);
  const [progress, setProgress] = useState(0);
  const {
    openMenu,
    setOpenMenu,
    currentAudioPlaying,
    setCurrentAudioPlaying,
    audioPlaylist,
    handleAddToAudioPlaylist,
    handleClearAudioPlaylist,
    isCurrentAudioPlaying,
    setIsCurrentAudioPlaying,
  } = useContext(KalabarsContext);

  const audioRef = useRef(null);
  const timeline = useRef(null);

  const leadingZerosFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  const formatDuration = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    const hours = Math.floor(time / 3600);

    if (hours == 0) {
      return `${leadingZerosFormatter.format(
        minutes
      )} : ${leadingZerosFormatter.format(seconds)}`;
    } else if (minutes == 0) {
      return `00 : ${leadingZerosFormatter.format(seconds)}`;
    } else {
      return `${leadingZerosFormatter.format(
        hours
      )}:${leadingZerosFormatter.format(
        minutes
      )}:${leadingZerosFormatter.format(seconds)} `;
    }
  };

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  const handleDisplayAudioPlaylist = () => {
    setIsQueVisible(!isQueVisible);
    console.log("Current: ", currentAudioPlaying);
  };

  const playPauseHandler = (control) => {
    if (control === "play") {
      audioRef.current.play();
      setIsCurrentAudioPlaying(true);
    } else if (control === "pause") {
      audioRef.current.pause();
      setIsCurrentAudioPlaying(false);
    }
  };

  const handleBuffering = () => {
    const audio = audioRef.current;
    const bufferedTime = audio.buffered.length > 0 ? audio.buffered.end(0) : 0;
    const duration = audio.duration;
    const bufferProgress = (bufferedTime / audioTime) * 100;
    setBuffered(bufferProgress);
    timeline.current?.style?.setProperty("--buffer-position", buffered / 100);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setProgress(audioRef?.current?.currentTime / audioRef?.current?.duration);
    timeline.current?.style?.setProperty("--progress-position", progress);
  };

  const fastForward = () => {
    audioRef.current.currentTime += 5;
  };

  const revert = () => {
    audioRef.current.currentTime -= 5;
  };

  const handleTimelineClick = (e) => {
    const parentRect = timeline.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - parentRect.x)) / parentRect.width;
    audioRef.current.currentTime = Math.floor(percent * audioTime);
  };

  const handleLoadedMetadata = () => {
    setAudioTime(audioRef.current.duration);
  };

  useEffect(() => {
    setProgress(0)
    const playBufferStatus = isObjectEmpty(currentAudioPlaying);
    setAudioPlaying(playBufferStatus);
    const audioDuration = audioRef?.current?.duration;
    setAudioTime(audioDuration);
    const duration = formatDuration(audioTime);
    setAudioDuration(duration);
  }, [currentAudioPlaying]);

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
            <div className={styles.rewind} onClick={revert}>
              <Rewind />
            </div>
            {isCurrentAudioPlaying ? (
              <div className={styles.play}>
                <Pause
                  action={() => {
                    playPauseHandler("pause");
                  }}
                />
              </div>
            ) : (
              <div
                className={styles.play}
                onClick={() => {
                  playPauseHandler("play");
                }}
              >
                <Play />
              </div>
            )}
            <div className={styles.forward} onClick={fastForward}>
              <Forward />
            </div>
            <div className={styles.shuffle}>
              <Shuffle />
            </div>
          </div>
          <div
            className={styles.progressArea}
            ref={timeline}
            onClick={(e) => handleTimelineClick(e)}
          >
            <div className={styles.progressBar}>
              <audio
                ref={audioRef}
                src={`https://content.kalabars.com/static/media/audios/${currentAudioPlaying.audio_file}`}
                onProgress={handleBuffering}
                onLoadedMetadata={handleLoadedMetadata}
                onLoadedData={() => console.log("Video data loaded")}
                onTimeUpdate={() => handleTimeUpdate()}
              />
            </div>
            <div className={styles.timer}>
              <span className={styles.current}>
                {Math.floor(currentTime / 60) +
                  ":" +
                  ("0" + Math.floor(currentTime % 60)).slice(-2)}
              </span>
              <span className={styles.current}>
                {Math.floor(audioTime / 60) +
                  ":" +
                  ("0" + Math.floor(audioTime % 60)).slice(-2)}
              </span>
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
