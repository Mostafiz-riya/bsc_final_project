import React from "react";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ review }) => {
  return (
    <div className="p-4 bg-btn shadow-3xl rounded-lg w-auto">
      <div className="">
        <p className="text-sm font-medium">{review?.des}</p>
        <div className="flex items-center py-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-4">
              <img src={review?.img} alt="" />
            </div>
          </div>
          <div className="pl-8">
            <h2 className="text-primary font-medium text-base">
              {review?.name}
            </h2>
            <StarRatings
              starDimension={"20px"}
              starSpacing={"2px"}
              isAggregateRating={true}
              isSelectable={true}
              rating={review.rating}
              starRatedColor="#ff136f"
              starEmptyColor="#444"
              numberOfStars={5}
              name="rating"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
