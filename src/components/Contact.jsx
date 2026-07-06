import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] };

const textReveal = {
  hidden: { y: "120%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition }
};

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    subject: "",
    message: "" 
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const { serviceID, templateID, publicKey } = emailConfig;
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Keerthana',
        user_email: formData.email,
      };
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left column titles */}
        <div>
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textReveal}
              className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-white uppercase leading-[0.85]"
            >
              Let's
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textReveal} transition={{ ...transition, delay: 0.1 }}
              className="text-6xl md:text-8xl font-outfit font-black tracking-tighter text-gray-500 uppercase leading-[0.85]"
            >
              Talk.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} viewport={{ once: true }}
            className="flex flex-col gap-8 mt-20"
          >
            <div>
              <p className="text-xs font-outfit font-black text-gray-600 uppercase tracking-widest mb-2">Email</p>
              <a href="mailto:keerthanajothi943@gmail.com" className="text-lg md:text-xl font-inter font-light text-white hover:opacity-70 transition-opacity">
                keerthanajothi943@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-outfit font-black text-gray-600 uppercase tracking-widest mb-2">Location</p>
              <p className="text-lg md:text-xl font-inter font-light text-white">Chennai, Tamil Nadu, India</p>
            </div>
          </motion.div>
        </div>

        {/* Right column form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={transition} viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 pt-4 md:pt-0">
            
            {/* Name */}
            <div className="relative group">
              <input
                type="text" 
                name="name"
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white font-inter font-light text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Name" 
                id="name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white transition-all duration-300"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                type="email" 
                name="email"
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white font-inter font-light text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Email" 
                id="email"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white transition-all duration-300"
              >
                Email Address
              </label>
            </div>

            {/* Subject */}
            <div className="relative group">
              <input
                type="text" 
                name="subject"
                required 
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white font-inter font-light text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                placeholder="Subject" 
                id="subject"
              />
              <label 
                htmlFor="subject" 
                className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white transition-all duration-300"
              >
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative group mt-4">
              <textarea
                name="message"
                required 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white font-inter font-light text-lg focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                placeholder="Message" 
                id="message"
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white transition-all duration-300"
              >
                Project Details
              </label>
            </div>

            {/* Send Button */}
            <button
              type="submit" 
              disabled={status === "sending"}
              className="group flex items-center justify-between w-full py-6 mt-4 border-b border-gray-700 hover:border-white transition-colors text-left cursor-pointer"
            >
              <span className="text-xs font-outfit font-black uppercase tracking-[0.2em] text-white">
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Send Failed!" : "Send Message"}
              </span>
              <ArrowUpRight size={20} className="text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </button>
            
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;