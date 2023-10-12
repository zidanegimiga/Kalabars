import React from "react";
import styles from "../ArtistAndTitleFields/ArtistAndTitleFields.module.scss";

function ImageUpload({
  imageType,
  videoForm,
  handleImageFileSelection,
  previewURL,
}) {
  const imagePreview = previewURL ? (
    <img
      src={previewURL}
      alt={`${imageType} Preview`}
      className={styles.imagePreview}
    />
  ) : null;

  return (
    <div className={styles.inputFieldsetSynopsis}>
      <label className={styles.inputLabel}>
        {imageType === "large_image" ? "LARGE IMAGE" : "PORTRAIT IMAGE"} (W x H)
      </label>
      <div className={styles.inputFieldsetSynopsis}>
        <div>
          <label
            htmlFor={`file-upload-${imageType}`}
            className={styles.customFileUpload}
          >
            {imageType === "large_image" ? "1920 x 1100px" : "SQUARE"}
          </label>
          <input
            id={`file-upload-${imageType}`}
            name={imageType}
            type="file"
            onChange={(e) => handleImageFileSelection(e, imageType)}
            required
          />
          {imagePreview}
        </div>
        {videoForm[imageType] === null && !previewURL && (
          <div style={{ color: "red" }} className={styles.errorMessage}>
            <p>
              {imageType === "large_image" ? "Large Image" : "Portrait Image"}{" "}
              Required
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
