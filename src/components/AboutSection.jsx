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
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center h-full gap-[60px] px-40 py-60 max-[1101px]:px-4 max-[812px]:flex-col  "
      >
        <motion.img
          variants={cardVariants}
          src="/img/Photo de profil de face - eric colday noubissi.jpg"
          alt="Photo de profil de Nec"
          className="w-96 object-cover animate-move "
        />
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-center gap-[10px] "
        >
          <h1 className="text-[50px] font-extrabold text-[#7c8587] max-[812px]:text-center max-[425px]:text-[35px]  ">
            Qui suis je ?
          </h1>
          <p className="text-[#7c8587] max-[812px]:text-center">
            Bonjour ! 👋🏾😃 <br />
            Je suis<strong> Eric Colday NOUBISSI </strong>, Consultant
            Webmarketing et Data en freelance depuis 2016. Fort de mon
            expérience et de mon expertise, je suis déterminé à transformer vos
            ambitions digitales en réussites concrètes.
          </p>
          <h2>Mon Parcours Professionnel</h2>
          <p className="text-[#7c8587] max-[812px]:text-center">
            Depuis 2016, j'ai eu l'opportunité de gérer et d'optimiser près de
            50 projets pour diverses entreprises, allant de la création de sites
            internet avec WordPress à la conception d'applications web
            performantes avec React/Next.js. Chaque projet m'a permis de
            perfectionner mes compétences et de développer des stratégies
            adaptées aux besoins spécifiques de mes clients.
          </p>

          <h2>Mon Expertise</h2>
          <p>
            En tant que consultant webmarketing et data, mon expertise couvre
            plusieurs domaines clés :
          </p>
          <ul>
            <li>
              <strong>SEO (Search Engine Optimization) :</strong> Amélioration
              du classement et de la visibilité des sites web sur les moteurs de
              recherche, augmentant ainsi le trafic organique.
            </li>
            <li>
              <strong>SEA (Search Engine Advertising) :</strong> Création et
              gestion de campagnes publicitaires payantes pour maximiser le
              retour sur investissement.
            </li>
            <li>
              <strong>SMO (Social Media Optimization) :</strong> Optimisation de
              la présence sur les réseaux sociaux pour engager et développer une
              audience fidèle.
            </li>
            <li>
              <strong>Développement Web :</strong> Conception et création de
              sites internet et d'applications web utilisant des technologies
              telles que WordPress et React/Next.js, garantissant des solutions
              sur mesure et performantes.
            </li>
          </ul>

          <h2>Ma Philosophie</h2>
          <p>
            Mon approche est centrée sur les résultats et la satisfaction de mes
            clients. Je crois en une collaboration étroite et transparente, où
            chaque stratégie est élaborée sur mesure pour répondre aux objectifs
            spécifiques de votre entreprise. Mon objectif ultime est de vous
            aider à atteindre et à dépasser vos objectifs en ligne grâce à des
            solutions efficaces et mesurables.
          </p>

          <h2>Quelques Chiffres Clés</h2>
          <ul>
            <li>
              <strong>8 années</strong> d'expérience en webmarketing et data.
            </li>
            <li>
              <strong>50+</strong> projets réussis, couvrant divers secteurs
              d'activité.
            </li>
            <li>
              <strong>15%</strong> de croissance annuelle moyenne du trafic
              organique pour mes clients.
            </li>
            <li>
              <strong>20%</strong> de réduction des coûts par clic (CPC) grâce à
              l'optimisation des campagnes SEA.
            </li>
          </ul>

          <h2>Témoignages</h2>
          <p>Voici ce que disent certains de mes clients :</p>
          <div class="testimonial">
            <blockquote>
              "Eric a su transformer notre présence en ligne. Ses stratégies SEO
              ont doublé notre trafic en seulement six mois."
            </blockquote>
            <cite>- Client X, Directeur Marketing de Société A</cite>
          </div>
          <div class="testimonial">
            <blockquote>
              "Le site web développé par Eric répond parfaitement à nos besoins
              et a considérablement amélioré notre conversion."
            </blockquote>
            <cite>- Client Y, PDG de Société B</cite>
          </div>
          <a href="/realisations" class="cta-button">
            Voir plus de témoignages
          </a>

          <p className="text-[#7c8587] max-[812px]:text-center">
            Mon objectif est de vous aider à atteindre vos objectifs en ligne
            grâce à des stratégies efficaces et mesurables.
          </p>

          <h2>Contactez-moi</h2>
          <p>
            Prêt à discuter de votre projet ? Contactez-moi dès aujourd'hui pour
            découvrir comment je peux vous aider à atteindre vos objectifs en
            ligne.
          </p>
          <a href="/contact" class="cta-button">
            Me contacter
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
