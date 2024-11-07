import Link from "next/link";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="mt-4 text-3xl font-bold text-gray-800 sm:text-4xl">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>

      <div className="flex justify-center space-x-4 mt-6">
        <Link
          href="/"
          className="px-4 py-2 text-white bg-black rounded-lg shadow-lg 
                      hover:bg-gray-800 transition-all duration-300 ease-in-out
                      focus:ring focus:ring-blue-300 focus:outline-none"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="px-4 py-2 text-white bg-black rounded-lg shadow-lg 
                      hover:bg-gray-800 transition-all duration-300 ease-in-out
                      focus:ring focus:ring-blue-300 focus:outline-none"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
