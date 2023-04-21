import { Tooltip, Text } from "@nextui-org/react";
import { StarIcon } from "./Icon";

const MovieRating = ({ voteAverage }) => {
  if (!voteAverage) return <Text b css={{ color: "#ffffffAA"}}>No vote or rating available.</Text>;

  let rating = Math.round(voteAverage / 2);
  if (rating < 1) rating = 0;
  if (rating > 5) rating = 5;

  const starIcons = [];
  for (let i = 0; i < rating; i++) {
    starIcons.push(<StarIcon filled />);
  }

  return (
    <>
      <Tooltip content={`Vote Average: ${voteAverage}`} color="primary" placement="bottom" css={{ zIndex: 999 }}>
        <div style={{ display: "flex" }}>{starIcons}</div>
      </Tooltip>
    </>
  );
};

export default MovieRating;
