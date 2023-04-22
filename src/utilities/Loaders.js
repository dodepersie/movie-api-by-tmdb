import React from "react";
import { Loading, Grid } from "@nextui-org/react";

const Loaders = () => {
  return (
    <>
      <Grid.Container justify="center" alignContent="center" css={{mt: 20}}>
        <Loading size="xl" color="secondary" />
      </Grid.Container>
    </>
  );
};

export default Loaders;
