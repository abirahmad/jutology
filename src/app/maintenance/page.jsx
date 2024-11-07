import React from "react";

export default function MaintenancePage({ data }) {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center items-center">
      {/* Company Header */}
      <header className="absolute top-0 w-full text-center py-4 md:py-6 bg-white shadow-lg">
        <h1 className="text-xl md:text-3xl font-bold text-blue-600 tracking-wide animate-pulse">
          Akij Plastics- {data}
        </h1>
      </header>

      {/* Maintenance Content */}
      <div className="flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white animate-bounce">
          We are currently performing maintenance!
        </h1>
        <p className="mt-4 text-base md:text-xl text-white opacity-0 animate-fadeIn delay-2s">
          We will be back shortly. Thank you for your patience.
        </p>

        {/* Animated Spinner */}
        <div className="mt-8 animate-spin-slow">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v1m0 10v1m8-5h-1m-10 0H4m15.364-5.364l-.707.707m-9.95 9.95l-.707.707m0-10.607l.707.707m9.95 9.95l.707.707"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
