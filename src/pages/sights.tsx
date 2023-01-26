import MovieCarousel from "features/Sights/MovieCarousel";
import SightsCard from "features/Sights/SightsCard/SightsCard";
import SightsCategory from "features/Sights/SightsCategory";
import { useState, useRef } from "react";
import Down from "../../public/downIcon.svg";
import styles from "../styles/Sights.module.scss";

const Sights = ({ videos }) => {
  const pager = useRef(null)
  // console.log("Videos: ", videos?.response);
  const carouselVideos = videos.response.result.slice(9, 17);
  console.log("Videos: ", carouselVideos);
  console.log("Pager: ", pager.current);
  return (
    <div className={styles.pageWrapper} ref={pager}>
      <MovieCarousel videos={carouselVideos}/>
      <SightsCategory name={"Staff Picks"}>
        <SightsCard />
        <SightsCard />
        <SightsCard />
        <SightsCard />
      </SightsCategory>
    </div>
  );
};

export default Sights;

export async function loadVideos() {
  const res = await fetch(process.env.API+`/videos/all`, {
    headers:{
      'x-access-token': process.env.TOKEN 
    }});
  const data = await res.json();
  return data;
}

export async function getStaticProps(context) {
  const videos = await loadVideos();
  return {
    props: {
      videos,
    },
  };
}

// const videodata = fetch('https://content.kalabars.com/videos/all', {
//   headers:{
//     'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIwOWVhYjVhOC04ZTEyLTRrMGItYTkyNi1hZmZmMGM1NDNhMjQiLCJleHAiOjE2NzY4NDQ0Mzd9.0QVC_lMKtroGKRMp3_hjf2cLbaGvOt3G0FJXdnTDwZw"
//   }
// }).then((res) => {return res.json()})
// .then(json => console.log(json))
