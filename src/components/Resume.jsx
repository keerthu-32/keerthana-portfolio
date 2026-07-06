import React from "react";
import { motion } from "framer-motion";
import { Download, Eye, GraduationCap, Calendar, Award } from "lucide-react";
import resumePdf from "../assets/keethana_resume.pdf";

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const textReveal = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition }
};

const Resume = () => {

  const education = [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Excel Engineering College (Affiliated to Anna University), Namakkal",
      period: "2022 — 2026",
      description: "Academic focus on web technologies, data architectures, algorithm design, and software engineering. Maintaining a CGPA of 8.6 / 10."
    },
    {
      degree: "Senior Higher Secondary",
      institution: "Government Higher Secondary School, Salem",
      period: "2020 — 2022",
      description: "Completed secondary certifications with academic performance of 80%."
    }
  ];

  const certifications = [
    {
      title: "IIT-M Pravartak Certified Full Stack Development Course With AI Tools",
      issuer: "GUVI Geek Network (An IITM Incubated Company) & HCL",
      date: "May 4, 2026",
      description: "Completed a 3-month comprehensive certification covering advanced full-stack development, database modeling, and AI developer tools, in partnership with Google for Education."
    }
  ];

  return (
    <section id="resume" className="py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-10">
          <div className="overflow-hidden">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textReveal}
              className="text-5xl md:text-7xl font-outfit font-black tracking-tighter text-white uppercase leading-[0.9]"
            >
              Resume<span className="text-gray-500">.</span>
            </motion.h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mt-6 md:mt-0 font-inter font-light leading-relaxed">
            A comprehensive look at my professional journey, academic qualifications, and technical backgrounds.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Column: Education Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-white uppercase tracking-wider">
                Education
              </h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-5 space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030303] border border-purple-400 group-hover:bg-purple-400 transition-colors duration-300" />
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 mb-2">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  
                  <h4 className="text-xl font-outfit font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-xs font-mono text-gray-500 mb-4">{edu.institution}</p>
                  
                  <p className="text-gray-400 font-inter font-light text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Section */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Award size={20} />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-white uppercase tracking-wider">
                Certifications
              </h3>
            </div>

            <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-5 space-y-12">
              {certifications.map((cert, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030303] border border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300" />
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  
                  <h4 className="text-xl font-outfit font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  
                  <p className="text-xs font-mono text-gray-500 mb-4">{cert.issuer}</p>
                  
                  <p className="text-gray-400 font-inter font-light text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Buttons (Download & View) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 border-t border-white/10 pt-16">
          <a
            href={resumePdf}
            download="Keerthana_Resume.pdf"
            className="group w-full sm:w-auto px-8 py-5 rounded-2xl bg-white hover:bg-cyan-400 text-slate-950 font-outfit font-bold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:scale-105 active:scale-95"
          >
            Download Resume (PDF)
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </a>
          
          <a
            href={resumePdf}
            className="group w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-outfit font-bold text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            View Full Resume
            <Eye size={16} className="group-hover:opacity-75 transition-opacity" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Resume;
