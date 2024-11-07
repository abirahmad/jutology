import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import HeaderCategory from "../component/HeaderCategory";
import HeaderSearchbar from "../component/HeaderSearchbar";
import FlowUs from "../component/FlowUs";

export default function MobileHeader({
  setting,
  showProductNavbarRef,
  openFlowUs,
  searchContainerRef,
  showSearchBar,
  category,
}) {
  const [showProductCategoryDropdown, setShowProductCategoryDropdown] =
    useState(false);

  return (
    <>
      <div className="hidden md:flex p-4 bg-white mt-1 relative z-50 mx-auto">
        <div className="container mx-auto flex items-center justify-between  w-[80%]">
          <Link href="/" className="flex items-center">
            <img src={setting.logo_url} alt="Akij Plastics" className="w-44" />
          </Link>

          <nav
            className="flex flex-grow justify-center space-x-8 text-clr"
            ref={showProductNavbarRef}
          >
            {/* Products Section */}
            <div
              className="relative flex items-center"
              ref={showProductNavbarRef}
            >
              <button
                // onClick={() =>
                //   setShowProductCategoryDropdown(!showProductCategoryDropdown)
                // }
                onMouseEnter={() => setShowProductCategoryDropdown(true)}
                className="header-nav transition-all duration-300"
              >
                Products
              </button>
              <FaChevronDown size={10} />
            </div>

            {/* Sustainability Link */}
            <Link
              href="/sustainability"
              className="header-nav transition-all duration-300"
            >
              Sustainability
            </Link>

            {/* Follow Us Section */}
            <div className="relative flex items-center">
              <button
                onClick={() => setOpenFlowUs(!openFlowUs)}
                className="header-nav transition-all duration-300"
              >
                Follow Us
              </button>
              {openFlowUs && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg">
                  {/* Add Follow Us content here */}
                  <FlowUs settings={setting} />
                </div>
              )}
            </div>
          </nav>

          <div
            className="flex items-center space-x-3  text-clr"
            ref={searchContainerRef}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border-b-2 text-sm border-gray-300 placeholder-black  focus:outline-none focus:ring-0 focus:border-gray-500"
                onClick={() => setShowSearchBar(true)}
                onChange={(e) => handleGetProducts(e)}
              />

              <img
                src="/icons/search.svg"
                alt=""
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[16px]"
              />
              {showSearchBar ? (
                <HeaderSearchbar
                  productSearch={productsSearch}
                  categorySearch={categorySearch}
                  subCategorySearch={subCategorySearch}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="relative">
              <Link href="/products">
                <img src="/icons/bag.svg" alt="" className="w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showProductCategoryDropdown && (
        <div onMouseLeave={() => setShowProductCategoryDropdown(false)}>
          <HeaderCategory category={category} />
        </div>
      )}
    </>
  );
}
