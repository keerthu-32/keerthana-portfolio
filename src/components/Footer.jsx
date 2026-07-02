import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="brand-dark w-full py-12 px-6 flex flex-col items-center text-white">
      
      {/* Social Icons */}
      <div className="flex gap-6 mb-6 text-blue-300">
        <a
          href="https://github.com/keerthu-32"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/keerthana-s-b7a050258/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:keerthanajothi943@gmail.com" className="hover:text-white transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
