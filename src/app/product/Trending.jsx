import TrendingProductComponent from "../component/TrendingProductComponent";
import Loading from "../component/Loading";

export default async function Home() {
  const products = await fetchProducts();
  if (!products) {
    return <Loading page="trending" />;
  }
  return (
    <div className="xl:w-[80%] lg:w-[80%] xs:w-[94%]  mx-auto mt-10">
      <h1 className="xs:hidden xl:block sm:block text-center text-4xl text-clr mt-3 mb-10">
        Trending Now
      </h1>
      <h1 className="text-center text-2xl text-clr mt-3 mb-10 xl:hidden xs:block">
        Trending Now
      </h1>
      <div className="xs:p-1 xl:p-1">
        <TrendingProductComponent products={products} />
      </div>
    </div>
  );
}
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/trend-products`;
async function fetchProducts() {
  const res = await fetch(apiUrl, {
    cache: "no-store", // Prevents caching
  });
  if (res.ok) {
    return res.json();
  } else {
    return null;
  }
}
