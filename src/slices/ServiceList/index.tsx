"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

/**
 * Props for `ServiceList`.
 */
export type ServiceListProps = SliceComponentProps<Content.ServiceListSlice>;

/**
 * Component for "ServiceList" Slices.
 */

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.05,
    },
  },
};

const ServiceList = ({ slice }: ServiceListProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-40 "
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <div className="flex flex-col justify-center items-center">
        <PrismicRichText field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="mb-4 text-[60px] max-[391px]:text-[45px]  ">{children}</h1>
            )
          }
          }
        />
        <div className="mb-10 w-10 border-4 border-[#468bff]"></div>
        <PrismicRichText field={slice.primary.paragraph}
          components={{
            paragraph: ({ children }) => (
              <p className="text-center w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">{children}</p>
            )
          }
          }
        />
      </div>
      <div className="pt-14 px-6 max-[320px]:px-4">
        <div className="flex max-[920px]:flex-col-reverse  justify-center items-center gap-10 ">
          <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
            <PrismicRichText field={slice.primary.heading_2}
              components={{
                heading1: ({ children }) => (
                  <h2 className="mb-4 text-[50px]">{children}</h2>
                )
              }
              }
            />
            <PrismicRichText field={slice.primary.paragraph_2}
              components={{
                paragraph: ({ children }) => (
                  <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">{children}</p>
                )
              }
              }
            />
          </div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="w-[500px] max-[920px]:w-auto  "
          >
            <PrismicNextImage field={slice.primary.image}
              className="w-[500px] max-[920px]:w-auto"
            />
          </motion.div>
        </div>
        <div className="flex max-[920px]:flex-col justify-center items-center gap-10 mt-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="w-[500px] max-[920px]:w-auto  ">
            <PrismicNextImage field={slice.primary.image_2}
              className="w-[500px] max-[920px]:w-auto"
            />
          </motion.div>
          <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
            <PrismicRichText field={slice.primary.heading_3}
              components={{
                heading1: ({ children }) => (
                  <h2 className="mb-4 text-[50px]">{children}</h2>
                )
              }
              }
            />
            <PrismicRichText field={slice.primary.paragraph_3}
              components={{
                paragraph: ({ children }) => (
                  <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">{children}</p>
                )
              }
              }
            />
          </div>
        </div>
        <div className="flex max-[920px]:flex-col-reverse  justify-center items-center gap-10 mt-20">
          <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
            <PrismicRichText field={slice.primary.heading_4}
              components={{
                heading1: ({ children }) => (
                  <h2 className="mb-4 text-[50px]">{children}</h2>
                )
              }
              }
            />
            <PrismicRichText field={slice.primary.paragraph_4}
              components={{
                paragraph: ({ children }) => (
                  <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">{children}</p>
                )
              }
              }
            />
          </div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="w-[500px] max-[920px]:w-auto  ">
            <PrismicNextImage field={slice.primary.image_3}
              className="w-[500px] max-[920px]:w-auto"
            />
          </motion.div>
        </div>
        <div className="flex max-[920px]:flex-col justify-center items-center gap-10 mt-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            variants={cardVariants}
            className="w-[500px] max-[920px]:w-auto  ">
            <PrismicNextImage field={slice.primary.image_4}
              className="w-[500px] max-[920px]:w-auto"
            />
          </motion.div>
          <div className="w-[500px] max-[920px]:w-auto max-[920px]:text-center">
            <PrismicRichText field={slice.primary.heading_5}
              components={{
                heading1: ({ children }) => (
                  <h2 className="mb-4 text-[50px]">{children}</h2>
                )
              }
              }
            />
            <PrismicRichText field={slice.primary.paragraph_5}
              components={{
                paragraph: ({ children }) => (
                  <p className=" w-[500px] max-[539px]:w-auto max-[539px]:p-4 ">{children}</p>
                )
              }
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
