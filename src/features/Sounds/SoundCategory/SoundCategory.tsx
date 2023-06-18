import React from "react";
import styles from "./SoundCategory.module.scss";
import SoundsCard from "../SoundsCard/SoundsCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    breakpoint: { max: 769, min: 426 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 426, min: 376 },
    items: 2,
    slidesToSlide: 2
  },
  iPhoneX: {
    breakpoint: { max: 376, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const SoundCategory = ({ title, data }) => {
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
        // showArrows={true}
        // showStatus={false}
        // showIndicators={false}
        // infiniteLoop={true}
        // showThumbs={false}
        // centerMode={true}
        // emulateTouch={true}
        // swipeable={true}
        // centerSlidePercentage={100}
      >
        {data?.map((audio, index) => {
          return (
            <SoundsCard key={index} data={audio}/>
          )
        })}
      </Carousel>
    </div>
  );
};

export default SoundCategory;
