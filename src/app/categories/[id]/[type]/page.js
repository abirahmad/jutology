"use client";
import Filters from "@/app/products/Filters";
import React, { useEffect, useState, useRef } from "react";
import SingleProduct from "../../../component/SingleProduct";
import axios from "axios";
import Loading from "@/app/component/Loading";
import Image from "next/image";
import DynamicHead from "@/app/DynamicHead";

export default function Page({ params }) {
  const goToUpSection = useRef(null);

  const [category, setCategory] = useState(null);
  const [colors, setColors] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);
  const [loading, setLoading] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30); // Items per page
  const [totalProducts, setTotalProducts] = useState(0); // Total products count
  const [allProducts, setAllProducts] = useState([]); // All fetched products
  const [productsToShow, setProductsToShow] = useState([]); // Products to show on the current page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchSubCategoryOrProducts();
      setLoading(false);
    };

    fetchData();
  }, [params.id, params.type]); // Fetch data on page load or when currentPage changes

  useEffect(() => {
    // Update products to show when currentPage or allProducts changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setProductsToShow(allProducts?.slice(startIndex, endIndex));
    scrollToHeroSection()
  }, [currentPage, allProducts]);

  const fetchSubCategoryOrProducts = async (
    category_id = params.id,
    type = params.type,
    cat,
    col,
    rang,
    priceAscDesc
  ) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/sub-category/${category_id}/${type}`;

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

      if (data.status === false) {
        setLoading(true);
      }
      setCategory(data.category);
      setColors(data.colors);
      setSubcategory(data.subcategory);
      setPriceRanges(data.priceRangeCounts);
      setTotalProducts(data.totalProducts); // Set total products count
      setAllProducts(data.products); // Store all fetched products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const scrollToHeroSection = () => {
    goToUpSection?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Update meta tags when data changes
    document.title = category?.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", category?.description);
  }, [category]);

  const handleCategoryFilter = (cat, col, rang, priceAscDesc) => {
    setLoading(true);
    fetchSubCategoryOrProducts(
      params.id,
      params.type,
      cat,
      col,
      rang,
      priceAscDesc
    );
    setLoading(false);
  };

  const pricerange = category?.pricerange;

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

  const pageNumbers = getPageNumbers();
  if (loading) {
    return <Loading page="products" />;
  }
  const categoryImages = [
    "Furniture",
    "Dining",
    "Kids & Toys",
    "Storage",
    "Organizer",
    "Additional",
  ];
  if (!category) {
    return <h1>Wait.........</h1>;
  }
  return (
    <div className="mt-12">
      <DynamicHead
        title={category.title}
        description={category.description}
        keywords={category.keywords}
        image={category.image}
      />
      <Image
        className="w-full xl:block xs:hidden max-h-[550px]  "
        src={category?.banner_image}
        alt="Product Banner"
        width={2000}
        height={550}
      />
      <Image
        width={900}
        height={515}
        className="w-full xl:hidden xs:block max-h-[500px]"
        src={category?.mobile_banner_image}
        alt="Product Banner"
      />
      {/* {categoryImages.map((catImage) =>
        catImage === category?.title ? (
          <Image
            width={900}
            height={515}
            key={catImage}
            className="w-full xl:hidden xs:block"
            src={`/images/category/${catImage}.jpg`}
            alt={`${catImage} Banner`}
          />
        ) : null
      )} */}

      <div
        ref={goToUpSection}
        className="grid grid-cols-1 lg:grid-cols-11 mx-auto lg:w-[85%] xl:w-[80%] md:w-[85%] xs:w-[95%] gap-10"
      >
        <div className="col-span-1 lg:col-span-2 order-1 lg:order-none">
          <h1 className="xl:text-3xl xs:text-xl  xs:ml-4 xl:ml-1 text-nowrap text-clr mt-4  uppercase">
            {category?.title}
          </h1>
          <p className="xl:text-[18px]  xs:ml-4 xl:ml-1 xs:text-[14px] text-nowrap text-clr">
            {" "}
            {category?.description}
          </p>
          <div className="">
            <Filters
              colors={colors}
              subcategory={subcategory}
              pricerange={pricerange}
              handleCategoryFilter={handleCategoryFilter}
              params={params}
              priceRanges={priceRanges}
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-4 lg:mt-24 w-full order-2 lg:order-none mx-auto gap-y-10 justify-items-center">
          {productsToShow && productsToShow.length > 0 ? (
            productsToShow.map((product, index) => (
              <SingleProduct product={product} key={product.id} index={index} />
            ))
          ) : (
            <p className="text-center text-xs font-medium text-black col-span-full">
              No Products Available
            </p>
          )}
        </div>

        {/* Check if there are products before rendering pagination controls */}
        {productsToShow && productsToShow.length > 0 && (
          <div className="col-span-1 lg:col-span-12 flex justify-center items-center mt-4 order-2 space-x-2">
            {/* Previous button */}
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className={`px-2 py-1 ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black"
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
                    ? "text-black text-sm border-b-2 border-black"
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
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-black"
              } hover:text-black transition duration-300`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      <div className="  w-40 mx-auto mb-8 relative">
        <img src="/icons/line.svg" alt="" className="absolute  bottom-0" />
      </div>
    </div>
  );
}
