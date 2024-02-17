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
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex bg-about bg-contain bg-no-repeat lg:w-[640px] lg:h-[640px] h-[300px] mix-blend-lighten bg-top"
            ></motion.div>
          </div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-1 p-4 mt-[-100px]">
              <h2 className="h2 font-bold text-[#cf39c8]">About Me</h2>
              <h3 className="h3 font-medium italic mt-0 text-gray-400 text-sm">
              I’m a Doctoral student and educator living in Lawrence, Kansas.
              </h3>
              <p className="mb-4 text-sm tracking-wide text-justify leading-7 font-light">
                I’m very passionate about providing useful information for young
                minds to achieve their educational dreams. Recently, I organized
                a free webinar for international students who love to study
                abroad, especially in the United States. With over 300
                registered, we were able to provide useful information that'll
                help them achieve their educational dreams without the
                paralyzing thought of funding. I am organizing a free statement
                of purpose workshop in September. You can attend my event with a
                click on the button above.
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
            <div className="flex p-4 gap-x-8 text-xs items-center">
              <button className="btn btn-sm">
                <a href="mailto:abisolaadesanya2015@gmail.com">Contact me </a></button>
              <a href="https://www.linkedin.com/in/abisolaakinsiku/" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;