import React from "react";
import { Grid } from "@nextui-org/react";

const LoadersThreeGrid = () => {
  return (
    <>
      {Array.from({ length: 8 }, (_, index) => (
        <Grid
          xs={6}
          sm={3}
          lg={3}
          key={index}
          gap={1}
          justify="center"
          alignContent="center"
        >
          <div
            className="skeleton-image shimmer"
            style={{ width: "324px", height: "486px" }}
          ></div>
        </Grid>
      ))}
    </>
  );
};

export default LoadersThreeGrid;
