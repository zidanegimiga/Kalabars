import React from 'react';
import styles from './Player.module.scss'
import Image from 'next/image'
import { Download } from 'shared/Icons/SoundPlayerIcons';

const Player = () => {
  return (
    <div className={styles.playerWrapper}>
        <div className={styles.audioMetadata}>
            <div className={styles.coverArt}>
                <Image alt="cover art" src={'/soundExampleImages/coverArt.png'} width={64} height={64}/>
            </div>
            <div className={styles.audioDetailsRight}>
                <div className={styles.audioTextualData}>
                    <p className={styles.artistName}>Ronnie Okelo</p>
                    <p className={styles.audioTitle}>Podvise</p>
                </div>
                <div className={styles.downloadButton}> <Download/> </div>
            </div>
        </div>
    </div>
  )
}

export default Player