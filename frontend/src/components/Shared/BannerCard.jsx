import React from "react";
const BannerCard = ({ bgImg, title }) => {
  return (
    <div
      style={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="feature-card"
    >
      <p className="text-base">Power tools of next level</p>
      <h3 className="feature-title">{title}</h3>
      <button className="common-btn3">Shop Now</button>
    </div>
  );
};

export default BannerCard;
