import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Home = () => {
  return (
    <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative" style={{ WebkitFontSmoothing: 'antialiased' }}>
      
      {/* Hide default cursor on desktop since we have a custom one */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          body, a, button, input, textarea, [role="button"] { cursor: none !important; }
        }
      `}} />

      {/* Global Grain Texture for premium depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03]" 
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }} 
      />

      {/* Custom cursor rendered on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <div className="relative z-10">
        <NavBar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;