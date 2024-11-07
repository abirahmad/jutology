import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import HeaderCategory from "../component/HeaderCategory";
import DesktopSearchBox from "../component/header/DesktopSearchBox";
import FlowUs from "../component/FlowUs";
import Image from "next/image";

export default function DesktopHeader({
  setting,
  showProductNavbarRef,
  openFlowUs,
  setOpenFlowUs,
  searchContainerRef,
  showSearchBar,
  category,
  categorySearch,
  handleGetProducts,
  subCategorySearch,
  productsSearch,
}) {
  const [showProductCategoryDropdown, setShowProductCategoryDropdown] =
    useState(false);
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex bg-white mt-1 relative z-50 mx-auto border-b-2">
        <div className="container mx-auto flex items-center justify-between  w-[80%]">
          <Link href="/" className="flex items-center">
            {setting.logo_url ? (
              <Image
                src="/jutology.png"
                height={20} // Decreased height
                width={300}
                alt="Jutology"
                className="w-36 h-auto" // Adjusted width and let height auto-scale
              />
            ) : (
              <Image
                src="/jutology.png"
                height={20} // Decreased height
                width={300}
                alt="Jutology"
                className="w-36 h-auto" // Adjusted width and let height auto-scale
              />
            )}
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
              <img
                className="cursor-pointer"
                src="/icons/search.svg"
                alt=""
                onClick={() => setDesktopSearchOpen(!desktopSearchOpen)}
                // className="absolute right-2 left-0 top-1/2 transform -translate-y-1/2 w-[16px]"
              />
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
      {desktopSearchOpen && (
        <div
          className=""
          // onMouseLeave={() => setShowProductCategoryDropdown(false)}
        >
          <DesktopSearchBox
            category={category}
            setDesktopSearchOpen={setDesktopSearchOpen}
            categorySearch={categorySearch}
            handleGetProducts={handleGetProducts}
            subCategorySearch={subCategorySearch}
            productsSearch={productsSearch}
          />
        </div>
      )}
    </>
  );
}
