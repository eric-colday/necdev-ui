"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function Services() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <section
        className="pt-36 "
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a" }
            : { backgroundColor: "#0f172a" }
        }
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-4 text-4xl font-bold">Services</h1>
          <div className="mb-10 w-10 border-2 border-[#7c8587]"></div>
        </div>
      </section>
    </main>
  );
}

export default Services;
