import React, { useState, useEffect, useRef } from 'react';
import styles from './Player.module.scss'
import Image from 'next/image'
import { Download, Forward, Play, Repeat, Rewind, Shuffle } from 'shared/Icons/SoundPlayerIcons';

const Player = () => {
  const [audioPlaying, setAudioPlaying] = useState<boolean>()
  const playAudio = () => {

  }
  return (
    <div className={styles.playerWrapper}>
        <div className={styles.audioMetadata}>
                <img alt="cover art" src={'/soundExampleImages/coverArt.png'} className={styles.coverArt}/>
            <div className={styles.audioDetailsRight}>
                <div className={styles.audioTextualData}>
                    <p className={styles.artistName}>Ronnie Okelo</p>
                    <p className={styles.audioTitle}>Podvise</p>
                </div>
                <div className={styles.downloadButton}> <Download/> </div>
            </div>
        </div>
        <div className={styles.playbackContainer}>
            <div className={styles.playbackIcons}>
                <div className={styles.repeat}>
                    <Repeat/>
                </div>
                <div className={styles.rewind}>
                    <Rewind/>
                </div>
                <div className={styles.play}>
                    <Play/>
                </div>
                <div className={styles.forward}>
                    <Forward/>
                </div>
                <div className={styles.shuffle}>
                    <Shuffle/>
                </div>
            </div>
            <div className={styles.progressArea}>
                <div className={styles.progressBar}>
                    <audio src={""}/>
                </div>
                <div className={styles.timer}> 
                    <span className={styles.current}>10:09</span>
                    <span className={styles.current}>10:09</span>
                </div>
            </div>
        </div>
        <div className={styles.volumeContainer}></div>
    </div>
  )
}

export default Player