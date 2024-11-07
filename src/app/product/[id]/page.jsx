import ProductDetailsComponent from "./../../component/ProductDetailsComponent";
import Loading from "../../component/Loading";
import axios from "axios"; // Import Axios

export default async function Home({ params }) {
  const { product, success } = await fetchProducts(params.id);
  if (!success) {
    return <Loading page="product_details" />;
  }

  let obj = {
    id: 0,
    multiimages_name: product.image,
  };
  let combineData = [obj, ...product.multi_images];

  return (
    <>
      <ProductDetailsComponent product={product} combineData={combineData} />
    </>
  );
}

// Fetch product data using Axios
async function fetchProducts(productId) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });
    if (response.data.success) {
      return response.data;
    } else {
      return { success: false, product: {}, message: response.data.message };
    }
  } catch (error) {
    console.error("Error fetching product data", error);
    return { success: false, product: {}, message: "Error fetching data" };
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const product = await fetchProducts(params.id);

  return {
    title: product.product?.name || "Product Details",
    description:
      product.product?.description || "Detailed information about the product.",
    // Add a default Open Graph or Twitter Card meta tag if necessary
    openGraph: {
      title: product.product?.name || "Product",
      description:
        product.product?.description || "Detailed information about the product",
      images: [
        {
          url: product.product?.image || "/default-image.jpg", // Fallback image
        },
      ],
    },
  };
}
