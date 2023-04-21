import { useEffect, useState } from "react";
import { Card, Col, Text, Grid, Modal } from "@nextui-org/react";
import { getNowPlayingListLimited } from "../utilities/api";
import Modalinternal from "../utilities/Modalinternal";
import MovieRating from "../utilities/MovieRating";
import Loaders from "../utilities/Loaders";

const OverviewNowPlaying = (props) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCanceled = false;
    if (!isCanceled) {
      setLoading(true);
      getNowPlayingListLimited()
        .then((result) => {
          setNowPlaying(result);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      isCanceled = true;
    };
  }, []);

  function Loading() {
    return loading ? <Loaders /> : null;
  }

  const OverviewNowPlayingList = () => {
    return nowPlaying.map((movie, i) => {
      return (
        <div key={i}>
          <Grid data-aos="zoom-out">
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

  return (
    <>
      <Text
        h1
        css={{
          "@xsMax": {
            fontSize: "40px",
          },

          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          p: 5,
          fontSize: "60px",
        }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Grid.Container gap={2} justify="space-around" alignContent="center">
        <Loading />
        <OverviewNowPlayingList />
      </Grid.Container>
    </>
  );
};

export default OverviewNowPlaying;
