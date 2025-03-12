import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Img1 from "../assets/erental.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img2 from "../assets/deepminds.png";
import Img3 from "../assets/Hubbiz.png";
import Img4 from "../assets/img4.png";

const Work = () => {
  return (
    <div id="work" className="bg-white md:text-sm">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-5 text-center"
        >
          <h2 className="text-sm bg-green-200/70 rounded-full w-fit p-2 px-4   font-secondary text-herobg mx-auto text-center">
            Portfolio
          </h2>

          <p className="md:w-1/2 mx-auto lg:text-lg text-sm">
            Key Achievements in the Last 5 Years
          </p>
        </motion.div>
        {/* Service categories */}
        <div className="py-12 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap gap-1 items-center justify-center font-medium text-sm md:gap-8 md:text-sm">
              <Tab>Car rental Services</Tab>
              <Tab>Deepminds</Tab>
              <Tab>Hubbiz ng</Tab>
              <Tab>Movie Search Website</Tab>
            </TabList>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-sm p-6 font-secondary">
                  <h3 className="lg:text-3xl text-xl font-medium text-primary mb-4">
                    Car rental Services
                  </h3>
                  <p className="mb-8 text-sm leading-6 text-justify">
                    This project is to redefine the car rental experience by
                    offering a diverse fleet of vehicles that cater to various
                    preferences and requirements.
                  </p>
                  <h4 className="text-xl mb-4 font-medium text-black">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-sm text-justify space-y-3">
                    <li>
                      Diverse Fleet of Vehicles – A wide selection of vehicles
                      to meet various needs and preferences
                    </li>
                    <li>
                      Vehicle Booking – Easy and efficient booking system with
                      real-time availability
                    </li>
                    <li>
                      User Account Management – User-friendly login and
                      registration system for easy access to bookings
                    </li>
                    <li>
                      Search Filters – Multiple search options (car type, price
                      range, location) for a personalized experience
                    </li>
                    <li>
                      Responsive Design – Mobile-first design ensuring a smooth
                      experience across all devices
                    </li>
                  </ul>
                </div>
                <div className="w-full p-6 md:w-1/2">
                  <a href="https://erental.bizsupport.com.ng/">
                    <img
                      src={Img1}
                      alt=""
                      className="w-full h-auto rounded-sm"
                    />
                  </a>

                  <h4 className="text-xl my-4 font-medium text-black">
                    Technologies Used
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-3">
                    <li>
                      Frontend – React.js for dynamic, fast user interfaces
                    </li>
                    <li>
                      Styling – HTML, CSS, and Bootstrap for responsive, modern
                      design
                    </li>
                    <li>
                      Backend Integration – REST API for data fetching and user
                      interaction
                    </li>
                  </ul>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-sm p-6 font-secondary">
                  <h3 className="lg:text-3xl text-xl font-medium text-primary mb-4">
                    Deepminds
                  </h3>
                  <p className="mb-8 leading-6 text-sm text-justify">
                    Deepminds is your all-in-one mental wellness companion,
                    offering tools to manage stress, improve focus, and build
                    emotional resilience. From guided meditations and mood
                    tracking to personalized self-care routines and daily
                    affirmations, Deepminds empowers you to prioritize your
                    peace of mind and develop healthy habits for a happier, more
                    balanced life.
                  </p>
                  <h4 className="text-xl mb-4 font-medium text-black">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-sm text-justify space-y-3">
                    <li>
                      Carousel – Interactive image or content slider to
                      highlight key features of the app
                    </li>
                    <li>
                      Testimonial Section – User feedback and stories displayed
                      in an attractive, scrollable format
                    </li>
                    <li>
                      Contact Form – Easy-to-use form for user inquiries or
                      feedback
                    </li>
                    <li>
                      Framer Motion Animations – Enhancing user experience with
                      fluid transitions and smooth UI interactions
                    </li>
                  </ul>
                </div>
                <div className="w-full p-6 md:w-1/2">
                  <a href="http://deepminds.bizsupport.com.ng/">
                    <img
                      src={Img2}
                      alt=""
                      className="w-full h-auto rounded-sm"
                    />
                  </a>
                  <h4 className="text-xl my-4 font-medium text-black">
                    Technologies Used
                  </h4>
                  <ul className="list-disc text-sm list-inside space-y-3">
                    <li>HTML/CSS/Js</li>
                    <li>ReactJs</li>
                    <li>TailwindCss</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-sm p-6 font-secondary">
                  <h3 className="lg:text-3xl text-xl font-medium text-primary mb-4">
                    Hubbiz ng
                  </h3>
                  <p className="mb-8 text-sm leading-6 text-justify">
                    Hubbiz ng is a business support platform designed to help
                    entrepreneurs, startups, and SMEs in Nigeria grow their
                    businesses with essential digital tools. The platform
                    provides services such as business registration, financial
                    tools, marketplace integration, and mentorship programs to
                    bridge the gap between business owners and the digital
                    economy.
                  </p>
                  <h4 className="text-xl mb-4 font-medium text-black">
                    Key Features
                  </h4>
                  <ul className="list-disc text-sm list-inside text-justify space-y-3">
                    <li>
                      User Registration & Authentication – Secure signup and
                      login using JWT
                    </li>
                    <li>
                      {" "}
                      Admin Dashboard – Centralized control panel for managing
                      users and platform activities
                    </li>
                    <li>
                      Modals & Popups – Interactive UI elements for alerts,
                      forms, and confirmations
                    </li>
                    <li>
                      API Fetching & Data Display – Dynamic content retrieval
                      and rendering
                    </li>
                    <li>
                      Framer Motion Animations – Enhancing user experience with
                      fluid transitions
                    </li>
                  </ul>
                </div>
                <div className="w-full p-6 md:w-1/2">
                  <a href="https://hubbiz.bizsupport.com.ng/">
                    <img
                      src={Img3}
                      alt=""
                      className="w-full h-auto rounded-sm"
                    />
                  </a>
                  <h4 className="text-xl my-4 font-medium text-black">
                    Technologies Used
                  </h4>
                  <ul className="list-disc text-sm list-inside space-y-3">
                    <li>
                      Frontend: React.js, Redux (if applicable), TailwindCSS for
                      styling
                    </li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: MongoDB</li>
                    <li>
                      Authentication: JWT (JSON Web Tokens) for secure user
                      login
                    </li>
                    <li>
                      Hosting: Deployed on Vercel (frontend) and
                      Render/Heroku/AWS (backend)
                    </li>
                  </ul>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-sm p-6 font-secondary">
                  <h3 className="lg:text-3xl text-xl font-medium text-primary mb-4">
                    Movie Search Website
                  </h3>
                  <p className="mb-8 leading-6 text-sm text-justify">
                    The Movie Search Website is a React-based web application
                    that allows users to search for movies and view their
                    details using the OMDB API. It features a debounced search,
                    a responsive design with Tailwind CSS, and a movie details
                    modal for an enhanced user experience.
                  </p>
                  <h4 className="text-xl mb-4 font-medium text-black">
                    Key Features
                  </h4>
                  <ul className="list-disc text-sm list-inside space-y-3">
                    <li>
                      Live Search with Debounce – Reduces unnecessary API calls
                      for better performance.
                    </li>
                    <li>
                      Movie Details Modal – Click on a movie to view additional
                      information (genre, director, actors, etc.)
                    </li>
                    <li>
                      Fully Responsive UI – Styled with Tailwind CSS for mobile
                      and desktop users.
                    </li>
                    <li>
                      Deployed on Vercel – Fast and accessible from anywhere{" "}
                    </li>
                  </ul>
                </div>
                <div className="w-full p-6 md:w-1/2">
                  <a href="https://movie-search-ic.netlify.app/">
                    <img
                      src={Img4}
                      alt=""
                      className="w-full h-auto rounded-sm"
                    />
                  </a>
                  <h4 className="text-xl my-4 font-medium text-black">
                    Technologies Used
                  </h4>
                  <ul className="list-disc text-sm list-inside space-y-3">
                    <li>HTML/CSS/Js</li>
                    <li>ReactJs</li>
                    <li>TailwindCss</li>
                    <li>OMDB API</li>
                  </ul>
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Work;
