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

const sights = ({ videos }) => {
  console.log("Videos: ", videos?.response);
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

export async function loadVideos() {
  const res = await fetch("https://content.kalabars.com/videos/all", {
    headers:{
      'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIwOWVhYjVhOC04ZTEyLTRrMGItYTkyNi1hZmZmMGM1NDNhMjQiLCJleHAiOjE2NzY4NDQ0Mzd9.0QVC_lMKtroGKRMp3_hjf2cLbaGvOt3G0FJXdnTDwZw"
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
