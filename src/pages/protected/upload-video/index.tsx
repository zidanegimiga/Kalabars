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

function UploadVideo() {
  useTokenValidation();

  const [videoForm, setVideoForm] = useState({
    artist_name: "",
    title: "",
    synopsis: "",
    type: "",
    series: "",
    genre: "",
    tags: [],
    video_file: null,
    large_image: null,
    portrait_image: null,
    landscape_image: null,
  });

  const [genres, setGenres] = useState<VideoGenresType[]>([]);
  const [token, setToken] = useState("");

  const initialTags = [];
  const [selectedTags, setSelectedTags] = useState(initialTags);
  const [newTag, setNewTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [showError, setShowError] = useState(false);

  const [largeImagePreview, setLargeImagePreview] = useState(null);
  const [portraitImagePreview, setPortraitImagePreview] = useState(null);

  // Event handlers
  const handleVideoFormChange = ({ target }) => {
    const { name, value, type, files } = target;

    if (type === "select-multiple") {
      //@ts-ignore
      const selectedOptions = Array.from(target.options).filter((option) => option.selected).map((option) => option.value);

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
        video_file: URL.createObjectURL(file),
      });
      console.log("Video: ", videoForm.video_file);
    } else {
      setVideoForm({
        ...videoForm,
        video_file: null,
      });
      alert("Please select a valid MP4 video file.");
    }
  };

  const handleImageFileSelection = (event, imageType) => {
    const file = event.target.files[0];
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
      }
    }
  };

  const handleSelectTag = (event) => {
    const selectedTag = event.target.value;
    if (!selectedTags.includes(selectedTag)) {
      setSelectedTags([...selectedTags, selectedTag]);
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

  // Fetch available tags when the component mounts
  useEffect(() => {
    fetchAvailableTags();
    const adminToken = Cookies.get("token");
    setToken(adminToken);
    const getGenres = getVideoGenres();
    getGenres
      .then((genresData) => setGenres(genresData))
      .catch((e) => console.error(e));
  }, []);

  const fetchAvailableTags = async () => {
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

  const postVideo = () => {
    console.log("Video Form Data:", videoForm);
  };

  return (
    <div className={styles.pageWrapper}>
      <h1>UPLOAD MEDIA</h1>
      <div>
        <form onSubmit={postVideo} className={styles.uploadForm}>
          <div className={styles.errorMessage}>
            {showError && <p>This content already exists in the database</p>}
          </div>

          {/* Artist Name */}
          <ArtistAndTitleFields
            videoForm={videoForm}
            handleVideoFormChange={handleVideoFormChange}
          />

          {/* Type */}
          <SelectVideoTypeField
            videoForm={videoForm}
            handleVideoFormChange={handleVideoFormChange}
          />

          {/* SERIES */}
          <SeriesField
            videoForm={videoForm}
            handleVideoFormChange={handleVideoFormChange}
            seriesOptions={seriesOptions}
          />

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

          {/* Submit Button */}
          <input
            type="submit"
            value="FINISH UPLOAD"
            className="w3-btn w3-orange w3-text-white w3-small w3-margin-top"
            style={{ marginLeft: "15px" }}
          />
        </form>
      </div>
    </div>
  );
}

export default UploadVideo;
