import React from "react";
import styles from "./selectVideoType.module.scss";

function SelectVideoTypeField({ videoForm, handleVideoFormChange }) {
  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>TYPE</label>
      <select
        className={styles.inputSelect}
        id="seeAnotherField"
        name="type"
        value={videoForm.type}
        onChange={handleVideoFormChange}
        required
      >
        <option className={styles.inputSelectOption} value="single">
          Single
        </option>
        <option className={styles.inputSelectOption} value="series">
          Series
        </option>
      </select>
      {videoForm.type === "" && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Please select a video type</p>
        </div>
      )}
    </div>
  );
}

export default SelectVideoTypeField;
