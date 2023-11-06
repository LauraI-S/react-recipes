import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import { Button } from "react-bootstrap";

// import VideoBackground from "../src/images-videos/VideoBackground"

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, [location]);

  return (
    <>
      <MyNavbar />
      <h1> coccinelle </h1>
      {/* <h3>replace this with navbar, this will be displayed on every page</h3> */}
      <Outlet />
    </>
  );
};

export default App;
