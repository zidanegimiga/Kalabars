import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "shared/constants";

// interface VideoUploadResponse {
//   message: string;
// }

interface ProgressCallback {
  (progress: number): void;
}

export async function postVideo(
  videoFile: File,
  artistName: string,
  title: string,
  largeImage: File,
  portraitImage: File,
  landscapeImage: File,
  squareImage: File,
  tagsArr: string[],
  genresArr: string,
  description: string,
  videoType: string,
  seriesId: string,
  token: string,
  onProgress: ProgressCallback
): Promise<any> {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("video_file", videoFile);
  formData.append("creators_name", artistName);
  // @ts-ignore
  formData.append("tags_arr", tagsArr);
  // @ts-ignore
  formData.append("genres_arr", [genresArr]);
  formData.append("description", description);
  formData.append("video_type", videoType);
  formData.append("series_id", seriesId);
  formData.append("large_image", largeImage, largeImage.name);
  formData.append("portrait_image", portraitImage, portraitImage.name);
  formData.append("landscape_image", landscapeImage, landscapeImage.name);
  formData.append("square_image", squareImage, squareImage.name);

  const headers = {
    "x-access-token": token,
    "Content-Type": "multipart/form-data",
  };

  try {
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }

    console.log("FormData contents:", formDataObject);

    const response: AxiosResponse = await axios.post(
      BASE_API_URL + "/video",
      formData,
      {
        headers,
        onUploadProgress: (progressEvent) => {
          const loaded = progressEvent.loaded;
          const total = progressEvent.total;
          const progress = (loaded / total) * 100;
          onProgress(progress);

          setTimeout(() => {
            onProgress(0);
          }, 2000);
        },
      }
    );

    if (response.status === 200) {
      return { message: "Video uploaded successfully." };
    } else {
      return { message: "Failed to upload the video." };
    }
  } catch (error) {
    return { message: "Error uploading the video." };
  }
}

export async function updateVideo(
  public_id: string,
  artist_id: string,
  video_file: File,
  trailer_file: File,
  title: string,
  artist_name: string,
  large_image: File,
  portrait_image: File,
  landscape_image: File,
  square_image: File,
  tags_arr: string[],
  genres_arr: string,
  description: string,
  video_type: string,
  series_id: string,
  token: string,
  onProgress: ProgressCallback
): Promise<any> {
  const formData = new FormData();
  formData.append("artist_id", artist_id);
  formData.append("title", title);
  formData.append("video_file", video_file);
  formData.append("trailer_file", trailer_file);
  formData.append("creators_name", artist_name);
  // @ts-ignore
  formData.append("tags_arr", tags_arr);
  // @ts-ignore
  formData.append("genres_arr", [genres_arr]);
  formData.append("description", description);
  formData.append("video_type", video_type);
  formData.append("series_id", series_id);
  formData.append("large_image", large_image, large_image.name);
  formData.append("portrait_image", portrait_image, portrait_image.name);
  formData.append("landscape_image", landscape_image, landscape_image.name);
  formData.append("square_image", square_image, square_image.name);

  const headers = {
    "x-access-token": token,
    "Content-Type": "multipart/form-data",
  };

    try {
      const formDataObject = {};
      for (const [key, value] of formData.entries()) {
        formDataObject[key] = value;
      }

      console.log("FormData contents:", formDataObject);

      const response: AxiosResponse = await axios.put(
        BASE_API_URL + "/videos" + public_id,
        formData,
        {
          headers,
          onUploadProgress: (progressEvent) => {
            const loaded = progressEvent.loaded;
            const total = progressEvent.total;
            const progress = (loaded / total) * 100;
            onProgress(progress);

            setTimeout(() => {
              onProgress(0);
            }, 2000);
          },
        }
      );

      if (response.status === 200) {
        return { message: "Video uploaded successfully." };
      } else {
        return { message: "Failed to upload the video." };
      }
    } catch (error) {
      return { message: "Error uploading the video." };
    }
  
}

export async function postAudio(
  audioFile: File,
  artistName: string,
  title: string,
  largeImage: File,
  portraitImage: File,
  landscapeImage: File,
  squareImage: File,
  tagsArr: string[],
  genresArr: string,
  description: string,
  videoType: string,
  seriesId: string,
  token: string,
  onProgress: ProgressCallback
): Promise<any> {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("audio_file", audioFile);
  formData.append("artist_name", artistName);
  // @ts-ignore
  formData.append("tags_arr", tagsArr);
  // @ts-ignore
  formData.append("genres_arr", [genresArr]);
  formData.append("description", description);
  formData.append("video_type", videoType);
  formData.append("series_id", seriesId);
  formData.append("large_image", largeImage, largeImage.name);
  formData.append("portrait_image", portraitImage, portraitImage.name);
  formData.append("landscape_image", landscapeImage, landscapeImage.name);
  formData.append("square_image", squareImage, squareImage.name);

  const headers = {
    "x-access-token": token,
    "Content-Type": "multipart/form-data",
  };

  try {
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }

    console.log("FormData contents:", formDataObject);

    const response: AxiosResponse = await axios.post(
      BASE_API_URL + "/video",
      formData,
      {
        headers,
        onUploadProgress: (progressEvent) => {
          const loaded = progressEvent.loaded;
          const total = progressEvent.total;
          const progress = (loaded / total) * 100;
          onProgress(progress);

          setTimeout(() => {
            onProgress(0);
          }, 2000);
        },
      }
    );

    if (response.status === 200) {
      return { message: "Video uploaded successfully." };
    } else {
      return { message: "Failed to upload the video." };
    }
  } catch (error) {
    return { message: "Error uploading the video." };
  }
}

