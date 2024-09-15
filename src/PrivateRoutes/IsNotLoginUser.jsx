import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const IsNotLoginUser = () => {
  return (
    <div>
      {JSON.stringify(localStorage.getItem("current")) ? (
        <Navigate to={"/"} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default IsNotLoginUser;
