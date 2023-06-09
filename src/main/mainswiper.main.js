import React, { useEffect, useState } from "react";
import { Card, Col, Text } from "@nextui-org/react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTrendingList } from "../utilities/api";
import MovieRating from "../utilities/MovieRating";

import "swiper/css";
import "swiper/css/pagination";

const MainSwiper = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTrendingList()
      .then((result) => {
        const slicedData = result.slice(0, 5);
        setPopularMovies(slicedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Text
        h1
        css={{
          "@xsMax": {
            fontSize: "40px",
          },

          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          fontSize: "50px",
          marginTop: "1rem",
        }}
        style={{ textAlign: "center" }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
      >
        {popularMovies.map((movie, i) => (
          <SwiperSlide key={i}>
            <Card variant="flat">
              <Card.Header css={{ position: "absolute" }}>
                <Col>
                  <MovieRating voteAverage={movie.vote_average} />

                  <Text h3 color="#EAEAEA">
                    {movie.title}
                  </Text>

                  <Text h3 size={14} color="#EAEAEA">
                    {movie.overview}
                  </Text>
                </Col>
              </Card.Header>

              <Card.Image
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
                objectFit="cover"
                alt={`Backdrop for ${movie.title}`}
                css={{
                  filter: "brightness(0.4) contrast(1.2) saturate(1.2)",
                }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSwiper;
