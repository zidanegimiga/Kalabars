import Image from "next/image";
import { AddToPlaylist } from 'shared/Icons/Playlist';
import styles from './SoundsCard.module.scss'

const SoundsCard = () => {
  return (
    <div className={styles.categoryCard}>
    <div className={styles.cardImage}>
        <Image width={196} height={196} alt="Femmolution" src={'/soundExampleImages/femmolution.png'}/>
    </div>
    <div className={styles.bottomSection}>
        <div className={styles.cardTitle}>Femmolution</div>
        <div className={styles.playlistIcon}><AddToPlaylist/></div>
    </div>                
</div>
  )
}

export default SoundsCard