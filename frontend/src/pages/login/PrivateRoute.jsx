import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Shared/Loading.jsx";
import { auth } from "../../firebase.js";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
