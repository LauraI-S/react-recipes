import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import VideoBG from "../images-videos/VideoBG.mp4";
import "../images-videos/VideoBG.css";

//!Subscribe Home to the Context!

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="content">
        <h1>Home</h1>
        <h2>Hi {user?.email}! Welcome to the Recipe-App!</h2>
      </div>
      <div className="video-bg">
        <video src={VideoBG} autoPlay muted loop></video>
      </div>
    </>
  );
}

export default Home;
