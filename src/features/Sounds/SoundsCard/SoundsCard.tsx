/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { AddToPlaylist, Check } from "shared/Icons/Playlist";
import { useContext } from "react";
import { KalabarsContext } from "global/KalabarsContext";
import { usePlaylist } from "global/AudioPlaylistContext";
import styles from "./SoundsCard.module.scss";
import { PlayIcon } from "shared/Icons/Playback";

const SoundsCard = ({ data }) => {
  const [hovered, setHovered] = useState(true);
  const { playlist, addToPlaylist, removeFromPlaylist, playAudio, stopAudio, currentAudio } = usePlaylist();

  const isAddedToPlaylist = (musicId) => {
    return playlist?.some((music) => music.id === musicId);
  };

  const handleAddToPlaylist = (musicData) => {
    addToPlaylist(musicData);
  };

  const handleRemoveFromPlaylist = (musicData) => {
    removeFromPlaylist(musicData);
  };

  const handleSoundCardClick = (data) => {
    // setCurrentAudioPlaying(data);
    // setIsCurrentAudioPlaying(false);
    playAudio(data)
    console.log("Current Audio: ", currentAudio);
  };
  return (
    <div className={styles.categoryCard}>
      <div>
        <img
          alt="Femmolution"
          src={`https://content.kalabars.com/static/media/audios_images/${data.square_image}`}
          className={styles.cardImg}
        />

        <div className={styles.playIcon} onClick={()=>handleSoundCardClick(data)}>
          <PlayIcon hovered={hovered} initialColor={"white"} />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div
          className={styles.playlistIcon}
          // onClick={}
        >
          {isAddedToPlaylist(data?.id) ? (
            <div onClick={() => handleRemoveFromPlaylist(data)}>
              <Check />
            </div>
          ) : (
            <div onClick={() => handleAddToPlaylist(data)}>
              <AddToPlaylist />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoundsCard;
