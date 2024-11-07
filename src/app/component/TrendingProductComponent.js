"use client";

import SingleProduct from "./SingleProduct";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

export default function App({ products }) {
  return (
    <div>
      <Swiper
        slidesPerView={2} // Default for very small screens
        centeredSlides={false}
        slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true} // Loop the slides
        breakpoints={{
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1000: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper "
      >
        {products?.map((product, index) => (
          <SwiperSlide key={index} className="ml-0 mx-auto">
            <div key={index}>
              <SingleProduct product={product} key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
