import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function MobileSearchBox({
  handleGetProducts,
  inputRef,
  categorySearch,
  subCategorySearch,
  productsSearch,
}) {
  return (
    <div className="">
      <div className="mb-6 w-[70%] mx-auto flex items-center">
        <img className="w-6" src="/icons/search.svg" alt="" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="w-full placeholder-black text-3xl p-3 rounded-md focus:outline-none"
          onChange={handleGetProducts}
        />
      </div>
      <div className="space-y-4 w-[100%] mx-auto p-3 ">
        <div className="text-gray-600 text-sm font-semibold">
          Searched Results-
        </div>
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
                className="text-lg text-gray-800 hover:text-blue-600 ml-5"
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
                className="text-lg text-gray-800 hover:text-blue-600 ml-5"
                key={i}
              >
                {item.title}
              </a>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
