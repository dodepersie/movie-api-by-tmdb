import { Avatar, Row, Col, Text, Spacer, Grid } from "@nextui-org/react";
import pic1 from "./../assets/1.jpg";

export const UserCard = ({
  avatarUrl,
  avatarProps,
  css,
  ...props
}) => {
  return (
    <Grid.Container
      css={{
        mw: "250px",
        borderRadius: "$lg",
        padding: "$sm",
        ...css,
      }}
      {...props}
    >
      <Row justify="center" align="center">
        <Col span={3}>
          <Avatar
            size="lg"
            src={pic1}
            color="gradient"
            bordered
            {...avatarProps}
          />
        </Col>

        <Col span={9}>
          <Row>
            <Grid xs={12} direction="column">
              <Text b size={14.4}>
                I Dewa Gede Mahadi Saputra
              </Text>
              <Text
                size={14}
                css={{ mt: "$1" }}
                color="#888888"
              >
                @mahadisptr
              </Text>
            </Grid>
          </Row>
        </Col>
      </Row>

      <Grid.Container>
        <Grid xs={12}>
          <Text
            size={14}
            css={{ mt: "$5" }}
            color="#888888"
          >
            🌟 '01 | 🚀 A Junior Wannabe Fullstack Developer
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="flex-start"
        alignContent="center"
      >
        <Text size={14} color="#888888">
          <Text
            b
            color="foreground"
            size={14}
            css={{ mr: "$1" }}
          >
            1.13K
          </Text>
          Following
        </Text>
        <Spacer inline x={0.5} />
        <Text size={14} color="#888888">
          <Text
            b
            color="foreground"
            size={14}
            css={{ mr: "$1" }}
          >
            3.09K
          </Text>
          Followers
        </Text>
      </Grid.Container>
    </Grid.Container>
  );
};
