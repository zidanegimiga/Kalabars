import { GetStaticProps, GetStaticPaths } from "next";
import VideoPlayer from "features/Sights/Video/Video";
import styles from "../../styles/VideoPage.module.scss";
import { Instagram, Twitter, Share } from "shared/Icons/Twitter";
import React from "react";
import { useRouter } from "next/router";
import { Playlist } from "../../shared/Icons/Playlist";
import SightsCategory from "features/Sights/SightsCategory";
import SightsCard from "features/Sights/SightsCard";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import Image from 'next/image'

type Videos = any;

const Sight = ({ videos }: any) => {
  const videosData = videos?.response?.result;
  const router = useRouter();
  const { publicId } = router.query;
  const video = videosData?.find((video: any) => video?.public_id === publicId);
  const suggestedVideos = videosData?.slice(100, 109);
  console.log("Video: ", suggestedVideos);
  console.log("Video: ", styles);
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
    const backgroundImage =
      `${process.env.NEXT_PUBLIC_API}` +
      `/static/media/videos_images/` +
      video?.landscape_image;

  //Date Formatting
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(video?.created_on);

  // const day = days[date.getDay()]
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div
      className={styles.PageWrapper}
    >
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <VideoPlayer video={video} />
          <div className={styles.videoFeatures}>
            <div className={styles.videoImage}>
              <Image 
                width={240}
                height={240}
                alt="poster"
                src={backgroundImage}
              />
            </div>
            <div className={styles.videoDetails}>
              <h1>{video?.title}</h1>
              <div className={styles.videoDescription}>
                <p>{video?.description}</p>
              </div>
              
              {/* <div className={styles.tags}>
                <div className={styles.tag}>{video?.creators_name}</div>
                <div className={styles.tag}>
                  {day} {month}, {year}
                </div>
                <div className={styles.shareButton}>
                  <span>
                    <Share />
                  </span>
                  <div className={styles.shareButtonHover}>
                    <span>
                      <Twitter />
                    </span>
                    <span>
                      <Instagram />
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
            <div className={styles.videoQueue}>
                <div className={styles.queueTitle}>Queue</div>
                <div className={styles.queueItemWrapper}><div className={styles.queueItem}>
                  <Image
                    src={backgroundImage}
                    height={75}
                    width={75}
                    alt="poster"
                    />
                    <div className={styles.queueItemInfo}>
                      <h1>{video?.title}</h1>
                    <p>{video?.creators_name}</p>
                    </div>
                </div>
                </div>
              </div>
            {/* <div className={styles.playlistBox}>
              <h2>Playlist</h2>
              <Playlist />
              <p>Playlist Empty</p>
            </div> */}
          </div>
          <div className={styles.suggestedVideos}>
            <SightsCategory name={"You might like:"} data={suggestedVideos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sight;

export async function loadVideos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/videos/all`, {
    headers: {
      "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const data = await res.json();
  return data;
}

export async function getServerSideProps(context: any) {
  const payload = await loadVideos();
  return {
    props: {
      videos: payload,
    },
  };
}
