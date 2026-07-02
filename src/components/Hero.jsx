import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import KEERTHANA_PIC from "../assets/KEERTHANA_PIC.jpeg";

const Hero = () => {
  // Smooth scroll function
  const handleScroll = (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="flex justify-center px-6">
      <div className="brand-dark shadow-2xl relative mt-20 md:mt-28 rounded-2xl text-blue-400 w-full max-w-6xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Hi, I’m <span className="text-blue-500">Keerthana</span>,  
            <br /> a MERN Stack Developer
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 font-medium text-lg sm:text-xl text-white/90 max-w-2xl"
          >
            I build seamless, scalable, and innovative web applications 
            that combine modern design with powerful backend solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button 
              onClick={() => handleScroll("#projects")}
              className="bg-blue-500 hover:bg-blue-600 transition-colors px-6 py-3 rounded-xl text-white shadow-xl cursor-pointer"
            >
              View my work
            </button>
            <button 
              onClick={() => handleScroll("#contact")}
              className="border border-blue-400 px-6 py-3 rounded-xl text-blue-400 hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex gap-6 mt-8 text-blue-300"
          >
            <a href="https://github.com/keerthu-32" target="_blank" rel="noreferrer">
              <Github className="w-7 h-7 hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/keerthana-s-b7a050258/" target="_blank" rel="noreferrer">
              <Linkedin className="w-7 h-7 hover:text-white transition-colors" />
            </a>
            <a href="mailto:keerthanajothi943@gmail.com">
              <Mail className="w-7 h-7 hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <motion.div
            className="relative group"
            animate={{ y: [0, -15, 0] }} // floating animation
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/40 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Profile Image */}
            <img
              src={KEERTHANA_PIC}
              alt="Ragavan profile"
              className="relative rounded-2xl shadow-2xl w-60 md:w-80 object-cover border-2 border-blue-400/50 group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
