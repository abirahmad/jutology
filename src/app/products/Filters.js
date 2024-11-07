"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";

export default function Filters({
  colors,
  subcategory,
  pricerange,
  handleCategoryFilter,
  params,
  categories,
  pageType,
  priceRanges,
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [categorySelectedItems, setCategorySelectedItems] = useState([
    params.type == "subcategory" ? params.id : [],
  ]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [priceAscDesc, setPriceAscDesc] = useState("desc");

  useEffect(() => {
    getFilteredData();
  }, [
    categorySelectedItems,
    selectedColors,
    selectedPriceRanges,
    priceAscDesc,
  ]);

  const getFilteredData = () => {
    handleCategoryFilter(
      categorySelectedItems,
      selectedColors,
      selectedPriceRanges,
      priceAscDesc
    );
  };
 
  const handleCheckboxCategoryChange = (item) => {
    if (categorySelectedItems.includes(item)) {
      setCategorySelectedItems(
        categorySelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setCategorySelectedItems([...categorySelectedItems, item]);
    }
  };

  const handleCheckboxColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(
        selectedColors.filter((selectedColor) => selectedColor !== color)
      );
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  const handleCheckboxPriceRangeChange = (rangeString) => {
    if (selectedPriceRanges.includes(rangeString)) {
      // Remove color from selectedColors array
      setSelectedPriceRanges(
        selectedPriceRanges.filter(
          (selectedPriceRanges) => selectedPriceRanges !== rangeString
        )
      );
    } else {
      // Add color to selectedColors array
      setSelectedPriceRanges([...selectedPriceRanges, rangeString]);
    }
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleGoToCategory = (id) => {
    window.location.href = `/categories/${id}/main`;
  };
  const handleSortPrice = (e) => {
    setPriceAscDesc(e.target.value);
  };


  const items = [
    {
      title: <p className=" text-clr">Category</p>,
      content: (
        <div>
          {pageType == "products" ? (
            categories.map((category, i) => (
              <div
                key={category.title}
                className="flex justify-between items-center"
              >
                <span className="items-center ml-2">
                  <input
                    id={category.id + "cat" + i}
                    type="checkbox"
                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    onChange={() => handleGoToCategory(category.slug)}
                    checked={categorySelectedItems.includes(category.id)}
                  />

                  <label
                    htmlFor={category.id + "cat" + i}
                    className="ml-1 text-sm text-clr w-4 h-4"
                  >
                    {category.title}
                  </label>
                </span>
                <p className="text-sm text-clr">{category?.products_count}</p>
              </div>
            ))
          ) : (
            <>
              {subcategory?.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between items-center"
                >
                  <span className="items-center ml-2">
                    <input
                      checked={categorySelectedItems.includes(item.slug)}
                      id={item.title}
                      type="checkbox"
                      className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      onChange={() => handleCheckboxCategoryChange(item.slug)}
                    />
                    <label
                      htmlFor={item.title}
                      className="ml-1 text-sm text-clr w-4 h-4"
                    >
                      {item.title}
                    </label>
                  </span>
                  <p className="text-sm text-clr">
                    {item.sub_categories_products_count}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      ),
    },
    {
      title: <p className=" text-clr">Color</p>,
      content: (
        <div>
          {colors?.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <span className="items-center ml-2">
                <input
                  checked={selectedColors.includes(item.id)}
                  id={item.name}
                  type="checkbox"
                  className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  onChange={() => handleCheckboxColorChange(item.id)}
                />
                <label
                  htmlFor={item.name}
                  className="ml-1 text-sm text-clr w-4 h-4"
                >
                  {item.name}
                </label>
              </span>
              <p className="text-sm text-clr">{item?.products_count}</p>
            </div>
          ))}
        </div>
      ),
    },

    {
      title: <p className=" text-clr">Price</p>,
      content: (
        <div>
          {priceRanges?.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              {pageType == "products" ? (
                <span className="items-center ml-2">
                  <input
                    id={item.min + "" + item.max + i}
                    type="checkbox"
                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    onChange={() => handleCheckboxPriceRangeChange(item.id)}
                    checked={selectedPriceRanges.includes(item.id)}
                  />
                  <label
                    htmlFor={item.min + "" + item.max + i}
                    className="ml-1 text-sm text-clr w-4 h-4"
                  >
                    {item.min} to {item.max}
                    {/* {item.price_range_id} */}
                  </label>
                </span>
              ) : (
                <span className="items-center ml-2">
                  <input
                    id={item.min + i}
                    type="checkbox"
                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    onChange={() => handleCheckboxPriceRangeChange(item.id)}
                    checked={selectedPriceRanges.includes(item.id)}
                  />
                  <label
                    htmlFor={item.min + i}
                    className="ml-1 text-sm text-clr w-4 h-4"
                  >
                    {item.min} to {item.max}
                  </label>
                </span>
              )}

              <p className="text-sm text-clr">{item.product_count}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];
  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };
  return (
    <div className="w-[90%] max-w-md mx-auto mt-5">
      {items.map((item, index) => (
        <div key={index} className="mb-2  rounded">
          <button
            className=" w-full text-left text-gray-700   focus:outline-none flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            {openIndex === index ? (
              <RiArrowUpSLine className="w-5 h-5 text-gray-500 transition-all duration-500 ease-in-out" />
            ) : (
              <RiArrowDownSLine className="w-5 h-5 text-gray-500 transition-all duration-500 ease-in-out" />
            )}
          </button>
          {/* <div
            className={`  border-b-2 overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
              openIndex === index ? "" : "max-h-0"
            }`}
          >
            <div className=" text-gray-700 bg-white">{item.content}</div>
          </div> */}
          <div
            className={` border-b-2 transition-all duration-500 ease-in-out mt-2 overflow-hidden ${
              openIndex === index ? "max-h-[490px]" : "max-h-0"
            }`}
          >
            <div className="text-gray-700 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
      <div className="mb-2  rounded">
        <button className=" w-full text-left text-gray-700    focus:outline-none flex justify-between items-center">
          <p className=" text-clr">Sort</p>

          <select
            className="  text-sm text-clr"
            onChange={(val) => handleSortPrice(val)}
          >
            <option className=" " value="desc">
              High-Low
            </option>
            <option className="" value="asc">
              Low--High
            </option>
          </select>

          {/* {openIndex === index ? (
              <RiArrowUpSLine className="w-5 h-5 text-gray-500" />
            ) : (
              <RiArrowDownSLine className="w-5 h-5 text-gray-500" />
            )} */}
        </button>
        {/* <div
            className={`border-b-2 overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className=" text-gray-700 bg-white">{item.content}</div>
          </div> */}
      </div>
      <button
        className="bg-gray-100 w-full text-black text-xs  py-1 px-3 rounded hover:bg-blue-300 focus:outline-none"
        onClick={handleReload}
      >
        Reset
      </button>
    </div>
  );
}
