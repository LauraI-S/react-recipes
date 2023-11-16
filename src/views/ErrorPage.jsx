import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import mistake from "../images-videos/mistake.jpg";

function ErrorPage() {
  const error = useRouteError();
  console.log("error", error);
  //! useNavigate Hooks

  const navigateTo = useNavigate();
  console.log("navigateTo :>> ", navigateTo);
  const message = "This is my own Error Message (-: ";

  const handleNavigate = () => {
    navigateTo("/");
  };
  return (
    <>
      <h1>ups...nothing to see </h1>

      {error?.error && <h3>{error.error.message}</h3>}
      <h3>{message}</h3>
      <Button onClick={handleNavigate}>Take me home!</Button>
      <div className="mistake">
        <img src={mistake} alt="mistake" />
      </div>
    </>
  );
}

export default ErrorPage;
