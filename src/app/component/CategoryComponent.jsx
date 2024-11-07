"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryComponent({ category }) {
 

  return (
    <>
      <div className="xs:w-[94%] xl:w-[80%] lg:w-[80%] mx-auto lg:mt-10 xs:mt-5">
        {/* For Desktop and Tablet */}
        <h1 className="hidden sm:block text-center text-4xl text-clr mt-3">
          Exclusive Categories
        </h1>
        <div className="hidden sm:grid  md:grid-cols-3  mt-10  grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  ">
          {category?.map((category, i) => (
            <div key={i} className="mt-5">
              <Link href={`/categories/${category?.slug}/main`} passHref>
                <Image
                  className="w-full xl:h-[300px] lg:h-[300px] md:h-[300px]  xl3:h-[500px]  sm:h-[300px]   2xl:h-[350px]  transform transition-all duration-300 border border-transparent hover:scale-105 rounded-2xl"
                  src={category?.image}
                  alt={category?.title}
                  width={352}
                  height={300}
                  // layout="responsive"
                />

                <p className="text-center mt-3 text-clr text-lg font-medium">
                  {category?.title}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* For Mobile */}
        <div className="sm:hidden">
          <h1 className="text-center text-2xl text-clr">
            Exclusive Categories
          </h1>
          <div className="grid grid-cols-2 mt-5 gap-3">
            {category?.map((category, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl"
              >
                <Link href={`/categories/${category?.slug}/main`} passHref>
                  <Image
                    className="transform transition-all duration-300 ease-in-out border border-transparent hover:scale-110 rounded-2xl w-full h-[150px] "
                    src={category?.image}
                    alt={category?.title}
                    width={352}
                    height={300}
                  />
                </Link>
                <p className="text-center mt-3 text-clr text-sm font-medium">
                  {category?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
