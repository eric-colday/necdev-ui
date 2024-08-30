"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const fadeInAnimationsVariants2 = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-b border-[#7c8587]"
    >
      <motion.div
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a" }
            : { backgroundColor: "#0f172a" }
        }
        className="flex justify-center items-center h-full gap-[60px] px-40 py-60  max-[1101px]:px-4 max-[812px]:flex-col  "
      >
        <PrismicNextImage field={slice.primary.image}
          className="w-96 object-cover animate-move "
        />
        <motion.div
          variants={fadeInAnimationsVariants2}
          className="flex flex-col justify-center gap-[10px] "
        >
          <PrismicRichText field={slice.primary.heading}
            components={{
              heading1: ({ children }) => <h1 className="text-[50px] font-extrabold max-[812px]:text-center max-[425px]:text-[35px]  ">{children}</h1>,
            }}
          />
          <PrismicRichText field={slice.primary.paragraph}
            components={{
              paragraph: ({ children }) => <p className="text-[#7c8587] max-[812px]:text-center">{children}</p>,
            }}
          />
          <PrismicRichText field={slice.primary.heading_2}
            components={{
              heading2: ({ children }) => <h3 className="text-[20px] font-extrabold max-[812px]:text-center">{children}</h3>,
            }}
          />
          <PrismicRichText field={slice.primary.paragraph_2}
            components={{
              paragraph: ({ children }) => <p className="max-[812px]:text-center">{children}</p>,
            }}
          />
        </motion.div>
      </motion.div>
      <div>
        <div className="text-center py-40 px-20 max-[830px]:px-4">
          <div className="flex flex-col items-center">
            <PrismicRichText field={slice.primary.heading_3}
              components={{
                heading2: ({ children }) => <h2 className="text-[50px] font-extrabold text-[#7c8587] max-[425px]:text-[35px]">{children}</h2>
              }}
            />
            <div className="mb-10 w-10 border-4 border-[#468bff]"></div>
          </div>
          <PrismicRichText field={slice.primary.paragraph_3}
            components={{
              paragraph: ({ children }) => <p className="text-[#7c8587] max-[812px]:text-center">{children}</p>,
            }}
          />
          <div className="my-24  grid grid-cols-4 max-[966px]:grid-cols-2 max-[566px]:grid-cols-1  gap-4 ">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold"
              >
                9
              </motion.div>
              <div className="max-[566px]:px-10">
                <>{slice.primary.button_text}</>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                + 50
              </motion.div>
              <div className="max-[566px]:px-10">
                <>{slice.primary.button_text_2}</>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                15 %
              </motion.div>
              <div className="max-[566px]:px-10">
                <>{slice.primary.button_text_3}</>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                20 %
              </motion.div>
              <div className="max-[566px]:px-10">
                <>{slice.primary.button_text_4}</>
              </div>
            </motion.div>
          </div>
          <Link
            href="/contact"
            className="mt-8 max-[812px]:flex justify-center items-center "
          >
            <button className="w-56 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
              Auditer mon site
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
