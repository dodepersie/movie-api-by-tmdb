import { useState } from "react";
import {
  Card,
  Col,
  Text,
  Grid,
  Container,
  Modal,
  Spacer,
  Input,
} from "@nextui-org/react";
import { searchMovie } from "../utilities/api";
import Differenttitle from "../utilities/differentTitle";
import Modalinternal from "../utilities/Modalinternal";
import MovieRating from "../utilities/MovieRating";
import { SearchIcon } from "../utilities/Icon";

const Search = () => {
  Differenttitle("MoofliXXI: Search");

  const [popularMovies, setPopularMovies] = useState([]);

  const SearchMovieList = () => {
    return popularMovies.map((movie, i) => {
      const imgSrc = `${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`;
      const defaultImgSrc =
        "https://via.placeholder.com/300x340?text=MoofliXXI";

      return (
        <div key={i}>
          <Grid data-aos="zoom-out" css={{ mb: "$5"}}>
            <Modalinternal
              activator={({ setVisible }) => (
                <Card
                  isHoverable
                  isPressable
                  variant="bordered"
                  onPress={() => setVisible(true)}
                >
                  <Card.Header
                    css={{ position: "absolute", zIndex: 1, top: 5 }}
                  >
                    <Col>
                      <Text color="#ffffffAA">
                        <MovieRating voteAverage={movie.vote_average} />
                      </Text>

                      <Text h4 color="#EAEAEA">
                        {movie.title}
                      </Text>

                      <Text h6 size={10} color="#EAEAEA">
                        {movie.release_date}
                      </Text>
                    </Col>
                  </Card.Header>

                  <Card.Image
                    src={imgSrc}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultImgSrc;
                    }}
                    objectFit="cover"
                    width={300}
                    height={340}
                    alt={movie.title}
                    css={{
                      filter: "brightness(0.5) contrast(1.2) saturate(1.2)",
                    }}
                  />
                </Card>
              )}
            >
              <Modal.Header>
                <Text b id="modal-title" size={20}>
                  {movie.title}
                </Text>
              </Modal.Header>

              <Modal.Body>
                {movie.overview ? (
                  <Text>{movie.overview}</Text>
                ) : (
                  <Text>Overview not available</Text>
                )}
              </Modal.Body>
            </Modalinternal>
          </Grid>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <Container lg={4} justify="center" alignContent="center" fluid>
      <Spacer y={2} />

      <Input
        clearable
        aria-labelledby="search-input"
        size="md"
        rounded
        onChange={({ target }) => search(target.value)}
        contentRight={<SearchIcon fill="var(--nextui-colors-accents6)" />}
        contentLeftStyling={false}
        fullWidth
        placeholder="Search.."
      />

      <Spacer y={1} />

      <Grid.Container gap={2} justify="space-around" alignContent="center">
        <SearchMovieList />
      </Grid.Container>
    </Container>
  );
};

export default Search;
