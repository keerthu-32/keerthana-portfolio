import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, BookOpen, Heart } from "lucide-react";
import KEERTHANA_PIC from "../assets/KEERTHANA_PIC.jpeg";

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const textReveal = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition }
};

const About = () => {
  const stats = [
    { icon: <MapPin size={16} className="text-cyan-400" />, label: "Location", value: "Chennai, Tamil Nadu" },
    { icon: <BookOpen size={16} className="text-purple-400" />, label: "Education", value: "B.E. CSE (2022 - 2026)" },
    { icon: <User size={16} className="text-pink-400" />, label: "College", value: "Excel Engineering College" },
    { icon: <Heart size={16} className="text-red-400" />, label: "Interests", value: "UI/UX, Fullstack APIs" }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden bg-white/[0.01] border-b border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-[-15%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-10">
          <div className="overflow-hidden">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textReveal}
            >
              <span className="text-xs font-outfit font-black text-cyan-400 uppercase tracking-[0.3em] block mb-4">
                01 / Who I Am
              </span>
              <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter text-white uppercase leading-[0.9]">
                About Me<span className="text-gray-500">.</span>
              </h2>
            </motion.div>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mt-6 md:mt-0 font-inter font-light leading-relaxed text-left">
            A deep-dive into my background, engineering philosophy, and academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
          >
            {/* Grayscale profile pic with scale transition */}
            <img 
              src={KEERTHANA_PIC} 
              alt="Keerthana profile" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
            />
            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          </motion.div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Detailed description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="space-y-6 text-gray-400 font-inter font-light text-base leading-relaxed max-w-2xl"
            >
              <p>
                I am a passionate <span className="text-white font-semibold">Computer Science & Engineering</span> student based in Chennai, specializing in full-stack web architectures. My engineering approach focuses on creating modular, scalable backend structures integrated with clean, high-fidelity user experiences.
              </p>
              <p>
                Leveraging the MERN stack alongside TypeScript, I design databases, construct RESTful endpoints, and craft interactive interfaces. I enjoy writing clean code, solving algorithm challenges, and exploring modern UI/UX design trends to develop software that is both robust under the hood and gorgeous on the surface.
              </p>
            </motion.div>

            {/* Quick stats table/grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-10 border-t border-white/10 text-left"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-outfit font-black text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </h4>
                    <p className="text-sm font-inter text-white font-medium mt-0.5">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
