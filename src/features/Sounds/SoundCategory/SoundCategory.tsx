import React, { useEffect, useState } from "react";
import styles from "./SoundCategory.module.scss";
// import SoundsCard from "../SoundsCard/SoundsCard";
import {SoundsCard, SoundsCardSkeleton} from "../SoundsCard/SoundsCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
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

  useEffect(() => {
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
  }, [category]);

  return (
    <div className={styles.categoryContainer}>
      <h1>{title}</h1>
      <Carousel
        responsive={responsive}
        itemClass={styles.categoryItem}
        containerClass={styles.carouselContainer}
        swipeable={true}
        ssr={true}
        // showDots={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        centerMode={true}
      >
        {audioData?.map((audio, index) => {
          return <SoundsCard key={index} data={audio} loading={loading} />;
        })}
        {loading &&
          [0, 1, 2, 3, 4, 5, 6].map((skeleton, index) => {
            return <SoundsCardSkeleton key={index} />;
          })}
      </Carousel>
    </div>
  );
};

export default SoundCategory;

          
