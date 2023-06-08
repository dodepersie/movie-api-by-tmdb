import React from "react";
import { Loading, Grid } from "@nextui-org/react";

const Loaders = () => {
  return (
    <Grid.Container
      justify="center"
      alignContent="center"
      css={{ mt: 20, mb: 10 }}
    >
      <Loading
        type="points-opacity"
        loadingCss={{ $$loadingSize: "20px", $$loadingBorder: "10px" }}
        color="secondary"
      />
    </Grid.Container>
  );
};

export default Loaders;
