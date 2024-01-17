import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../feature/slice/modalSlice.js";
const Modal = ({ item }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.modal.item);
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [item]);
  return (
    <div className="modal-container">
      <div className="mt-64 md:mt-0">
        <div className="modal-in">
          <div className="modal-col">
            <img className="w-44 mx-auto" src={data.image} alt="" />
            <h1 className="modal-product-title">{data.name}</h1>
            <p className="text-base py-2 text-tertiary">
              {data.des.length > 110 ? data.des.slice(0, 110) : data.des}
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Category</span>{" "}
              <span className="modal-subSpan">{data.category} </span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">
                Price
                <span className="text-xs text-tertiary ml-1">
                  (Per Product)
                </span>
              </span>{" "}
              <span className="modal-subSpan">${data.price} </span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Available Quantity</span>{" "}
              <span className="modal-subSpan">{data.avilQty}</span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Minimum Ordered Quantity</span>{" "}
              <span className="modal-subSpan">{data.minQty}</span>
            </p>
            <div className="modal-btn">
              <button onClick={() => dispatch(closeModal())}>
                <FontAwesomeIcon className="xicon" icon={faXmark} />
              </button>
              <button onClick={() => dispatch(closeModal())}>
                <Link className="common-btn2" to={`/shop/${data._id}`}>
                  Buy Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
