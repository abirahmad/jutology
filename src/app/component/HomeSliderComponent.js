"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LazyVideo from "./LazyVideo"; // Assuming LazyVideo is in the same directory
import Image from "next/image";

export default function HomeSliderComponent({ slider }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <button className="w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-600"></button>
    ),
    appendDots: (dots) => (
      <div className="relative">
        <ul className="absolute bottom-10 left-0 right-0">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="">
      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Slider {...settings}>
          {slider
            ?.filter((item) => item?.is_mobile === 0)
            .map((item, i) => (
              <div key={i} className="flex justify-center items-center">
                {/* <Image
                  height={100}
                  width={130}
                  src='/building.jpg'
                  alt='Akij Plastics'
                  className={`w-[130px] max-h-8`}
                /> */}
                <img  src="/building.jpg" className="w-full h-[600px]"/>
              </div>
            ))}
        </Slider>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <Slider
          {...settings}
          arrows={false} // Disable default arrows for mobile
        >
          {slider
            ?.filter((item) => item?.is_mobile === 1)
            .map((item, i) => (
              <div key={i} className="flex justify-center items-center">
                <Image
                  height={100}
                  width={400}
                  src={"/building.jpg"}
                  // src="/black_logo.svg"
                  alt="Akij Plastics"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full cursor-pointer z-10"
    onClick={onClick}
    style={{ zIndex: 20 }}
  >
    <IoIosArrowForward className="font-bold" size={30} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full cursor-pointer z-10"
    onClick={onClick}
    style={{ zIndex: 20 }}
  >
    <IoIosArrowBack className="font-bold" size={30} />
  </div>
);
