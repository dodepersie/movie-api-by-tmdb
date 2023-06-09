import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getTrendingList = async () => {
  const params = {
    api_key: apiKey,
  };

  const trending = await axios.get(`${baseUrl}/trending/movie/day`, {
    params,
  });
  return trending.data.results;
};

export const getTrendingPersonList = async () => {
  const params = {
    api_key: apiKey,
  };

  const trendingPerson = await axios.get(`${baseUrl}/trending/person/week`, {
    params,
  });
  return trendingPerson.data.results;
};

export const getTrendingMovieList = async () => {
  const params = {
    api_key: apiKey,
  };

  const trendingMovie = await axios.get(`${baseUrl}/trending/movie/week`, {
    params,
  });
  return trendingMovie.data.results.slice(0, 8);
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

export const searchAll = async (q) => {
  const search = await axios.get(`
    ${baseUrl}/search/multi?query=${q}&page=1&api_key=${apiKey}
    `);
  return search.data;
};
