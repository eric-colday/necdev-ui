import Image from "next/image";
import React from "react";

export default function ServicesList() {
  return (
    <section className="py-40 px-6 max-[320px]:px-4">
      {/* SEO */}
      <div className="flex max-[920px]:flex-col-reverse  justify-center items-center gap-10 ">
        <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
          <h1 className="mb-4 text-[50px] font-bold">SEO</h1>
          <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">
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
      {/* SEA */}
      <div className="flex max-[920px]:flex-col justify-center items-center gap-10 mt-20">
        <div className="w-[500px] max-[920px]:w-auto  ">
          <Image
            src="/img/sea-nec.jpg"
            alt="services"
            width="500"
            height="300"
          />
        </div>
        <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
          <h1 className="mb-4 text-[50px] font-bold">SEA</h1>
          <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">
            Le
            <strong> SEA</strong> est un levier incontournable pour générer du
            trafic qualifié sur votre site. Je vous accompagne dans la mise en
            place de campagnes Google Ads, Facebook/Instagram Ads et linkedIn
            Ads.
          </p>
        </div>
      </div>
      {/* Analytics */}
      <div className="flex max-[920px]:flex-col-reverse  justify-center items-center gap-10 mt-20">
        <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
          <h1 className="mb-4 text-[50px] font-bold">Analytics</h1>
          <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">
            L'
            <strong> Analytics</strong> est un outil indispensable pour mesurer
            les performances de votre site. Je vous aide à configurer Google
            Analytics et Google Tag Manager pour suivre les performances de
            votre site.
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
      {/* Création de site */}
      <div className="flex max-[920px]:flex-col justify-center items-center gap-10 mt-20">
        <div className="w-[500px] max-[920px]:w-auto  ">
          <Image
            src="/img/sea-nec.jpg"
            alt="services"
            width="500"
            height="300"
          />
        </div>
        <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
          <h1 className="mb-4 text-[50px] font-bold">Création de site</h1>
          <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">
            La
            <strong> création de site</strong> est une étape importante pour
            votre visibilité en ligne. Je vous accompagne dans la création de
            votre site vitrine ou e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
}
