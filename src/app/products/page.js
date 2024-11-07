"use client";
import Filters from "@/app/products/Filters";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SingleProduct from "../component/SingleProduct";
import Loading from "../component/Loading";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import Image from "next/image";

export default function Page({ params }) {
  const { setting } = useContext(MyContext);
  const heroSectionRef = useRef(null);

  const [colors, setColors] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [categories, setSCategories] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [pageType, setPageType] = useState("");
  const [loading, setLoading] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30); // Number of items per page
  const [totalProducts, setTotalProducts] = useState(0); // Total number of products
  const [allProducts, setAllProducts] = useState([]); // All fetched products
  const [productsToShow, setProductsToShow] = useState([]); // Products to show on the current page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchSubCategoryOrProducts();
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    scrollToHeroSection()
    // Update products to show when currentPage or allProducts changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProductsToShow(allProducts.slice(startIndex, endIndex));
  }, [currentPage, allProducts]);

  const fetchSubCategoryOrProducts = async (
    cat,
    col,
    rang,
    priceAscDesc = "desc"
  ) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

    try {
      const response = await axios.get(url, {
        params: {
          categoryIds: cat, // Pass category IDs array
          colorIds: col, // Pass color IDs array
          rangeIds: rang, // Pass range IDs array
          priceAscDesc: priceAscDesc, // Sort by price
        },
      });
      const data = await response.data;

      setColors(data.colors);
      setSubcategory(data.subcategory);
      setSCategories(data.categories);
      setPriceRanges(data.pricerange);
      setPageType(data.pageType);
      setAllProducts(data.products);
      setTotalProducts(data.totalProducts); // Set the total products dynamically
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (direction) => {
    if (
      direction === "next" &&
      currentPage < Math.ceil(totalProducts / itemsPerPage)
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const scrollToHeroSection = () => {
    heroSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const totalPages = Math.ceil(totalProducts / itemsPerPage); // Calculate total number of pages
    const pages = [];
    const maxVisiblePages = 6;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage > totalPages - 4) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  if (loading) {
    return <Loading page="products" />;
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-12">
      <Image
        className="w-full xs:hidden xl:block"
        src={setting.product_banner}
        alt="Product Banner"
        width={4320}
        height={1050}
      />
      <Image
        className="w-full xs:block xl:hidden"
        src="/images/category/All-Products.jpg"
        alt="Product Banner"
        width={900}
        height={515}
      />
      <div className="mt-4 mx-auto xl:w-[80%]  xs:w-[85%]" >
        <h1 className="text-[36px]   text-nowrap text-clr mt-4 xl:text-3xl xs:text-xl  xs:ml-0 xl:ml-2 ">
          All Products
        </h1>
        <p className="mt-2 text-[15px] xl:ml-2 xs:m-0 text-justify">
          Our innovative designs ensure that each item meets the highest
          standards of reliability, making them ideal for everyday use. With a
          commitment to quality and a modern aesthetic, our products are not
          just functional—they’re built to last and enhance your lifestyle for
          years to come.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-11 mx-auto lg:w-[85%] xl:w-[80%] md:w-[85%] xs:w-[95%] gap-10 " ref={heroSectionRef}>
        <div className="col-span-1 lg:col-span-2 order-1 lg:order-none">
          <Filters
            colors={colors}
            subcategory={subcategory}
            priceRanges={priceRanges}
            handleCategoryFilter={fetchSubCategoryOrProducts}
            params={params}
            categories={categories}
            pageType={pageType}
          />
        </div>

        <div className="col-span-1 lg:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-4 lg:mt-24 w-full order-2 lg:order-none mx-auto gap-y-10 justify-items-center">
          {productsToShow.length === 0 ? (
            <p className="text-center text-xs font-medium text-gray-500 col-span-full">
              No Products Available
            </p>
          ) : (
            productsToShow.map((product, index) => (
              <SingleProduct product={product} index={index} key={index} />
            ))
          )}
        </div>

        {/* Pagination Controls */}
        <div className="col-span-1 lg:col-span-12 flex justify-center items-center mt-4 order-2 space-x-2">
          {/* Previous button */}
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className={`px-2 py-1 ${
              currentPage === 1 ? "text-gray-400" : "text-gray-400"
            } hover:text-black transition duration-300`}
          >
            &lt;
          </button>

          {/* Page numbers */}
          {pageNumbers.map((page, index) => (
            <span
              key={index}
              onClick={() => {
                typeof page === "number" && setCurrentPage(page);

                scrollToHeroSection();
              }}
              className={`px-2 py-1 cursor-pointer ${
                currentPage === page
                  ? "text-gray-400  text-sm border-b-2 border-black"
                  : "text-gray-500 text-sm hover:text-black"
              } transition duration-300`}
            >
              {page === "..." ? "..." : page}
            </span>
          ))}

          {/* Next button */}
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === Math.ceil(totalProducts / itemsPerPage)}
            className={`px-2 py-1 ${
              currentPage === Math.ceil(totalProducts / itemsPerPage)
                ? "text-gray-400"
                : "text-black"
            } hover:text-black transition duration-300`}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="  w-40 mx-auto mb-8 relative">
        <img
          src="/icons/line.svg"
          alt=""
          srcSet=""
          className="absolute  bottom-0"
        />
      </div>
    </div>
  );
}
