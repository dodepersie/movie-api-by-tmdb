import {
  Container,
  Col,
  Row,
  Text,
  Grid,
  Image,
  Tooltip,
} from "@nextui-org/react";

import cgvLogo from  "./../assets/logo/cgv.png"
import cinemaXXILogo from "./../assets/logo/xxi.png";
import cinepolisLogo from "./../assets/logo/cinepolis.png"
import disneyPlusLogo from "./../assets/logo/hotstar.png";
import hboMaxLogo from "./../assets/logo/hbomax.webp";
import netflixLogo from "./../assets/logo/netflix.png";
import primeLogo from "./../assets/logo/primevideo.png";
import vidioLogo from "./../assets/logo/vidio.png";

const ContentEnd = () => {
  const streamingPlatform = [
    { platformName: "CGV [Offline]", platformImg: cgvLogo },
    { platformName: "Cinema XXI [Offline]", platformImg: cinemaXXILogo },
    { platformName: "Cinépolis [Offline]", platformImg: cinepolisLogo },
    { platformName: "Disney+ Hotstar", platformImg: disneyPlusLogo },
    { platformName: "HBO Max", platformImg: hboMaxLogo },
    { platformName: "Netflix", platformImg: netflixLogo },
    { platformName: "Amazon Prime Video", platformImg: primeLogo },
    { platformName: "Vidio.com", platformImg: vidioLogo },
  ];

  return (
    <>
      <Container lg={4} justify="center" alignContent="center" fluid>
        <Row>
          <Col>
            <Text
              h1
              css={{
                "@xsMax": {
                  fontSize: "33px",
                },

                textGradient: "45deg, $purple600 -20%, $pink600 100%",
                p: 5,
                fontSize: "60px",
              }}
              style={{ textAlign: "center" }}
              weight="bold"
            >
              Watch them on
            </Text>

            <Grid.Container gap={2} justify="center" alignContent="center">
              {streamingPlatform.map(({ platformName, platformImg }) => (
                <Tooltip content={platformName} color="primary" placement="top">
                  <Grid data-aos="zoom-out" css={{ mb: "$5" }}>
                    <Image
                      showSkeleton
                      width={50}
                      height={50}
                      css={{ cursor: "pointer" }}
                      src={platformImg}
                    />
                  </Grid>
                </Tooltip>
              ))}
            </Grid.Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContentEnd;
