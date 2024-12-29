import React from "react";
import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-20">
      <h1 className="mb-20 text-center text-4xl text-white">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImage} alt="about" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}  
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-neutral-300">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
