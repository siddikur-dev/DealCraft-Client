import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { CircularProgress } from "react-loader-spinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <CircularProgress
        height="100"
        width="100"
        color="#632EE3"
        ariaLabel="circular-progress-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        strokeWidth={2}
        animationDuration={1}
      />
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
