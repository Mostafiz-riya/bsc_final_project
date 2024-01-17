import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Header, AllModal } from "./components/index.js";
import {
  Home,
  Login,
  PrivateRoute,
  Register,
  Shop,
  BuyProduct,
  About,
  PageNotFound,
  Contact,
} from "./pages/index.js";
import {
  AddProduct,
  AddReview,
  AdminOrder,
  AdminProducts,
  Dashboard,
  Orders,
  Reviews,
  Users,
} from "./pages/Dashboard/index.js";
import RequireAdmin from "./pages/login/RequireAdmin.jsx";

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="w-full overflow-hidden">
      {path !== "/login" && path !== "/register" && <Header />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/shop/:id"
          element={
            <PrivateRoute>
              <BuyProduct />
            </PrivateRoute>
          }
        />

        {/* Dashboard Route */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {" "}
          <Route index path="order" element={<Orders />} />
          <Route index path="add-review" element={<AddReview />} />
          <Route index path="review" element={<Reviews />} />
          <Route
            index
            path="admin/users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            index
            path="admin/orders"
            element={
              <RequireAdmin>
                <AdminOrder />
              </RequireAdmin>
            }
          />
          <Route
            index
            path="admin/products"
            element={
              <RequireAdmin>
                <AdminProducts />
              </RequireAdmin>
            }
          />
          <Route
            index
            path="admin/add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {path !== "/login" &&
        path !== "/register" &&
        !path.includes("/dashboard") && <Footer />}
      <AllModal />
    </div>
  );
};

export default App;
