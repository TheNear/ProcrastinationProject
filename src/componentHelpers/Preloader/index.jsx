import React from "react";
import loaderSvg from "../../assets/img/three-dots.svg";
import "./Preloader.scss";

function Preloader() {
  return (
    <div className="preloader">
      <img className="preloader__img" src={loaderSvg} alt="preloader" />
    </div>
  );
}

export default Preloader;
