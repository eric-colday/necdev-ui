import Image from "next/image";
import React from "react";

export default function ServicesList() {
  return (
    <section className="py-40 px-6 max-[320px]:px-4">
      <div className="flex max-[920px]:flex-col-reverse  justify-center items-center gap-10 ">
        <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
          <h1 className="mb-4 text-[50px] font-bold">SEO</h1>
          <p className="text-[20px] w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">
            Grâce au
            <strong> SEO</strong>, je vous aide à améliorer la visibilité de
            votre site sur Google. Mes missions sont décomposées en 4 étapes :
            l'audit technique, l'optimisation semantique, la stratégie de
            netlinking, et le suivi des performances.
          </p>
        </div>
        <div className="w-[500px] max-[920px]:w-auto  ">
          <Image
            src="/img/seo-nec.jpg"
            alt="services"
            width="500"
            height="300"
          />
        </div>
      </div>
    </section>
  );
}
