import React from "react";
// import men from "../../assets/images/men.png";
// import wemen from "../../assets/images/women.png";
import Sanjabi from "../../assets/images/feature/panjabi.jpg";
import kurti from "../../assets/images/feature/kurte.png";
const HelmetBanner = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row">
      <div
        style={{
          background: `url(${Sanjabi})`,
          padding: "150px 0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full lg:w-1/2 discout"
      >
        <div className="px-24 relative z-20 text-white">
          <h3 className="discount-title">For Men</h3>
          <h5 className="text-base pt-4 pb-6">236 Item By Categories</h5>
          <button className="common-btn2">Shop Now</button>
        </div>
      </div>
      <div
        style={{
          background: `url(${kurti})`,
          padding: "150px 0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full lg:w-1/2 discout"
      >
        <div className="px-24 relative z-20 text-white">
          <h3 className="discount-title">For Women</h3>
          <h5 className="text-base pt-4 pb-6">236 Item By Categories</h5>
          <button className="common-btn2">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HelmetBanner;
