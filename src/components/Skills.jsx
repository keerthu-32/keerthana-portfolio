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
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiTypescript } from "react-icons/si";
import { Brain, Users, MessageSquare, Zap, GitBranch, Compass, Sparkles } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Brain size={36} />, color: "#EC4899" },
    { name: "Team Collaboration", icon: <Users size={36} />, color: "#3B82F6" },
    { name: "Communication", icon: <MessageSquare size={36} />, color: "#10B981" },
    { name: "Agile Methods", icon: <Zap size={36} />, color: "#F59E0B" },
    { name: "System Design", icon: <GitBranch size={36} />, color: "#8B5CF6" },
    { name: "Critical Thinking", icon: <Compass size={36} />, color: "#EF4444" },
    { name: "Adaptability", icon: <Sparkles size={36} />, color: "#06B6D4" },
  ];

  // Triplicate the lists to ensure seamless looping on ultra-wide screens
  const marqueeItems = [...skills, ...skills, ...skills];
  const softMarqueeItems = [...softSkills, ...softSkills, ...softSkills];

  return (
    <section id="expertise" className="py-32 overflow-hidden bg-white/[0.01] border-y border-white/5 relative flex flex-col gap-12">
      
      {/* Header Info */}
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-10">
          <div>
            <span className="text-xs font-outfit font-black text-cyan-400 uppercase tracking-[0.3em] block mb-4">
              03 / Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter text-white uppercase leading-[0.9]">
              Skills &<br/>Core Abilities
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-6 md:mt-0 font-inter font-light leading-relaxed text-left">
            A specialized stack covering modern MERN architecture, robust TypeScript configurations, responsive design principles, and collaborative soft skills.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {/* Technical Skills Marquee (Left to Right) */}
        <div className="relative flex overflow-x-hidden w-full group cursor-pointer">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
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

        {/* Soft Skills Marquee (Right to Left) */}
        <div className="relative flex overflow-x-hidden w-full group cursor-pointer">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {softMarqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-5 mx-8 md:mx-16">
                
                {/* Soft Skill Icon */}
                <span 
                  className="transition-all duration-500 transform group-hover:scale-110 active:scale-90"
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
      </div>
      
    </section>
  );
};

export default Skills;
