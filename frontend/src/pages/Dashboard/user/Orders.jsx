import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteModal from "../../../components/modal/DeleteModal.jsx";
import OrderModal from "../../../components/modal/OrderModal.jsx";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
import useData from "../../../hooks/useData.js";
import OrderRow from "./OrderRow.jsx";

const Orders = () => {
  const [user, loading] = useAuthState(auth);
  const [item, setItem] = useState(null);
  const [detail, setDetail] = useState(null);
  const url = `http://localhost:5000/order/${user?.email}`;
  const { loading: load, data: orders, setData } = useData(url);
  const message = `${item?.productName} Order`;
  if (loading || load) {
    return <Loading />;
  }
  return (
    <>
      <div className="container">
        <div className="py-8">
          <div>
            <h2 className="order-title">Orders</h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="order-th">Order</th>
                    <th className="order-th">Quantity</th>
                    <th className="order-th">Total Amount</th>
                    <th className="order-th">Action</th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <OrderRow
                      setDetail={setDetail}
                      setItem={setItem}
                      key={order._id}
                      order={order}
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
          updatedData={orders}
          item={item}
          message={message}
          setItem={setItem}
          url={`http://localhost:5000/order/user/${item?._id}`}
        />
      )}
      {detail && <OrderModal detail={detail} setDetail={setDetail} />}
    </>
  );
};

export default Orders;
