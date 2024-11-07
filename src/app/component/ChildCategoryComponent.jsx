"use client";
import React from "react";
import Link from "next/link";

export default function ChildCategoryComponent({ category, categoryId }) {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center text-4xl text-gray-200 mt-3">Sub Category</h1>
      {category.status == false ? (
        "No data"
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {category?.map((category, i) => (
            <div key={i} className="flex flex-col items-center p-2">
              <Link href={`/sub-categories/${category.id}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="cursor-pointer"
                />
              </Link>
              <p className="text-center mt-3 text-gray-700">{category.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
