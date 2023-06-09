import { Grid } from "@nextui-org/react";
import DifferentTitle from "../utilities/differentTitle";
import OverviewNowPlaying from "../now_playing/overview.now_playing";
import MainSwiper from "./mainswiper.main";
import ContentEnd from "./contentend.main";

const Main = () => {
  DifferentTitle("MoofliXXI: Home");

  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: '2-digit' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <Grid.Container justify="center" alignContent="center">
    <MainSwiper desc={`Trending movie ${formattedDate}`} />
      <OverviewNowPlaying desc="Trending movie of the week" />
      <ContentEnd />
    </Grid.Container>
  );
};

export default Main;
