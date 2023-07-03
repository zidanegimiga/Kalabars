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
import {
  AddToPlaylist,
  AddToPlaylistTest,
  AddToPlaylistWhite,
  Playlist,
} from "shared/Icons/Playlist";
import { Close } from "shared/Icons/Twitter";

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
    // console.log("Progress: ", progress)
    timeline.current?.style?.setProperty("--progress-position", progress);
  };

  const fastForward = () => {
    audioRef.current.currentTime += 5;
  };

  const revert = () => {
    audioRef.current.currentTime -= 5;
  };

  const handleAudioSeeking = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const handleLoadedMetadata = () => {
    setAudioTime(audioRef.current.duration);
  };

  const handlePlaylistItemClick = (data) => {
    setCurrentAudioPlaying(data);
    setIsCurrentAudioPlaying(false);
    console.log("Current Audio: ", currentAudioPlaying);
  };

  useEffect(() => {
    setProgress(0);
    const playBufferStatus = isObjectEmpty(currentAudioPlaying);
    setAudioPlaying(playBufferStatus);

    // const totalAudioDuration = audioRef?.current?.duration;
    // setAudioTime(totalAudioDuration);
    console.log("Audio Duration: ", audioTime);

    const formattedDuration = formatDuration(audioTime);
    setAudioDuration(formattedDuration);
  }, [audioTime, currentAudioPlaying]);

  // return (
  //   <div className={styles.playerWrapper}>
  //     <div className={styles.audioMetadata}>
  //       {isObjectEmpty(currentAudioPlaying) === false && (
  //         <img
  //           alt={currentAudioPlaying?.title}
  //           src={`https://content.kalabars.com/static/media/audios_images/${currentAudioPlaying?.square_image}`}
  //           className={styles.coverArt}
  //         />
  //       )}
  //       <div className={styles.audioDetailsRight}>
  //         <div className={styles.audioTextualData}>
  //           <p className={styles.artistName}>
  //             {currentAudioPlaying?.creators_name}
  //           </p>
  //           <p className={styles.audioTitle}>{currentAudioPlaying?.title.slice(0, 11)}...</p>
  //           <p className={styles.audioTitleMobile}>{currentAudioPlaying?.title}</p>
  //         </div>
  //         {/* <div className={styles.downloadButton}>
  //                     {" "}
  //                     <Download />{" "}
  //                   </div> */}
  //       </div>
  //     </div>
  //     <div className={styles.playbackContainer}>
  //       <div className={styles.playbackIcons}>
  //         {/* <div className={styles.repeat}>
  //           <Repeat />
  //         </div> */}
  //         <div className={styles.rewind} onClick={revert}>
  //           <Rewind />
  //         </div>
  //         {isCurrentAudioPlaying ? (
  //           <div className={styles.play}>
  //             <Pause
  //               action={() => {
  //                 playPauseHandler("pause");
  //               }}
  //             />
  //           </div>
  //         ) : (
  //           <div className={styles.play}>
  //             <Play
  //               action={() => {
  //                 playPauseHandler("play");
  //               }}
  //             />
  //           </div>
  //         )}
  //         <div className={styles.forward} onClick={fastForward}>
  //           <Forward />
  //         </div>
  //         {/* <div className={styles.shuffle}>
  //           <Shuffle />
  //         </div> */}
  //       </div>
  //       <div
  //         className={styles.progressArea}
  //         ref={timeline}
  //         onClick={(e) => handleTimelineClick(e)}
  //         // onMouseMove={(e) => handleTimelineClick(e)}
  //         // onMouseDown={(e) => handleTimelineClick(e)}
  //       >
  //         <div className={styles.progressBar}>
  //           <audio
  //             ref={audioRef}
  //             src={`https://content.kalabars.com/static/media/audios/${currentAudioPlaying.audio_file}`}
  //             onProgress={handleBuffering}
  //             onLoadedMetadata={handleLoadedMetadata}
  //             onLoadedData={() => console.log("Video data loaded")}
  //             onTimeUpdate={() => handleTimeUpdate()}
  //             onEnded={(e) => setIsCurrentAudioPlaying(false)}
  //           />
  //         </div>
  //         <div className={styles.timer}>
  //           <span className={styles.current}>
  //             {Math.floor(currentTime / 60) +
  //               ":" +
  //               ("0" + Math.floor(currentTime % 60)).slice(-2)}
  //           </span>
  //           <span className={styles.current}>
  //             {Math.floor(audioTime / 60) +
  //               ":" +
  //               ("0" + Math.floor(audioTime % 60)).slice(-2)}
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //     <div className={styles.playIconMobile}>
  //       {isCurrentAudioPlaying ? (
  //         <div className={styles.play}>
  //           <Pause
  //             action={() => {
  //               playPauseHandler("pause");
  //             }}
  //           />
  //         </div>
  //       ) : (
  //         <div className={styles.play}>
  //           <Play
  //             action={() => {
  //               playPauseHandler("play");
  //             }}
  //           />
  //         </div>
  //       )}
  //       <div className={styles.queBtnWrapper} >
  //         {
  //           isQueVisible ? <Close action={()=> setIsQueVisible(false)}/> : <div onClick={()=> setIsQueVisible(true)}><AddToPlaylistWhite /></div>
  //         }
  //       </div>
  //     </div>
  //     <div className={styles.volumeContainer}>

  //     </div>

  //   </div>
  // );
  return (
    <div className={styles.playerWrapper}>
      <footer className={styles.playerFooter}>
        <div className={styles.player}>
          <div className={styles.playerLeft}>
            <div className={styles.nowPlaying}>
              <div className={styles.coverArtContainer}>
                {isObjectEmpty(currentAudioPlaying) === false && (
                  <img
                    loading="eager"
                    alt={currentAudioPlaying?.title}
                    src={`https://content.kalabars.com/static/media/audios_images/${currentAudioPlaying?.square_image}`}
                    className={styles.coverArt}
                  />
                )}
              </div>
            </div>
            <div className={styles.audioTitles}>
              <span className={styles.audioTitle}>
                {currentAudioPlaying?.title}
              </span>

              <span className={styles.audioArtist}>
                {currentAudioPlaying?.creators_name}
              </span>
            </div>
            <div className={styles.addToPlaylistTogglerContainer}>
              {/* <button
                className={styles.addToPlaylistToggler}
                type="button"
                role="switch"
                aria-checked={false}
              >
                <AddToPlaylistTest
                  initialColor="white"
                  height="24px"
                  width="24px"
                />
              </button>
              <button
                className={styles.addToPlaylistToggler}
                type="button"
                role="switch"
                aria-checked={false}
              >
                <AddToPlaylistTest
                  initialColor="white"
                  height="24px"
                  width="24px"
                />
              </button> */}
            </div>
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
                  {isCurrentAudioPlaying ? (
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
                  {Math.floor(currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(currentTime % 60)).slice(-2)}
                </div>
                <div className={styles.progressBarContainer}>
                  <input
                    type="range"
                    min={0}
                    max={audioTime}
                    step="any"
                    value={currentTime}
                    onInput={(e) => {
                      handleAudioSeeking(e);
                    }}
                    className={styles.progressBarInputRange}
                  />
                  <div className={styles.audio}>
                    <audio
                      ref={audioRef}
                      src={`https://content.kalabars.com/static/media/audios/${currentAudioPlaying.audio_file}`}
                      onProgress={handleBuffering}
                      onLoadedMetadata={handleLoadedMetadata}
                      onLoadedData={(
                        event: React.ChangeEvent<HTMLAudioElement>
                      ) => setAudioTime(event?.target?.duration)}
                      onTimeUpdate={() => handleTimeUpdate()}
                      onEnded={(e) => setIsCurrentAudioPlaying(false)}
                    />
                  </div>
                </div>
                <div className={styles.totalTime} style={{}}>
                  {(isNaN(Math.floor(audioTime / 60))
                    ? "--"
                    : Math.floor(audioTime / 60)) +
                    ":" +
                    (
                      "0" +
                      (isNaN(Math.floor(audioTime % 60))
                        ? "--"
                        : Math.floor(audioTime % 60))
                    ).slice(-2)}
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
            <div className={styles.playlistHeader}>Queue</div>
            {audioPlaylist.map((playlistItem, index) => (
              // <div key={index} style={{ color: "white" }}>
              //   {playlistItem?.title}
              // </div>
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
            {audioPlaylist.length === 0 && (
              <div className={styles.playlistEmptyStatus}> Playlist Empty</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
