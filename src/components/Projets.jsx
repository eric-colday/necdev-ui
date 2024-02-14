"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "@/context/ThemeContext";

const Projets = () => {
  const { theme } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <section
      id="projets"
      className="px-20 py-40 border-y-[0.5px] max-[768px]:px-5"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#F4FAFF" }
      }
    >
      <div className="flex flex-col gap-3 pb-14 pl-10 ">
        <h2 className="text-[50px] font-extrabold text-[rgb(124,133,135)] max-[425px]:text-[35px]">
          Portfolio
        </h2>
        <span className="text-[30px] max-[425px]:text-[20px]">
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
                <div className="border p-4 text-center text-xs">Nextjs</div>
                <div className="border p-4 text-center text-xs">
                  Nodejs/Mongodb
                </div>
              </div>
              <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                <Link
                  href="https://github.com/eric-colday/necstore-fullstack"
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
                <div className="border p-4 text-center text-xs">Nextjs</div>
                <div className="border p-4 text-center text-xs">
                  Tailwind CSS
                </div>
              </div>
              <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                <Link
                  href="https://github.com/eric-colday/admin-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587] text-center"
                >
                  Code
                  <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </Link>
                <Link
                  href="https://necadmin-ui.vercel.app/"
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
        <div className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col ">
          <div className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  ">
            <div onClick={handleModal} className="cursor-pointer">
              <img
                src="/img/necapp.png"
                alt="boutique ecommerce necstore"
                className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-77%] "
              />
            </div>
          </div>
          <div className="w-1/2 h-auto max-[768px]:w-full ">
            <div className="flex flex-col justify-center items-center gap-8 h-full">
              <h2 className="text-4xl font-bold text-[#7c8587]">NecApp</h2>
              <p className=" text-center text-[#7c8587] px-10 max-[768px]:px-5 max-[425px]:px-0">
                Application mobile permettant de découvrir, choisir et commander
                les meilleurs menus des restaurants à portée de main !
              </p>
              <div className="flex items-center gap-3 ">
                <div className="w-full border p-4 text-center text-xs">
                  React-Native
                </div>
                <div className="w-full border p-4 text-center text-xs ">
                  Nodejs/Mongodb
                </div>
              </div>
              <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                <Link
                  href="https://github.com/eric-colday/necapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587] text-center"
                >
                  Code
                  <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </Link>
                <div
                  onClick={handleModal}
                  className="text-[#7c8587] hover:text-[#7c8587] text-center cursor-pointer"
                >
                  Live Demo
                  <OpenInNewIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                </div>
              </div>
            </div>
            {modal ? (
              <div className="fixed top-0 max-[768px]:top-[-40px] left-0 w-full h-full max-[768px]:h-[50rem] bg-black bg-opacity-70 z-50 flex justify-center items-center">
                <div className="w-1/2 h-1/2 max-[768px]:h-[35rem] max-[515px]:w-[90%] bg-white p-2 rounded-2xl">
                  <div className="flex justify-end text-3xl pr-5  ">
                    <button onClick={handleModal}>X</button>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl text-center font-bold text-[#7c8587]">
                      Télécharger l'application
                    </h2>
                    <div className="flex justify-center items-center pt-4 max-[768px]:flex-col max-[425px]:mt-20">
                      <div className="flex flex-col justify-center items-center">
                        <img
                          src="/img/appstore.jpg"
                          alt="necapp"
                          className="w-1/2 h-auto border max-[425px]:hidden"
                        />
                        <Link
                          href="https://apple.co/42E0Mrg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/onappstore.svg"
                            alt="necapp"
                            className="w-full h-full max-[425px]:w-96 pt-2"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col justify-center items-center pt-3">
                        <img
                          src="/img/appstore.jpg"
                          alt="necapp"
                          className="w-1/2 h-auto border max-[425px]:hidden"
                        />
                        <Link
                          href="https://apple.co/42E0Mrg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/onappstore.svg"
                            alt="necapp"
                            className="w-full h-full max-[425px]:w-96 pt-2"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;
