import { Container, Row, Col, Text, Spacer, Grid } from "@nextui-org/react";
import Differenttitle from "../utilities/differentTitle";
import OverviewNowPlaying from "../now_playing/overview.now_playing";
import ContentEnd from "./contentend.main";

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
            <Spacer y={1} />
            <Text
              h1
              size={70}
              css={{  
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
              style={{ textAlign: "center" }}
            >
              {props.name}
            </Text>
            <Text
              h4
              weight="bold"
              style={{ textAlign: "center" }}
            >
              {props.desc}
            </Text>
          </Col>
        </Row>

        <Grid.Container justify="center" alignContent="center">
          <OverviewNowPlaying desc="International movies showing now" />
          <ContentEnd />
        </Grid.Container>
      </Container>
    </>
  );
};

export default Main;
