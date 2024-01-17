import React from "react";
// import aboutImg from "../../assets/images/banner2.png";
const AboutUs = () => {
  return (
    <div className="container pt-24 lg:pt-28 items-center flex gap-8 flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <div className="text-start">
          <h2 className="text-4xl text-tertiary font-bold">
            About Shunno Sholi
          </h2>
          <p className="text-lg font-medium text-justify py-8">
            The more we drive the car the better they seem to operate operate.
            No noise, just stopping power! Quis autem vel eum iure reprehenderit
            qui in ea voluptate velit esse quam nihil molestiae. consequatur,
            <br />
            <br />
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit
            qui in ea voluptate verit qui in ea voluptate vele.qui in ea
            voluptate velit esse quam nihil molestiae.
          </p>
          <button className="common-btn2">Learn More</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        {/* <img src={aboutImg} alt="" /> */}
      </div>
    </div>
  );
};

export default AboutUs;
