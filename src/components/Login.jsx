import React, { useState, useContext } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import hungry_baby from "../images-videos/hungry_baby.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectTo = useNavigate();

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
    <Container className="login-container">
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
          <div className="hungry_baby">
            <img src={hungry_baby} alt="hungry_baby" />
          </div>
          <div className="error-messages text-center mt-3">
            {/* Display error messages here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
