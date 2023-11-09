import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { Button, FormLabel } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();

  //helps to handle the e-mail to the input-field...
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };
  const handleRegister = (e) => {
    e.preventDefault(); //! this line prevents website from reloading!
    // console.log("email, password :>> ", email, password);
    register(email, password);
    //after done with the register ...redirect the user to the login page
    redirect("/login");
  };

  return (
    <>
      <h1> Register here</h1>
      <form onSubmit={handleRegister}>
        <input type="text" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">enter Email</label>
        <input type="password" id="password" onChange={handlePasswordChange} />
        <label htmlFor="password">enter Password</label>
        <Button type="submit" variant="secondary">
          Register
        </Button>
      </form>
    </>
  );
}

export default Register;
