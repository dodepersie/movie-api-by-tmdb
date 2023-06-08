import React, { useState } from "react";
import { Grid, Container, Spacer, Input } from "@nextui-org/react";
import { searchMovie } from "../utilities/api";
import { SearchIcon } from "../utilities/Icon";
import DifferentTitle from "../utilities/differentTitle";

const SearchList = React.lazy(() => import("./searchlist.search.js"));

const Search = () => {
  DifferentTitle("MoofliXXI: Search");

  const [popularMovies, setPopularMovies] = useState([]);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <Container lg css={{ p: "$4" }}>
      <Spacer y={1} />
      <Input
        fullWidth
        contentLeft={
          <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
        }
        onChange={({ target }) => search(target.value)}
        contentLeftStyling={false}
        css={{
          "& .nextui-input-content--left": {
            ml: "$4",
            dflex: "center",
          },
        }}
        placeholder="Search..."
      />
      <Spacer y={1} />

      <Grid.Container gap={1} justify="center" alignContent="center">
        <SearchList popularMovies={popularMovies} />
      </Grid.Container>
    </Container>
  );
};

export default Search;
