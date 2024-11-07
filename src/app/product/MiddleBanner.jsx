export default async function MiddleBanner() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="hidden md:flex lg:w-[80%] xs:w-[94%]  mx-auto justify-between gap-6 mt-10 mb-7"
      >
        <img
          src="/middle3.png"
          alt="Image 1"
          className="w-1/2 h-auto transition-transform duration-300 transform hover:scale-105"
        />
        <img
          src="/middle2.png"
          alt="Image 2"
          className="w-1/2 h-auto transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div className=" md:hidden w-[94%] mx-auto flex flex-col items-center gap-4 mt-6 mb-4 ">
        <img
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src="/middle3.png"
          alt="Image 1"
          className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
        />
        <img
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src="/middle2.png"
          alt="Image 2"
          className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </>
  );
}
