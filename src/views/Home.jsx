import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
//!Subscribe Home to the Context!

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      <h2>Hi {user?.email}! Welcome to the Recipe-App!</h2>
    </>
  );
}

export default Home;
