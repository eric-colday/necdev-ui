"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.05,
    },
  },
};

const AboutSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="apropos"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#F4FAFF" }
      }
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
        className="flex justify-center items-center h-full gap-[60px] px-40 py-60 max-[1101px]:px-4 max-[812px]:flex-col  "
      >
        <motion.img
          variants={cardVariants}
          src="/img/ericcoldaynoubissi-Nec.jpg"
          alt="Photo de profil de Nec"
          className="w-[400px] h-[400px] object-cover animate-move "
        />
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-center gap-[10px] "
        >
          <h2 className="text-[50px] font-extrabold text-[#7c8587] max-[812px]:text-center max-[425px]:text-[35px]  ">
            Pourquoi Me Choisir ?
          </h2>
          <p className="text-[#7c8587] max-[812px]:text-center ">
            Avec plusieurs années d'expérience dans le domaine du webmarketing,
            je vous propose des solutions personnalisées et adaptées à vos
            besoins.
          </p>
          <p className="text-[#7c8587] max-[812px]:text-center">
            Mon objectif est de vous aider à atteindre vos objectifs en ligne
            grâce à des stratégies efficaces et mesurables.
          </p>
          <p className="text-[#7c8587] max-[812px]:text-center">
            Expertise confirmée en SEO, SEA, Analytics et développement web ||
            Approche centrée sur les résultats || Suivi personnalisé et
            accompagnement continu.
          </p>
          <Link
            href="/a-propos"
            className="mt-5 max-[812px]:flex justify-center items-center "
          >
            <button className="w-56 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
              Découvrir mon parcours
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
