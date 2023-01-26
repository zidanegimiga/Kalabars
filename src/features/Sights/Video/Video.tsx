import React, { useState, useRef, useEffect } from "react";
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

const VideoPlayer = ({video}: any) => {
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef(null);
  const videoContainer = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
      setVideoTime(videoRef?.current?.duration);
  }, []);

  const handleTimeUpdate = () =>{
    setCurrentTime(videoRef.current.currentTime);
    setProgress((videoRef?.current?.currentTime / videoRef?.current?.duration));
    timeline.current?.style?.setProperty("--progress-position", progress);
    // console.log("New Progress: ", progress)
  }

  const handleTimelineClick = (e) =>{
    const parentRect = timeline.current.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.clientX - parentRect.x)) / parentRect.width;
    videoRef.current.currentTime = Math.floor( percent * videoTime);
    // console.log("Timeline Clicked", e)
    // console.log("Part Clicked", percent)
  }

  const handleTimelineUpdateHover = (e) => {
    e.preventDefault();
    const parentRect = timeline.current.getBoundingClientRect();

    //calculating the position of our mouse relative to the timeline
    const percent = Math.min(Math.max(0, e.clientX - parentRect.x)) / parentRect.width;
    timeline.current.style.setProperty("--preview-position", percent)
    console.log("Timeline Events ", parentRect.width);
  };

  const leadingZerosFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  // const formatDuration = (time) => {
  //   const seconds = Math.floor(time % 60);
  //   const minutes = Math.floor(time % 60) % 60;
  //   const hours = Math.floor(time % 3600);

  //   if (hours === 0) {
  //     return `${minutes} : ${leadingZerosFormatter.format(seconds)}`;
  //   } else {
  //     return `${hours}: ${leadingZerosFormatter.format(
  //       minutes
  //     )} : ${leadingZerosFormatter.format(seconds)}`;
  //   }
  // };

  //play/pause
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
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

  //screen
  const pictureInPicture = (e) => {
    videoRef.current.requestPictureInPicture();
  };

  const fullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  //volume
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

  return (
    <div className={styles.videoWrapper} ref={videoContainer}>
      <video
        id="video1"
        ref={videoRef}
        onEnded={() => setPlaying(false)}
        onClick={() => {
          playing ? videoHandler("pause") : videoHandler("play");
        }}
        // onLoadedData={() => formatDuration(videoRef.current.duration)}
        onTimeUpdate={() => handleTimeUpdate()}
        className={styles.video}
        src={process.env.API+`/static/media/videos/`+video.public_id+`/1080-`+video.public_id+`.MP4`}
        poster={process.env.API+`/static/media/videos_images/`+video.landscape_image}
      >
      </video>
      <div className={styles.controlsContainer}>
        <div className={styles.timeControls}>
          <p className={styles.time}>
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
          </p>
          <div 
            className={styles.timelineContainer}
            onMouseMove={(e) => handleTimelineUpdateHover(e)}
            onClick={(e) => handleTimelineClick(e)}
            ref={timeline}
          >
            <div
              className={styles.timeline}
            >
              <img className={styles.previewImg} src={"/preview.png"} alt="preview"/>
              <div className={styles.thumbIndicator}></div>
            </div>
          </div>
          <p className={styles.time}>
            {Math.floor(videoTime / 60) +
              ":" +
              ("0" + Math.floor(videoTime % 60)).slice(-2)}
          </p>
        </div>
        <div className={styles.playbackIcons}>
          <div className={styles.volumeIconContainer}>
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
      </div>
    </div>
  );
};

export default VideoPlayer;
