import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import StarRatting from "../Shared/StarRating.jsx";
import { useDispatch } from "react-redux";
import { openModal } from "../../feature/slice/modalSlice.js";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="products-item">
      <div className="product-img-div group">
        <img className="w-2/3 mx-auto py-2" src={product?.image} alt="" />
        <div className="product-hover-content">
          <div
            onClick={() => {
              dispatch(openModal(product));
            }}
            className="product-hover-icon"
          >
            <AiOutlineEye className="text-xl" />
          </div>
          <div className="product-hover-icon">
            <AiOutlineHeart className="text-xl" />
          </div>
        </div>
      </div>
      <div className="product-content">
        <h3 className="single-product-title">{product?.name}</h3>
        <StarRatting rating={5} />
        <div className="price-btn-flex">
          <p className="card-price">${product?.price}</p>
          <button className="py-4">
            <Link className="common-btn2" to={`/shop/${product._id}`}>
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
