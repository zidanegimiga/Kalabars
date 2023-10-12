import React from "react";
import styles from "./ArtistAndTitleFields.module.scss";

function ArtistAndTitleFields({ videoForm, handleVideoFormChange }) {
  return (
    <div className={styles.inputFieldset}>
      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>CREATOR&apos;S NAME</label>
        <input
          type="email"
          className={styles.input}
          name="creators_name"
          value={videoForm.creators_name}
          onChange={handleVideoFormChange}
          required
        />
        {videoForm.artist_name === "" && (
          <div style={{ color: "red" }} className={styles.errorMessage}>
            <p>Please enter an email</p>
          </div>
        )}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>CONTENT TITLE</label>
        <input
          type="text"
          className={styles.input}
          name="title"
          value={videoForm.title}
          onChange={handleVideoFormChange}
          required
        />
        {videoForm.title === "" && (
          <div style={{ color: "red" }} className={styles.errorMessage}>
            <p>Title is required</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArtistAndTitleFields;
