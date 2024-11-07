import React, { useContext } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyProvider } from "./Context/MyContext"; // Adjust the path as needed
import "aos/dist/aos.css";
import AOS1 from "./component/AOS1";
const inter = Inter({ subsets: ["latin"] });
import { MyContext } from "./Context/MyContext"; // Adjust the path as needed
import Head from "next/head";

export const metadata = {
  title: "Akij Plastics ",
  description: "Best e-commerce site for all your needs..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="6GokQS8h-xLjoXDQdrjmlGpkyYZwHLl8Y7PSJC6EGbY"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <link rel="manifest" href="/manifest.json" /> */}
      <body className={inter.className}>
        <AOS1 />
        <MyProvider>
          <ToastContainer />
          <Header />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
