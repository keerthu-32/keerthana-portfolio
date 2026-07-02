import React, { useRef } from "react";
import { motion } from "framer-motion";

import expense from "../assets/expense.png";
import notesapp from "../assets/notesapp.png";
import flightbook from "../assets/flightbook.png";

const Projects = () => {
  const ProItems = [
    {
      name: "Notes App",
      description:
        "A modern notes management application where you can Create, organize, and manage your notes with tagging, filtering, and data persistence",
      github: "https://github.com/keerthu-32/notesapp",
      live: "https://notesapp-w7lo.onrender.com/",
      image: notesapp,
    },
    {
      name: "Expense Tracker",
      description:
        "An Modern Expense Tracker application that allows you to track your expenses, set budgets, and visualize your spending habits.",
      github: "https://github.com/keerthu-32/expensetracker",
      live: "https://expensetracker-1a0p.onrender.com/",
      image: expense,
    },
    {
      name: "Flight Booking App",
      description:
        "A Flight Booking application that allows users to search for flights, view flight details, and book flights with a user-friendly interface.",
      github: "https://github.com/keerthu-32/booking-frontend",
      live: "https://booking-frontend-n6pv.onrender.com/",
      image: flightbook,
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center mt-28 px-6">
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProItems.map((item, index) => {
          const cardRef = useRef(null);

          const handleMouseMove = (e) => {
            const card = cardRef.current;
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 8;
            const rotateY = ((x - centerX) / centerX) * -8;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          };

          const handleMouseLeave = () => {
            const card = cardRef.current;
            if (!card) return;
            card.style.transform =
              "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
          };

          return (
            <motion.div
              key={index}
              ref={cardRef}
              className="relative group rounded-2xl shadow-lg overflow-hidden w-72 md:w-80 cursor-pointer transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Glossy Light Reflection */}
                <span
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[200%] 
                  transition-transform duration-1000 ease-in-out"
                />
              </div>

              {/* Project Name */}
              <h3 className="absolute bottom-0 left-0 w-full text-center bg-gradient-to-t from-black/80 to-transparent text-lg font-semibold text-blue-400 py-2">
                {item.name}
              </h3>

              {/* Overlay: description + links */}
              <div
                className="absolute inset-0 flex flex-col p-6 translate-y-full group-hover:translate-y-0 
                transition-transform duration-500 ease-in-out 
                bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {item.name}
                </h3>
                <p className="text-black mb-4 text-sm">{item.description}</p>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 px-3 py-2 rounded-lg transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
