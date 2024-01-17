import React from "react";
import StarRatings from "react-star-ratings";
const StarRatting = ({ rating }) => {
  return (
    <div className="text-center mb-2 sm:mb-3">
      <StarRatings
        starDimension={"20px"}
        starSpacing={"2px"}
        isAggregateRating={true}
        isSelectable={true}
        rating={rating}
        starRatedColor="#ff136f"
        starEmptyColor="#444"
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default StarRatting;