import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Text } from "@nextui-org/react";
import { A11y, Autoplay, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTrendingList } from "../utilities/api";
import MovieRating from "../utilities/MovieRating";
import Modalinternal from "../utilities/Modalinternal";

import "swiper/css";
import "swiper/css/effect-creative";

const MainSwiperList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingList()
      .then((result) => {
        const slicedData = result.slice(0, 5);
        setTrendingMovies(slicedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Swiper
        modules={[A11y, Autoplay, Mousewheel]}
        grabCursor={true}
        mousewheel={true}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {trendingMovies
          .sort((a, b) => b.vote_average - a.vote_average)
          .map((movie, i) => (
            <SwiperSlide key={i}>
              <Modalinternal
                activator={({ setVisible }) => (
                  <Card variant="bordered" isPressable>
                    <Card.Header
                      css={{ position: "absolute", zIndex: 1, top: 5 }}
                    >
                      <Card.Body css={{ p: 0 }}>
                        <Col>
                          <MovieRating voteAverage={movie.vote_average} />
                          <Text h1 size={20} color="#EAEAEA">
                            {movie.title}
                          </Text>
                        </Col>
                      </Card.Body>
                    </Card.Header>
                    <Card.Image
                      src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
                      objectFit="cover"
                      alt={`Backdrop for ${movie.title}`}
                      css={{
                        filter: "brightness(0.4) contrast(1.2) saturate(1.2)",
                      }}
                    />
                    <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop:
                          "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                      }}
                    >
                      <Row>
                        <Col>
                          <Text color="#000" size={12}>
                            Release at: {movie.release_date}
                          </Text>
                          <Text color="#000" size={12}>
                            Vote count: {movie.vote_count}
                          </Text>
                        </Col>
                        <Col>
                          <Row justify="flex-end">
                            <Button
                              flat
                              auto
                              rounded
                              color="primary"
                              onPress={() => setVisible(true)}
                            >
                              <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                              >
                                See Overview
                              </Text>
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Footer>
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
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MainSwiperList;
