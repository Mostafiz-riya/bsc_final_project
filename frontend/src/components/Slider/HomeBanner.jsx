import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner5 from "../../assets/images/sareebanner1.jpg";
import banner6 from "../../assets/images/banner6.png";

const HomeBanner = () => {
  return (
    <div className="relative">
      <Swiper
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="banner-area"
            style={{
              background: `url(${banner5})`,
              backgroundSize: "cover",
              padding: "80px 0",
            }}
          >
            <div className="banner-container">
              <div className="banner-content">
                <h1 className="banner-title">
                  Celebrating the <br />{" "}
                  <span className="text-primary">essence</span> of our root
                </h1>
                <h5 className="text-xl md:text-2xl mt-8">
                  The epitome of grace, beauty, and charm.
                </h5>
                <button className="common-btn3 mt-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/shunnoshoilii?mibextid=ZbWKwL"
                  >
                    Visit page
                  </a>
                </button>
              </div>
              <div className="w-full md:w-1/2 px-8">
                {/* <img src={banner1} alt="" /> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="banner-area"
            style={{
              background: `url(${banner5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: "80px 0",
              backgroundPosition: "center center",
            }}
          >
            <div className="banner-container">
              <div className="banner-content">
                <h1 className="banner-title">
                  Celebrating the <br />{" "}
                  <span className="text-primary">essence</span> of our root
                </h1>
                <h5 className="banner-subtitle">
                  The epitome of grace, beauty, and charm.
                </h5>
                <button className="common-btn3 mt-5">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/shunnoshoilii?mibextid=ZbWKwL"
                  >
                    Visit page
                  </a>
                </button>
              </div>
              <div className="w-full md:w-1/2 ">
                <img width={300} src={banner6} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="prev-btn prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="next-btn next">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
