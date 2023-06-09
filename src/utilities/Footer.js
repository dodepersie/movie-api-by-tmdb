import React from "react";
import pic1 from "./../assets/1.jpg";
import { Text, Spacer, Avatar, Grid, Tooltip } from "@nextui-org/react";
import { UserCard } from "./UserCard";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Grid>
      <Spacer y={0.5} />
      <Grid.Container justify="center" alignContent="center">
        <Tooltip placement="top" content={<UserCard />}>
          <Avatar
            src={pic1}
            text="Profile avatar"
            color="gradient"
            bordered
            pointer
          />
        </Tooltip>
        <Text h6 css={{ p: 8 }} style={{ textAlign: "center" }}>
        By Mahadi Saputra @ {currentYear}
        </Text>
      </Grid.Container>

      <Spacer y={0.5} />
    </Grid>
  );
};

export default Footer;
