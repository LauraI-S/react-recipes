import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { isUserAuth } from "../utilities/isUserAuth.js";
import { Navigate } from "react-router-dom";
// import useIsAuth from "../hooks/useIsAuth";

function ProtectedRoute({ children }) {
  //Bouncer, that checks you and let´s you in... or not
  const { user } = useContext(AuthContext);
  const allowAccess = isUserAuth(user);
  //   console.log("allowAccess :>> ", allowAccess);

  // const allowAccess = useIsAuth();
  return (
    <>
      {allowAccess ? (
        children
      ) : (
        <h2>Hungry and want to see recipes?? Please login first....</h2>
      )}
    </>
  );
}
export default ProtectedRoute;
