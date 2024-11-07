"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import FlowUs from "../component/FlowUs";
import MobileCategory from "../component/MobileCategory";
import Loading from "../component/Loading";
import { RiArrowDownSLine } from "react-icons/ri";
import MobileSearchBox from "../component/header/MobileSearchBox";
import DesktopHeader from "./DesktopHeader";
import Image from "next/image";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  const mobileSearchContainerRef = useRef(null);
  const showProductNavbarRef = useRef(null);
  const { status, setting } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [openFlowUs, setOpenFlowUs] = useState(false);

  const [showMobileCategoryMenu, setShowMobileCategoryMenu] = useState(false);
  const [showMobileSearchBox, setShowMobileSearchBox] = useState(false);
  const [category, setCategory] = useState([]);
  const [productsSearch, setProductsSearch] = useState([]);
  const [categorySearch, setCategorySearch] = useState([]);
  const [subCategorySearch, setSubCategorySearch] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsOpen((prevState) => !prevState);
    setShowMobileCategoryMenu(false);
    setShowMobileSearchBox(false);
  };
  const handleOpenSearchBox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setShowMobileSearchBox(true);
    setMenuOpen(!menuOpen);
    setIsOpen((prevState) => !prevState);
    setShowMobileCategoryMenu(false);
  };

  useEffect(() => {
    // getCartData();
    getCategory();
    setHasMounted(true);
  }, [status]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/category`
      );
      setCategory(response.data || []); // Ensure it's always an array
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up to reset the body style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleGetProducts = async (e) => {
    let name = e.target.value;
    if (name.length < 2) {
      setProductsSearch([]);
      setCategorySearch([]);
      setSubCategorySearch([]);
      return;
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products-search/${name}`
    );
    setProductsSearch(response.data.products);
    setCategorySearch(response.data.category);
    setSubCategorySearch(response.data.subcategory);
  };
  const handleClickOutside = (event) => {
    if (
      (searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)) ||
      (showProductNavbarRef.current &&
        !showProductNavbarRef.current.contains(event.target))
    ) {
      setShowSearchBar(false);
      setOpenFlowUs(false);
    }
  };

  const goToProducts = () => {
    setShowMobileCategoryMenu(false);
    window.location.href = `/products`;
  };

  if (!setting) {
    return <Loading page="header" />;
  }
  if (!category) {
    return <Loading page="waiting" />;
  }

  return (
    <header
      className={`fixed top-0  left-0 w-full h-12 bg-white border-b-2 ${
        menuOpen ? "h-full bg-opacity-100" : ""
      } transition-all duration-300 ease-out z-[100]`}
    >
      {/* Desktop Header */}
      <DesktopHeader
        setting={setting}
        showProductNavbarRef={showProductNavbarRef}
        openFlowUs={openFlowUs}
        setOpenFlowUs={setOpenFlowUs}
        searchContainerRef={searchContainerRef}
        showSearchBar={showSearchBar}
        category={category}
        categorySearch={categorySearch}
        handleGetProducts={handleGetProducts}
        subCategorySearch={subCategorySearch}
        productsSearch={productsSearch}
      />

      {/* mobile section */}
      <div
        className={
          "xl:hidden md:hidden lg:hidden xs:flex xs:p-3 mt-1 xl:p-3 lg:p-2 relative"
        }
      >
        {!showMobileSearchBox ? (
          <Link href="/" className="flex items-center">
            {setting.logo_url ? (
              <Image
                height={32}
                width={130}
                src={setting.logo_url}
                // src="/black_logo.svg"
                alt="Akij Plastics"
                className={`${menuOpen ? "hidden" : " w-[130px] max-h-8"}`}
              />
            ) : (
              <Image
                height={32}
                width={130}
                src="/black_logo.svg"
                alt="Akij Plastics"
                className={`${menuOpen ? "hidden" : " w-[130px] max-h-8"}`}
              />
            )}
          </Link>
        ) : (
          <div className={`${menuOpen ? "hidden" : "overflow-hidden"}`}>
            <div
              ref={mobileSearchContainerRef}
              className="flex justify-between"
            >
              <img src="/icons/fab.svg" alt="" className=" w-[30px] " />
              <input
                type="text"
                className=" w-[200px] text-xs  border-b-2 border-gray-300 p-1 focus:outline-none focus:ring-0  focus:border-gray-500"
                placeholder="Search"
                // onFocus={() => setShowMobileSearchBox(true)}

                onChange={(e) => handleGetProducts(e)}
              />{" "}
            </div>
          </div>
        )}

        <div className="ml-auto flex items-center space-x-5  ">
          <img
            src="/icons/search.svg"
            className={`h-[16px] ${menuOpen ? "hidden" : ""}`}
            alt=""
            // onClick={() => setShowMobileSearchBox(true)}
            onClick={() => handleOpenSearchBox()}
          />

          <button
            onClick={() => goToProducts()}
            className={`${
              menuOpen
                ? "hidden"
                : "text-black "
            }`}
          >
            <img src="/icons/bag.svg" alt="Logo" className="h-[16px]" />
          </button>
          <button
            className="relative z-20 block md:hidden h-[16px] focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Top bar */}
            <div
              className={`h-[1.3px] w-4 bg-black my-1 transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.1" : ""
              }`}
            />

            {/* Bottom bar */}
            <div
              className={`h-[1.3px] w-4 bg-black my-1 transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <ul
        className={`absolute top-12 left-10 w-full flex flex-col items-start space-y-4 text-clr ${
          menuOpen ? "opacity-100" : "opacity-0 hidden"
        } transition-opacity duration-700`}
      >
        {showMobileSearchBox ? (
          <MobileSearchBox
            categorySearch={categorySearch}
            handleGetProducts={handleGetProducts}
            inputRef={inputRef}
            subCategorySearch={subCategorySearch}
            productsSearch={productsSearch}
          />
        ) : (
          <>
            {["Home", "Products", "Sustainability", "Follow Us"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-300`}
                  style={{
                    transitionDelay: `${index * 100}ms`, // Stagger effect
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  {item === "Products" ? (
                    <button
                      className="text-dark text-[28px] text-clr font-semibold	 flex items-center"
                      onClick={() =>
                        setShowMobileCategoryMenu(!showMobileCategoryMenu)
                      }
                    >
                      Products
                      <RiArrowDownSLine
                        size={24}
                        className="absolute left-full ml-2 text-clr opacity-0 hover:opacity-100 transition-opacity duration-300"
                      />
                    </button>
                  ) : item === "Follow Us" ? (
                    <div className="relative flex items-center transition-all duration-300">
                      <button
                        onClick={() => setOpenFlowUs(!openFlowUs)}
                        className="flex text-dark text-[28px] text-clr font-semibold	"
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
                  ) : (
                    <Link
                      href={item === "Home" ? "/" : "/sustainability"}
                      className="text-dark text-[28px] text-clr font-semibold	"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              )
            )}
          </>
        )}
      </ul>

      {showMobileCategoryMenu && (
        <MobileCategory
          categories={category}
          toggleMenu={toggleMenu}
          showMobileCategoryMenu={showMobileCategoryMenu}
          setShowMobileCategoryMenu={setShowMobileCategoryMenu}
          setMenuOpen={setMenuOpen}
        />
      )}
    </header>
  );
}
