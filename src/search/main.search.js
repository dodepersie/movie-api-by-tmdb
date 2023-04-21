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

const Search = (props) => {
  Differenttitle("MoofliXXI: Search");

  const [popularMovies, setPopularMovies] = useState([]);

  const SearchMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i}>
          <Grid>
            <Modalinternal
              activator={({ setVisible }) => (
                <>
                  <Spacer y={1} />
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
                      src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                      objectFit="cover"
                      width={300}
                      height={340}
                      alt={movie.title}
                      css={{
                        filter: "brightness(0.5) contrast(1.2) saturate(1.2)",
                      }}
                    />
                  </Card>
                </>
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
    if (q.length > 1) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <Container lg={12} fluid>
      <Spacer y={2} />

      <Input
        clearable
        status="default"
        size="lg"
        color="primary"
        onChange={({ target }) => search(target.value)}
        placeholder={props.desc}
        fullWidth
      />

      <Grid.Container gap={2} justify="space-around" alignContent="center">
        <SearchMovieList />
      </Grid.Container>
    </Container>
  );
};

export default Search;
