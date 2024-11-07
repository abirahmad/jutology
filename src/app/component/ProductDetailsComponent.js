import React from "react";
import ImageMagnifier from "./ImageMagnifier";
export default function ProductDetailsComponent({ combineData, product }) {
  return <ImageMagnifier images={combineData} product={product} />;
}
