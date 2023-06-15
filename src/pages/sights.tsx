import MovieCarousel from "features/Sights/MovieCarousel";
import SightsCard from "features/Sights/SightsCard/SightsCard";
import SightsCategory from "features/Sights/SightsCategory";
import { dirname } from "path";
import { useState, useRef } from "react";
import Down from "../../public/downIcon.svg";
import styles from "../styles/Sights.module.scss";
import SideBarItem from "shared/SideBarItem/SideBarItem";

const Sights = ({
  videos,
  drama,
  originals,
  comedy,
  documentary,
  staffPicks,
}) => {
  const carouselVideos = videos.response.result.slice(15, 24);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.top}>
        <SideBarItem/>
        <div className={styles.content}>
          <MovieCarousel videos={carouselVideos} />
          <div id="more" className={styles.sightsCategoryWrapper}>
            <SightsCategory
              name={"Staff Picks"}
              data={staffPicks.response.result}
            />
            <SightsCategory
              name={"Kalabars Originals"}
              data={originals.response.result}
            />
            <SightsCategory name={"Comedy"} data={comedy?.response?.result} />
            <SightsCategory
              name={"Drama"}
              data={drama?.response?.result}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sights;

export async function loadVideos() {
  //All Videos
  const resVideos = await fetch(process.env.NEXT_PUBLIC_API + `/videos/all`, {
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
    process.env.NEXT_PUBLIC_API + `/genres/drama/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const dramaGenre = await dramaGenres.json();

  //Documentary
  const documentaryGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/genres/documentaries/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const documentaryGenre = await documentaryGenres.json();

  //Comedy
  const comedyGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/genres/comedy/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const comedyGenre = await comedyGenres.json();

  //Comedy
  const staffPicksGenres = await fetch(
    process.env.NEXT_PUBLIC_API + `/tags/staff-picks/videos`,
    {
      headers: {
        "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
      },
    }
  );
  const staffPicks = await staffPicksGenres.json();

  return {
    videos: videos,
    originals: originals,
    comedy: comedyGenre,
    documentary: documentaryGenre,
    drama: dramaGenre,
    staffPicks: staffPicks,
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

export async function getStaticProps(context) {
  const { videos, originals, comedy, documentary, drama, staffPicks } =
    await loadVideos();
  return {
    props: {
      videos,
      originals,
      documentary,
      drama,
      comedy,
      staffPicks,
    },
  };
}

// const videodata = fetch('https://content.kalabars.com/videos/all', {
//   headers:{
//     'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiIwOWVhYjVhOC04ZTEyLTRrMGItYTkyNi1hZmZmMGM1NDNhMjQiLCJleHAiOjE2NzY4NDQ0Mzd9.0QVC_lMKtroGKRMp3_hjf2cLbaGvOt3G0FJXdnTDwZw"
//   }
// }).then((res) => {return res.json()})
// .then(json => console.log(json))
