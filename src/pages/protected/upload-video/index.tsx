import React, { useEffect, useState } from "react";
import styles from "./uploadVideo.module.scss"
import { useTokenValidation } from "shared/hooks/usTokenValidation";

const UploadVideo = () => {
  useTokenValidation();
  const [videoForm, setVideoForm] = useState({
    artist_name: '',
    title: '',
    synopsis: '',
    type: '',
    series: '',
    genre: '',
    tags: [],
    video_file: null,
    large_image: null,
    portrait_image: null,
    landscape_image: null,
  });

  const [showError, setShowError] = useState(false);

  const handleVideoFormChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'select-multiple') {
      const selectedOptions = Array.from(e.target.options)
        .filter((option) => option?.selected)
        .map((option) => option?.value);

      setVideoForm({
        ...videoForm,
        [name]: selectedOptions,
      });
    } else {
      setVideoForm({
        ...videoForm,
        [name]: type === 'file' ? files[0] : value,
      });
    }
  };

  const availableTags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];

  const postVideo = () => {
    // Implement your logic for posting video form data here
    console.log('Video Form Data:', videoForm);
  };

  return(
    <div className={styles.pageWrapper}>
      <h1>UPLOAD MEDIA</h1>
      <div>
        <form onSubmit={postVideo} className="w3-panel">
          <div className={styles.errorMessage}>
            {showError && <p>This Content already exists in database</p>}
          </div>

          {/* Artist Name */}
          <div className={styles.inputFieldset}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>CREATORS NAME</label>
              <br />
              <input
                type="email"
                className={styles.input}
                name="artist_name"
                value={videoForm.artist_name}
                onChange={handleVideoFormChange}
                required
              />
              {videoForm.artist_name === '' && 
                <div style={{ color: 'red' }} className={styles.errorMessage}>
                  <p>Please Enter Email</p>
                </div>
              }
            </div>

            {/* Content Title */}
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>CONTENT TITLE</label>
              <br />
              <input
                type="text"
                className={styles.input}
                name="title"
                value={videoForm.title}
                onChange={handleVideoFormChange}
                required
              />
              {/* Error message */}
              {videoForm.title === '' && 
                <div style={{ color: 'red' }} className={styles.errorMessage}>
                  <p>Title is required</p>
                </div>
              }
            </div>
          </div>

          {/* Synopsis */}
          <div className={styles.inputFieldset} style={{ marginLeft: '8px' }}>
            <label className={styles.inputLabel}>SYNOPSIS</label>
            <br />
            <textarea
              className={styles.inputTextArea}
              name="synopsis"
              value={videoForm.synopsis}
              onChange={handleVideoFormChange}
              placeholder="Max of 500 characters"
              required
            />
            {/* Error messages */}
            {videoForm.synopsis === '' && 
              <div style={{ color: 'red' }} className={styles.errorMessage}>
                <p>Please Enter synopsis</p>
              </div>
            }
            {videoForm.synopsis.length > 500 && 
              <div style={{ color: 'red' }} className={styles.errorMessage}>
                <p>Error: Characters exceed 500</p>
              </div>
            }
          </div>

          {/* Type */}
          <div className={styles.inputFieldset}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>TYPE</label>
              <br />
              <select
                className={styles.inputSelect}
                style={{ height: '40px' }}
                id="seeAnotherField"
                name="type"
                value={videoForm.type}
                onChange={handleVideoFormChange}
                required
              >
                <option className={styles.inputSelectOption}> * Select Type * </option>
                <option className={styles.inputSelectOption} value="single">Single</option>
                <option className={styles.inputSelectOption} value="series">Series</option>
              </select>
              {/* Error message */}
              {videoForm.type === '' && 
                <div style={{ color: 'red' }} className={styles.errorMessage}>
                  <p>Please select video type</p>
                </div>}
            </div>
          </div>

          {/* SERIES */}
          <div className={styles.inputFieldset} id="otherFieldDiv" style={{ marginLeft: '8px' }}>
            <label className={styles.inputLabel} htmlFor="seriesSelect">
              SELECT SERIES
            </label>
            <br />
            <select
              id="seriesSelect"
              className={styles.inputSelect}
              style={{ height: '40px' }}
              name="series"
              value={videoForm.series}
              onChange={handleVideoFormChange}
              required
            >
              {/* {seriesOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))} */}
            </select>
            {/* Error message */}
            {videoForm.series === '' && (
              <div style={{ color: 'red' }} className={styles.errorMessage}>
                <p>Select the series or add new</p>
              </div>
            )}
          </div>

          {/* GENRES */}
          <div className={styles.inputFieldset} style={{ marginLeft: '8px' }}>
            <label className={styles.inputLabel}>GENRE</label>
            <br />
            <select
              className={styles.inputSelect}
              style={{ height: '40px' }}
              id="seeAnotherField"
              name="genre"
              value={videoForm.genre}
              onChange={handleVideoFormChange}
              required
            >
              {/* {
                genreOptions?.map((item, index) => (
                  <option key={index} value={item}>{item}</option>                  
                ))
              } */}
            </select>
            {/* Error message */}
            {videoForm.genre === '' && <div style={{ color: 'red' }} className={styles.errorMessage}>Please select video genre</div>}
          </div>

          {/* TAGS */}
          <div className={styles.inputFieldset} style={{ marginLeft: '8px' }}>
            <label className={styles.inputLabel}>TAGS</label>
            <br />
            <select
              multiple
              className={styles.inputSelect}
              style={{ height: '40px' }}
              id="tags"
              name="tags"
              value={videoForm.tags}
              onChange={handleVideoFormChange}
              required
            >
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {videoForm.tags.length === 0 && (
              <div style={{ color: 'red' }} className={styles.errorMessage}>
                <p>Please select at least one tag</p>
              </div>
            )}
          </div>

          {/* Video Upload */}
          <div className={styles.inputFieldset} style={{ marginLeft: '8px' }}>
            <label className={styles.inputLabel}>VIDEO UPLOAD</label>
            <br />
            <div>
              <label htmlFor="video-upload" className={styles.inputLabel}>
                UPLOAD NOW
              </label>
              <input
                id="video-upload"
                name="video"
                type="file"
                style={{ display: 'none' }}
                onChange={handleVideoFormChange}
                required
              />
            </div>
            {/* Error message */}
            {videoForm.video_file === null && <div style={{ color: 'red' }} className={styles.errorMessage}>
                <p>Please upload a video</p> 
              </div>
            }
          </div>

          {/* Images */}
          <div className={styles.inputFieldset}>
            <label className={styles.inputLabel}>UPLOAD IMAGES(W x H)</label>
            <br />

            <div className="w3-col s6 m3 l3">
              <div>
                <label htmlFor="file-upload1" className="custom-file-upload">
                  1920 x 1100px
                </label>
                <input
                  id="file-upload1"
                  name="large_image"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleVideoFormChange}
                  required
                />
              </div>
              {/* Error message */}
              {videoForm.large_image === null && (
                <div style={{ color: 'red' }} className="w3-small"> 
                  Large Image Required
                </div>
              )}
            </div>

            {/* Submit Button */}
            <input type="submit" value="FINISH UPLOAD" className="w3-btn w3-orange w3-text-white w3-small w3-margin-top" style={{ marginLeft: '15px' }} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadVideo;
