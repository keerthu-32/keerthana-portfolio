import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#030303] pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo */}
        <div className="text-white text-2xl font-outfit font-black tracking-tighter uppercase">
          Keerthu<span className="text-gray-500">.</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-8 text-gray-500">
          <a 
            href="https://github.com/keerthu-32" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors hover:scale-115 duration-300"
          >
            <span className="sr-only">GitHub</span>
            <Github strokeWidth={1.5} size={20} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/keerthana-s-b7a050258/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-white transition-colors hover:scale-115 duration-300"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin strokeWidth={1.5} size={20} />
          </a>
          
          <a 
            href="mailto:keerthanajothi943@gmail.com" 
            className="hover:text-white transition-colors hover:scale-115 duration-300"
          >
            <span className="sr-only">Email</span>
            <Mail strokeWidth={1.5} size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-outfit font-black tracking-widest text-gray-600 uppercase">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
