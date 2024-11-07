import { useEffect, useState } from "react";
import {
  RiArrowUpSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { FaTimes, FaChevronDown } from "react-icons/fa";

const MobileCategory = ({
  categories,
  toggleMenu,
  setMenuOpen,
  setShowMobileCategoryMenu,
}) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (categoryName) => {
    setOpenSection((prevState) =>
      prevState === categoryName ? null : categoryName
    );
  };

  const handleGoToCategory = (id) => {
    toggleMenu();
    window.location.href = `/categories/${id}/subcategory`;
  };

  const handleBack = () => {
    setMenuOpen(true);
    setShowMobileCategoryMenu(false);
  };

  return (
    <div className="bg-white fixed top-0 xl:hidden left-0 w-full h-full flex-col items-start transition-transform transform">
      {/* Dynamically map over categories */}
      <div className="flex items-center p-2">
        <button onClick={handleBack} className="text-gray-500">
          <RiArrowLeftSLine size={30} />
        </button>
        <span className="text-xl ml-2"></span>
      </div>

      <div className="space-y-4 p-9">
        {categories.map((category, index) => (
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className=" "
            key={index}
          >
            <button
              onClick={() => toggleSection(category.title)}
              className="flex items-center justify-between w-full group"
            >
              <div className="relative flex items-center">
                <span className="transition-all duration-1000 text-dark text-[28px] text-clr font-semibold">
                  {category.title}
                </span>
              </div>
              <div>
                {openSection === category.title ? (
                  <RiArrowDownSLine
                    size={30}
                    className="absolute top-1 left-full ml-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mb-4"
                  />
                ) : (
                  <RiArrowRightSLine
                    size={30}
                    className="absolute top-1 left-full ml-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mb-4"
                  />
                )}
              </div>
            </button>

            {/* Display children if category is open with smooth transitions */}
            <div
              className={`transition-all duration-700 ease-in-out transform ${
                openSection === category.title
                  ? "max-h-screen opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              } overflow-hidden`}
            >
              {openSection === category.title &&
                category.children.length > 0 && (
                  <div className="ml-4">
                    {category.children.map((subCategory, subIndex) => (
                      <label
                        key={subIndex}
                        className="flex items-center justify-between text-clr py-1"
                        style={{
                          transition: "opacity 0.5s ease-in-out",
                          opacity: openSection === category.title ? 1 : 0,
                          transitionDelay: `${subIndex * 100}ms`, // Stagger effect
                        }}
                      >
                        <span className="flex items-center cursor-pointer text-black font-semibold">
                          <input
                            type="checkbox"
                            className="mr-1 appearance-none w-[15px] h-[15px] border border-black"
                            onClick={() => handleGoToCategory(subCategory.slug)}
                          />
                          <span className="text-[14px]">
                            {subCategory.title}
                          </span>
                        </span>
                        <span>{subCategory.sub_categories_products_count}</span>
                      </label>
                    ))}
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCategory;
