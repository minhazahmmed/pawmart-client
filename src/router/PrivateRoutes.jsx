import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

   const location  = useLocation();


  if (loading)
    return (
      <div className="min-h-[300px] flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoutes;
