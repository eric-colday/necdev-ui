import React from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjetSection from "@/components/ProjetSection";
import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ServiceSection/>
      <AboutSection/>
      <ProjetSection/>
      <ContactSection/>
    </main>
  );
}
