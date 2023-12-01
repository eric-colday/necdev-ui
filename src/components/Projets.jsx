import Link from "next/link";
import React from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/img/necstore.vercel.app_.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "/img/necstore.vercel.app_.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Projets = () => {
  return (
    <section id="projets">
      <div className="grid grid-cols-1 px-20 max-[768px]:px-5">
        <div className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col ">
          <div className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  ">
            <img
              src="/img/necstore.vercel.app_.png"
              alt="boutique ecommerce necstore"
              className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-77%] "
            />
          </div>
          <div className="w-1/2 h-auto max-[768px]:w-full ">
            <div className="flex flex-col justify-center items-center gap-5 h-full">
              <h2 className="text-4xl font-bold text-[#7c8587]">NecStore</h2>
              <p className=" text-center text-[#7c8587] px-10 max-[768px]:px-5 max-[425px]:px-0">
              Boutique E-commerce proposant une variété de jeans, vestes, chaussures 
              et t-shirts tendance pour compléter votre style avec élégance et confort
              </p>
              <p className=" font-semibold text-[#7c8587]">
                Next.js, React, TailwindCSS, Vercel
              </p>
              <p className="text-xl font-semibold text-[#7c8587]">
                <Link
                  href="https://necstore.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7c8587] hover:text-[#7c8587]"
                >
                  necstore.vercel.app
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;
