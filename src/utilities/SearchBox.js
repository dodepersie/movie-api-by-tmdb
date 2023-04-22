import React, { useState } from "react";
import { Card, Col, Text, Grid, Modal, Spacer, Input } from "@nextui-org/react";
import { SearchIcon } from "./Icon";
import { searchMovie } from "../utilities/api";
import Modalinternal from "../utilities/Modalinternal";
import MovieRating from "../utilities/MovieRating";


// Under Construction :)
const SearchBox = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      console.log(query.results);
      setPopularMovies(query.results);
    }
  };

  return (
    <>
      <Input
        clearable
        aria-labelledby="search-input"
        size="md"
        rounded
        onChange={({ target }) => search(target.value)}
        contentRight={<SearchIcon fill="var(--nextui-colors-accents6)" />}
        contentLeftStyling={false}
        placeholder="Search [Error yet]"
        disabled
      />
    </>
  );
};

export default SearchBox;
