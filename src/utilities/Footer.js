import React, { useState, useEffect } from "react";
import pic1 from "./../assets/1.jpg";
import { Text, Spacer, Avatar, Grid, Tooltip } from "@nextui-org/react";
import { UserCard } from "./UserCard";

const Footer = () => {
  const [currentTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      };
      const formattedDateTime = currentDate.toLocaleString("en-US", options).replace("at", "-");
      setCurrentDateTime(formattedDateTime);
    }, 1000);    

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer style={{ marginTop: "auto" }}>
      <Grid>
        <Spacer y={1} />
        <Grid.Container justify="center" alignContent="center">
          <Tooltip placement="topStart" content={<UserCard />}>
            <Avatar
              src={pic1}
              text="Profile avatar"
              color="gradient"
              bordered
              pointer
            />
          </Tooltip>

          <Text h6 css={{ p: "$3", textAlign: "center", fontSize: "14px" }}>
            By Mahadi Saputra @ {currentTime}
          </Text>
        </Grid.Container>
        <Spacer y={1} />
      </Grid>
    </footer>
  );
};

export default Footer;
