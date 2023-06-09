import { useEffect, useState } from "react";
import { Card, Col, Text, Grid, Modal } from "@nextui-org/react";
import { getTrendingPersonList } from "../utilities/api";
import Modalinternal from "../utilities/Modalinternal";

const PopularList = () => {
  const [trendingPerson, setTrendingPerson] = useState([]);

  useEffect(() => {
    getTrendingPersonList()
      .then((result) => {
        const slicedData = result.slice(0, 18);
        setTrendingPerson(slicedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return trendingPerson
    .sort((a, b) => b.popularity - a.popularity)
    .map((person, i) => {
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
                    <Text h3 color="#EAEAEA">
                      {person.name}
                    </Text>

                    <Text h6 size={10} color="#EAEAEA">
                      {person.release_date}
                    </Text>
                  </Col>
                </Card.Header>

                <Card.Image
                  src={`${process.env.REACT_APP_BASEIMGURL}/${person.profile_path}`}
                  objectFit="cover"
                  height={325}
                  alt={`Poster for ${person.name}`}
                  css={{
                    filter: "brightness(0.7) contrast(1.2) saturate(1.2)",
                  }}
                />
              </Card>
            )}
          >
            <Modal.Header>
              <Text b id="modal-title" size={20}>
                {person.name}
              </Text>
            </Modal.Header>

            <Modal.Body>
              <Text css={{ mb: "0" }}>
                <strong>Known for</strong>: {person.known_for_department}
              </Text>
              {person.known_for.map((known, i) => {
                return (
                  <Text css={{ mb: "0" }} key={i}>
                    <strong>Film</strong>: {known.original_title} ({" "}
                    {known.release_date} )
                  </Text>
                );
              })}
              <Text>
                <strong>Popularity</strong>: {person.popularity}
              </Text>
            </Modal.Body>
          </Modalinternal>
        </Grid>
      );
    });
};

export default PopularList;
