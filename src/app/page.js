import HomeSlider from "./layout/HomeSlider";
import Category from "./product/Category";
import Trending from "./product/Trending";
import YoutubeLink from "./component/YoutubeLink";
import MiddleBanner from "./product/MiddleBanner";
// import '../styles/globals.css';
export const metadata = {
  title: "Akij Plastics",
  description: "Welcome to the best e-commerce site for all your needs",
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
