import React, { Suspense } from "react";
import {
  Text,
  Grid,
  Container,
} from "@nextui-org/react";
import DifferentTitle from "../utilities/differentTitle";
import Loaders from "../utilities/Loaders";

const PopularList = React.lazy(() => import('./mainlist.popular'));

const Popular = (props) => {
  DifferentTitle("MoofliXXI: Popular Movies");

  return (
    <Container lg css={{ p: "$4" }}>
      <Text
        h1
        css={{
          "@xsMax": {
            fontSize: "40px",
          },

          textGradient: "45deg, $purple600 -20%, $pink600 100%",
          p: 10,
          fontSize: "50px",
        }}
        style={{ textAlign: "center" }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Grid.Container gap={1} justify="center" alignContent="center">
        <Suspense fallback={<Loaders />}>
          <PopularList />
        </Suspense>
      </Grid.Container>
    </Container>
  );
};

export default Popular;
