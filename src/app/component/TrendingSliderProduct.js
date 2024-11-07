"use client";
import { useContext } from "react";
import React from "react";
import Link from "next/link";

import { toast } from "react-toastify";
import axios from "axios";
import { MyContext } from "../Context/MyContext"; // Adjust the path as needed
import { useRouter } from "next/navigation"; // Use the correct import for the new App Router

export default function TrendingSliderProduct({ product }) {
  const router = useRouter();
  const { setStatus, token, authUser } = useContext(MyContext);
  const handleAddToCart = async (productItem) => {
    if (token === null) {
      router.push("/login");
      return false;
    }
    let obj = {
      product_id: productItem.id,
      product_name: productItem.name,
      product_sku: productItem.model,
      price: productItem.price,
      quantity: 1,
      discount: 0,
      tax: 0,
      subtotal: 189.98,
      options: '{"size": "L", "color": "Red"}',
      updated_at: "2024-07-31T09:34:32.000000Z",
      created_at: "2024-07-31T09:34:32.000000Z",
    };
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/store-cart`, obj)
      .then((res) => toast.success(res.data.message))
      .catch((err) => console.log("err :>> ", err));

    setStatus(true);
  };

  return (
    <div key={product.id} className="bg-white xl:h-[294px] xl:w-[204px] lg:h-[294px] lg:w-[204px]  xs:w-[154px]">
      <div className="flex flex-col items-center p-2 relative xl:h-[204px] xl:w-[204px] xs:w-[154px]">
        <span className="relative overflow-hidden bg-gray-100 ">
          <Link href={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              // className="h-[158px] w-[184px]"
              className="w-full   p-3   cursor-pointer transform transition-all duration-300 ease-in-out border border-transparent hover:scale-110"
            />
          </Link>
        </span>

        <div className="absolute bottom-3 flex gap-2 right-5 sm:bottom-5 sm:right-7">
          <img
            src="/icons/wishlist.png"
            alt=""
            srcSet=""
        
            onClick={() => handleAddToCart(product)}
            className="cursor-pointer"
          />
          <img
            src="/icons/cart.png"
            alt=""
            srcSet=""
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="p-2 sm:p-3">
        <p className="text-start text-clr text-xs sm:text-sm">{product.name}</p>
        <div className="flex">
          <p className="text-start text-clr text-xs sm:text-sm ">
            ${product.price}
          </p>
          {/* <p className="text-start text-red-500 font-semibold text-xs ml-3 sm:ml-5">
            ${product.price}
          </p> */}
        </div>
        <div className="mt-2">
          <button className="w-full text-gray-400 border-2 border-blue-200 rounded-full shadow-sm hover:bg-blue-200 hover:text-gray-800 text-xs sm:text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
