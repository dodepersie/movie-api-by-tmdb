import React, { Suspense } from "react";
import { Text, Grid } from "@nextui-org/react";
import LoadersFourGrid from "../utilities/LoadersFourGrid";

const OverviewNowPlayingList = React.lazy(() => import('./overviewlist.now_playing.js'))

const OverviewNowPlaying = (props) => {
  return (
    <>
      <Text
        h1
        css={{
          "@xsMax": {
            fontSize: "40px",
          },

          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          fontSize: "50px",
          marginTop: ".5rem",
        }}
        style={{ textAlign: "center" }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Grid.Container gap={0.3} justify="center" alignContent="center">
        <Suspense fallback={<LoadersFourGrid />}>
          <OverviewNowPlayingList />
        </Suspense>
      </Grid.Container>
    </>
  );
};

export default OverviewNowPlaying;
