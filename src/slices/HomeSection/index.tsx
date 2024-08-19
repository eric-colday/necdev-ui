"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `HomeSection`.
 */
export type HomeSectionProps = SliceComponentProps<Content.HomeSectionSlice>;

/**
 * Component for "HomeSection" Slices.
 */

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 50,
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

const fadeInAnimationsVariants3 = {
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

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold ">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}


const HomeSection = ({ slice }: HomeSectionProps): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  return (
    <motion.section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={ref}
      id="accueil"
      className="pt-[5rem] pb-[10rem] "
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#0f172a" }
      }
      variants={fadeInAnimationsVariants}
      initial="initial"
      // animate={controls}
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col items-center gap-[50px] ">
        <div className="flex gap-[60px] justify-center items-center px-10 max-[375px]:px-2 pt-[10rem] max-[768px]:flex-col max-[768px]:pt-[3rem] max-[768px]:gap-[40px] ">
          <PrismicNextImage field={slice.primary.image}
            className="rounded-full w-[30%] h-[30%] animate-move max-[768px]:w-[50%] max-[768px]:h-[50%] max-[425px]:w-[70%] max-[425px]:h-[70%] "
          />
          <div className="flex flex-col justify-center max-[768px]:items-center  ">
            <PrismicRichText field={slice.primary.paragraph}
              components={{
                paragraph: ({ children }) => <motion.span
                  variants={fadeInAnimationsVariants2}
                  initial="initial"
                  // animate={controls}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  className="text-[22px] text-[#7c8587] "
                >
                  {children}
                </motion.span>,
              }}
            />
            <PrismicRichText field={slice.primary.heading_1}
              components={{
                heading1: ({ children }) => <motion.h1
                  variants={fadeInAnimationsVariants2}
                  initial="initial"
                  // animate={controls}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  className="text-[40px] text-white max-[469px]:text-[28px] "
                >
                  {children}
                </motion.h1>,
              }}
            />
            <PrismicRichText field={slice.primary.heading_2}
              components={{
                heading2: ({ children }) => <motion.h2
                  variants={fadeInAnimationsVariants2}
                  initial="initial"
                  // animate={controls}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  className="text-[45px] font-bold text-[#468bff] max-[768px]:text-center max-[425px]:text-[40px] "
                >
                  {children}
                </motion.h2>,
              }}
            />
            <PrismicRichText field={slice.primary.description}
              components={{
                paragraph: ({ children }) => <motion.p
                  variants={fadeInAnimationsVariants2}
                  initial="initial"
                  // animate={controls}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  className="text-[#7c8587] max-[768px]:px-4 max-[768px]:text-center"
                >
                  {children}
                </motion.p>,
              }}
            />
            <div className="mt-8 flex max-[477px]:flex-col items-center gap-10 ">
              <div className="flex justify-center items-center gap-2 ">
                <Number n={9} />
                <span>
                  <PrismicRichText field={slice.primary.paragraph_2} />
                </span>
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <Number n={50} />
                <span>
                  <PrismicRichText field={slice.primary.paragraph_3} />
                </span>
              </div>
            </div>
            <div className="flex mt-8 ">
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="cursor-pointer mr-6 p-2 border rounded-full border-[#7c8587] hover:border-[#468bff] hover:text-[#468bff] transition-all duration-300 ease-in-out"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer p-2 border rounded-full border-[#7c8587] hover:border-[#468bff] hover:text-[#468bff] transition-all duration-300 ease-in-out"
              >
                <LinkedInIcon/>
              </Link>
            </div>
            {/* <PrismicNextLink field={slice.primary.button_link}
              className="mt-8 max-[812px]:flex justify-center items-center"
            >
              <button className="w-56 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
                <>{slice.primary.button_text}</>
              </button>
            </PrismicNextLink> */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
