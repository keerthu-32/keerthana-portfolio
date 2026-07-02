import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;