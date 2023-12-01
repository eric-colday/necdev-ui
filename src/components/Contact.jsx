"use client";

import React from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex justify-center items-center gap-[70px] px-20 py-60  max-[1024px]:flex-col max-[1024px]:px-10 "
    >
      <div className="">
        <Lottie
          animationData={require("/public/img/animation_lo8heyow.json")}
          loop={true}
          className=""
        />
      </div>
      <div className="flex flex-col justify-center items-center rounded-[25px] w-1/2 h-96 shadow-xl shadow-blue-950 max-[1024px]:w-full  ">
        <div className="flex flex-col gap-[20px] p-[20px] text-[#7c8587] max-[1024px]:text-center ">
          <h2 className="text-[2rem] font-bold ">Contact</h2>
          <ul className="flex flex-col gap-[10px] ">
              <li className="flex gap-[10px]">
                <PhoneAndroidIcon />
                <Link
                  href="tel:+33698342060"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cursor-pointer ">06 98 34 20 60</span>
                </Link>
              </li>
              <li className="flex gap-[10px]">
                <EmailIcon />
                <Link
                  href="mailto:rcnoubissi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cursor-pointer ">
                    rcnoubissi@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
