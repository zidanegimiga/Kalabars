/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./Player.module.scss";
import Image from "next/image";
import {
  Download,
  Forward,
  PauseTest,
  PlayTest,
  Repeat,
  Rewind,
  Shuffle,
} from "shared/Icons/SoundPlayerIcons";
import { Play, Pause } from "shared/Icons/Playback";
import { KalabarsContext } from "global/KalabarsContext";
import { usePlaylist } from "global/AudioPlaylistContext";
import {
  AddToPlaylist,
  AddToPlaylistWhite,
  Playlist,
} from "shared/Icons/Playlist";
import { Close } from "shared/Icons/Twitter";
import Slider from "../Slider/Slider";

const Player = () => {
  const [isQueVisible, setIsQueVisible] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [audioTime, setAudioTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState("");
  const [currentTime, setCurrentTime] = useState(1);
  const [buffered, setBuffered] = useState(0);
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const {
    openMenu,
    setOpenMenu,
    // currentAudioPlaying,
    // setCurrentAudioPlaying,
    isCurrentAudioPlaying,
    // setIsCurrentAudioPlaying,
  } = useContext(KalabarsContext);
  
  const {
    playlist,
    addToPlaylist,
    removeFromPlaylist,
    isPlaying,
    setIsPlaying,
    currentAudio,
    playAudio
  } = usePlaylist();

  console.log("Current Audio: ", currentAudio)

  const audioRef = useRef(null);
  const timeline = useRef(null);

  const leadingZerosFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  const formatDuration = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    const hours = Math.floor(time / 3600);

    if (hours === 0) {
      return `${leadingZerosFormatter.format(
        minutes
      )} : ${leadingZerosFormatter.format(seconds)}`;
    } else if (minutes === 0) {
      return `00 : ${leadingZerosFormatter.format(seconds)}`;
    } else {
      return `${leadingZerosFormatter.format(
        hours
      )}:${leadingZerosFormatter.format(
        minutes
      )}:${leadingZerosFormatter.format(seconds)} `;
    }
  };

  function secondsToHms(seconds) {
    if (!seconds) return "00m 00s";

    let duration: any = seconds;
    let hours: any = Math.floor(duration / 3600);
    duration = Math.floor(duration % 3600);

    let min: any = Math.floor(duration / 60);
    duration = Math.floor(duration % 60);

    let sec: any = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }

  const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

  const handleDisplayAudioPlaylist = () => {
    setIsQueVisible(!isQueVisible);
    console.log("Current: ", currentAudio);
  };

  const playPauseHandler = (control) => {
    if (control === "play") {
      audioRef.current.play();
      setIsPlaying(true)
    } else if (control === "pause") {
      audioRef.current.pause();
      setIsPlaying(false)
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

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  const handleTimeUpdate = (e) => {
    getCurrDuration(e)
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
  
  const handleLoadedMetadata = () => {
    setAudioTime(audioRef.current.duration);
  };

  const handlePlaylistItemClick = (data) => {
    playAudio(data);
    // setIsCurrentAudioPlaying(false);
    console.log("Current Audio: ", currentAudio);
  };

  const onChange = (e) => {
    const aud = audioRef.current;
    aud.currentTime = (aud.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  useEffect(() => {
    setProgress(0);
    const playBufferStatus = isObjectEmpty(currentAudio);
    setAudioPlaying(playBufferStatus);
    const formattedDuration = formatDuration(audioTime);
    setAudioDuration(formattedDuration);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [audioTime, currentAudio, isPlaying]);

  return (
    <div className={styles.playerWrapper}>
      <footer className={styles.playerFooter}>
        <div className={styles.player}>
          <div className={styles.playerLeft}>
            <div className={styles.nowPlaying}>
              <div className={styles.coverArtContainer}>
                {isObjectEmpty(currentAudio) === false && (
                  <img
                    loading="eager"
                    alt={currentAudio?.title}
                    src={`https://content.kalabars.com/static/media/audios_images/${currentAudio?.square_image}`}
                    className={styles.coverArt}
                  />
                )}
              </div>
            </div>
            <div className={styles.audioTitles}>
              <span className={styles.audioTitle}>
                {currentAudio?.title}
              </span>

              <span className={styles.audioArtist}>
                {currentAudio?.creators_name}
              </span>
            </div>
            <div className={styles.addToPlaylistTogglerContainer}></div>
          </div>
          <div className={styles.playerCenter}>
            <div className={styles.playerControls}>
              <div className={styles.playbackIcons}>
                <div className={styles.playbackIconsLeft}>
                  <div className={styles.repeat}>
                    <Repeat />
                  </div>
                  <div className={styles.rewind} onClick={revert}>
                    <Rewind />
                  </div>
                </div>
                <div className={styles.playbackIconsCenter}>
                  {isPlaying ? (
                    <button
                      className={styles.play}
                      onClick={(e) => {
                        e.preventDefault();
                        playPauseHandler("pause");
                      }}
                    >
                      <PauseTest role={"img"} height={16} width={16} />
                    </button>
                  ) : (
                    <button
                      className={styles.play}
                      onClick={(e) => {
                        e.preventDefault();
                        playPauseHandler("play");
                      }}
                    >
                      <PlayTest role={"img"} height={16} width={16} />
                    </button>
                  )}
                </div>
                <div className={styles.playbackIconsRight}>
                  <div className={styles.forward} onClick={fastForward}>
                    <Forward />
                  </div>
                  <div className={styles.shuffle}>
                    <Shuffle />
                  </div>
                </div>
              </div>
              <div className={styles.progressWrapper}>
                <div className={styles.currentTime}>
                  {secondsToHms(currentTime)}
                </div>
                <div className={styles.progressBarContainer}>
                  <Slider percentage={percentage} onChange={onChange} />
                  <div className={styles.audio}>
                    <audio
                      ref={audioRef}
                      src={`https://content.kalabars.com/static/media/audios/${currentAudio.audio_file}`}
                      onProgress={handleBuffering}
                      onLoadedMetadata={handleLoadedMetadata}
                      onLoadedData={(
                        event: React.ChangeEvent<HTMLAudioElement>
                      ) => setAudioTime(event?.target?.duration)}
                      onTimeUpdate={(e) => handleTimeUpdate(e)}
                      // onEnded={(e) => setIsCurrentAudioPlaying(false)}
                    />
                  </div>
                </div>
                <div className={styles.totalTime} style={{}}>
                  {secondsToHms(audioTime)}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.playerRight}>
            <div className={styles.queBtnWrapper}>
              {isQueVisible ? (
                <Close action={() => setIsQueVisible(false)} />
              ) : (
                <div onClick={() => setIsQueVisible(true)}>
                  <AddToPlaylistWhite />
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
      {isQueVisible && (
        <div className={styles.audioPlaylistContainer}>
          <div className={styles.audioPlaylistWrapper}>
            <div className={styles.playlistHeader}>
              <h2>Queue</h2>
              <Close action={() => setIsQueVisible(false)} />
            </div>
            {playlist?.map((playlistItem, index) => (
              <div
                className={styles.playlistItem}
                key={index}
                onClick={() => handlePlaylistItemClick(playlistItem)}
              >
                <div className={styles.playlistItemImage}>
                  <Image
                    src={`https://content.kalabars.com/static/media/audios_images/${playlistItem?.square_image}`}
                    width={80}
                    height={80}
                    alt="playlist"
                  />
                </div>
                <div className={styles.playlistItemTitle}>
                  {playlistItem?.title}
                </div>
              </div>
            ))}
            {playlist?.length === 0 && (
              <div className={styles.playlistEmptyStatus}> Queue Empty</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
