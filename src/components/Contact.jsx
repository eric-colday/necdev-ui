"use client";

import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeContext } from "@/context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message || !subject) {
      setErr("Veuillez remplir tous les champs");
      return;
    }
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (response.ok) {
      setSuccess("Message envoyé avec succès");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setErr("");
    } else {
      setErr("Erreur lors de l'envoi du message");
    }

    console.log(await response.json());
  };

  return (
    <footer id="contact" className="pt-32">
      <div className="flex flex-col items-center py-10 px-4">
        <h2 className="pb-4 text-[50px] text-center font-extrabold text-[#7c8587] max-[425px]:text-[35px]">
          Contact
        </h2>
        <div className="mb-10 w-10 border-2 border-[#7c8587]"></div>
        <p className="text-center">
          N'hésitez pas à me contacter pour toute question ou proposition de
          collaboration
        </p>
      </div>
      <div className="flex justify-center items-center gap-[70px] px-20 pb-40  max-[1024px]:flex-col max-[1024px]:px-10 ">
        <div>
          <Lottie
            animationData={require("/public/img/animation_lo8heyow.json")}
            loop={true}
          />
        </div>
        <div
          style={
            theme === "dark"
              ? { backgroundColor: "#0f172a" }
              : { backgroundColor: "#c5d3d6" }
          }
          className="flex flex-col justify-center items-center rounded-md w-1/2 p-10 shadow-xl  max-[1024px]:w-full  "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[10px] text-[#7c8587] "
          >
            {success ? (
              <div className="text-green-500">{success}</div>
            ) : (
              <div>
                <div className="w-full flex gap-4 max-[425px]:flex-col">
                  <div>
                    <label htmlFor="">
                      Nom <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded-md border border-[#7c8587] p-3 ${
                        err
                          ? "border-red-500 focus:outline-red"
                          : "border-[#7c8587] focus:outline-blue"
                      }`}
                    />
                    {err && <div className="text-red-500">{err}</div>}
                  </div>
                  <div>
                    <label htmlFor="">
                      Email <span className="text-red-500 ">*</span>{" "}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded-md border border-[#7c8587] p-3 ${
                        err
                          ? "border-red-500 focus:outline-red"
                          : "border-[#7c8587] focus:outline-blue"
                      }`}
                    />
                    {err && <div className="text-red-500">{err}</div>}
                  </div>
                </div>
                <label htmlFor="">
                  Objet <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`w-full rounded-md border border-[#7c8587] p-3 ${
                    err
                      ? "border-red-500 focus:outline-red"
                      : "border-[#7c8587] focus:outline-blue"
                  }`}
                />
                {err && <div className="text-red-500">{err}</div>}
                <label htmlFor="">
                  Message <span className="text-red-500 ">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`rounded-md border border-[#7c8587] p-3 w-full h-40 ${
                    err
                      ? "border-red-500 focus:outline-red"
                      : "border-[#7c8587] focus:outline-blue"
                  }`}
                />
                {err && <div className="text-red-500">{err}</div>}
                <button
                  type="submit"
                  className="cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out mt-3 text-white p-4 w-1/2 max-[1024px]:w-full "
                >
                  Envoyer
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="flex justify-around gap-[20px] p-5 border-t ">
        <div className=" flex gap-[10px] max-[412px]:flex-col max-[412px]:items-center max-[412px]:text-center">
          <div>© Copyright 2024, Eric Colday Noubissi</div>
          <ul className="flex gap-[10px]">
            <li>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
