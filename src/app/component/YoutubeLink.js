"use client";
import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

export default function YoutubeLink() {
  const { setting } = useContext(MyContext);

  return (
    <div className="bg-green-600 h-[75vh] flex items-center justify-center relative mt-5 md:mt-10 overflow-hidden">
      {/* Logo and Text */}
      <div className="text-center text-white ">
        <div className="flex items-center justify-center space-x-2  xs:w-[75%] xl:w-[100%] mx-auto">
          {/* Circle Logo */}

          <img
            src="/icons/amibyakij.svg"
            alt=""
            srcSet=""
            className="object-contain"
          />
        </div>
        <div className="text-sm   grid grid-cols-2    xs:gap-2 xl:w-[80%] xs:w-[73%] mt-5 mx-auto">
          <a
            href={setting?.youtube_link}
            target="_blank"
            className="flex items-center justify-center xl:px-2 xl:py-2 z-50 xs:p-[2px]  xl:text-xs xs:text-[9px]  text-white bg-transparent xl:border-2 xs:border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-black transition duration-200"
          >
            <img src="/icons/play.svg" alt="" srcSet="" className="mr-1" />{" "}
            Watch Video
          </a>
          <a
            href={setting?.pdf_catalogue}
            target="_blank"
            className="flex items-center justify-center xl:px-2 xl:py-2  z-50 xs:p-[2px]  xl:text-xs xs:text-[9px]  text-white bg-transparent xl:border-2 xs:border  border-lime-500 rounded-lg hover:bg-lime-500 hover:text-black transition duration-200"
          >
            <img src="/icons/pdf.svg" alt="" srcSet="" className="mr-1" />
            Download Catalogue
          </a>
        </div>
      </div>
      {/* Bottom Right Circular Design */}
      <div className="absolute bottom-0 right-0 h-full xs:w-[72%] xl:w-[16%] xs:opacity-30 xl:opacity-100">
        <img src="/icons/clipart.png" className="h-full" alt="" srcSet="" />
      </div>
    </div>
  );
}
