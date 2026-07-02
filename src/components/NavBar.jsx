import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Menu items
  const navItems = [
    { name: "Home", link: "/", type: "route" },
    { name: "Projects", link: "#projects", type: "scroll" },
    { name: "Skills", link: "#skills", type: "scroll" },
    // { name: "Digital Keepsakes", link: "/digitalkeepsakes", type: "route" },
    { name: "Contact", link: "#contact", type: "scroll" },
  ];

  // Smooth scroll function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close mobile menu
  };

  // Handle navigation
  const handleNavigation = (item) => {
    if (item.type === 'scroll' && location.pathname === '/') {
      // If we're on home page and it's a scroll item, scroll to section
      const element = document.querySelector(item.link);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-blue-400/30 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-400 tracking-wide hover:text-blue-300 transition-colors">
          KEERTHU<span className="text-white">Dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            item.type === 'route' ? (
              <Link
                key={index}
                to={item.link}
                onClick={() => handleNavigation(item)}
                className="relative text-white hover:text-blue-400 transition duration-300 group cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={index}
                href={item.link}
                onClick={(e) => {
                  handleScroll(e, item.link);
                  handleNavigation(item);
                }}
                className="relative text-white hover:text-blue-400 transition duration-300 group cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-black/90 px-6 py-4 space-y-4 border-t border-blue-400/30">
          {navItems.map((item, index) => (
            item.type === 'route' ? (
              <Link
                key={index}
                to={item.link}
                onClick={() => handleNavigation(item)}
                className="block text-white hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={index}
                href={item.link}
                onClick={(e) => {
                  handleScroll(e, item.link);
                  handleNavigation(item);
                }}
                className="block text-white hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
