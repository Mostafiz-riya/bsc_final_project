import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderModal = ({ detail, setDetail }) => {
  return (
    <div className="modal-container">
      <div className="mt-64 md:mt-0 lg:w-2/3 w-full">
        <div className="modal-in">
          <div className="modal-col">
            <img className="w-44 mx-auto" src={detail?.image} alt="" />
            <h1 className="modal-product-title">{detail?.productName}</h1>
            <p className="modal-paragraph">
              <span className="modal-span">
                Price
                <span className="text-xs text-tertiary ml-1">
                  (Per Product)
                </span>
              </span>{" "}
              <span className="modal-subSpan">${detail?.price} </span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Ordered Quantity</span>{" "}
              <span className="modal-subSpan">{detail?.qty}</span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Total Price</span>{" "}
              <span className="modal-subSpan">
                ${detail?.qty * detail?.price}
              </span>
            </p>
            <div className="modal-btn">
              <button onClick={() => setDetail(null)}>
                <FontAwesomeIcon className="xicon" icon={faXmark} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
