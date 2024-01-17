import React from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/Product/ProductCard.jsx";
import Loading from "../../components/Shared/Loading.jsx";
import useData from "../../hooks/useData.js";
const LatestProduct = ({ title }) => {
  const url = "http://localhost:5000/products";
  const { loading, data: products } = useData(url);
  return (
    <div className="section-container my-5">
      <div className="text-center pb-12">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper relative"
        >
          {loading ? (
            <Loading />
          ) : (
            products?.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))
          )}
          <div className="w-24 flex mt-4">
            <IoIosArrowBack className="prev section-prev" />
            <IoIosArrowForward className="next section-next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProduct;
