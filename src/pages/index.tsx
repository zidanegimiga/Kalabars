import MovieCarousel from "features/Sights/MovieCarousel";
import SightsCard from "features/Sights/SightsCard/SightsCard";
import SightsCategory from "features/Sights/SightsCategory";
import { dirname } from "path";
import { useState, useRef } from "react";
import Down from "../../public/downIcon.svg";
import styles from "../styles/Sights.module.scss";
import SideBarItem from "shared/SideBarItem/SideBarItem";
import { ToastContainer, toast } from "react-toastify";

const Sights = ({
  videos,
  drama,
  originals,
  musicVideos,
  comedy,
  documentary,
  kids,
  series
}) => {
  const carouselVideos = videos?.response?.result;
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem />
        <div className={styles.content}>
          <MovieCarousel videos={carouselVideos} />
          <div id="more" className={styles.sightsCategoryWrapper}>
            <h2>🔥 KALABARS CATEGORIES 🔥</h2>
            <SightsCategory name={"Comedy"} data={comedy?.response?.result} />
            <SightsCategory
              name={"Documentary"}
              data={documentary?.response?.result}
            />
            <SightsCategory name={"Drama"} data={drama?.response?.result} />{" "}
            <SightsCategory name={"Series"} data={series?.response?.result} />{" "}
            <SightsCategory
              name={"Music Videos"}
              data={musicVideos?.response?.result}
            />
            <SightsCategory name={"Kids"} data={kids?.response?.result} />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Sights;


export async function loadVideos() {
  //Carousel Vids
  const resVideos = await fetch(process.env.NEXT_PUBLIC_API + `/tags/trending/videos`, {
    headers: {
      "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const videos = await resVideos.json();
  
  //originals
  const originalsGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/genres/kalabars-originals/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const originals = await originalsGenres.json();

  //Drama
  const dramaGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/dram/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const dramaGenre = await dramaGenres.json();

  //Series
  const seriesRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/multivideo/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const series = await seriesRes.json();

  //Documentary
  const documentaryGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/documentary/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const documentaryGenre = await documentaryGenres.json();

  //Comedy
  const comedyGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/comedy/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const comedyGenre = await comedyGenres.json();

  //Kids
  const kidsRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/Kids/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const kids = await kidsRes.json();
  console.log("Kids: ", kids)

  //Music Videos
  const musicVidRes = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/music-videos/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const musicVideos = await musicVidRes.json();
  console.log("Kids: ", kids)

  return {
    videos: videos,
    originals: originals,
    comedy: comedyGenre,
    documentary: documentaryGenre,
    drama: dramaGenre,
    kids: kids,
    musicVideos: musicVideos,
    series: series
  };
}
const genres = [
  "drama",
  "series",
  "in-session",
  "jams",
  "thriller",
  "jams",
  "local",
  "food",
  "comedy",
  "poetic",
];

export async function getServerSideProps() {
  const { videos, originals, comedy, documentary, drama, kids, musicVideos, series } = await loadVideos();
  
  return {
    props: {
      videos,
      originals,
      documentary,
      drama,
      comedy,
      kids,
      musicVideos,
      series
    },
  };
}