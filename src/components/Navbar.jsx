"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ThemeToggle from "./themeToggle/ThemeToggle";

const links = [
  {
    id: 1,
    title: "Accueil",
    url: "#accueil",
  },
  {
    id: 2,
    title: "A propos",
    url: "#apropos",
  },
  {
    id: 3,
    title: "Projets",
    url: "#projets",
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "white" }
      }
      className="fixed top-0 left-0 right-0 z-50 flex justify-around items-center h-[80px] gap-[100px] border-b-[1px] border-[#468bff] max-[375px]:gap-[50px] "
    >
      <Link href="/" className="font-bold text-[20px] text-[#468bff] ">
        NecDev
      </Link>
      <div className="flex items-center gap-10">
        {showLinks ? (
          <CloseIcon
            onClick={handleShowLinks}
            className={
              showLinks
                ? "cursor-pointer z-[100] text-[#468bff] text-[30px] max-[768px]:cursor-pointer max-[768px]:z-[100] max-[768px]:text-[30px] "
                : "hidden"
            }
          />
        ) : (
          <Image
            src="/burger.svg"
            alt="menu"
            width={30}
            height={30}
            className={
              showLinks
                ? " max-[768px]:hidden"
                : "hidden max-[768px]:block max-[768px]:text-[30px] max-[768px]:cursor-pointer max-[768px]:text-[#468bff]  "
            }
            onClick={handleShowLinks}
            style={
              theme === "dark"
                ? { filter: "invert(1)" }
                : { filter: "invert(0)" }
            }
          />
        )}
        <div
          className={
            showLinks
              ? "flex flex-col justify-center items-center gap-[20px] w-full h-[400vw] absolute left-0 pt-[26rem] "
              : "flex justify-center items-center gap-[20px] text-[16px] max-[768px]:hidden  "
          }
          style={
            theme === "dark"
              ? { backgroundColor: "#0f172a" }
              : { backgroundColor: "white" }
          }
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={
                showLinks
                  ? "text-[28px] max-[768px]:text-[28px]"
                  : "styles.hiddenLink"
              }
              onClick={
                showLinks
                  ? () => {
                      setShowLinks(false);
                    }
                  : null
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
