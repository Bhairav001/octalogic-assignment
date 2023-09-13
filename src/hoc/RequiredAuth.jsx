import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = localStorage.getItem("isTableLogin") || "false";

  const form = {
    pathname: location.pathname,
  };

  if (isAuth == "true") return children;
  return <Navigate to={"/Tablelogin"} state={form} replace />;
};

export default RequiredAuth;