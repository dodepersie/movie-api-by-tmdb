import {
  Avatar,
  Row,
  Col,
  Text,
  Spacer,
  Grid,
} from "@nextui-org/react";
import pic1 from "./../assets/1.jpg";

export const UserCard = ({
  avatarUrl,
  avatarProps,
  css,
  onClick,
  ...props
}) => {

  return (
    <Grid.Container
      className="user-twitter-card__container"
      css={{
        mw: "250px",
        borderRadius: "$lg",
        padding: "$sm",
        ...css,
      }}
      onClick={onClick}
      {...props}
    >
      <Row justify="space-between" align="center">
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
              <Text className="user-twitter-card__text" b size={15}>
                Mahadi Saputra
              </Text>
              <Text
                className="user-twitter-card__text"
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
      <Grid.Container className="user-twitter-card__username-container">
        <Grid xs={12}>
          <Text
            className="user-twitter-card__text"
            size={14}
            css={{ mt: "$5" }}
            color="#888888"
          >
            '01 \\ Information System '19
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container
        className="user-twitter-card__metrics-container"
        justify="flex-start"
        alignContent="center"
      >
        <Text className="user-twitter-card__text" size={14} color="#888888">
          <Text
            b
            color="foreground"
            className="user-twitter-card__text"
            size={14}
            css={{ mr: "$1" }}
          >
            1.15K
          </Text>
          Following
        </Text>
        <Spacer inline x={0.5} />
        <Text className="user-twitter-card__text" size={14} color="#888888">
          <Text
            b
            color="foreground"
            className="user-twitter-card__text"
            size={14}
            css={{ mr: "$1" }}
          >
            3.3K
          </Text>
          Followers
        </Text>
      </Grid.Container>
    </Grid.Container>
  );
};
