import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`
    ${baseUrl}/movie/popular?page=1&api_key=${apiKey}
    `);
  return movie.data.results;
};

export const getNowPlayingList = async () => {
  const params = {
    api_key: apiKey,
    page: 1,
    language: "en-US",
    region: "ID",
  };

  const movieNowPlaying = await axios.get(`${baseUrl}/movie/now_playing`, {
    params,
  });
  return movieNowPlaying.data.results;
};

export const getNowPlayingListLimited = async () => {
  const params = {
    api_key: apiKey,
    page: 1,
    language: "en-US",
    region: "US",
  };

  const movieNowPlaying = await axios.get(`${baseUrl}/movie/now_playing`, {
    params,
  });
  return movieNowPlaying.data.results.slice(0, 4);
};

export const searchMovie = async (q) => {
  const search = await axios.get(`
    ${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}
    `);
  return search.data;
};
