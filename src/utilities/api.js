import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getNowPlayingList = async () => {
  const params = {
    api_key: apiKey,
  };

  const movieNowPlaying = await axios.get(`${baseUrl}/trending/movie/week`, {
    params,
  });
  return movieNowPlaying.data.results.slice(0, 8);
};

export const getNowPlayingListID = async () => {
  const params = {
    api_key: apiKey,
    region: "ID",
  };

  const movieNowPlaying = await axios.get(`${baseUrl}/movie/now_playing`, {
    params,
  });
  return movieNowPlaying.data.results.slice(0, 18);
};

export const getPopularMovieList = async () => {
  const params = {
    api_key: apiKey,
  };

  const movie = await axios.get(`${baseUrl}/movie/popular`, {
    params,
  });

  return movie.data.results.slice(0, 18);
};

export const searchMovie = async (q) => {
  const search = await axios.get(`
    ${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}
    `);
  return search.data;
};
