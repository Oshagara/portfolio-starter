/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from "../variants";

// services
const services = [
  {
    name: "Data Tanking Coordinator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio recusandae accusantium totam dolorem harum eum.",
    link: "Learn more",
  },
  {
    name: "Graduate Teaching Assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio recusandae accusantium totam dolorem harum eum.",
    link: "Learn more",
  },
  {
    name: "Project Coordinator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio.",
    link: "Learn more",
  },
  {
    name: "Freelance Writer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam enim ad repudiandae odio recusandae accusantium.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section p-4" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 pl-4 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 font-bold text-accent mb-6">What I Do</h2>
            <h3 className="h3 mb-12 text-lg font-medium max-w-[455px] text-justify leading-6">
            I am also a BBIP/IDH Scholar, a prestigious program that supports and mentors scholars of color in digital humanities.
            </h3>
            <button className="btn btn-sm">
              <a href="https://www.linkedin.com/in/abisolaakinsiku/">See my work</a></button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          >
            {/* services list */}
            <div className="flex-1">
              {
                services.map((service, index) => {
                  // destructure data
                  const {name, description} = service;
                  return (
                    <div className="border-b max-w-[476px]  border-white/20 h-[150px] p-4 mb-[16px] flex" key={index}>
                      <div className="border-l-4 border-double border-[#ff56f6] mt-0 leading-7 pl-2 my-2">
                        <h4 className="pt-0 text-[18px] tracking-wider font-primary font-semibold mb-2">{name}</h4>
                        <p className="font-primary text-gray-600 text-[14px] text-justify leading-5">{description}</p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a href="https://www.linkedin.com/in/abisolaakinsiku/" className="btn w-6 h-6 mb-[4px] flex justify-center items-center"> <BsArrowUpRight/> </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;