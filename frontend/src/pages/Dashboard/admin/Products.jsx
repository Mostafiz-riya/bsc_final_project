import React from "react";
import { useState } from "react";
import DeleteModal from "../../../components/modal/DeleteModal.jsx";
import Loading from "../../../components/Shared/Loading.jsx";
import useData from "../../../hooks/useData.js";
import ProductRow from "./ProductRow.jsx";

const Products = () => {
  const [item, setItem] = useState(null);
  const url = `http://localhost:5000/products`;
  const { loading: load, data: products, setData } = useData(url);
  const message = `${item?.name}`;
  if (load) {
    return <Loading />;
  }
  return (
    <>
      {" "}
      <div className="container">
        <div className="py-8">
          <div>
            <h2 className="order-title">Product</h2>
          </div>
          <div className="-mx-4  h-screen overflow-x-scroll sm:-mx-8 px-4 sm:px-8 py-4">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="order-th">Available Quantity</th>
                    <th className="order-th">Price</th>
                    <th className="order-th">Category</th>
                    <th className="order-th">Description</th>
                    <th className="order-th">Action</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <ProductRow
                      setItem={setItem}
                      key={product._id}
                      product={product}
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
          updatedData={products}
          item={item}
          message={message}
          setItem={setItem}
          url={`http://localhost:5000/products/${item?._id}`}
        />
      )}
    </>
  );
};

export default Products;
