import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="w-full  lg:w-1/2 p-8 bg-btn shadow-3xl rounded-lg">
      <img className="w-44 mx-auto" src={product?.image} alt="" />
      <h1 className="modal-product-title">{product?.name}</h1>
      <p className="text-base py-2 text-tertiary">{product?.des}</p>
      <p className="modal-paragraph">
        <span className="modal-span">Category</span>{" "}
        <span className="modal-subSpan">{product?.category} </span>
      </p>
      <p className="modal-paragraph">
        <span className="modal-span">
          Price
          <span className="text-xs text-tertiary ml-1">(Per Product)</span>
        </span>{" "}
        <span className="modal-subSpan">${product?.price} </span>
      </p>
      <p className="modal-paragraph">
        <span className="modal-span">Available Quantity</span>{" "}
        <span className="modal-subSpan">{product?.avilQty}</span>
      </p>
      <p className="modal-paragraph">
        <span className="modal-span">Minimum Ordered Quantity</span>{" "}
        <span className="modal-subSpan">{product?.minQty}</span>
      </p>
    </div>
  );
};

export default ProductDetails;
