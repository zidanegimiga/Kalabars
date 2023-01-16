import VideoPlayer from 'features/Sights/Video/Video';
import styles from '../styles/VideoPage.module.scss'
import React from 'react';

const sight = () => {
  return (
    <div className={styles.PageWrapper}>
      <VideoPlayer />
    </div>
  )
}

export default sight