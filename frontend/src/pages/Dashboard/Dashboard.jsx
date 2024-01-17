import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Loading from "../../components/Shared/Loading.jsx";
import { auth } from "../../firebase.js";
import useAdmin from "../../hooks/useAdmin.js";
const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return <Loading />;
  }
  return (
    <div className="dashboard">
      <div className="dashboard-col1">
        <div className="">
          <Outlet />
        </div>
      </div>
      <div
        className={`bg-btn shadow-xl lg:w-1/6 w-full hidden lg:flex flex-col px-6 pt-6`}
      >
        <label htmlFor="" className="drawer-overlay"></label>
        <ul className="flex flex-col gap-4">
          {admin ? (
            <>
              <li>
                <Link className="dashboard-item" to={"/dashboard/admin/orders"}>
                  Orders
                </Link>
              </li>
              <li>
                <Link className="dashboard-item" to={"/dashboard/admin/users"}>
                  Users
                </Link>
              </li>
              <li>
                <Link className="dashboard-item" to={"/dashboard/admin/add-product"}>
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="dashboard-item"
                  to={"/dashboard/admin/products"}
                >
                  Manage Products
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="dashboard-item" to={"/dashboard/order"}>
                  My Orders
                </Link>
              </li>
              <li>
                <Link className="dashboard-item" to={"/dashboard/review"}>
                  My Reviews
                </Link>
              </li>
              <li>
                <Link className="dashboard-item" to={"/dashboard/add-review"}>
                  Add Review
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
