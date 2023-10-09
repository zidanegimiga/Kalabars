import React, { useEffect, useState } from "react";
import styles from "./SoundCategory.module.scss";
import { SoundsCard, SoundsCardSkeleton } from "../SoundsCard/SoundsCard";
import AudioCardCarousel from "../AudioCardCarousel";
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
    dots: true,
  },
};

const SoundCategory = ({ title, category, data }) => {

  return (
    <div className={styles.categoryContainer}>
      <h1>{title}</h1>

        <AudioCardCarousel>
        {data?.map((audio, index) => {
          return(
            <SoundsCard key={index} data={audio} loading={false}/>
          )
        })}
        </AudioCardCarousel>

    </div>
  );
};

export default SoundCategory;
