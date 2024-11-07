import HomeSlider from "./layout/HomeSlider";
import Category from "./product/Category";
import Trending from "./product/Trending";
import YoutubeLink from "./component/YoutubeLink";
import MiddleBanner from "./product/MiddleBanner";
// import '../styles/globals.css';
export const metadata = {
  title: "Jutology",
  description: "Welcome to Jutology by Akij",
};

export default function Home() {
  return (
    <main>
   <meta name="google-site-verification" content="6GokQS8h-xLjoXDQdrjmlGpkyYZwHLl8Y7PSJC6EGbY" />

      <HomeSlider />
      <Category />
      <MiddleBanner />
      <Trending />
     <YoutubeLink/>
    </main>
  );
}
