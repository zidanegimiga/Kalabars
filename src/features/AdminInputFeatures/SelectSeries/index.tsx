import React, { ChangeEvent } from "react";
import styles from "./selectSeries.module.scss";

type SeriesProps = {
  videoForm: any;
  handleVideoFormChange: (e: ChangeEvent) => void;
  seriesOptions: any;
  mediaType: "audio" | "video"
}

function SeriesField({ videoForm, handleVideoFormChange, seriesOptions }: SeriesProps) {
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