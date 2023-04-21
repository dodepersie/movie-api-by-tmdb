import React from "react";
import { Loading, Container, Row, Col } from "@nextui-org/react";

const Loaders = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Loading size="xl" color="secondary" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loaders;
