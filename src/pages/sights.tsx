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

const sights = () => {
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
