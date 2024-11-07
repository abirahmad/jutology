"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Toaster from "../util/Toaster";
import { MyContext } from "../Context/MyContext"; // Adjust the path as needed

export default function Page() {
  const router = useRouter();
  const { setToken, setAuthUser, authUser } = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Redirect to home if user is already authenticated
    if (authUser.name) {
      router.push("/");
    }
  }, [authUser, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        email,
        password,
      });


      if (response.status === 200) {
        Toaster("success", "Login Success");

        setToken(response.data.access_token);

        if (typeof window !== 'undefined') {
          localStorage.setItem("token", JSON.stringify(response.data.access_token));
        }

        setAuthUser(response.data.user); // Assuming the user info is in response.data.user
        router.push("/");
      }
    } catch (err) {

      if (err.response) {
        if (err.response.status === 422) {
          const errors = err.response.data;
          const errorMessages = Object.values(errors).flat();
          errorMessages.forEach((message) => Toaster("error", message));
        } else if (err.response.status === 500) {
          Toaster("error", err.response.data.message || "Server error");
        } else {
          Toaster("error", err.response.data.message || "An error occurred");
        }
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            LogIn
          </span>
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <i className="fas fa-envelope mr-2" />
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <i className="fas fa-lock mr-2" />
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-gray-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Dont have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
        <div className="mt-4">
          <p className="text-center text-gray-600">Or log in with:</p>
          <div className="flex justify-center mt-2">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <i className="fab fa-google" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
