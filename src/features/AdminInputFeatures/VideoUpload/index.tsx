import React from "react";
import styles from "../ArtistAndTitleFields/ArtistAndTitleFields.module.scss";

function VideoUploadField({ videoForm, handleVideoChange }) {
  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>VIDEO UPLOAD</label>
      <div>
        <input
          id="video-upload"
          name="video"
          type="file"
          accept="video/mp4"
          onChange={handleVideoChange}
          required
        />
      </div>
      {videoForm.video_file === null && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Please upload a video</p>
        </div>
      )}
      {videoForm.video_file && (
        <div>
          <p>Selected Video Preview:</p>
          <video width="320" height="240" controls>
            <source src={videoForm.video_file} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default VideoUploadField;
