import React, { useEffect, useState } from "react";
import styles from "./uploadVideo.module.scss";
import { useTokenValidation } from "shared/hooks/usTokenValidation";
import { BASE_API_URL } from "shared/constants";
import { VideoGenresType, getVideoGenres } from "shared/services/genres";
import Cookies from "js-cookie";
import ArtistAndTitleFields from "features/AdminInputFeatures/ArtistAndTitleFields";
import SelectVideoTypeField from "features/AdminInputFeatures/SelectVideoType";
import SeriesField from "features/AdminInputFeatures/SelectSeries";
import GenreField from "features/AdminInputFeatures/GenresSelection";
import TagsField from "features/AdminInputFeatures/TagsSelection";
import SynopsisField from "features/AdminInputFeatures/SynopsisField";
import VideoUploadField from "features/AdminInputFeatures/VideoUpload";
import ImageUpload from "features/AdminInputFeatures/ImageUpload";
import { postVideo, updateVideo } from "features/AdminInputFeatures/Services/videoServices";
import UploadProgressBar from "shared/ProgressBar";
import PropTypes from 'prop-types'

const UpdateVideo = props => {
  useTokenValidation();
  const [token, setToken] = useState("");
  const [progress, setProgress] = useState(0);

  const [videoForm, setVideoForm] = useState({
    public_id: "",
    artist_id: "",
    artist_name: "",
    title: "",
    synopsis: "",
    type: "",
    series: "",
    genre: "",
    tags: [],
    video_file: null,
    trailer_file: null,
    large_image: null,
    portrait_image: null,
    landscape_image: null,
    square_image: null,
  });

  const [genres, setGenres] = useState<VideoGenresType[]>([]);
  const initialTags = [];
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
  const [newTag, setNewTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [showError, setShowError] = useState(false);

  const [largeImagePreview, setLargeImagePreview] = useState(null);
  const [portraitImagePreview, setPortraitImagePreview] = useState(null);
  const [landscapeImagePreview, setLandscapeImagePreview] = useState(null);
  const [squareImagePreview, setSquareImagePreview] = useState(null);

  const handleVideoFormChange = ({ target }) => {
    const { name, value, type, files } = target;

    if (type === "select-multiple") {
      //@ts-ignore
      const selectedOptions = Array.from(target.options)
        //@ts-ignore
        .filter((option) => option?.selected)
        //@ts-ignore
        .map((option) => option?.value);

      setVideoForm({
        ...videoForm,
        [name]: selectedOptions,
      });
    } else {
      setVideoForm({
        ...videoForm,
        [name]: type === "file" ? files[0] : value,
      });
    }
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "video/mp4") {
      setVideoForm({
        ...videoForm,
        video_file: file,
      });
    } else {
      setVideoForm({
        ...videoForm,
        video_file: null,
      });
      alert("Please select a valid MP4 video file.");
    }
  };

  type ImageType = "large_image" | "portrait_image" | "square_image" | "landscape_image"

  const handleImageFileSelection = (event, imageType: ImageType) => {
    const file: File = event.target.files[0];
    if (file) {
      setVideoForm({
        ...videoForm,
        [imageType]: file,
      });

      const previewURL = URL.createObjectURL(file);

      if (imageType === "large_image") {
        setLargeImagePreview(previewURL);
      } else if (imageType === "portrait_image") {
        setPortraitImagePreview(previewURL);
      } else if (imageType === "square_image") {
        setSquareImagePreview(previewURL)
      } else if (imageType === "landscape_image") {
        setLandscapeImagePreview(previewURL)
      }
    }
  };

  const handleSelectTag = (event) => {
    const selectedTag = event.target.value;
    const selectedTagsCopy = [...selectedTags];

    if (!selectedTagsCopy.includes(selectedTag)) {
      selectedTagsCopy.push(selectedTag);
      setSelectedTags(selectedTagsCopy);

      // Update videoForm with the selected tags
      setVideoForm({
        ...videoForm,
        tags: selectedTagsCopy,
      });
    }
  };

  const handleNewTagChange = (event) => {
    const typedTag = event.target.value;
    setNewTag(typedTag);
  };

  const addNewTag = async (e) => {
    e.preventDefault();
    if (newTag.trim() !== "" && !selectedTags.includes(newTag)) {
      try {
        const response = await fetch(`${BASE_API_URL}/videos/tag`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
          body: JSON.stringify({ title: newTag }),
        });
        if (response.ok) {
          setSelectedTags([...selectedTags, newTag]);
          setNewTag("");
        } else {
          console.error("Failed to create a new tag");
        }
      } catch (error) {
        console.error("Error creating a new tag: ", error);
      }
    }
  };

  const removeTag = (tag) => {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
  };

  useEffect(() => {
    fetchTags();
    const adminToken = Cookies.get("token");
    setToken(adminToken);
    const getGenres = getVideoGenres();
    getGenres
      .then((genresData) => setGenres(genresData))
      .catch((e) => console.error(e));
  }, []);

  const fetchTags = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/videos/tags`);
      if (response.ok) {
        const responseJson = await response.json();
        const data = responseJson.response.result;
        setAvailableTags(data.map((tag) => tag.title));
        console.log("Tags: ", availableTags);
      } else {
        console.error("Failed to fetch available tags");
      }
    } catch (error) {
      console.error("Error fetching available tags: ", error);
    }
  };

  const seriesOptions = [
    { id: "The book", text: "The book" },
    { id: "Loss in love", text: "Loss in love" },
  ];

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await updateVideo(
        videoForm.public_id,
        videoForm.artist_id,
        videoForm.video_file,
        videoForm.trailer_file,
        videoForm.title,
        videoForm.artist_name,        
        videoForm.large_image,
        videoForm.portrait_image,
        videoForm.landscape_image,
        videoForm.square_image,
        videoForm.tags,
        videoForm.genre,
        videoForm.synopsis,
        videoForm.type,
        videoForm.series,
        token,
        setProgress
      );

      if (response.status === 200) {
        console.log("Upload successful:", response);
      } else {
        console.error("Upload error:", response);
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <h1>UPDATE MEDIA</h1>
      <UploadProgressBar progress={progress} />
      <div>
        <form onSubmit={handleUpload} className={styles.uploadForm}>
          <div className={styles.errorMessage}>
            {showError && <p>This content already exists in the database</p>}
          </div>

          {/* Artist Name */}
          <ArtistAndTitleFields
            videoForm={videoForm}
            handleVideoFormChange={handleVideoFormChange}
          />
          <div>
            <input name="public_id" placeholder="public_id" value={videoForm.public_id} onChange={handleVideoFormChange} />
            <input name="artist_id" placeholder="artist_id"  value={videoForm.artist_id} onChange={handleVideoFormChange} />
          </div>

          {/* Type */}
          <SelectVideoTypeField
            videoForm={videoForm}
            handleVideoFormChange={handleVideoFormChange}
          />

          {/* SERIES */}
          {videoForm.type === "series" && (
            <SeriesField
              videoForm={videoForm}
              handleVideoFormChange={handleVideoFormChange}
              seriesOptions={seriesOptions}
            />
          )}

          {/* GENRES */}
          <GenreField
            videoForm={videoForm}
            handleVideoFormChange={handleVideoFormChange}
            genres={genres}
          />

          {/* TAGS */}
          <TagsField
            availableTags={availableTags}
            selectedTags={selectedTags}
            newTag={newTag}
            handleSelectTag={handleSelectTag}
            handleNewTagChange={handleNewTagChange}
            addNewTag={addNewTag}
            removeTag={removeTag}
          />

          {/* Synopsis */}
          <SynopsisField
            handleVideoFormChange={handleVideoFormChange}
            videoForm={videoForm}
          />

          {/* Video Upload */}
          <VideoUploadField
            videoForm={videoForm}
            handleVideoChange={handleVideoChange}
          />

          {/* Images */}
          <ImageUpload
            imageType="large_image"
            videoForm={videoForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={largeImagePreview}
          />
          <ImageUpload
            imageType="portrait_image"
            videoForm={videoForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={portraitImagePreview}
          />
          <ImageUpload
            imageType="landscape_image"
            videoForm={videoForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={landscapeImagePreview}
          />
          <ImageUpload
            imageType="square_image"
            videoForm={videoForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={squareImagePreview}
          />

          {/* Submit Button */}
          <input
            type="submit"
            value="FINISH UPLOAD"
            className="w3-btn w3-orange w3-text-white w3-small w3-margin-top"
            style={{ marginLeft: "15px" }}
          />
        </form>
        <UploadProgressBar progress={progress} />
      </div>
    </div>
  );
}

UpdateVideo.propTypes = {}

export default UpdateVideo;