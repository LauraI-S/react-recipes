import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { isUserAuth } from "../utilities/isUserAuth.js";
import { Navigate } from "react-router-dom";
// import useIsAuth from "../hooks/useIsAuth";

function ProtectedRoute({ children }) {
  //Bouncer, that checks you and let´s you in... or not
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const allowAccess = isUserAuth(user);
  //   console.log("allowAccess :>> ", allowAccess);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when loading is completed
    }, 2000); // Adjust the time delay as needed
  }, []);
  // const allowAccess = useIsAuth();

  return (
    <>
      {isLoading ? (
        <h1>Loading... {}</h1>
      ) : allowAccess ? (
        children
      ) : (
        <h2>Hungry and want to see recipes?? Please login first....</h2>
      )}
    </>
  );
}
export default ProtectedRoute;
