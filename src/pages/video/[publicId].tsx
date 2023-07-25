/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, GetStaticPaths } from "next";
import VideoPlayer from "features/Sights/Video/Video";
import styles from "../../styles/VideoPage.module.scss";
import { Instagram, Twitter, Share } from "shared/Icons/Twitter";
import React, { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { Playlist } from "../../shared/Icons/Playlist";
import SightsCategory from "features/Sights/SightsCategory";
import SightsCard from "features/Sights/SightsCard";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { usePlaylist } from "global/AudioPlaylistContext";
import Link from "next/link";
import { EmptyQueue } from "shared/Icons/VideoPageIcons";

type Videos = any;

{
  /** TD:
   * Fetch suggested videos by getting videos with a similar tag
   * Get the video data from the video specifically rather than fetching all video data
   */
}

const VideoQueue = ({videoWatchlist}) => {
  if(videoWatchlist?.length === 0){
    return(
      <EmptyQueue/>
    )
  }
  return (
    <>
      {videoWatchlist?.map((queueItem, index) => {
        return (
          <React.Fragment key={index}>
            <Link
              href={`https://kalabars.vercel.app/video/${queueItem?.public_id}`}
            >
              <div className={styles.queueItem}>
                <img
                  src={`https://content.kalabars.com/static/media/video_images/${queueItem?.landscape_image}`}
                  alt="poster"
                  className={styles.queueItemImage}
                />
                <div className={styles.queueItemInfo}>
                  <h1>{queueItem?.title}</h1>
                  <p>{queueItem?.creators_name}</p>
                </div>
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </>
  );
};

const Sight = ({ videos }: any) => {

  const[showFullDescription, setShowFullDescription] = useState(false);
  const handleSeeMoreClick = ()=>{
    setShowFullDescription(!showFullDescription);
  };
  const [moreVideos, setMoreVideos] = useState([])
 

  const { videoWatchlist } = usePlaylist();
  // console.log(videoWatchlist);
  const videosData = videos?.response?.result;
  const router = useRouter();
  const { publicId } = router.query;
  const video = videosData?.find((video: any) => video?.public_id === publicId);
  // const suggestedVideos = videosData?.slice(50, 69);
  // console.log("Vid: ", video?.tags);

  useEffect(() => {
    async function loadSuggestions(){
      const suggestionsRes = await fetch(
        `https://content.kalabars.com/tags/${video?.tags[0]?.slug}/videos`
      );

      const suggestions = await suggestionsRes.json();
      setMoreVideos(suggestions?.response?.result)
      console.log("Suggestions: ", suggestions?.response?.result);
    }

    setTimeout(loadSuggestions, 3000)
  }, []);

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
    <div className={styles.PageWrapper}>
      <ToastContainer />
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <VideoPlayer video={video} />
          <div className={styles.videoFeatures}>
            <div className={styles.videoDetails}>
              <div className={styles.videoDescriptionContainer}>              
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_API}` +
                    `/static/media/videos_images/` +
                    video?.portrait_image
                  }
                  className={styles.videoDescriptionImage}
                  alt={""}
                />                
                <div className={styles.videoTextualData}>
                  <div>
                    <div className={styles.videoTitle}>{video?.title}</div>
                    <div className={styles.videoDescription}>
                  {
                    showFullDescription? video?.description:
                    video?.description.slice(0, 100) + "..."}
                    
                    {video?.description.length>100 && (
                      <div className={styles.seeMoreBtn}>
                      {showFullDescription ? (
                        <p onClick={handleSeeMoreClick}>SEE LESS</p>
                      ) : (
                        <p onClick={handleSeeMoreClick}>SEE MORE</p>
                      )}
                      
                    </div>
                    )}
                    </div>
                  </div>
                  
                 
                </div>
              </div>
              <div className={styles.moreInfoContainer}>
                <div className={styles.creators}>
                  Created by: <span>{video?.creators_name}</span>
                </div>
                <div className={styles.tags}>
                  {video?.genres?.map((genre, index) => {
                    return (
                      <div key={index} className={styles.tag}>
                        {genre?.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={styles.videoQueueContainer}>
              <div className={styles.queueContainer}>
                <div className={styles.queueHeader}>QUEUE</div>
                <div className={styles.queueItemsContainer}>
                  <VideoQueue videoWatchlist={videoWatchlist}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.suggestedVideos}>
            <SightsCategory name={"You might like:"} data={moreVideos} />
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
