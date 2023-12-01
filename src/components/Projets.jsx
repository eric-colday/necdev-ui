"use client";

import Link from "next/link";
import React, { useContext } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "@/context/ThemeContext";

const Projets = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="projets"
      className="px-20 py-60 border-y max-[768px]:px-5"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#FBFDFF" }
      }
    >
      <div className="flex flex-col gap-3 pb-14 pl-10 ">
        <h2 className="text-[25px] font-extrabold text-[#7c8587] max-[425px]:text-[35px]">
          Portfolio
        </h2>
        <span className="text-[30px] max-[425px]:text-[35px]">
          Chaque projet est une pièce unique de développement
        </span>
      </div>
      <div className="grid grid-cols-1 gap-16 ">
        <div className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col ">
          <div className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  ">
            <Link
              href="https://necstore.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/necstore.vercel.app_.png"
                alt="boutique ecommerce necstore"
                className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-77%] "
              />
            </Link>
          </div>
          <div className="w-1/2 h-auto max-[768px]:w-full ">
            <div className="flex flex-col justify-center items-center gap-8 h-full">
              <h2 className="text-4xl font-bold text-[#7c8587]">NecStore</h2>
              <p className=" text-center text-[#7c8587] px-10 max-[768px]:px-5 max-[425px]:px-0">
                Boutique E-commerce proposant une variété de jeans, vestes,
                chaussures et t-shirts tendance pour compléter votre style avec
                élégance et confort
              </p>
              <div className="flex items-center gap-3 ">
                <div className="border p-4 text-center">Nextjs</div>
                <div className="border p-4 text-center">Vanila CSS</div>
              </div>
              <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                <Link
                  href="https://github.com/eric-colday/store-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587] text-center"
                >
                  Code
                  <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </Link>
                <Link
                  href="https://necstore.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587] text-center"
                >
                  Live Demo
                  <OpenInNewIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col ">
          <div className="w-1/2 h-auto max-[768px]:w-full ">
            <div className="flex flex-col justify-center items-center gap-8 h-full">
              <h2 className="text-4xl font-bold text-[#7c8587]">NecAdmin</h2>
              <p className=" text-center text-[#7c8587] px-10 max-[768px]:px-5 max-[425px]:px-0">
                Tableau de bord permetant de gérer les utilisateurs, produits,
                commandes et blog de la boutique e-commerce NecStore
              </p>
              <div className="flex items-center gap-3 ">
                <div className="border p-4 text-center">Nextjs</div>
                <div className="border p-4 text-center">Tailwind CSS</div>
              </div>
              <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                <Link
                  href="https://github.com/eric-colday/store-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587] text-center"
                >
                  Code
                  <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </Link>
                <Link
                  href="https://necstore.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587] text-center"
                >
                  Live Demo
                  <OpenInNewIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  ">
            <Link
              href="https://necadmin-ui.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/necadmin-ui.vercel.app_.png"
                alt="boutique ecommerce necstore"
                className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-69%] "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;
