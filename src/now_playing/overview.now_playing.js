import React, { Suspense } from "react";
import { Text, Grid } from "@nextui-org/react";
import LoadersFourGrid from "../utilities/LoadersFourGrid";

const OverviewNowPlayingList = React.lazy(() =>
  import("./overviewlist.now_playing.js")
);

const OverviewNowPlaying = (props) => {
  return (
    <>
      <Text
        h1
        css={{
          "@xsMax": {
            fontSize: "$3xl",
          },

          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          fontSize: "$5xl",
          marginTop: "1.4rem",
        }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Grid.Container gap={1} justify="center" alignContent="center">
        <Suspense fallback={<LoadersFourGrid />}>
          <OverviewNowPlayingList />
        </Suspense>
      </Grid.Container>
    </>
  );
};

export default OverviewNowPlaying;
