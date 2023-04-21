import React from "react";
import pic1 from "./../assets/1.jpg";
import { Text, Spacer, Avatar, Grid, Tooltip } from "@nextui-org/react";
import { UserCard } from "./UserCard";

const Footer = () => {
  return (
    <>
      <Spacer y={1} />

      <Grid>
        <Grid.Container justify="center" alignContent="center">
          <Tooltip placement="topStart" content={<UserCard />}>
            <Avatar
              src={pic1}
              text="Dode Mahadi"
              color="gradient"
              bordered
              pointer
            />
          </Tooltip>
          <Text h6 css={{ p: 8 }}>
            Designed by Mahadi Saputra
          </Text>
        </Grid.Container>
      </Grid>

      <Spacer y={1} />
    </>
  );
};

export default Footer;
