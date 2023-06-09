import React, { useEffect, useState } from "react";
import { Card, Col, Text, Grid, Modal } from "@nextui-org/react";
import Modalinternal from "../utilities/Modalinternal";
import MovieRating from "../utilities/MovieRating";
import { getTrendingMovieList } from "../utilities/api";

const OverviewList = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    getTrendingMovieList()
      .then((result) => {
        setTrendingMovie(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return trendingMovie
    .sort((a, b) => b.vote_average - a.vote_average)
    .map((movie, i) => {
      return (
        <Grid xs={6} sm={3} lg={3} data-aos="zoom-out" key={i}>
          <Modalinternal
            activator={({ setVisible }) => (
              <Card
                isHoverable
                isPressable
                variant="flat"
                onClick={() => setVisible(true)}
              >
                <Card.Header css={{ position: "absolute" }}>
                  <Col>
                    <MovieRating voteAverage={movie.vote_average} />

                    <Text h5 color="#EAEAEA">
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
                  alt={`Poster for ${movie.title}`}
                  css={{
                    filter: "brightness(0.7) contrast(1.2) saturate(1.2)",
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
                <>
                  <Text>
                    <strong>Original title</strong>: {movie.original_title}
                  </Text>
                  <Text>{movie.overview}</Text>
                </>
              ) : (
                <Text>Overview not available</Text>
              )}
            </Modal.Body>
          </Modalinternal>
        </Grid>
      );
    });
};

export default OverviewList;
