import Image from "next/image";
import { AddToPlaylist } from "shared/Icons/Playlist";
import { useContext } from 'react'
import { KalabarsContext } from "global/KalabarsContext";
import styles from "./SoundsCard.module.scss";

const SoundsCard = ({data}) => {
  const { setNowPlaying } = useContext(KalabarsContext)

  const handleSoundCardClick = () =>{
    setNowPlaying(data)
  }
  return (
    <div className={styles.categoryCard} onClick={handleSoundCardClick}>
        <Image
          width={196}
          height={196}
          alt="Femmolution"
          src={`https://content.kalabars.com/static/media/audios_images/${data.square_image}`}
        />
      <div className={styles.bottomSection}>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.playlistIcon}>
          <AddToPlaylist />
        </div>
      </div>
    </div>
  );
};

export default SoundsCard;
