import React, { useState, useRef } from "react";
import {
  Play,
  Pause,
  Rewind,
  Forward,
  PictureInPicture,
  VolumeOn,
  VolumeOff,
  FullScreen,
} from "../../../shared/Icons/Playback";
import styles from "./Video.module.scss";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);
  const videoContainer = useRef(null);

  console.log("current time: ", progress);

  if (typeof window !== "undefined") {
    window.setInterval(function () {
      setCurrentTime(videoRef.current?.currentTime);
      setProgress((videoRef.current?.currentTime / videoTime) * 100);
    }, 1000);
  }

  //play
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      // var vid = document.getElementById("video1");
      // setVideoTime(vid?.duration);
      setVideoTime(videoRef.current.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  //seeking
  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  const pictureInPicture = (e) => {
    videoRef.current.requestPictureInPicture();
  };

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value / 100;
    setVolume(Number(e.target.value));
    if (videoRef.current.volume <= 0.01) {
      setMuted(true);
    }
    if (videoRef.current.volume > 0.01) {
      setMuted(false);
    }
  };

  const handleVolumeMute = () => {
    setMuted(true);
    videoRef.current.volume = 0;
    setVolume(Math.floor(videoRef.current.volume * 100));
  };

  const handleVolumeUnmute = () => {
    setMuted(false);
    videoRef.current.volume = 0.5;
    setVolume(Math.floor(videoRef.current.volume * 100));
  };

  const fullScreen = () =>{
    videoRef.current.requestFullscreen();
    if(document.fullscreenElement) {
      document.exitFullscreen();
  } else {
      videoContainer.current.requestFullscreen();
  }
  }

  return (
    <div className={styles.videoWrapper} ref={videoContainer}>
      <video
        id="video1"
        ref={videoRef}
        onEnded={() => setPlaying(false)}
        onClick={() => {
          playing ? videoHandler("pause") : videoHandler("play");
        }}
        className={styles.video}
        src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
        // src="/sample.mp4"
        poster="/alice.png"
      >
        {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
      </video>
      <div className={styles.controlsContainer}>
        <div className={styles.playbackIcons}>
          <div className={styles.volumeIcon}>
            <div className={styles.controlIconVolume}>
              {muted === true ? (
                <VolumeOff action={handleVolumeUnmute} />
              ) : (
                <VolumeOn action={handleVolumeMute} />
              )}
            </div>
            <input
              type="range"
              min="0"
              max="100"
              className={styles.volumeRange}
              value={volume}
              onChange={(e) => {
                handleVolumeChange(e);
              }}
            />
            <p>{volume}</p>
          </div>
          <div className={styles.center}>
            <div className={styles.controlIcon}>
              <Rewind action={revert} />
            </div>
            <div>
              {playing ? (
                <Pause
                  action={() => {
                    videoHandler("pause");
                  }}
                />
              ) : (
                <Play
                  action={() => {
                    videoHandler("play");
                  }}
                />
              )}
            </div>
            <div className={styles.controlIcon}>
              <Forward action={fastForward} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.controlIcon}>
              <PictureInPicture action={pictureInPicture} />
            </div>
            <div className={styles.controlIcon}>
              <FullScreen action={fullScreen} />
            </div>
          </div>
        </div>
        <div className={styles.timeControls}>
          <p className={styles.time}>
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>
          <div className={styles.timeProgressBarContainer}>
            {/* <div style={{ width: `${progress}%`}}  className={styles.timeProgressBar}></div> */}
            <input
              type="range"
              value={progress}
              min="1"
              max="100"
              className={styles.timeProgressBar}
              id="myRange"
            ></input>
            {/* <progress value={progress} max="100" className={styles.timeProgressBar} style={{ width: `${progress}%`}}/> */}
          </div>
          <p className={styles.time}>
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>
      </div>
      Playing: {playing ? "true" : "false"}
    </div>
  );
};

export default VideoPlayer;
