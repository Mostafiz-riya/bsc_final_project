import React from "react";
import { BannerCard } from "../../components/index.js";
// import gloves from "../../assets/images/gloves-ad.jpg";
// import painting from "../../assets/images/feature/feature.jpg";
// import jacket from "../../assets/images/jacket-ad.jpg";
const FeatureItem = () => {
  return (
    <div className="feature-container">
      <BannerCard
      //  bgImg={painting}
        title="Gloves for Bike" />
      <BannerCard
      //  bgImg={jacket}
        title="Biker Jacket" />
    </div>
  );
};

export default FeatureItem;
