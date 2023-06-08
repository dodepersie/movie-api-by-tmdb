import { Container, Grid } from "@nextui-org/react";
import DifferentTitle from "../utilities/differentTitle";
import OverviewNowPlaying from "../now_playing/overview.now_playing";
import ContentEnd from "./contentend.main";

const Main = () => {
  DifferentTitle("MoofliXXI: Home");

  return (
    <Container lg css={{ p: "$4" }}>
      <Grid.Container justify="center" alignContent="center">
        <OverviewNowPlaying desc="International movies showing now" />
        <ContentEnd />
      </Grid.Container>
    </Container>
  );
};

export default Main;
