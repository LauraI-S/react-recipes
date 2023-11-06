import React from "react";
import { Link, Outlet } from "react-router-dom";

function TimeLayout() {
  return (
    <>
      <nav>
        <Link to="fastfood"> Fastfood</Link> |
        <Link to="slowfood"> Slowfood</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default TimeLayout;
