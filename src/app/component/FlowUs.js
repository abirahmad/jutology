import React from "react";

export default function FlowUs({ settings }) {
  return (
    <div className="p-2  absolute  xl:w-[500px] lg:w-[500px] md:w-[500px] xs:w-[300px] bg-white bg-opacity-90  ">
      <div className="text-center mb-8 xs:hidden xl:block ">
        <h2 className="text-2xl mt-6">Engage with industry specialist</h2>
      </div>
      <div className="flex justify-center  gap-2 w-[94%] mx-auto mb-6">
        {/* First Icon Section */}
        <div className="flex flex-col items-center">
          <a href={settings.facebook} target="_blank">
            {" "}
            <img className="w-10" src="/icons/facebook.svg" alt="" srcSet="" />
          </a>

          <p className="mt-2 text-xs xs:hidden xl:block text-gray-700 text-center">
            Engage with our updates
          </p>
        </div>
        {/* Second Icon Section */}
        <div className="flex flex-col items-center">
          <a href={settings.instagram} target="_blank">
            {" "}
            <img className="w-10" src="/icons/Instagram.svg" alt="" srcSet="" />
          </a>

          <p className="mt-2 text-xs xs:hidden xl:block text-gray-700 text-center">
            Experience our creativity
          </p>
        </div>
        {/* Third Icon Section */}
        <div className="flex flex-col items-center">
          <a href={settings.linkedin} target="_blank">
            {" "}
            <img className="w-10" src="/icons/Linkedin.svg" alt="" srcSet="" />
          </a>

          <p className="mt-2 text-xs xs:hidden xl:block text-gray-700 text-center">
            Connect for business growth
          </p>
        </div>
        {/* Fourth Icon Section */}
        <div className="flex flex-col items-center">
          <a href={settings.youtube} target="_blank">
            {" "}
            <img className="w-10" src="/icons/Youtube.svg" alt="" srcSet="" />
          </a>

          <p className="mt-2 text-xs xs:hidden xl:block text-gray-700 text-center">
            Discover through videos
          </p>
        </div>
      </div>
    </div>
  );
}
