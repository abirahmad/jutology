'use client'
import { React, useEffect } from "react";
import AOS from "aos";

export default function AOS1() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return <div></div>;
}
