import React from "react";
import Image from "next/image";
import DynamicHead from "@/app/DynamicHead";

export const metadata = {
  title: "Sustainability",
  description:
    "Akij Plastics is committed to environmental sustainability,having planted 5,000 trees and actively working to preserve local rivers. Our dedicated river plant ensures minimal environmental impact, highlighting our dedication to protecting natural resources and fostering a sustainable future.",
};
export default function page() {
  const animations = [
    "fade-up",
    // "fade-down",
    // "fade-left",
    // "fade-right",
    // "zoom-in",
    // "zoom-out",
    // "flip-left",
    // "flip-right",
    // "slide-up",
    // "slide-down",
  ];

  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  return (
    <div className="bg-white mt-12">
      <div className="relative flex items-center justify-center mt-16  ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 bg-transparent bg-opacity-50 p-x-8  mb-8 overflow-hidden mt-8 rounded-lg ">
          <div className="text-center mt-5">
            <h1 className="text-4xl font-bold font-sans text-clr">
              Building a <br /> Sustainable Tomorrow
            </h1>
            <p className="mt-8 text-[18px] font-medium xl:max-w-4xl xs:max-w-[320px] mx-auto mb-4 text-clr">
              Akij Plastics is committed to environmental sustainability, having
              planted 5,000 trees and actively working to preserve local rivers.
              Our dedicated river plant ensures minimal environmental impact,
              highlighting our dedication to protecting natural resources and
              fostering a sustainable future.
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <Image
          data-aos={getRandomAnimation()}
          src="/images/sustainability/fac.jpg"
          alt="Hero Image"
          className="w-full object-cover"
          height={600}
          width={1440}
        />
      </div>
      {/* Employee Engagement & Training Section */}
      <div className="bg-gray-800 text-white py-16">
        <div
          className="max-w-7xl mx-auto px-4 text-center"
          data-aos={getRandomAnimation()}
        >
          <h2 className="lg:text-6xl xs:text-3xl ">
            Employee Engagement <br />& Training
          </h2>
          <p className="mt-7 text-[18px] max-w-2xl mx-auto  sustain-color1">
            We believe that a sustainable future starts with a sustainable
            workforce. Our employees are at the core of our sustainability
            efforts, and we invest in comprehensive training programs to equip
            them with the knowledge and skills necessary to drive positive
            change.
          </p>
          {/* Image Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-lg" data-aos={getRandomAnimation()}>
              <img
                src="/images/sustainability/training.jpg"
                alt="Training Image"
                className="w-full  object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl ">
                Advanced training
                <br /> skilled mentors
              </h3>
            </div>
            <div className=" p-6 rounded-lg" data-aos={getRandomAnimation()}>
              <img
                src="/images/sustainability/equal.jpg"
                alt="Training Image"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl">
                Equal opportunities in a <br />
                supportive environment
              </h3>
            </div>
            <div className=" p-6 rounded-lg" data-aos={getRandomAnimation()}>
              <img
                src="/images/sustainability/practice.jpg"
                alt="Training Image"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl">
                Practical skills, <br />
                expert instructors
              </h3>
            </div>
            <div className=" p-6 rounded-lg" data-aos={getRandomAnimation()}>
              <img
                src="/images/sustainability/sports.jpg"
                alt="Training Image"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl">
                Sports, Games <br /> and Wellness
              </h3>
            </div>
            <div className=" p-6 rounded-lg" data-aos={getRandomAnimation()}>
              <img
                src="/images/sustainability/fire.jpg"
                alt="Training Image"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl">
                Regular training, clear protocols <br /> prevention measures
              </h3>
            </div>
            <div className=" p-6 rounded-lg" data-aos={getRandomAnimation()}>
              <img
                src="/images/sustainability/lab.jpg"
                alt="Training Image"
                className="w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl">
                Skill development, <br />
                continuous learning
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[60%] mx-auto">
        <img
          src="/images/sustainability/line.png"
          alt=""
          className="   mx-auto"
        />
        {/* <hr /> */}
      </div>
      {/* Stats Section */}
      <div className="bg-gray-800 text-white py-16">
        <div
          data-aos={getRandomAnimation()}
          className="max-w-7xl mx-auto px-4 grid grid-cols-1   xs:justify-items-center md:grid-cols-4 gap-3 text-center"
        >
          <div className="bg-white text-clr h-64 rounded-lg w-64 text-center flex items-center justify-center">
            <span>
              {" "}
              <h3 className="text-2xl font-semibold">100-2800tn</h3>
              <p className="mt-2">Machine Capacity</p>
            </span>
          </div>
          <div
            data-aos={getRandomAnimation()}
            className="bg-white text-clr h-64 rounded-lg w-64 text-center flex items-center justify-center"
          >
            <span>
              {" "}
              <h3 className="text-2xl font-semibold">99</h3>
              <p className="mt-2">
                Injection Molding <br /> Machines
              </p>{" "}
            </span>
          </div>
          <div
            data-aos={getRandomAnimation()}
            className="bg-white text-clr h-64 rounded-lg w-64 text-center flex items-center justify-center"
          >
            <span>
              {" "}
              <h3 className="text-2xl font-semibold">600+</h3>
              <p className="mt-2">Molds</p>{" "}
            </span>
          </div>
          <div
            data-aos={getRandomAnimation()}
            className="bg-white text-clr h-64 rounded-lg w-64 text-center flex items-center justify-center"
          >
            <span>
              {" "}
              <h3 className="text-2xl font-semibold">6+ MW/day</h3>
              <p className="mt-2">
                Power Plant <br /> Capacity
              </p>{" "}
            </span>
          </div>
        </div>
      </div>
      {/* Certifications Section */}
      <div className="bg-white xl:py-24 xs:py-14">
        <div className="mx-auto px-4 text-center">
          <h2 className="xl:text-[40px]  xs:text-[15px] sm:text-3xl lg:text-[40px] sustain-certificate-color uppercase">
            Maintaining World-Class
          </h2>

          <h2 className=" uppercase  xl:text-[48px]  xs:text-xl  sm:text-4xl lg:text-5xl sustain-certificate-color font-medium xl:mt-3 xs:mt-0">
            Standards & Certifications
          </h2>

          <div className="xl:mt-12 xs:mt-3 grid xs:grid-cols-3 sm:grid-cols-9 gap-7 w-[70%] mx-auto">
            <img
              src="/icons/Certifications_BSCI.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_Sedex.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_ISO.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_bsi.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_DIN.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_NSF.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_BSTI.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_BUET.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
            <img
              src="/icons/Certifications_BIS.svg"
              alt="Certification"
              className="xl:h-[82px] xs:w-[50px] xl:w-[82px] sm:h-[70px] sm:w-[70px] lg:h-[83px] lg:w-[83px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
