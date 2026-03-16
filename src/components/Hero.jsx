import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-40 pb-20 px-8 flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 will-change-transform"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6 border border-accent/20"
          >
            HELLO THERE , I'M
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight text-zinc-900"
          >
            Mahesh <span className="text-accent underline decoration-accent/20">Bollineni</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-500 mb-8 max-w-lg leading-relaxed"
          >
            Pre-final year B.Tech CSE student building impactful, production-grade systems with Java, Spring Boot, and React.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="btn-outline flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume feature coming soon! You can find Mahesh's details in the Contact section.");
              }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center w-full min-h-[500px] will-change-transform"
        >
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Soft decorative circles in background */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute w-[120%] h-[120%] bg-accent/5 rounded-full blur-[80px] -z-10" 
            />
            <div className="absolute w-[80%] h-[80%] border-2 border-accent/5 rounded-full -z-10 animate-pulse" />

            {/* The Avatar */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[500px] h-full flex items-center justify-center"
            >
              <img
                src="/assets/bitmoji.png"
                alt="Mahesh Bitmoji"
                className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl animate-float z-20"
              />
            </motion.div>

            {/* Pedestal Shadow */}
            <div className="absolute bottom-[10%] w-[300px] h-[40px] bg-accent/5 rounded-[100%] blur-xl -z-10"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
