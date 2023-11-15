import React, { useState, useContext } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    login(email, password);
    redirectTo("/recipes");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mt-4 mb-3">Login</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button variant="secondary" type="submit" block>
              Login
            </Button>
          </Form>
          <div className="error-messages text-center mt-3">
            {/* Display error messages here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

// import React, {
//   useState,
//   ChangeEvent,
//   FormEvent,
//   useContext,
//   useEffect,
// } from "react";
// import { Button, FormLabel } from "react-bootstrap";
// import { AuthContext } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";

// function Login() {
//   const { login, getUserInfo } = useContext(AuthContext);
//   const [identifier, setIdentifier] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const navigate = useNavigate();
//   // const [username, setUsername] = useState("");

//   //helps to handle the e-mail to the input-field...
//   const handleIdentifierChange = (e) => {
//     setIdentifier(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     // console.log("password :>> ", password);
//   };
//   // const handleLogin = (e) => {
//   //   e.preventDefault(); //! this line prevents website from reloading!
//   //   console.log("email, password :>> ", email, password);
//   //   login(email, password);
//   //   setUserAndUserName(loggedUser, retrievedUserName);
//   // };
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Login user with either email or username
//       const userCredential = await login(identifier, password);
//       const user = userCredential.user;

//       await getUserInfo();
//       navigate("/");
//     } catch (error) {
//       setErrors("Invalid email or password");
//     }
//   };

//   return (
//     <>
//       <h1> Login</h1>
//       <form onSubmit={handleLogin}>
//         <label htmlFor="identifier">Enter Username or Email</label>
//         <input type="text" id="identifier" onChange={handleIdentifierChange} />
//         <label htmlFor="email">enter Email</label>
//         <input type="password" id="password" onChange={handlePasswordChange} />
//         <label htmlFor="password">enter Password</label>
//         <Button type="submit" variant="secondary">
//           Login_in login
//         </Button>
//       </form>

//       <div className="error-messages">{errors && <p>{errors}</p>}</div>

//       <p>
//         Don't have an account?{" "}
//         <Link to="/register" className="signup-link">
//           Sign up
//         </Link>
//       </p>
//     </>
//   );
// }

// export default Login;

// const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     // Login user
//     const userCredential = await login(email, password, username);
//     const user = userCredential.user;

//     // Get user info, including displayName
//     await getUserInfo();
//     navigate("/");

//     //redirect to the home page
//     // history.push("/home");
//   } catch (error) {
//     // Handle login errors
//     setErrors("Invalid email, password or username");
//   }
// };
