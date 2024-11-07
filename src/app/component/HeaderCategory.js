import React from "react";
import Link from "next/link";

export default function HeaderCategory({ category }) {
  return (
    <div className="relative" id="header-product-category">
      <section
        data-aos="fade-down"
        data-aos-offset="500"
        data-aos-duration="500"
        className="bg-white bg-opacity-100  text-white absolute w-full"
      >
        <div className="grid grid-cols-6 gap-6 p-8 w-[80%] mx-auto ">
          {/* Household Section */}
          {category.map((item, index) => (
            <div
              key={index}
              // data-aos="fade-up"
              // data-aos-delay={`${index * 70}`} // Increase delay for each item
            >
              <Link href={`/categories/${item?.slug}/main`}>
                <h1 className="text-black ">{item?.title}</h1>
              </Link>

              {item.children.map((child, childIndex) => (
                <ul className="mt-2 space-y-1" key={childIndex}>
                  <Link href={`/categories/${child?.slug}/subcategory`}>
                    <li
                      className=""
                      // data-aos="fade-up"
                      // data-aos-delay={`${(index * 100) + (childIndex * 50)}`} // Further delay for children
                    >
                      <span className=" text-black hover:text-gray-400">{child?.title}</span>
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>

  );
}
