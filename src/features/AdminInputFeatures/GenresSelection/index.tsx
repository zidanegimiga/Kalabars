import React from "react";
import styles from "../SelectSeries/selectSeries.module.scss";

function GenreField({ videoForm, handleVideoFormChange, genres }) {
  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>GENRE</label>
      <select
        className={styles.inputSelect}
        id="seeAnotherField"
        name="genre"
        value={videoForm.genre}
        onChange={handleVideoFormChange}
        required
      >
        {genres?.map((genre, index) => (
          <option
            key={index}
            value={genre.title}
            className={styles.inputSelectOption}
          >
            {genre.title}
          </option>
        ))}
      </select>
      {videoForm.genre === "" && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Please select a video genre</p>
        </div>
      )}
    </div>
  );
}

export default GenreField;
