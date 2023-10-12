import React from "react";
import styles from "../ArtistAndTitleFields/ArtistAndTitleFields.module.scss";

function SynopsisField({ videoForm, handleVideoFormChange }) {
  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>SYNOPSIS</label>
      <textarea
        className={styles.inputTextArea}
        name="synopsis"
        value={videoForm.synopsis}
        onChange={handleVideoFormChange}
        placeholder="Max of 500 characters"
        required
      />
      {videoForm.synopsis === "" && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Please enter a synopsis</p>
        </div>
      )}
      {videoForm.synopsis.length > 500 && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Error: Characters exceed 500</p>
        </div>
      )}
    </div>
  );
}

export default SynopsisField;
