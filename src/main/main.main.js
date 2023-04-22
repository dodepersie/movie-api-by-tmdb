import { Container, Row, Col, Text, Spacer, Grid } from "@nextui-org/react";
import Differenttitle from "../utilities/differentTitle";
import OverviewNowPlaying from "../now_playing/overview.now_playing";

const Main = (props) => {
  Differenttitle("MoofliXXI: Home");

  return (
    <>
      <Container lg={4} justify="center" alignContent="center" fluid>
        <Row>
          <Col
            gap={4}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Spacer y={2} />
            <Text
              h1
              size={70}
              css={{
                textGradient: "45deg, $blue600 -30%, $pink600 60%",
              }}
              weight="bold"
              style={{ textAlign: "center" }}
            >
              {props.name}
            </Text>
            <Text
              h4
              css={{
                textGradient: "45deg, $purple600 -30%, $pink600 60%",
                lineHeight: "1.7",
              }}
              weight="bold"
              style={{ textAlign: "center" }}
            >
              {props.desc}
            </Text>
          </Col>
        </Row>

        <Grid.Container justify="center" alignContent="center">
          <OverviewNowPlaying desc="Now playing in US" />
        </Grid.Container>
      </Container>
    </>
  );
};

export default Main;
