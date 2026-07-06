import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt 
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ];

  // Triplicate the list to ensure seamless looping on ultra-wide screens
  const marqueeItems = [...skills, ...skills, ...skills];

  return (
    <section id="expertise" className="py-32 overflow-hidden bg-white/[0.01] border-y border-white/5 relative">
      
      {/* Header Info */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <h2 className="text-xs font-outfit font-black text-gray-500 uppercase tracking-[0.3em]">
          The Arsenal
        </h2>
      </div>

      {/* Infinite Horizontal Loop Marquee Container */}
      <div className="relative flex overflow-x-hidden w-full group cursor-pointer">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-5 mx-8 md:mx-16">
              
              {/* Brand Logo Icon */}
              <span 
                className="text-4xl md:text-5xl transition-all duration-500 transform group-hover:scale-110 active:scale-90"
                style={{ color: item.color }}
              >
                {item.icon}
              </span>
              
              {/* Skill Name */}
              <span className="text-3xl md:text-5xl font-outfit font-black tracking-tighter uppercase text-gray-700 group-hover:text-white transition-colors duration-500">
                {item.name}
              </span>
              
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};

export default Skills;
