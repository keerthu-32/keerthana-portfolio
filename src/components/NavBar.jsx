import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const textReveal = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Expertise", "Resume", "Contact"];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full top-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <div className="overflow-hidden cursor-pointer" onClick={() => scrollTo('home')}>
            <motion.span 
              initial="hidden" animate="visible" variants={textReveal}
              className="text-xl font-outfit font-black tracking-widest text-white uppercase block"
            >
              Keerthu<span className="text-gray-500">.</span>
            </motion.span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item, i) => (
              <div key={i} className="overflow-hidden">
                <motion.button
                  initial="hidden" 
                  animate="visible" 
                  variants={textReveal} 
                  transition={{ ...transition, delay: i * 0.1 }}
                  onClick={() => scrollTo(item)}
                  className="text-xs font-outfit font-extrabold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500" />
                </motion.button>
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white hover:opacity-75 transition-opacity cursor-pointer" onClick={() => setIsOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Full-screen Minimalist Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#030303] z-[200] flex flex-col justify-center px-12"
          >
            <button className="absolute top-8 right-6 text-white hover:opacity-75 transition-opacity cursor-pointer" onClick={() => setIsOpen(false)}>
              <X size={32} strokeWidth={1} />
            </button>
            
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "100%" }} 
                    animate={{ y: 0 }} 
                    exit={{ y: "100%" }} 
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(item)}
                    className="text-5xl font-outfit font-light tracking-tighter text-white uppercase text-left cursor-pointer"
                  >
                    {item}
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
