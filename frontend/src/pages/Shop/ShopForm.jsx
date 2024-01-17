import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Shared/Loading.jsx";
import { auth } from "../../firebase.js";

const ShopForm = ({ product }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState({
    message: "",
  });
  const [data, setData] = useState({
    email: user?.email,
    phone: "",
    qty: "",
    location: "",
  });
  if (loading) {
    return <Loading />;
  }
  const handleSubmit = async (e) => {
    const order = {
      ...data,
      userName: user.displayName,
      productName: product.name,
      productId: product._id,
      image: product.image,
      price: product.price,
    };
    e.preventDefault();
    if (
      product.avilQty <= Number(data.qty) ||
      product.minQty <= Number(data.qty)
    ) {
      const { status } = await axios.post(
        "http://localhost:5000/order",
        order,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (status === 201) {
        toast("Order Successfull. You can Try Another product");
        navigate("/shop");
      } else {
        toast("Failed to order. Please try again");
      }
      setError({
        message: "",
      });
    } else {
      setError({ message: "Quantity must be greater than minimum quantity" });
    }
  };
  return (
    <div className="w-full  lg:w-1/2 p-8 bg-btn shadow-3xl rounded-lg">
      <form onSubmit={handleSubmit} className="py-2">
        <h2 className="form-title">Buy Your Product</h2>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            required
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            value={user?.email}
            readOnly
            className="form-input focus:border-secondary"
            type="email"
            name="email"
          />
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Contact Number
          </label>
          <input
            required
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="form-input"
            name="phone"
            type="text"
          />
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Quantity of Order
          </label>
          <input
            required
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="form-input"
            name="qty"
            type="text"
          />
          <p className="text-blue-500 text-base">{error.message}</p>
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Delivery Loaction
          </label>
          <input
            required
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            className="form-input"
            name="location"
            type="text"
          />
        </div>
        <div className="pt-2">
          <input
            required
            className="form-submit"
            type="submit"
            value={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default ShopForm;
