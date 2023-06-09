import React, { Suspense } from "react";
import { Text, Grid } from "@nextui-org/react";
import DifferentTitle from "../utilities/differentTitle";
import LoadersSixGrid from "../utilities/LoadersSixGrid";

const PersonList = React.lazy(() => import("./mainlist.person"));

const Person = (props) => {
  DifferentTitle("MoofliXXI: Trending Actor & Actress");

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
          marginTop: "1.4rem",
        }}
        style={{ textAlign: "center" }}
        weight="bold"
      >
        {props.desc}
      </Text>

      <Grid.Container gap={0.3} justify="center" alignContent="center">
        <Suspense fallback={<LoadersSixGrid />}>
          <PersonList />
        </Suspense>
      </Grid.Container>
    </>
  );
};

export default Person;
