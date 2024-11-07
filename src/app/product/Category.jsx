import CategoryComponent from "./../component/CategoryComponent";
import Loading from "../component/Loading";

export default async function Home() {
  const category = await fetchProducts();

  if (!category) {
    return <Loading page="category" />;
  }
  return <CategoryComponent category={category} />;
}
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/category`;
async function fetchProducts() {
  const productsResponse = await fetch(apiUrl, {
    cache: "no-store", // Prevents caching
  });
  if (productsResponse.ok) {
    return productsResponse.json();
  } else {
    return null;
  }
}
