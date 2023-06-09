import { Tooltip, Text } from "@nextui-org/react";
import { StarIcon } from "./Icon";

const MovieRating = ({ voteAverage }) => {
  if (!voteAverage)
    return (
      <Text b css={{ color: "#CCC", fontSize: "14.4px" }}>
        No vote or rating available.
      </Text>
    );

  let rating = Math.round(voteAverage / 2);
  if (rating < 1) rating = 0;
  if (rating > 5) rating = 5;

  // Bulatkan 1 angka dibelakang koma
  voteAverage = voteAverage.toFixed(1);

  const starIcons = [];
  for (let i = 0; i < rating; i++) {
    starIcons.push(<StarIcon key={i} filled />);
  }

  return (
    <Tooltip
      content={`Vote Average: ${voteAverage}`}
      color="primary"
      placement="bottom"
    >
      <div
        style={{
          display: "flex",
          color: "#FFFFAA",
          marginTop: ".2rem",
          marginBottom: ".5rem",
        }}
      >
        {starIcons}
      </div>
    </Tooltip>
  );
};

export default MovieRating;
