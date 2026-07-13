import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import resumePdf from "../assets/keethana_resume.pdf";

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const textReveal = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition }
};

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax and fade effects on scroll
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }} 
        className="w-full max-w-[1400px] mx-auto z-10"
      >
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="overflow-hidden mb-6">
            <motion.div 
              initial="hidden" animate="visible" variants={textReveal}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-outfit font-black text-white uppercase tracking-[0.3em]">
                Available for new opportunities
              </span>
            </motion.div>
          </div>

          {/* Giant Typographical Header */}
          <div className="overflow-hidden">
            <motion.h1 
              initial="hidden" animate="visible" variants={textReveal} transition={{ ...transition, delay: 0.15 }}
              className="text-[12vw] md:text-[8vw] font-outfit font-black leading-[0.85] tracking-tighter text-white uppercase"
            >
              Creative
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1 
              initial="hidden" animate="visible" variants={textReveal} transition={{ ...transition, delay: 0.3 }}
              className="text-[12vw] md:text-[8vw] font-outfit font-black leading-[0.85] tracking-tighter text-gray-500 uppercase flex items-center gap-4 md:gap-8 justify-center"
            >
              <div className="hidden md:block w-32 h-[3px] bg-gray-500" />
              Developer
            </motion.h1>
          </div>

          {/* Divider, Bio paragraph, Actions, and Scroll Button */}
          <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-8 mt-12 border-t border-white/10 pt-12 text-left">
            <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8, duration: 1 }}
                className="text-sm text-gray-400 font-inter font-light leading-relaxed max-w-xs"
              >
                Hi, I'm <span className="text-white font-semibold">Keerthana</span>. A MERN stack architect crafting digital experiences that merge elegant design with robust engineering.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="flex justify-center sm:justify-start"
              >
                <a 
                  href={resumePdf}
                  className="inline-flex items-center gap-2 text-xs font-outfit font-black text-white hover:text-cyan-400 uppercase tracking-widest transition-colors duration-300 group cursor-pointer"
                >
                  View Resume
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              onClick={scrollToProjects}
              className="w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center text-[10px] font-outfit font-black uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer shrink-0"
            >
              Scroll <br/> Down
            </motion.button>
          </div>
          
        </div>
      </motion.div>

      {/* Abstract Animated Glow Orbit */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-white/[0.02] to-transparent border border-white/[0.01] blur-3xl -z-10 animate-pulse" 
        style={{ animationDuration: '8s' }} 
      />
    </section>
  );
};

export default Hero;
