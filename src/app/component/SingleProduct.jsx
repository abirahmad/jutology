"use client";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext"; // Adjust the path as needed
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation"; // Use the correct import for the new App Router

export default function TrendingSliderProduct({ product, index }) {
  const { setting } = useContext(MyContext);

  const router = useRouter();

  return (
    <div
      key={index}
      className="bg-white xl:h-[90%] xl:w-[85%] lg:h-[90%] lg:w-[90%]  xs:w-[94%]"
    >
      <div>
        <span className="relative overflow-hidden bg-gray-100 ">
          {setting?.go_to_store ? (
            <a href={product?.store_link} target="_blank">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full p-2 cursor-pointer transform transition-all duration-300 ease-in-out border border-transparent hover:scale-110"
              />
            </a>
          ) : (
            <Link href={`/product/${product?.slug}`}>
              <img
                src={product?.image}
                alt={product?.name}
                className="w-full p-2 cursor-pointer transform transition-all duration-300 ease-in-out border border-transparent hover:scale-110"
              />
            </Link>
          )}
        </span>
      </div>
      <div className=" ">
        <p className="xs:hidden xl:block text-start text-clr text-xs sm:text-sm ml-4 mt-1">
          {product?.name.length > 20
            ? `${product?.name.substring(0, 20)}...`
            : product?.name}
        </p>
        <p className="xs:block xl:hidden text-start text-clr text-xs sm:text-sm ml-4 mt-1">
          {product?.name.length > 15
            ? `${product?.name.substring(0, 15)}...`
            : product?.name}
        </p>

        <div className="flex mt-1 ml-4">
          <p className="text-start text-clr text-xs sm:text-sm font-semibold ">
            ৳ {product?.price}
          </p>
        </div>
        <div className="mt-2">
          {setting.go_to_store ? (
            <a href={product?.store_link} target="_blank">
              <button className="buy-btn text-clr font-semibold">
                Buy Now
              </button>
            </a>
          ) : (
            <Link href={`/product/${product?.slug}`}>
              <button className="buy-btn text-clr font-semibold">
                Buy Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
