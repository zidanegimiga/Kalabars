import React from "react";
import styles from "../ArtistAndTitleFields/ArtistAndTitleFields.module.scss";

interface MediaUploadProps {
  videoForm: any,
  handleMediaChange: any,
  mediaType?: "audio" | "video"
}
function MediaUploadField({ videoForm, handleMediaChange, mediaType }: MediaUploadProps) {
  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>{mediaType === "audio" ? "AUDIO" : "VIDEO"} UPLOAD</label>
      {
        mediaType === "video" ? (
          <>
            <div>
              <input
                id="video-upload"
                name="audio"
                type="file"
                accept="video/mp4"
                onChange={handleMediaChange}
                required
              />
            </div>
            {videoForm?.video_file === null && (
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
          </>
        ) : (
          <>
              <div>
                <input
                  id="audio-upload"
                  name="audio"
                  type="file"
                  accept="audio/wav"
                  onChange={handleMediaChange}
                  required
                />
              </div>
              {videoForm?.audio_file === null && (
                <div style={{ color: "red" }} className={styles.errorMessage}>
                  <p>Please upload an audio</p>
                </div>
              )}
            {videoForm.audio_file && (
              <div>
                <p>Selected Audio Preview: </p>
                <audio controls>
                  <source src={videoForm.audio_file} type="audio/wav"/>
                  Your browser does not support the audio tag.
                </audio>
              </div>
            )}
          </>
        )
      }
    </div>
  );
}

export default MediaUploadField;
