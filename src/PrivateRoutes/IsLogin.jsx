import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../Pages/Login/Login";
const IsLogin = () => {
  return (
    <div>
      {JSON.stringify(localStorage.getItem("current")) ? <Outlet /> : <Login />}
    </div>
  );
};

export default IsLogin;
