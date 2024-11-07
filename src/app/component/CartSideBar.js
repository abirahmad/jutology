import React from "react";
import { FaRegUser, FaTimes, FaRegHeart, FaBars } from "react-icons/fa";

export default function CartSideBar({ toggleCart, isOpenCart, carts }) {
  return (
    <div className=" overflow-auto">
      {" "}
      <div
        className={`overflow-auto z-50 fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpenCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-2 border-b bg-gray-50 shadow-sm">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            ✖️
          </button>
        </div>

        <div className="p-2 overflow-y-auto">
          {carts?.map((cart, i) => (
            <div
              data-aos="fade-left"
              className="flex items-center gap-1 p-1 mb-1 bg-blue-50 rounded-lg shadow-sm"
              key={i}
            >
              <img
                src="https://www.akijplastics.com/public/assets/products/3cfda2ea6e55ff0745cd9837a16d43e8.png"
                className="w-16 h-16 rounded-md border"
                alt="Product"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">Product Name</p>
                <p className="text-xs text-gray-500">SKU: 1111</p>
                <p className="text-xs text-gray-600">$111.11</p>
              </div>
              <div className="flex flex-col items-center ">
                <button className="w-5 h-5 border rounded-l-md flex items-center justify-center hover:bg-gray-200 focus:outline-none">
                  -
                </button>
                <span className="text-base font-medium">1</span>
                <button className="w-5 h-5 border rounded-r-md flex items-center justify-center hover:bg-gray-200 focus:outline-none">
                  +
                </button>
              </div>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => removeFromCart(cart.id)}
              >
                <FaTimes size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
