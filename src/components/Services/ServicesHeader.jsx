"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ServicesHeader() {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className="py-40 "
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-4 text-[60px] max-[391px]:text-[45px] font-bold  ">Mes Services</h1>
        <div className="mb-10 w-10 border-2 border-[#7c8587]"></div>
        <div className="text-[20px] text-center w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">
          Mes services webmarkerting sont des prestations SEO, SEA, Analytics et
          créations de sites internet.
        </div>
      </div>
    </section>
  );
}
