import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories/${router.id}`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="mt-5">
        <hr />
      </div>

      <h1 className="text-center text-4xl  text-gray-200 mt-3">
        Trending Products
      </h1>
      <div className="flex flex-wrap  gap-5 justify-between mt-5">
        {products.map((product, index) => (
          <div
            className="flex flex-col w-[200px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2  items-center"
            key={index}
          >
            <img
              src={product.image}
              alt={product.name}
              className="  bg-gray-200 rounded w-[200px]"
            />
            <div className="mt-3">
              <p className="text-start text-gray-700 ml-3 text-xs">
                {product.name}
              </p>
              <p className="text-start text-gray-700 ml-3 text-xs">
                ${product.price}
              </p>
              <div className="mt-2">
                <button className="rounded-full shadow-sm border-2 w-[200px] py-1 text-black hover:bg-blue-700">
                  Buyx
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
