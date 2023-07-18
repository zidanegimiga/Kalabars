import React, { useEffect, useState } from "react";
import styles from "./SoundCategory.module.scss";
// import SoundsCard from "../SoundsCard/SoundsCard";
import {SoundsCard, SoundsCardSkeleton} from "../SoundsCard/SoundsCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1441 },
    items: 4,
    slidesToSlide: 2
  },
  laptop: {
    breakpoint: { max: 1441, min: 1025 },
    items: 4,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 3,
    slidesToSlide: 2
  },
  iPadMini: {
    breakpoint: { max: 769, min: 428 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 428, min: 376 },
    items: 2,
    slidesToSlide: 2
  },
  iPhoneX: {
    breakpoint: { max: 376, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const SoundCategory = ({ title, category }) => {
  const [loading, setLoading] = useState(false);
  const [audioData, setAudioData] = useState([]);

  const loadPodcasts = async () => {
    setLoading(true);
    const podAudios = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/podcast/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const podcasts = await podAudios.json();
    setAudioData(podcasts.response.result);
    setLoading(false);
  };

  const loadTopAudios = async () => {
    setLoading(true);
    console.log(loading)
    const topAudiosRes = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/top-audio/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const topAudiosData = await topAudiosRes.json();
    setAudioData(topAudiosData.response.result);
    console.log(audioData)
    setLoading(false);
    console.log(loading);
  };

  const loadMusic = async () => {
    setLoading(true);
    const musicRes = await fetch(
      process.env.NEXT_PUBLIC_API + `/tags/audio-book/audios`,
      {
        headers: {
          "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
        },
      }
    );
    const musicData = await musicRes.json();
    setAudioData(musicData.response.result);
    setLoading(false);
  };

  useEffect(()=>{
      switch (category) {
        case "podcasts":
          loadPodcasts();
          break;
        case "topAudio":
          loadTopAudios();
          break;
        case "music":
          loadMusic();
          break;
      }
  }, [category])

  return (
    <div className={styles.categoryContainer}>
      <h1>{title}</h1>
      <Carousel
        responsive={responsive}
        centerMode={true}
        draggable={true}
        swipeable={true}
        itemClass={styles.categoryItem}
        containerClass={styles.carouselContainer}
      >
        {
          audioData?.map((audio, index) => {
              return <SoundsCard key={index} data={audio} loading={loading}/>
          })
        }
        {
          loading && [0,1,2,3,4,5,6].map((skeleton, index) =>{
            return(
              <SoundsCardSkeleton key={index}/>
            )
          })
        }
      </Carousel>
    </div>
  );
};

export default SoundCategory;

          
