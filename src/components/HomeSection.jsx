"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { yeseva_One } from "@/fonts/fonts";

const HomeSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="accueil"
      className="pt-[5rem] h-screen -mt-0"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#c5d3d6" }
      }
    >
      <div className="flex flex-col items-center gap-[50px] ">
        <div className="flex gap-[60px] justify-center items-center pt-[10rem] max-[768px]:flex-col max-[768px]:pt-[3rem] ">
          <img
            src="/img/nec.jpeg"
            alt="NecDev"
            className="rounded-full w-[30%] h-[30%] animate-move  "
          />
          <div className="flex flex-col justify-center max-[768px]:items-center  ">
            <span className="text-[22px] text-[#7c8587] ">
              Salut, je suis{" "}
            </span>
            <h2
              className="text-[40px] text-white "
              style={{
                fontFamily: yeseva_One,
              }}
            >
              Eric Colday Noubissi 
            </h2>
            <span className="text-[50px] font-extrabold text-[#7c8587] max-[768px]:text-center " >Développeur <br/> Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
