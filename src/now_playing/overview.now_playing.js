import React, { Suspense } from "react";
import { Text, Grid } from "@nextui-org/react";
import Loaders from "../utilities/Loaders";

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
          p: 5,
          fontSize: "50px",
        }}
        style={{ textAlign: "center" }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Grid.Container gap={1} justify="center" alignContent="center">
        <Suspense fallback={<Loaders />}>
          <OverviewNowPlayingList />
        </Suspense>
      </Grid.Container>
    </>
  );
};

export default OverviewNowPlaying;
