import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KEERTHANA_PIC from "../assets/KEERTHANA_PIC.jpeg";
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles, ArrowUpRight } from "lucide-react";
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

  const scrollToWork = () => {
    const el = document.getElementById('work');
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Typographic & CTA Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
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
                className="text-[12vw] lg:text-[7vw] font-outfit font-black leading-[0.85] tracking-tighter text-white uppercase"
              >
                Creative
              </motion.h1>
            </div>
            
            <div className="overflow-hidden mb-8 md:mb-12">
              <motion.h1 
                initial="hidden" animate="visible" variants={textReveal} transition={{ ...transition, delay: 0.3 }}
                className="text-[12vw] lg:text-[7vw] font-outfit font-black leading-[0.85] tracking-tighter text-gray-500 uppercase flex items-center gap-4 md:gap-8"
              >
                <div className="hidden lg:block w-24 h-[3px] bg-gray-500" />
                Developer
              </motion.h1>
            </div>

            {/* Divider, Bio paragraph, Actions, and Scroll Button */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10 mt-6">
              <div className="flex flex-col gap-4 items-center sm:items-start">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-sm text-gray-400 font-inter font-light leading-relaxed max-w-xs text-center sm:text-left"
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
                onClick={scrollToWork}
                className="w-28 h-28 rounded-full border border-white/20 flex flex-col items-center justify-center text-[10px] font-outfit font-black uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer shrink-0"
              >
                Scroll <br/> Down
              </motion.button>
            </div>
          </div>

          {/* Right Immersive Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
          >
            {/* Profile Image with subtle scale hover */}
            <img
              src={KEERTHANA_PIC}
              alt="Keerthana profile"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
            />
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60" />
            
            {/* Mini Float Badge */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-outfit font-bold text-xs">MERN Architect</h4>
                    <p className="text-gray-400 text-[10px] font-inter">Based in Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
