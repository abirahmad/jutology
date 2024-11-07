"use client";
import React, { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

export default function ProductSpecification({ product }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Features",
      content: (
        <p
          className="transition-all duration-500 ease-in-out"
          dangerouslySetInnerHTML={{
            __html: product.feature,
          }}
        ></p>
      ),
    },
    {
      title: "Specification",
      content: (
        <div className="w-[50%]">
          {product.short_description?.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center mt-2"
            >
              <p className="text-[15px] text-clr">{item.name}</p>
              <p className="text-[15px] text-clr">{item?.value}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-md mt-5">
      {items.map((item, index) => (
        <div className="mb-2 ml-1 rounded" key={index}>
          <button
            className="w-full font-semibold py-2 text-left text-clr border-b-2 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            {openIndex === index ? (
              <RiArrowUpSLine className="w-5 h-5 text-clr" />
            ) : (
              <RiArrowDownSLine className="w-5 h-5 text-clr" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="text-sm mt-1 text-clr text-wrap p-2">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
