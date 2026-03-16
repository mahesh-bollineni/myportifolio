import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Certificates from './components/Certificates';

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative isolate">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className="blur-background pointer-events-none" style={{ contain: 'paint' }}>
        <div className="blob top-[10%] left-[5%] animate-blob" />
        <div className="blob top-[60%] right-[10%] animate-blob delay-2000" />
        <div className="blob bottom-[5%] left-[30%] animate-blob delay-4000" />
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

      <footer className="py-12 border-t border-gray-100 px-8 text-center bg-gray-50/30">
        <p className="text-zinc-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Mahesh Bollineni. Built with React, Tailwind and Framer Motion.
        </p>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            whileHover={{ scale: 1.1, backgroundColor: '#cc2222' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-accent text-white rounded-full shadow-lg shadow-accent/40 z-[60] transition-colors"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
