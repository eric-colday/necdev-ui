import React from "react";
import ServicesList from "@/components/Services/ServicesList";
import ServicesHeader from "@/components/Services/ServicesHeader";

export const metadata = {
  title: "",
  description:
    "",
};

function Services() {
 

  return (
    <main>
      <ServicesHeader />
      <ServicesList/>
    </main>
  );
}

export default Services;
