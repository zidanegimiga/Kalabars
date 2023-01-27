import MovieCarousel from "features/Sights/MovieCarousel";
import SightsCard from "features/Sights/SightsCard/SightsCard";
import SightsCategory from "features/Sights/SightsCategory";
import { useState, useRef } from "react";
import Down from "../../public/downIcon.svg";
import styles from "../styles/Sights.module.scss";

const Sights = ({ videos, genres, eg }) => {
  const pager = useRef(null)
  // console.log("Videos: ", videos?.response);
  const carouselVideos = videos.response.result.slice(9, 17);
  const pageGenres = genres.response.result;
  console.log("Videos: ", videos.response.result);
  console.log("Pager: ", pageGenres);
  console.log("Genres: ", eg);

  const videosByGenre = () =>{

  }

  return (
    <div className={styles.pageWrapper} ref={pager}>
      <MovieCarousel videos={carouselVideos}/>
      <SightsCategory name={"Staff Picks"}>
        {/* <SightsCard />
        <SightsCard />
        <SightsCard />
        <SightsCard /> */}
      </SightsCategory>
    </div>
  );
};

export default Sights;

export async function loadVideos() {
  const resVideos = await fetch(process.env.API+`/videos/all`, {
    headers:{
      'x-access-token': process.env.TOKEN 
    }});
  const resGenres = await fetch(process.env.API+`/videos/genres`, {
    headers:{
      'x-access-token': process.env.TOKEN 
  }});
  const kalabarsGenres = await fetch(process.env.API+`/genres/kalabars-originals/videos`, {
    headers:{
      'x-access-token': process.env.TOKEN 
  }});
  const genres = await resGenres.json();
  const exampleGenres = await kalabarsGenres.json();
  const videos = await resVideos.json();
  return {
    genres: genres,
    videos: videos,
    eg: exampleGenres
  };
}

export async function getStaticProps(context) {
  const {genres, videos, eg} = await loadVideos();
  return {
    props: {
      genres, videos, eg
    },
  };
}

// const videodata = fetch('https://content.kalabars.com/videos/all', {
//   headers:{
//     'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIwOWVhYjVhOC04ZTEyLTRrMGItYTkyNi1hZmZmMGM1NDNhMjQiLCJleHAiOjE2NzY4NDQ0Mzd9.0QVC_lMKtroGKRMp3_hjf2cLbaGvOt3G0FJXdnTDwZw"
//   }
// }).then((res) => {return res.json()})
// .then(json => console.log(json))
