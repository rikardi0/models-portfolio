import React from "react";
import Image from "../../assets/Global-Ilumination.png";
import ImageShadow from "../../assets/Sombra.png";
import "./Head.css";

function Head() {
  return (
    <>
      <div id="head">
        <span> Need 3D models? </span>
        <span id="head-subtext"> Unlock your vision with our skill.</span>
        <img src={Image} alt="3D model dron" id="dron-img"></img>
        <img src={ImageShadow} alt="3D model dron" id="dron-img-shadow"></img>
        <div className="spacer" id="line-orange"></div>
      </div>
      <div className="sized-box">
        <div className="triangle" id="orange-tri"></div>
        <div className="triangle" id="white-tri"></div>
        <div className="spacer" id="spacer-black"></div>
      </div>
      <div id="call-to-action">
        <span id="head-subtext2"> Get inspired.</span>{" "}
        <span id="head-subtext3">
          {" "}
          Immerse yourself in our detailed renderings portfolio.
        </span>{" "}
        <span id="head-subtext4"> Explore now.</span>
      </div>
    </>
  );
}

export default Head;
