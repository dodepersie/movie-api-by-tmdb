import React from "react";
import { Grid } from "@nextui-org/react";

const LoadersSixGrid = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <Grid
          xs={6}
          sm={2}
          lg={2}
          key={index}
          gap={1}
          justify="center"
          alignContent="center"
        >
          <div
            className="skeleton-image shimmer"
            style={{ width: "212px", height: "325px" }}
          ></div>
        </Grid>
      ))}
    </>
  );
};

export default LoadersSixGrid;
