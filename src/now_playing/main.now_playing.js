import React, { Suspense } from "react";
import { Text, Grid } from "@nextui-org/react";
import DifferentTitle from "../utilities/differentTitle";
import LoadersSixGrid from "../utilities/LoadersSixGrid";

const NowPLayingList = React.lazy(() => import("./mainlist.now_playing"));

const NowPlaying = (props) => {
  DifferentTitle("MoofliXXI: Now Playing");

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
        <Suspense fallback={<LoadersSixGrid />}>
          <NowPLayingList />
        </Suspense>
      </Grid.Container>
    </>
  );
};

export default NowPlaying;
