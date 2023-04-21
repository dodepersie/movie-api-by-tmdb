import {
  Container,
  Row,
  Col,
  Text,
  Spacer,
  Grid,
} from "@nextui-org/react";
import Differenttitle from "../utilities/differentTitle";
import OverviewNowPlaying from "../now_playing/overview.now_playing";

const Main = (props) => {
  Differenttitle("MoofliXXI: Home");

  return (
    <>
      <Container lg={4} justify="center" alignContent="center" fluid>
        <Row>
          <Col gap={4}>
            <Spacer y={2} />
            <Text
              h1
              size={50}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 20%",
              }}
              weight="bold"
            >
              {props.name}
            </Text>
            <Text
              h4
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
                lineHeight: "1.7",
              }}
              weight="bold"
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
