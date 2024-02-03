import React from "react";

const About = () => {
  return (
    <section id="apropos">
      <div className="flex justify-center items-center h-full gap-[60px] px-40 py-60 max-[1101px]:px-4 max-[812px]:flex-col  ">
        <img
          src="/img/about.svg"
          alt="À propos de moi"
          className="w-[400px] h-[400px] object-cover animate-move "
        />
        <div className="flex flex-col justify-center gap-[20px] ">
          <h2 className="text-[40px] font-extrabold text-[#7c8587] max-[425px]:text-[35px]  ">
            À propos de moi
          </h2>
          <p className="text-[#7c8587] ">
            Je suis un développeur full stack basé à Strasbourg, France. J'ai une
            passion pour la création des applications Web et mobile qui
            améliorent l'expérience utilisateur.
          </p>
          <p className="text-[#7c8587] ">
            J'ai commencé à coder en 2019 et j'ai depuis travaillé sur une
            variété de projets et de technologies, allant des sites Web
            statiques aux applications Web complètes.
          </p>
          <p className="text-[#7c8587] ">
            Lorsque je ne code pas, vous pouvez me trouver en train de faire de la musique, de regarder des films ou de faire du sport.
          </p>
          <p className="text-[#7c8587] ">
            Voici quelques technologies avec lesquelles j'ai travaillé
            récemment:
          </p>
          <div className="flex gap-[20px]">
            <img
              src="./img/icons.svg"
              alt="logo html et css"
              className="w-[50px] h-[50px] "
            />
            <img
              src="./img/icons2.svg"
              alt="logo html et css"
              className="w-[50px] h-[50px] "
            />
            <img
              src="./img/icons3.svg"
              alt="logo html et css"
              className="w-[50px] h-[50px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
