import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (loading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const { status } = await axios.post(
      "http://localhost:5000/reviews",
      {
        des: data.des,
        img: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
        rating,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (status === 201) {
      toast("Review Added Successfully");
      navigate("/dashboard/review");
    } else {
      toast("Failed to add Review");
      navigate("/dashboard/add-review");
    }
  };
  return (
    <div className="container pt-12">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <p className="text-xl mb-4">Give your over all rating</p>
        <textarea
          {...register("des", {
            minLength: {
              value: 60,
              message: "Your comment minimum length is 80",
            },
            maxLength: {
              value: 200,
              message: "Your comment maximum length is 250",
            },
          })}
          name="des"
          required
          rows={8}
          className="textarea w-full focus:border-primary outline-none rounded-lg pl-4 pt-4"
          placeholder="Comment your Review (character between 80 to 250)"
        ></textarea>
        {errors.des && <p className="text-red-500">{errors.des?.message}</p>}
        <div className="my-2 flex flex-col">
          <StarRatings
            starDimension={"20px"}
            starSpacing={"2px"}
            isAggregateRating={true}
            isSelectable={true}
            changeRating={(e) => setRating(e)}
            rating={rating}
            starRatedColor="#ff136f"
            starEmptyColor="#444"
            numberOfStars={5}
            name="rating"
          />
          <label className="text-xl my-2 font-medium text-primary">
            Select Your Rating
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" className="common-btn" />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
