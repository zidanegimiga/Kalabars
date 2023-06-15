import React from "react";
import styles from "./SoundCategory.module.scss";
import SoundsCard from "../SoundsCard/SoundsCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2
  },
  iPadMini: {
    breakpoint: { max: 769, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1
  },
  iPhoneX: {
    breakpoint: { max: 376, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const SoundCategory = ({ title }) => {
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
        <SoundsCard/>
        <SoundsCard/>
        <SoundsCard/>
        <SoundsCard/>
        <SoundsCard/>
        <SoundsCard/>
        <SoundsCard/>
        <SoundsCard/>
      </Carousel>
    </div>
  );
};

export default SoundCategory;
