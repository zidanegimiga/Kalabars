import React, { useState, useRef } from "react";
import {Play, Pause, Rewind, Forward} from "../../../shared/Icons/Playback"
import styles from "./Video.module.scss";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  if(typeof window !== "undefined"){
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
      var vid = document.getElementById("video1");
      setVideoTime(vid?.duration);
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

  return (
    <div className={styles.videoWrapper}>
      <video
        id="video1"
        ref={videoRef}
        onEnded={()=> setPlaying(false)} 
        className={styles.video} 
        src="/sample.mp4"
        poster="/alice.png"
      >
        {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
      </video>
      <div className={styles.controlsContainer}>
        <div className={styles.timeControls}>
          <p className={styles.time}>
            {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>
          <div className={styles.timeProgressBarContainer}>
            {/* <div style={{ width: `${progress}%`}}  className={styles.timeProgressBar}></div> */}
            <input type="range" min="1" max="100" value={progress} className={styles.timeProgressBar} id="myRange"></input>
            {/* <progress value={progress} max="100" className={styles.timeProgressBar} style={{ width: `${progress}%`}}/> */}
          </div>
          <p className={styles.time}>
            {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>
        <div className={styles.playbackIcons}>
          <div className={styles.controlIcon}>
            {playing ? <Pause action={()=>{videoHandler("pause")}}/> : <Play action={()=>{videoHandler("play")}} />}
          </div>
          <div className={styles.controlIcon}>
            <Rewind action={revert}/>
          </div>
          <div className={styles.controlIcon}>
            <Forward action={fastForward}/>
          </div>
        </div>
      </div>
      Playing: {playing ? "true" : "false"}    
    </div>
  );
};

export default VideoPlayer;