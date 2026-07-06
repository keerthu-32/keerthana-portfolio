import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import expense from "../assets/expense.png";
import notesapp from "../assets/notesapp.png";
import flightbook from "../assets/flightbook.png";

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const Projects = () => {
  const projects = [
    {
      name: "Notes App",
      role: "Full Stack / MERN",
      description: "Cloud-sync note architecture with real-time tagging and markdown support. Built specifically for developer workflows.",
      link: "https://notesapp-w7lo.onrender.com/",
      github: "https://github.com/keerthu-32/notesapp",
      githubBackend: "https://github.com/keerthu-32/notesapp-backend",
      tags: ["React (TSX)", "NodeJS", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
      image: notesapp,
    },
    {
      name: "Expense Tracker",
      role: "Full Stack / MERN",
      description: "Full-stack financial tracker with secure database synchronization, intelligent expense categorization, and interactive predictive charting.",
      link: "https://expensetracker-1a0p.onrender.com/",
      github: "https://github.com/keerthu-32/expensetracker",
      githubBackend: "https://github.com/keerthu-32/expensetracker-backend",
      tags: ["React (TSX)", "NodeJS", "Express", "MongoDB", "TypeScript", "ChartJS", "CSS"],
      image: expense,
    },
    {
      name: "Flight Booking App",
      role: "Full Stack / Capstone",
      description: "High-performance flight aggregation engine with secure checkout, complex querying, and ticket management systems.",
      link: "https://booking-frontend-n6pv.onrender.com/",
      github: "https://github.com/keerthu-32/booking-frontend",
      githubBackend: "https://github.com/keerthu-32/booking-backend",
      tags: ["React (TSX)", "NodeJS", "Express", "MongoDB", "TypeScript", "Redux", "APIs"],
      image: flightbook,
    },
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-10">
          <div>
            <span className="text-xs font-outfit font-black text-cyan-400 uppercase tracking-[0.3em] block mb-4">
              02 / Projects
            </span>
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter text-white uppercase leading-[0.9]">
              Selected<br/>Work
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-6 md:mt-0 font-inter font-light leading-relaxed">
            A showcase of full-stack engineering, database scalability, and immersive frontend architectures. Each product represents a deep-dive into solving real-world developer problems through modular code, optimized data structures, and refined user flows.
          </p>
        </div>

        {/* Row-by-Row List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transition}
              className="group relative border-b border-white/10 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-10 md:gap-20 cursor-pointer"
            >
              {/* Project Info Left Column */}
              <div className="w-full lg:w-1/3 flex flex-col z-10">
                <span className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
                  {project.role}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6 tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 font-inter font-light text-sm leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 max-w-md">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono font-bold text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider hover:bg-white/10 hover:text-white transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  <a 
                    href={project.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-outfit font-black uppercase tracking-widest hover:opacity-50 transition-opacity text-white"
                  >
                    View Live Project <ArrowUpRight size={16} />
                  </a>
                  
                  <a 
                    href={project.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-outfit font-black uppercase tracking-widest hover:opacity-50 transition-opacity text-gray-500 hover:text-white"
                  >
                    {project.githubBackend ? "Frontend Code" : "GitHub Repo"} <Github size={16} />
                  </a>

                  {project.githubBackend && (
                    <a 
                      href={project.githubBackend} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-outfit font-black uppercase tracking-widest hover:opacity-50 transition-opacity text-gray-500 hover:text-white"
                    >
                      Backend Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Image Right Column - Reveal Animation */}
              <div className="w-full lg:w-2/3 h-[320px] md:h-[500px] overflow-hidden rounded-[1.5rem] border border-white/10 relative">
                {/* Reveal Slider overlay */}
                <div className="absolute inset-0 bg-[#030303] z-10 group-hover:h-0 transition-all duration-700 ease-[0.16,1,0.3,1] origin-top" />
                
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
