import Filters from "@/app/products/Filters";
import React from "react";
import SingleProduct from "../../component/SingleProduct";

export default async function page({ params }) {
  const { category, products, subcategory } = await fetchSubCategoryOrProducts(
    params.id
  );
  return (
    <div>
      <img
        className="w-full"
        src="/images/ProductBanner.png"
        alt="Product Banner"
      />
      <div className="grid grid-cols-1 lg:grid-cols-11 mx-auto lg:w-[85%]   xl:w-[80%] md:w-[85%]  xs:w-[95%]   gap-10">
        <div className="col-span-1 lg:col-span-2 order-1 lg:order-none">
          <h1 className="text-[36px] text-nowrap text-clr mt-4">
            {category?.title}
          </h1>
          <p className="text-[18px] text-nowrap text-clr "> {category?.description}</p>
          <Filters subcategory={subcategory} />
        </div>
        <div
          className="col-span-1 lg:col-span-9 grid grid-cols-2
     sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-4
     lg:mt-24 w-full order-2 lg:order-none mx-auto gap-y-10 justify-items-center"
        >
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <SingleProduct product={product} key={index} />
            ))
          ) : (
            <p className="text-center text-xs font-medium text-gray-500 col-span-full">
              No Products Available
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

async function fetchSubCategoryOrProducts(productId) {
  const subCategoryUrl = `${process.env.NEXT_PUBLIC_API_URL}/sub-category/${productId}`;
  let response = await fetch(subCategoryUrl,{
    cache: "no-store", // Prevents caching
  });
  let data = await response.json();
  return data;
  // if (data.code !== 404) {
  //   return {
  //     data: data,
  //     type: "category",
  //   };
  // } else {
  //   const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories/${productId}`;
  //   let response = await fetch(apiUrl);
  //   let data = await response.json();
  //   return {
  //     data: data,
  //     type: "product",
  //   };
  // }
}
