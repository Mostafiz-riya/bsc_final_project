import React from "react";
import { CommonBanner } from "../../components/index.js";
import banner from "../../assets/images/feature/about.jpg";
import AboutUs from "./AboutUs.jsx";
import Summary from "../Home/Summary.jsx";
import Reviews from "../../components/Review/Review.jsx";
const About = () => {
  return (
    <div>
      <CommonBanner bannerImg={banner} title="About Page" bread="about" />
      <AboutUs />
      <Summary />
      <Reviews />
    </div>
  );
};

export default About;
