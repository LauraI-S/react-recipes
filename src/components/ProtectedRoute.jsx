import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { isUserAuth } from "../utilities/isUserAuth.js";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
// import useIsAuth from "../hooks/useIsAuth";

function ProtectedRoute({ children }) {
  // Bouncer, that checks you and let´s you in... or not
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const allowAccess = isUserAuth(user);
  const navigate = useNavigate();
  //   console.log("allowAccess :>> ", allowAccess);

  const handleLoginClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when loading is completed
    }, 1000); // Adjust the time delay as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>
          {
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          }
        </h1>
      ) : allowAccess ? (
        children
      ) : (
        <div>
          <h2>
            Hungry and want to Chat about our gluten-free recipes???? Please
            login first....
          </h2>
          <Button variant="secondary" onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
