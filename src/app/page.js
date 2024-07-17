import React from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjetSection from "@/components/ProjetSection";
import Contact from "@/components/Contact";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ServiceSection/>
      <AboutSection/>
      <ProjetSection/>
      <Contact/>
    </main>
  );
}
