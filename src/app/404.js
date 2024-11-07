import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-black">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/"
         className="mt-6 px-2 py-2 text-black bg-gray-300 rounded-lg 
         hover:bg-blue-700 focus:ring focus:ring-blue-300">
          Go back to Home
      
      </Link>
    </div>
  );
}