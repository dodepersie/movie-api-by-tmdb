import { Grid } from "@nextui-org/react";
import DifferentTitle from "../utilities/differentTitle";
import MainSwiper from "../main/mainswiper.main";
import OverviewNowPlaying from "../now_playing/overview.now_playing";
import ContentEnd from "./contentend.main";

const Main = () => {
  DifferentTitle("MoofliXXI: Home");

  return (
    <Grid.Container justify="start" alignContent="center">
      <MainSwiper desc="Daily trending movie" />
      <OverviewNowPlaying desc="Weekly trending movie" />
      <ContentEnd desc="Watch them on" />
    </Grid.Container>
  );
};

export default Main;
