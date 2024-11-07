import HomeSliderComponent from "../component/HomeSliderComponent";
import Loading from "../component/Loading";



export default async function Home() {
  const slider = await fetchProducts();
  // if (!slider) {
  //   return <Loading page="banner"/>
  // }
  return (
    <div className="mt-12">
      <HomeSliderComponent slider={slider} />
    </div>
  );
}
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/banner`;
async function fetchProducts() {
  const productsResponse = await fetch(apiUrl,{
    cache: "no-store", // Prevents caching
  });

  if (productsResponse.ok) {
    
    return productsResponse.json();
  } else {
    return null
  }
}
