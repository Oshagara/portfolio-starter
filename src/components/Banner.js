/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// images
// import Image from "../assets/site-bg.jpg";
// import icons
// import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="relative text-white bg-site bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-[#050b16] bg-opacity-70"></div>
      <div className="relative">
        <Header />
        <div
          className="min-h-[55vh] lg:min-h-[78vh] flex items-center"
          id="home"
        >
          <div className="container mx-auto">
            <div className="flex flex-col gap-y-4 p-6 lg:flex-row lg:items-center">
              {/* text */}
              <div className="flex-1 font-secondary lg:text-left">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mb-12 text-lg text-center lg:text-[60px] font-secondary font-semibold leading-[1]"
                >
                  <span className="mr-4 text-green-500 ">I am a</span>
                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      2000,
                      "Cyber Security Analyst",
                      2000,
                    ]}
                    speed={50}
                    className="text-red-400 text-center"
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.div>
                <motion.p
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="mb-8 text-sm leading text-white font-light text-center lg:text-xl mx-auto lg:mx-0"
                >
                 Creating Innovative Web Solutions and
                  ensuring Robust Security Measures.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="w-full border-4 border-t-[#09152b] bg-[#edf2ff] mx-0 px-0 py-2">
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="flex p-2 bg-skill1 w-1/12 bg-contain bg-no-repeat"></div>
              <div className="flex p-2 bg-skill2 w-1/12 bg-contain bg-no-repeat"></div>
              <div className="flex p-2 bg-skill3 w-1/12 bg-contain bg-no-repeat"></div>
              <div className="flex p-2 bg-skill4 w-1/12 bg-contain bg-no-repeat"></div>
              <div className="flex p-2 bg-skill5 mt-2 w-1/12 bg-contain bg-no-repeat"></div>
              <div className="flex p-2 bg-skill6 mt-2 w-1/12 bg-contain bg-no-repeat"></div>
              <div className="flex p-2 bg-skill7 w-1/12 bg-contain bg-no-repeat"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
