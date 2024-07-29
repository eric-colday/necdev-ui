import React from "react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title:
    "Qui suis-je ? - Eric Colday Noubissi, consultant webmarketing et data",
  description:
    "Découvrez le parcours et les compétences de Eric Colday Noubissi, consultant en webmarketing et data. Expert en SEO, SEA, Analytics et création de sites web avec WordPress et NextJs.",
};

function Quisuisje() {
  return (
    <main>
      <AboutSection />
      <ContactSection />
    </main>
  );
}

export default Quisuisje;
