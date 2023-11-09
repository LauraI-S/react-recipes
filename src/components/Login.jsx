import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
} from "react";
import { Button, FormLabel } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //helps to handle the e-mail to the input-field...
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };
  const handleLogin = (e) => {
    e.preventDefault(); //! this line prevents website from reloading!
    console.log("email, password :>> ", email, password);
    login(email, password);
  };

  return (
    <>
      <h1> Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">enter Email</label>
        <input type="password" id="password" onChange={handlePasswordChange} />
        <label htmlFor="password">enter Password</label>
        <Button type="submit" variant="secondary">
          Login_in login
        </Button>
      </form>
      <div className="error-messages">
        {/* Error messages will be displayed here */}
      </div>
    </>
  );
}

export default Login;
