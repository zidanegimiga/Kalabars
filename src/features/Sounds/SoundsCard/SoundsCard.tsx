/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { AddToPlaylist, Check } from "shared/Icons/Playlist";
import { useContext } from "react";
import { KalabarsContext } from "global/KalabarsContext";
import styles from "./SoundsCard.module.scss";
import { PlayIcon } from "shared/Icons/Playback";

const SoundsCard = ({ data }) => {
  const [hovered, setHovered] = useState(true);
  const [checked, setChecked] = useState(false);
  const {
    currentAudioPlaying,
    setCurrentAudioPlaying,
    handleAddToAudioPlaylist,
    setIsCurrentAudioPlaying,
  } = useContext(KalabarsContext);

  const handlePlaylistAdd = (data) =>{
    handleAddToAudioPlaylist(data);
    setChecked(!checked)
  }

  const handleSoundCardClick = () => {
    setCurrentAudioPlaying(data);
    setIsCurrentAudioPlaying(false);
    console.log("Current Audio: ", currentAudioPlaying);
  };
  return (
    <div className={styles.categoryCard}>
      <div>
        <img
          alt="Femmolution"
          src={`https://content.kalabars.com/static/media/audios_images/${data.square_image}`}
          className={styles.cardImg}
        />

        <div className={styles.playIcon} onClick={handleSoundCardClick}>
          <PlayIcon hovered={hovered} initialColor={"white"} />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div
          className={styles.playlistIcon}
          // onClick={}
          onClick={() => handlePlaylistAdd(data)}
        >
          {
            checked ? <Check /> : <AddToPlaylist />
          }
        </div>
      </div>
    </div>
  );
};

export default SoundsCard;
