import { APP_KEY, BASE_URL } from "../config/api_config";
import axios from "axios";

export const getNowPlaying = async () => {
  const callResult = await axios.get(
    `${BASE_URL}movie/now_playing?api_key=${APP_KEY}&language=en-US&page=1`
  );
  

  return callResult.data.results;
};
