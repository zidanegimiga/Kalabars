import React from "react";
import styles from "./selectSeries.module.scss";

function SeriesField({ videoForm, handleVideoFormChange, seriesOptions }) {
  return (
    <div className={styles.inputFieldsetSynopsis} id="otherFieldDiv">
      <label className={styles.inputLabel} htmlFor="seriesSelect">
        SELECT SERIES
      </label>
      <select
        id="seriesSelect"
        className={styles.inputSelect}
        name="series"
        value={videoForm.series}
        onChange={handleVideoFormChange}
        required
      >
        {seriesOptions.map((option, index) => (
          <option
            key={index}
            value={option.text}
            className={styles.inputSelectOption}
          >
            {option.text}
          </option>
        ))}
      </select>
      {videoForm.series === "" && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Select the series or add a new one</p>
        </div>
      )
      }
    </div>
  );
}

export default SeriesField;