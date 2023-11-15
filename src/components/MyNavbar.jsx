import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./MyNavbar.css";
import logo from "../images-videos/logo.jpg";

function MyNavbar() {
  const { user, logout, displayUser } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg" variant="light" className="my-navbar">
      <Link to="/">
        <Navbar.Brand>
          <img
            src={logo}
            className="logo img-fluid"
            alt="Logo"
            width="60"
            height="60"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <NavLink to="/chat">Chat </NavLink>
        </Nav>
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

// import React, { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { Button } from "react-bootstrap";
// import "./MyNavbar.css";

// function MyNavbar() {
//   const { user, setUser, logout } = useContext(AuthContext);
//   // console.log("user :>> ", user);

//   // const login = () => {
//   //   setUser({
//   //     userName: "LiaLutza",
//   //     email: "LiLu@vmi.com",
//   //   });
//   // };

//   return (
//     <nav className="my-navbar">
//       <NavLink to="/home">Home</NavLink>|<NavLink to="/about">About</NavLink>|
//       <NavLink to="/recipes">Recipes</NavLink>|
//       <Link to="/register">Register</Link>|<Link to="/login">Login</Link>|
//       <NavLink to="/chat">Chat </NavLink> |
//       <NavLink to="/recipetime">MyRecipeTime </NavLink> |
//       {user ? (
//         <Button variant="danger" onClick={logout}>
//           Logout
//         </Button>
//       ) : (
//         <Button variant="secondary">Login</Button>
//       )}
//     </nav>
//   );
// }

// export default MyNavbar;
