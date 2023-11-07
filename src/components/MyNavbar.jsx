import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function MyNavbar() {
  const { user, setUser } = useContext(AuthContext);
  console.log("user :>> ", user);

  const login = () => {
    setUser({
      userName: "LiaLutza",
      email: "LiLu@vmi.com",
    });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>|<NavLink to="/about">About</NavLink>|
      <NavLink to="/recipes">Recipes</NavLink>|
      <NavLink to="/recipetime">MyRecipeTime </NavLink> |
      {user ? (
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="secondary" onClick={login}>
          Login
        </Button>
      )}
    </nav>
  );
}

export default MyNavbar;