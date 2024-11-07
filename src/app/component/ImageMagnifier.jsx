"use client";
import React, { useState, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import ProductSpecification from "../product/[id]/ProductSpecification";
import SingleProduct from "../component/SingleProduct";
import Image from "next/image";
import Modal from "./Modal";

const ImageMagnifier = ({ images, product }) => {
  const [mainImage, setMainImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

  if (!mainImage || !product) return null; // Render nothing until data is available

  return (
    <div className="xl:mt-20 xs:mt-0 ">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
        <p className="mb-4">This is the modal content.</p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={closeModal}
        >
          Close Modal
        </button> */}
      </Modal>
      <div className="max-w-4xl mx-auto flex flex-wrap mt-5 ">
        <div className="md:w-1/2 xs:p-1 ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "no img",
                isFluidWidth: true,
                src: mainImage.multiimages_name,
              },
              largeImage: {
                src: mainImage.multiimages_name,
                width: 1000,
                height: 1000,
                backgroundColor: "red",
              },
              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
              className: "magnifier-image",
              imageClassName: "magnifier-image bg-gray-100",
              enlargedImageContainerClassName: "magnifier-lens",
            }}
          />
          <div className="mt-4 flex flex-wrap gap-2 xl:ml-0 xs:ml-3">
            {images.map((image, index) => (
              <Image
                key={index}
                className="w-16 h-16 object-cover border border-gray-300 rounded cursor-pointer bg-slate-200"
                src={image.multiimages_name}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(image)}
                width={900}
                height={515}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-clr">{product.name}</h1>
            <p className="text-clr">SKU-{product.model}</p>
            <div className="flex">
              <p className="text-start text-clr text-2xl mt-1">
                <span className="font-semibold"> ৳ </span> {product.price}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center ">
              {/* <a
                href={product.store_link}
                target="_blank"
                className="border w-1/2 py-1 text-center font-semibold text-clr rounded-full hover:bg-blue-200 transition-colors duration-300"
              >
                Buy Now
              </a> */}
              <a
                onClick={openModal}
                className="border w-1/2 py-1 text-center font-semibold text-clr rounded-full hover:bg-blue-200 transition-colors duration-300"
              >
                Buy Now
              </a>
            </div>
            <div
              className="text-sm md:text-base xs:p-0 xs:mt-1 md:p-4 xl:p-0 xl:mt-1 ml-1 text-clr break-words"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            ></div>

            <ProductSpecification product={product} />
          </div>
        </div>
      </div>
      <h1 className="text-center xs:text-2xl xl:text-5xl p-2 mt-8 text-black">
        You May Also Like
      </h1>

      <div className="xl:w-[80%] lg:w-[80%] xs:w-[95%] mx-auto mt-8 mb-8">
        <div className="xs:p-1 grid xl:grid-cols-4 xl:p-6 xs:grid-cols-2  xl:gap-7 xs:gap-0  justify-items-center xl:w-[95%] xs:w-full mx-auto ">
          {product?.relatedproducts.map((product, index) => (
            <SingleProduct product={product} key={index} />
          ))}
          {/* <TrendingProductComponent products={product?.relatedproducts} /> */}
        </div>
      </div>
    </div>
  );
};

export default ImageMagnifier;
