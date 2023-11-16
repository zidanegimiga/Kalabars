import React, { ChangeEvent, ChangeEventHandler } from "react";
import styles from "./selectVideoType.module.scss";

type MediaTypeProps = {
  videoForm: any;
  handleVideoFormChange: (e: ChangeEvent) => void;
  mediaType?: "audio" | "video"
}

function SelectMediaTypeField({ videoForm, handleVideoFormChange, mediaType }: MediaTypeProps) {
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
        <option className={styles.inputSelectOption} value={mediaType === "audio" ? "album" : "series"}>
          {mediaType === "audio" ? "Album" : "Series"}
        </option>
      </select>
      {videoForm.type === "" && (
        <div style={{ color: "red" }} className={styles.errorMessage}>
          <p>Please select a media type</p>
        </div>
      )}
    </div>
  );
}

export default SelectMediaTypeField;
