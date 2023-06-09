import { useEffect, useState } from "react";
import { Card, Col, Text, Grid, Modal } from "@nextui-org/react";
import { getNowPlayingListID } from "../utilities/api";
import Modalinternal from "../utilities/Modalinternal";
import MovieRating from "../utilities/MovieRating";

const MainNowPlayingList = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlayingListID()
      .then((result) => {
        setNowPlaying(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return nowPlaying.map((movie, i) => {
    const imgSrc = `${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`;
    const defaultImgSrc =
      "https://placehold.co/500x700/EEE/31343C?font=open-sans&text=MoofliXXI";

    return (
      <Grid xs={6} sm={2} md={2} data-aos="zoom-out" key={i}>
        <Modalinternal
          activator={({ setVisible }) => (
            <Card
              isHoverable
              isPressable
              variant="flat"
              onClick={() => setVisible(true)}
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
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
                src={imgSrc}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultImgSrc;
                }}
                objectFit="cover"
                height={325}
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
            {movie.overview && <Text>{movie.overview}</Text>}
            {!movie.overview && <Text>Overview not available</Text>}
          </Modal.Body>
        </Modalinternal>
      </Grid>
    );
  });
};

export default MainNowPlayingList;
