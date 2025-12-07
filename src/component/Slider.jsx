import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Modules
import { Navigation, Autoplay } from "swiper/modules";

import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";

const Slider = () => {
  return (
    <div className="relative z-0">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000, // 4 seconds
          disableOnInteraction: false,
           pauseOnMouseEnter: true, 
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-[450px] object-cover" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px] object-cover" src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px] object-cover" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px] object-cover" src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px] object-cover" src={image5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[450px] object-cover" src={image2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
