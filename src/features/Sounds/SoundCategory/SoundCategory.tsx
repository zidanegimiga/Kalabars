import React, { useEffect, useState } from "react";
import styles from "./SoundCategory.module.scss";
import {SoundsCard, SoundsCardSkeleton} from "../SoundsCard/SoundsCard";
var $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const Responsive = {
  0: {
    items: 1.5,
    margin: 10,
  },
  442: {
    items: 2,
    margin: 32,
  },
  768: {
    items: 3,
    margin: 24,
  },
  1024: {
    items: 4,
    margin: 24,
    dots: true
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
        console.log("Podcasts: ", loading)
        break;
      case "topAudio":
        loadTopAudios();
        console.log("Top: ", loading)
        break;
      case "music":
        loadMusic();
        console.log("Music: ", loading)
        break;
    }
    console.log(audioData)
  }, []);

  return (
    <div className={styles.categoryContainer}>
      <h1>{title}</h1>
      <OwlCarousel
        responsive={Responsive}
        nav={true}
        navContainerClass={styles.arrow}
        navClass={[styles.prev, styles.next]}
        center={audioData.length > 1}
        loop={audioData.length > 1}
        // navClass={styles.prev}
        // responsive={responsive}
        // itemClass={styles.categoryItem}
        // containerClass={styles.carouselContainer}
        // swipeable={true}
        // ssr={true}
        // showDots={true}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // centerMode={true}
      >
        {audioData?.map((audio, index) => {
          return <SoundsCard key={index} data={audio} loading={loading} />;
        })}
        {loading &&
          [0, 1, 2, 3, 4, 5, 6].map((skeleton, index) => {
            return <SoundsCardSkeleton key={index} />;
        })}
      </OwlCarousel>
    </div>
  );
};

export default SoundCategory;

          
