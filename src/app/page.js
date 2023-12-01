import React from "react";
import HomeSection from "@/components/HomeSection";
import About from "@/components/About";
import Projets from "@/components/Projets";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <About/>
      <Projets/>
    </main>
  );
}
