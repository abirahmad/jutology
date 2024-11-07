export default function LoadingShimmer({ page }) {
  return (
    <>
      {page == "product_details" ? (
        <div>
          <div className="max-w-4xl mx-auto flex flex-wrap mt-28">
            <div className="md:w-1/2">
              {/* Shimmer effect for main image */}
              <div className="w-full h-80 bg-gray-300 animate-pulse"></div>
              <div className="mt-4 flex flex-wrap gap-2">
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 bg-gray-300 animate-pulse rounded"
                    ></div>
                  ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div>
                {/* Shimmer effect for product name */}
                <div className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2"></div>
                {/* Shimmer effect for product model */}
                <div className="w-1/2 h-4 bg-gray-300 animate-pulse mb-4"></div>
                {/* Shimmer effect for product price */}
                <div className="w-1/3 h-6 bg-gray-300 animate-pulse"></div>
                <div className="mt-4 flex justify-between items-center">
                  {/* Shimmer effect for Buy Now button */}
                  <div className="w-1/2 h-10 bg-gray-300 animate-pulse rounded-full"></div>
                </div>
                {/* Shimmer effect for description */}
                <div className="mt-4 space-y-2">
                  {Array(5)
                    .fill("")
                    .map((_, index) => (
                      <div
                        key={index}
                        className="w-full h-4 bg-gray-300 animate-pulse"
                      ></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* <h1 className="text-center font-semibold text-4xl p-2 mt-8 text-gray-400">
            You May Also Likes
          </h1> */}
        </div>
      ) : (
        <></>
      )}
      {page == "products" ? (
        <div>
          {/* Banner Shimmer */}
          <div className="w-full h-60 bg-gray-300 animate-pulse"></div>

          <div className="grid grid-cols-1 lg:grid-cols-11 mx-auto lg:w-[85%] xl:w-[80%] md:w-[85%] xs:w-[95%] gap-10 mt-10">
            {/* Filters Shimmer */}
            <div className="col-span-1 lg:col-span-2 order-1 lg:order-none">
              <div className="h-10 w-3/4 bg-gray-300 animate-pulse mb-4"></div>
              <div className="space-y-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="h-6 w-full bg-gray-300 animate-pulse"
                  ></div>
                ))}
              </div>
            </div>

            {/* Product Grid Shimmer */}
            <div className="col-span-1 lg:col-span-9 grid grid-cols-2 sm:grid-cols-2  gap-10 md:grid-cols-4 lg:grid-cols-4 gap-y-10 mt-4 lg:mt-24 w-full order-2 lg:order-none mx-auto justify-items-center">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="animate-pulse w-full">
                  <div className="w-full h-48 bg-gray-300 rounded-md"></div>
                  <div className="h-4 bg-gray-300 mt-4"></div>
                  <div className="h-4 bg-gray-300 mt-2 w-3/4"></div>
                </div>
              ))}
            </div>

            {/* Pagination Controls Shimmer */}
            <div className="col-span-1 lg:col-span-12 flex justify-center mt-4 order-2">
              <div className="flex space-x-1">
                <div className="h-8 w-8 bg-gray-300 animate-pulse rounded"></div>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="h-8 w-8 bg-gray-300 animate-pulse rounded"
                  ></div>
                ))}
                <div className="h-8 w-8 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {page == "trending" ? (
        <div className="w-[90%] col-span-1 lg:col-span-9 grid grid-cols-2 sm:grid-cols-2  gap-10 md:grid-cols-5 lg:grid-cols-5 gap-y-10 mt-4 lg:mt-24  order-2 lg:order-none mx-auto justify-items-center">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animate-pulse w-full">
              <div className="w-full h-48 bg-gray-300 rounded-md"></div>
              <div className="h-4 bg-gray-300 mt-4"></div>
              <div className="h-4 bg-gray-300 mt-2 w-3/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      {page == "banner" ? (
        <div className="animate-pulse flex justify-center items-center bg-gray-300 w-full h-full">
          <div className="bg-gray-400 h-[300px] sm:h-[500px] md:h-[800px] lg:h-[900px] xl:h-[1000px] w-full"></div>
        </div>
      ) : (
        <></>
      )}
      {page === "category" ? (
        <div className="w-[80%] mx-auto mt-10">
          <div className="lg:w-[200px] mx-auto lg:h-[40px] bg-gray-200 animate-pulse shimmer-effect rounded-2xl"></div>
          {/* For Desktop and Tablet */}
          <div className=" text-center text-4xl text-gray-500 mt-3 bg-slate-200"></div>
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-12 gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center overflow-hidden rounded-2xl lg:h-[420px] mt-8 cursor-pointer"
              >
                {/* Shimmer effect for image */}
                <div className="lg:w-[450px] lg:h-[370px] bg-gray-200 animate-pulse shimmer-effect rounded-2xl"></div>

                {/* Shimmer effect for title */}
                <div className="w-3/4 h-6 bg-gray-200 animate-pulse mt-3 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      {page === "header" ? (
        <div className="hidden md:flex px-3 py-3 bg-white relative z-50 w-[80%] mx-auto">
          <div className="container mx-auto flex items-center justify-between">
            {/* Skeleton for Logo */}
            <div className="flex items-center">
              <div className="animate-pulse bg-gray-200 h-10 w-44 rounded"></div>
            </div>

            <nav className="flex flex-grow justify-center space-x-8">
              {/* Skeleton for Products Section */}
              <div className="relative flex items-center">
                <div className="animate-pulse bg-gray-200 h-6 w-24 rounded"></div>
              </div>

              {/* Skeleton for Sustainability Link */}
              <div className="animate-pulse bg-gray-200 h-6 w-24 rounded"></div>

              {/* Skeleton for Follow Us Section */}
              <div className="relative flex items-center">
                <div className="animate-pulse bg-gray-200 h-6 w-24 rounded"></div>
              </div>

              {/* Skeleton for User Profile Link */}
              <div className="animate-pulse bg-gray-200 h-6 w-24 rounded"></div>
            </nav>

            <div className="flex items-center space-x-3">
              {/* Skeleton for Search Bar */}
              <div className="relative w-48">
                <div className="animate-pulse bg-gray-200 h-8 w-full rounded"></div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <div className="animate-pulse bg-gray-200 h-4 w-4 rounded-full"></div>
                </div>
              </div>

              {/* Skeleton for Cart Icon */}
              <div className="animate-pulse bg-gray-200 h-6 w-6 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {page === "waiting" ? (
        <div className="hidden md:flex px-3 py-3 bg-white relative z-50 w-[80%] mx-auto">
          <div className="container mx-auto flex items-center justify-between">
            {/* Skeleton for Logo */}
            <div className="flex items-center">
              <div className="animate-pulse bg-gray-200 h-10 w-44 rounded">
                <h1>Loading........</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
