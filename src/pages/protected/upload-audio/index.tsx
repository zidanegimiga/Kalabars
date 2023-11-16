import React, { useEffect, useState } from "react";
import styles from "./uploadAudio.module.scss";
import { useTokenValidation } from "shared/hooks/usTokenValidation";
import { BASE_API_URL } from "shared/constants";
import { VideoGenresType, getAudioGenres } from "shared/services/genres";
import Cookies from "js-cookie";
import ArtistAndTitleFields from "features/AdminInputFeatures/ArtistAndTitleFields";
import SelectMediaTypeField from "features/AdminInputFeatures/SelectMediaType";
import SeriesField from "features/AdminInputFeatures/SelectSeries";
import GenreField from "features/AdminInputFeatures/GenresSelection";
import TagsField from "features/AdminInputFeatures/TagsSelection";
import SynopsisField from "features/AdminInputFeatures/SynopsisField";
import MediaUploadField from "features/AdminInputFeatures/VideoUpload";
import ImageUpload from "features/AdminInputFeatures/ImageUpload";
import { postVideo } from "features/AdminInputFeatures/Services/videoServices";
import UploadProgressBar from "shared/ProgressBar";

function UploadVideo() {
  useTokenValidation();
  const [token, setToken] = useState("");
  const [progress, setProgress] = useState(0);

  const [audioForm, setAudioForm] = useState({
    artist_name: "",
    title: "",
    album_title: "",
    synopsis: "",
    type: "",
    album: "",
    genre: "",
    tags: [],
    audio_file: null,
    album_large: null,
    album_portrait: null,
    album_landscape: null,
    album_square: null,
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

  const handleAudioFormChange = ({ target }) => {
    const { name, value, type, files } = target;

    if (type === "select-multiple") {
      //@ts-ignore
      const selectedOptions = Array.from(target.options)
        //@ts-ignore
        .filter((option) => option?.selected)
        //@ts-ignore
        .map((option) => option?.value);

      setAudioForm({
        ...audioForm,
        [name]: selectedOptions,
      });
    } else {
      setAudioForm({
        ...audioForm,
        [name]: type === "file" ? files[0] : value,
      });
    }
  };

  const handleAudioChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "audio/wav") {
      setAudioForm({
        ...audioForm,
        audio_file: file,
      });
    } else {
      setAudioForm({
        ...audioForm,
        audio_file: null,
      });
      alert("Please select a valid wav audio file.");
    }
  };

  type ImageType = "large_image" | "portrait_image" | "square_image" | "landscape_image"

  const handleImageFileSelection = (event, imageType: ImageType) => {
    const file: File = event.target.files[0];
    if (file) {
      setAudioForm({
        ...audioForm,
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
      setAudioForm({
        ...audioForm,
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
    const getGenres = getAudioGenres();
    getGenres
      .then((genresData) => setGenres(genresData))
      .catch((e) => console.error(e));
  }, []);

  const fetchTags = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/audios/tags`);

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
    {
      id: 'kenyan',
      text: 'kenyan'
    },
    {
      id: 'african',
      text: 'african'
    },
    {
      id: 'kalabars',
      text: 'kalabars'
    }
  ];

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await postVideo(
        audioForm.audio_file,
        audioForm.artist_name,
        audioForm.title,
        audioForm.album_large,
        audioForm.album_portrait,
        audioForm.album_landscape,
        audioForm.square_image,
        audioForm.tags,
        audioForm.genre,
        audioForm.synopsis,
        audioForm.type,
        audioForm.album,
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
      <h1>UPLOAD AUDIO</h1>
      <UploadProgressBar progress={progress} />
      <div>
        <form onSubmit={handleUpload} className={styles.uploadForm}>
          <div className={styles.errorMessage}>
            {showError && <p>This content already exists in the database</p>}
          </div>

          {/* Artist Name */}
          <ArtistAndTitleFields
            videoForm={audioForm}
            handleVideoFormChange={handleAudioFormChange}
          />

          {/* Type */}
          <SelectMediaTypeField
            videoForm={audioForm}
            handleVideoFormChange={handleAudioFormChange}
            mediaType="audio"
          />

          {/* SERIES */}
          {audioForm.type === "album" && (
            <SeriesField
              videoForm={audioForm}
              handleVideoFormChange={handleAudioFormChange}
              seriesOptions={seriesOptions}
              mediaType="audio"
            />
          )}

          {/* GENRES */}
          <GenreField
            videoForm={audioForm}
            handleVideoFormChange={handleAudioFormChange}
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
            handleVideoFormChange={handleAudioFormChange}
            videoForm={audioForm}
          />

          {/* Video Upload */}
          <MediaUploadField
            videoForm={audioForm}
            handleMediaChange={handleAudioChange}
            mediaType="audio"
          />

          {/* Images */}
          <ImageUpload
            imageType="large_image"
            videoForm={audioForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={largeImagePreview}
          />
          <ImageUpload
            imageType="portrait_image"
            videoForm={audioForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={portraitImagePreview}
          />
          <ImageUpload
            imageType="landscape_image"
            videoForm={audioForm}
            handleImageFileSelection={handleImageFileSelection}
            previewURL={landscapeImagePreview}
          />
          <ImageUpload
            imageType="square_image"
            videoForm={audioForm}
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

export default UploadVideo;
