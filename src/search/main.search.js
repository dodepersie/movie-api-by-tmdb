import React, { useState } from "react";
import { Grid, Spacer, Input } from "@nextui-org/react";
import { searchAll } from "../utilities/api";
import { SearchIcon } from "../utilities/Icon";
import DifferentTitle from "../utilities/differentTitle";

const SearchList = React.lazy(() => import("./searchlist.search.js"));

const Search = () => {
  DifferentTitle("MoofliXXI: Search");

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    if (query.length > 3) {
      const results = await searchAll(query);
      const slicedResults = results.results.slice(0, 18);
      setSearchResults(slicedResults);
    }
  };  

  return (
    <>
      <Spacer y={1} />
      <Input
        fullWidth
        contentLeft={<SearchIcon fill="var(--nextui-colors-accents6)" size={16} />}
        onChange={({ target }) => handleSearch(target.value)}
        contentLeftStyling={false}
        css={{
          "& .nextui-input-content--left": {
            ml: "$4",
            display: "flex",
            alignItems: "center",
          },
        }}
        placeholder="Search Movie/TV Series/Actor ..."
      />
      <Spacer y={1} />

      <Grid.Container gap={0.3} justify="center" alignContent="center">
        <SearchList searchResults={searchResults} />
      </Grid.Container>
    </>
  );
};

export default Search;
