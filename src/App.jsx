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
  const { displayUser, logout, user } = useContext(AuthContext);

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, [location]);

  return (
    <>
      <MyNavbar />
      <div>
        <p>Hey {displayUser || (user && user.email)}!</p>
      </div>
      <div className="content">
        {/* <h3>replace this with navbar, this will be displayed on every page</h3> */}
      </div>
      <Outlet />
    </>
  );
};

export default App;
