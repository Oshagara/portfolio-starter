import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// import images
// import Img1 from "../assets/portfolio-img1.png";
// import Img2 from "../assets/portfolio-img2.png";
// import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section p-4" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="">
              <h2 className="h2 font-bold leading-tight text-accent">
                My <br /> Webinars
              </h2>
              <p className="max-w-sm mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                veniam enim ad repudiandae odio recusandae accusantium totam
                dolorem harum eum.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
          >
            <div className="block">
              <iframe
               className="w-[370px] h-[200px] lg:w-[640px] lg:h-[320px] mb-4"
                src="https://www.youtube.com/embed/gGGmnMo6ex0"
                title="THESE 10 HACKS​​ WILL ​​MAKE ​​YOUR ​​STATEMENT OF PURPOSE ​​A​​ BANGER!​"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

              <iframe
                className="w-[370px] h-[200px] lg:w-[640px] lg:h-[320px]"
                src="https://www.youtube.com/embed/gGGmnMo6ex0"
                title="THESE 10 HACKS​​ WILL ​​MAKE ​​YOUR ​​STATEMENT OF PURPOSE ​​A​​ BANGER!​"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;