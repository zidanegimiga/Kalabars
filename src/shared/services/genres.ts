import { BASE_API_URL } from "shared/constants";

export type VideoGenresType = {
  id: number;
  landscape_image: string;
  public_id: string;
  slug: string;
  square_image: string;
  status: string;
  title: string;
};

type GenresApiSuccessfulResponseType = {
  result: VideoGenresType[];
};

export const getVideoGenres = async () => {
    const response = await fetch(`${BASE_API_URL}/videos/genres`);
    const responseJson = await response.json()
    const data: GenresApiSuccessfulResponseType = responseJson.response
    return data.result
};

export const getAudioGenres = async () => {
    const response = await fetch(`${BASE_API_URL}/audios/genres`);
    const responseJson = await response.json()
    const data: GenresApiSuccessfulResponseType = responseJson.response
    return data.result
};