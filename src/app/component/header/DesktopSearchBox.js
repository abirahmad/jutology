import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const SearchBox = ({
  setDesktopSearchOpen,
  handleGetProducts,
  inputRef,
  categorySearch,
  subCategorySearch,
  productsSearch,
}) => {
  return (
    <div className="flex justify-center items-start h-screen inset-0 backdrop-blur-lg bg-white bg-opacity-30">
      <div
        className=" p-6 bg-white w-full min-h-80 shadow-sm"
        onMouseLeave={() => setDesktopSearchOpen(false)}
      >
        <div className="w-[80%] mx-auto">
          <div className="relative mb-6">
            <span className="absolute inset-y-0 left-0 flex items-center  text-black">
              <img className="w-6" src="/icons/search.svg" alt="" />
            </span>
            <input
              type="text"
              className="w-full pl-8 py-2 placeholder-black text-xl border-b-2 border-gray-300 focus:outline-none focus:border-black bg-transparent"
              placeholder="Search "
              onChange={handleGetProducts}
            />
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-clr text-lg font-semibold mb-3">
              Searched Results-
            </h3>
            <ul className="space-y-4">
              {productsSearch?.map((item, i) => (
                <li key={i} className="flex items-center">
                  <FaArrowRight />
                  <a
                    href={`/product/${item.slug}`}
                    className="text-lg text-clr  ml-5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {categorySearch?.map((item, i) => (
                <li key={i} className="flex items-center">
                  <FaArrowRight />
                  <a
                    href={`/categories/${item.slug}/main`}
                    className="text-lg text-clr  ml-5"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              {subCategorySearch?.map((item, i) => (
                <li key={i} className="flex items-center">
                  <FaArrowRight />
                  <a
                    href={`/categories/${item.slug}/subcategory`}
                    className="text-lg text-clr  ml-5"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
