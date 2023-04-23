import { Container, Row, Col, Text, Spacer } from "@nextui-org/react";
import Differenttitle from "../utilities/differentTitle";

const NotFound = (props) => {
  Differenttitle("MoofliXXI: Not Found");

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
              size={100}
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
              css={{
                "@xsMax": {
                    fontSize: "22px",
                },

                fontSize: "30px",
              }}
              weight="bold"
              style={{ textAlign: "center" }}
            >
              {props.desc}
            </Text>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
