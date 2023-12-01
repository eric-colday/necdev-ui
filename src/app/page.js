import React from "react";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Projets from "@/components/Projets";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <About/>
      <Projets/>
      <Contact/>
    </main>
  );
}
