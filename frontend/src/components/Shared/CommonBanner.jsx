import React from "react";
import { Link } from "react-router-dom";
const CommonBanner = ({ bannerImg, title, bread }) => {
  return (
    <div
      className="relative after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-banner z-10"
      style={{
        background: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "120px 0",
      }}
    >
      <div className="container text-white text-center relative z-20">
        <h3 className="text-4xl font-semibold mb-6">{title}</h3>
        <button className="text-base font-medium">
          <Link to="/">
            <span className="text-primary mr-1">Home</span>
          </Link>
          {"/"}
          <span className="ml-1">{bread}</span>
        </button>
      </div>
    </div>
  );
};

export default CommonBanner;
