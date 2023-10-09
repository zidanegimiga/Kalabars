/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import {
  Play,
  Pause,
  Rewind,
  Forward,
  PictureInPicture,
  Volume1,
  VolumeOff,
  FullScreen,
} from "../../../shared/Icons/Playback";
import styles from "./Video.module.scss";
import MoonLoader from "react-spinners/MoonLoader";
import { PauseTest, PlayTest } from "shared/Icons/SoundPlayerIcons";
import Slider from "features/Sounds/Slider/Slider";
import { Comment, Facebook, Like, Twitter } from "shared/Icons/VideoPageIcons";

const VideoPlayer = ({ video }: any) => {
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState("");
  const [currentTime, setCurrentTime] = useState(1);
  const [hoveredTime, setHoveredTime] = useState(1);
  const [buffered, setBuffered] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [muted, setMuted] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const videoRef = useRef(null);
  const timeline = useRef(null);

  const leadingZerosFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });


  /**
   * Format video time in the form of 00:00
   * @param time 
   * @returns formatted time
   */
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

  /**
   * Handle video buffering
   */
  const handleBuffering = () => {
    const video = videoRef.current;
    const bufferedTime = video.buffered.length > 0 ? video.buffered.end(0) : 0;
    const duration = video.duration;
    const bufferProgress = (bufferedTime / videoTime) * 100;
    setBuffered(bufferProgress);
    timeline.current?.style?.setProperty("--buffer-position", buffered / 100);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    setProgress(videoRef?.current?.currentTime / videoRef?.current?.duration);
    timeline.current?.style?.setProperty("--progress-position", progress);
  };

  const handleTimelineClick = (e) => {
    const parentRect = timeline.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - parentRect.x)) / parentRect.width;
    videoRef.current.currentTime = Math.floor(percent * videoTime);
  };

  /**
   * calculating the position of our mouse relative to the timeline
   * @param e
   */
  const handleTimelineHover = (e) => {
    e.preventDefault();
    const parentRect = timeline.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.clientX - parentRect.x)) / parentRect.width;
    timeline.current.style.setProperty("--hover-position", percent);

    const timeHovered = percent * videoRef?.current?.duration;
    setHoveredTime(timeHovered);
  };

  /**
   * Play-pause logic
   * @param control
   */
  const videoHandler = (control: any) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  /**
   * Player seeking
   */
  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  /**
   * Screen control
   * @param e
   */
  const pictureInPicture = (e) => {
    videoRef.current.requestPictureInPicture();
  };

  const fullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  /**
   * Handle volume
   * @param e
   */
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

  const handleLoadedMetadata = () => {
    setVideoTime(videoRef.current.duration);
  };

  /**
   *
   * @param event
   * Implementing user keyboard controls
   */
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "m":
        {
          if (muted) {
            handleVolumeUnmute();
          } else {
            handleVolumeMute();
          }
        }
        break;
      case " ":
        {
          if (playing) {
            videoHandler("pause");
          } else {
            videoHandler("play");
          }
        }
        break;

      case "ArrowRight":
        {
          fastForward();
        }
        break;

      case "ArrowLeft":
        {
          revert();
        }
        break;

      case "f":
        {
          fullScreen();
        }
        break;

      default:
        console.log("Yay");
    }
  };

  useEffect(() => {
    const vidDuration = videoRef?.current?.duration;
    setVideoTime(vidDuration);
    const duration = formatDuration(videoTime);
    setVideoDuration(duration);
  }, []);

  const backgroundImage =
    `${process.env.NEXT_PUBLIC_API}` +
    `/static/media/videos_images/` +
    video?.landscape_image;

  return (
    <>
      <div
        className={styles.videoContainer}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.videoWrapper}>
          <video
            id="video1"
            ref={videoRef}
            preload="metadata"
            onEnded={() => setPlaying(false)}
            onClick={() => {
              playing ? videoHandler("pause") : videoHandler("play");
            }}
            onWaiting={() => setWaiting(true)}
            onLoad={() => setWaiting(true)}
            onPlaying={() => setWaiting(false)}
            onProgress={handleBuffering}
            onLoadedMetadata={handleLoadedMetadata}
            onLoadedData={() => console.log("Video data loaded")}
            onTimeUpdate={() => handleTimeUpdate()}
            className={styles.video}
            controlsList=""
            src={
              `${process.env.NEXT_PUBLIC_API}/static/media/videos/` +
              video?.public_id +
              `/1080-` +
              video?.public_id +
              `.MP4`
            }
          />
          <div className={styles.loader}>
            <MoonLoader
              color="red"
              cssOverride={{
                position: "absolute",
                top: "50%",
                right: "50%",
              }}
              size={48}
              loading={waiting}
            />
          </div>
          <div className={styles.controlsContainer}>
            <div className={styles.controlsInnerContainer}>
              <div className={styles.timeControls}>
                <p className={styles.timeLeft}>
                  {Math.floor(currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(currentTime % 60)).slice(-2)}
                </p>
                <div
                  className={styles.timelineContainer}
                  onMouseMove={(e) => handleTimelineHover(e)}
                  onClick={(e) => handleTimelineClick(e)}
                  ref={timeline}
                >
                  <div className={styles.timeline}>
                    <div className={styles.previewImgContainer}>
                      <img
                        className={styles.previewImg}
                        src={
                          process.env.NEXT_PUBLIC_API +
                          `/static/media/videos_images/` +
                          video?.landscape_image
                        }
                        alt="preview"
                      />
                      <div className={styles.previewImgTime}>
                        {Math.floor(hoveredTime / 60) +
                          ":" +
                          ("0" + Math.floor(hoveredTime % 60)).slice(-2)}
                      </div>
                    </div>
                    <div className={styles.thumbIndicator}></div>
                  </div>
                  {/* <Slider
                  percentage={Math.floor(100 * (currentTime / videoTime))}
                  onChange={handleTimeUpdate}
                /> */}
                </div>
                <p className={styles.timeRight}>
                  {Math.floor(videoTime / 60) +
                    ":" +
                    ("0" + Math.floor(videoTime % 60)).slice(-2)}
                </p>
              </div>
              <div className={styles.playbackIcons}>
                <div className={styles.leftControls}>
                  <div>
                    {playing ? (
                      <div
                        className={styles.playPauseBtn}
                        onClick={() => {
                          videoHandler("pause");
                        }}
                      >
                        <PauseTest role={"img"} width={16} height={16} />
                      </div>
                    ) : (
                      <div
                        className={styles.playPauseBtn}
                        onClick={() => {
                          videoHandler("play");
                        }}
                      >
                        <PlayTest role={"img"} width={16} height={16} />
                      </div>
                    )}
                  </div>
                  <Rewind action={revert} />
                  <Forward action={fastForward} />
                  <div className={styles.volumeIconContainer}>
                    <div className={styles.controlIconVolume}>
                      {muted === true ? (
                        <VolumeOff action={handleVolumeUnmute} />
                      ) : (
                        <Volume1 action={handleVolumeMute} />
                      )}
                    </div>
                    {/* <input
                    type="range"
                    min="0"
                    max="100"
                    className={styles.volumeRange}
                    value={volume}
                    onChange={(e) => {
                      handleVolumeChange(e);
                    }}
                  /> */}
                    <div className={styles.volumeRange}>
                      <Slider
                        percentage={volume}
                        onChange={handleVolumeChange}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.rightControls}>
                  <PictureInPicture action={pictureInPicture} />
                  <FullScreen action={fullScreen} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.videoBgGradient}></div>
      </div>
      <div className={styles.userInteractionContainer}>
        <div className={styles.userInteractionWrapper}>
          <div className={styles.userInteraction}>
            <p>Share your thoughts: </p>
            <div className={styles.interactiveIcons}>
              <Like name={video?.title} />
              {/* <Comment /> */}
            </div>
          </div>
          <div className={styles.socialMedia}>
            <p>Tell your friends: </p>
            <div className={styles.socialMediaIcons}>
              <TwitterShareButton
                url={`https://www.kalabars.vercel.app/video/${video?.public_id}`}
                // quote={`🍿🎬 Watching an ${video?.title} on Kalabars! Check out this must-watch film now!`}
                // hashtag="#Kalabars"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <FacebookShareButton
                url={`https://www.kalabars.vercel.app/video/${video?.public_id}`}
                quote={`🍿🎬 Watching an ${video?.title} on Kalabars! Check out this must-watch film now!`}
                hashtag="#Kalabars"
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`https://www.kalabars.vercel.app/video/${video?.public_id}`}
                // quote={`🍿🎬 Watching an ${video?.title} on Kalabars! Check out this must-watch film now!`}
                // hashtag="#Kalabars"
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={`https://www.kalabars.vercel.app/video/${video?.public_id}`}
                // quote={`🍿🎬 Watching an ${video?.title} on Kalabars! Check out this must-watch film now!`}
                // hashtag="#Kalabars"
              >
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
