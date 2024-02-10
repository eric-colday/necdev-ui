"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomeSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="accueil"
      className="py-[5rem] "
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#c5d3d6" }
      }
    >
      <div className="flex flex-col items-center gap-[50px] ">
        <div className="flex gap-[60px] justify-center items-center pt-[10rem] max-[768px]:flex-col max-[768px]:pt-[3rem] max-[768px]:gap-[40px] ">
          <img
            src="/img/nec.png"
            alt="NecDev"
            className="rounded-full w-[30%] h-[30%] animate-move max-[768px]:w-[50%] max-[768px]:h-[50%] max-[425px]:w-[70%] max-[425px]:h-[70%] "
          />
          <div className="flex flex-col justify-center max-[768px]:items-center  ">
            <span className="text-[22px] text-[#7c8587] ">Salut, je suis </span>
            <h2 className="text-[40px] text-white max-[425px]:text-[28px] ">
              Eric Colday Noubissi
            </h2>
            <span className="text-[50px] font-extrabold text-[#7c8587] max-[768px]:text-center max-[425px]:text-[40px] ">
              Développeur <br /> Full Stack
            </span>
            <div className="flex gap-[20px] "> 
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GitHubIcon className="text-[#2f3854] cursor-pointer hover:text-[#7c8587] " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="text-[#2f3854] cursor-pointer hover:text-[#7c8587] " />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px] max-[375px]:flex-col ">
          <div>Tech Stack</div>
          <div className="max-[375px]:hidden ">| </div>
          <div className="hidden max-[375px]:block "> _____ </div>
          <div className="flex gap-[20px]">
            <img
              src="./img/icons.svg"
              alt="logo html et css"
              className="w-[50px] h-[50px] "
            />
            <img
              src="./img/icons2.svg"
              alt="logo html et css"
              className="w-[50px] h-[50px] "
            />
            <img
              src="./img/icons3.svg"
              alt="logo html et css"
              className="w-[50px] h-[50px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
