"use client";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  // Safely handle local storage and JSON parsing
  const [token, setToken] = useState(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem("token");
      try {
        return JSON.parse(data) || null; // Return parsed data or null if not available
      } catch (e) {
        console.error("Error parsing token from localStorage:", e);
        return null; // Return null if parsing fails
      }
    }
    return null;
  });

  const [authUser, setAuthUser] = useState({});
  const [status, setStatus] = useState(false);
  const [setting, setSetting] = useState({});

  useEffect(() => {
    getSettingsData();
    if (token) {
      fetchAuthUser();
    }
  }, [token]);

  const fetchAuthUser = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuthUser(response.data);
    } catch (err) {
      console.error("Error fetching authenticated user:", err);
    }
  };

  const getSettingsData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/settings`);
      setSetting(response.data);
    } catch (err) {
      console.error("Error fetching settings:", err);
    }
  };

  return (
    <MyContext.Provider
      value={{
        token,
        setToken,
        authUser,
        setAuthUser,
        status,
        setStatus,
        setting,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
