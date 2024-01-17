import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductRow = ({ product, setItem }) => {
  return (
    <tr>
      <td className="order-td">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-20">
            <img
              className="w-full h-full rounded-full"
              src={product?.image}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-primary font-medium text-lg">{product?.name}</p>
          </div>
        </div>
      </td>
      <td className="order-td">
        <p className="text-base font-medium text-tertiary">${product?.price}</p>
      </td>
      <td className="order-td">
        <p className="text-base font-medium text-tertiary">
          {product?.category}
        </p>
      </td>
      <td className="order-td">
        <p className="text-base font-medium text-tertiary">
          {product?.des.slice(0, 50)}
        </p>
      </td>
      <td className="order-td">
        <div className="flex lg:items-center items-start">
          <button className="xicon">
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="xicon mx-0 lg:mx-3">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => setItem(product)} className="xicon">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
