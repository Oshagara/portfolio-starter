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
    <section className="bg-site bg-cover bg-no-repeat">
      <Header/>
      <div className="min-h-[55vh] lg:min-h-[78vh] flex items-center"
      id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] mb-4 font-bold leading-[0.8] lg:text-[72px]"
            >
              Abisola<br/><span className="mt-4">Akinsinku,</span>
            </motion.h1>
            <motion.div
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="mb-6 text-[24px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-gray-600">I am a</span>
              <TypeAnimation
                sequence={[
                  "Project Coordinator",
                  2000,
                  "Graduate Research Assistant",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="mb-8 text-lg font-medium max-w-lg lg:text-lg mx-auto lg:mx-0">
              I empower young minds through Valuable information
            </motion.p>
           
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Banner;