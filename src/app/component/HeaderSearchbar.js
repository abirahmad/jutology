import React from "react";
import Link from "next/link";

export default function HeaderSearchbar({
  productSearch,
  categorySearch,
  subCategorySearch,
}) {
  return (
    <div className="absolute  lg:w-full xs:w-[300px]  top-9 bg-white z-50 rounded-lg overflow-hidden mx-auto">
      <div className=" w-full rounded-lg ">
        <ul className="max-h-60 overflow-y-auto">
          {productSearch?.map((item, i) => (
            <Link
              href={`/product/${item.id}`}
              className="block p-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer text-sm text-gray-700 border-b last:border-b-0"
              key={i}
            >
              {" "}
              <div className="flex justify-between">
                <p> {item.name}</p>
                <img src={item.image} alt="" srcSet="" className=" w-10 " />
              </div>
            </Link>
          ))}
          {categorySearch?.map((item, i) => (
            <Link
              href={`/categories/${item.slug}/main`}
              className="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer text-sm text-gray-700 border-b last:border-b-0"
              key={i}
            >
              {item.title}
            </Link>
          ))}
          {subCategorySearch?.map((item, i) => (
            <Link
              href={`/categories/${item.slug}/subcategory`}
              className="block px-4 py-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer text-sm text-gray-700 border-b last:border-b-0"
              key={i}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
