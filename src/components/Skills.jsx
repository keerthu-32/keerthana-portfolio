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
  const skillItems = [
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="flex flex-col items-center mt-28 px-6">
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skillItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-2xl shadow-lg backdrop-blur-md border border-blue-400/20 bg-white/5 
                       hover:border-blue-400/50 transition-all duration-500 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center z-10">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
