/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
// import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref] = useInView({
    threshold: 0.6,
  });
  return (
    <section className="bg-site2 bg-cover bg-no-repeat" id="about" ref={ref}>
      <div className="mx-auto bg-[#09152b] bg-opacity-95">
        <div className="lg:p-24 p-12 flex flex-col lg:flex-row lg:items-center lg:gap-x-20 h-full">
          {/* img */}
          <div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex bg-about w-5/6 bg-cover rounded-full border border-l-slate-600 bg-no-repeat lg:w-[100px] lg:h-[250px] h-[200px] mix-blend-lighten bg-top"
            >
            </motion.div>
          </div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3}}
          >
            <div className="flex-1 bg-opacity-80 lg:p-4 mt-4 lg:mt-[-100px]">
             <div className="text-2xl lg:text-4xl font-tertiary text-gradient mb-4">
             <p className="bg-gray-200/10 text-sm rounded-full max-w-fit px-2 my-2 text-green-500">About Me</p>
              <p className="font-secondary font-extralight mt-0 text-red-300 lg:text-lg text-sm">
                Technologist || Web Developer| cybersecurity Analyst|| Lagos Nigeria
              </p>
             </div>
              <p className="mb-4 lg:text-lg lg:leading-8 text-sm text-white tracking-wide text-justify leading-7 font-light">
                I am Israel Oshagara, a web developer and
                cybersecurity analyst with a strong passion for blending creativity and
                security in the realm of technology, across the Globe. I thrive on building dynamic, user-friendly websites
                and applications while ensuring that the solutions I develop are
                safeguarded against modern-day cyber threats.
              </p>
            </div>
            {/* stats
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={13} duration={3} />
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  exprience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={15} duration={3} />
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={13} duration={3} />
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
