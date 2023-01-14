import MovieCarousel from "features/Sights/MovieCarousel";
import SightsCard from "features/Sights/SightsCard/SightsCard";
import SightsCategory from "features/Sights/SightsCategory";
import { useState } from "react";
import Down from "../../public/downIcon.svg";
import styles from "../styles/Sights.module.scss";

const mockData = [
  {
    name: "Alice",
    poster: "/alice.png",
  },
  {
    name: "Black Valentine",
    poster: "/blackValentine.png",
  },
];

const sights = ({videos}) => {
  return (
    <div className={styles.pageWrapper}>
      <MovieCarousel />
      <SightsCategory name={"Staff Picks"}>
        <SightsCard />
        <SightsCard />
        <SightsCard />
        <SightsCard />
      </SightsCategory>
    </div>
  );
};

export default sights;

// export async function loadVideos(){
//   const res = await fetch('https://content.kalabars.com/videos/all')
//   const data = await res.json()
//   return data;
// }

// export async function getStaticProps(context){
//   const videos = await loadVideos()
//   return{
//     props:{
//       videos
//     }
//   }
// }
