import VideoPlayer from 'features/Sights/Video/Video';
import styles from '../styles/VideoPage.module.scss';
import { Instagram, Twitter, Share } from 'shared/Icons/Twitter';
import React from 'react';
import Playlist from 'shared/Icons/Playlist';
import SightsCategory from 'features/Sights/SightsCategory';
import SightsCard from 'features/Sights/SightsCard';

const sight = () => {
  return (
    <div className={styles.PageWrapper}>
      <VideoPlayer />
      <div className={styles.videoFeatures}>
        <div className={styles.videoDetails}>
          <h1>Karata</h1>
          <div className={styles.videoDescription}><p>Moments to a general election, a young IT specialist finds himself in a predicament as his wife is kidnapped by unknown assailants who then blackmail him to compromise the upcoming ballot.</p></div>
          <div className={styles.tags}>
            <div className={styles.tag}>Creatives Garage</div>
            <div className={styles.tag}>17th Feb 2020</div>
            <div className={styles.shareButton}>
              <span><Share /></span>
              <div className={styles.shareButtonHover}>
                <span><Twitter /></span>
                <span><Instagram /></span>
              </div>
            </div>
          </div>                    
        </div>
        <div className={styles.playlistBox}>
          <h2>Playlist</h2>
          <Playlist />
          <p>Playlist Empty</p>
        </div>
      </div>
      <div className={styles.borderBox}></div>
      <div className={styles.suggestedVideos}>
      <SightsCategory name={"You might like:"}>
        <SightsCard />
        <SightsCard />
        <SightsCard />
        <SightsCard />
      </SightsCategory>
      </div>
    </div>
  )
}

export default sight