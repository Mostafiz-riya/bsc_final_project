import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteModal from "../../../components/modal/DeleteModal.jsx";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
import useData from "../../../hooks/useData.js";
import ReviewRow from "./ReviewRow.jsx";

const Reviews = () => {
  const [item, setItem] = useState(null);
  const [user, loading] = useAuthState(auth);
  const url = `http://localhost:5000/reviews/${user?.email}`;
  const { loading: load, data: reviews, setData } = useData(url);
  const message = `${item?.name} Review`;
  if (loading || load) {
    return <Loading />;
  }
  return (
    <>
      <div className="container">
        <div className="py-8">
          <div>
            <h2 className="order-title">Reviews</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="order-th">ID</th>
                    <th className="order-th">Review</th>
                    <th className="order-th">Rating</th>
                    <th className="order-th">Action</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <ReviewRow
                      setItem={setItem}
                      key={review._id}
                      index={index}
                      review={review}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {item && (
        <DeleteModal
          setData={setData}
          updatedData={reviews}
          item={item}
          message={message}
          setItem={setItem}
          url={`http://localhost:5000/reviews/user/${item?._id}`}
        />
      )}
    </>
  );
};

export default Reviews;
