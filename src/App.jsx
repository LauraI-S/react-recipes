import React, { useContext, useEffect, useState } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import { Button } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userName, logout, user } = useContext(AuthContext);

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, [location]);

  return (
    <>
      <MyNavbar />
      <div className="content">
        <p>Hi {userName}! Welcome to theCook´cinelle Recipe App</p>
        <h1> coccinelle </h1>
        {/* <h3>replace this with navbar, this will be displayed on every page</h3> */}
      </div>
      <Outlet />
    </>
  );
};

export default App;
