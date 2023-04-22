import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./Icon";
import { searchMovie } from "../utilities/api";

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
        placeholder="Search.."
      />
    </>
  );
};

export default SearchBox;
