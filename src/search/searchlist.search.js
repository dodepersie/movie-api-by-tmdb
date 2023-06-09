import { Card, Col, Text, Grid, Modal } from "@nextui-org/react";
import ModalInternal from "../utilities/ModalInternal";
import MovieRating from "../utilities/MovieRating";

const SearchList = ({ searchResults }) => {
  return searchResults.map((search, i) => {
    let imgSrc;
    let title;
    let releaseDate;

    if (search.media_type === "movie") {
      imgSrc = `${process.env.REACT_APP_BASEIMGURL}/${search.poster_path}`;
      title = search.title;
      releaseDate = search.release_date;
    } else if (search.media_type === "person") {
      imgSrc = `${process.env.REACT_APP_BASEIMGURL}/${search.profile_path}`;
      title = search.name;
      releaseDate = null;
    } else if (search.media_type === "tv") {
      imgSrc = `${process.env.REACT_APP_BASEIMGURL}/${search.poster_path}`;
      title = search.name;
      releaseDate = search.first_air_date;
    } else {
      imgSrc =
        "https://placehold.co/500x700/EEE/31343C?font=open-sans&text=MoofliXXI";
      title = null;
      releaseDate = null;
    }

    const defaultImgSrc =
      "https://placehold.co/500x700/EEE/31343C?font=open-sans&text=MoofliXXI";

    return (
      <Grid xs={6} sm={2} md={2} data-aos="zoom-out" key={i}>
        <ModalInternal
          activator={({ setVisible }) => (
            <Card
              isHoverable
              isPressable
              variant="flat"
              onClick={() => setVisible(true)}
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  {(search.media_type === "movie" ||
                    search.media_type === "tv") && (
                    <MovieRating voteAverage={search.vote_average} />
                  )}

                  {search.media_type === "movie" ||
                  search.media_type === "tv" ? (
                    <Text h5 color="#EAEAEA">
                      {title}
                    </Text>
                  ) : null}

                  {search.media_type === "person" &&
                    <Text h3 color="#EAEAEA">
                      {title}
                    </Text>}

                  <Text h6 size={10} color="#EAEAEA">
                    {releaseDate}
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
                alt={title}
                css={{
                  filter: "brightness(0.7) contrast(1.2) saturate(1.2)",
                }}
              />
            </Card>
          )}
        >
          <Modal.Header>
            <Text b id="modal-title" size={20}>
              {title}
            </Text>
          </Modal.Header>

          <Modal.Body>
            {search.media_type === "movie" && search.overview && (
              <Text>{search.overview}</Text>
            )}

            {search.media_type === "tv" && search.overview && (
              <Text>{search.overview}</Text>
            )}

            {search.media_type === "person" && (
              <>
                <Text css={{ mb: "0" }}>
                  <strong>Known for</strong>: {search.known_for_department}
                </Text>

                {search.known_for.map((known, i) => (
                  <Text css={{ mb: "0" }} key={i}>
                    <strong>Film</strong>: {known.original_title} (
                    {known.release_date})
                  </Text>
                ))}

                <Text>
                  <strong>Popularity</strong>: {search.popularity}
                </Text>
              </>
            )}

            {(!search.overview && search.media_type === "movie") ||
            (!search.overview && search.media_type === "tv") ||
            (!search.known_for_department && search.media_type === "person") ? (
              <Text>No data available</Text>
            ) : null}
          </Modal.Body>
        </ModalInternal>
      </Grid>
    );
  });
};

export default SearchList;
