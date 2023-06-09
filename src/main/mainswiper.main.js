import React, { Suspense } from "react";
import { Text, Grid } from "@nextui-org/react";

const MainSwiperList = React.lazy(() => import("./mainswiperlist.main.js"));

const MainSwiper = (props) => {
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

      <Grid.Container justify="center" alignContent="center">
        <Suspense
          fallback={
            <Text h3 b css={{ mt: "$1" }}>
              Loading data..
            </Text>
          }
        >
          <MainSwiperList />
        </Suspense>
      </Grid.Container>
    </>
  );
};

export default MainSwiper;
