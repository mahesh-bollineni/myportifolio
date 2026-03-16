import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MousePointer2 } from 'lucide-react';

const projects = [
  {
    title: "Buy Loft",
    description: "Full-Stack E-Commerce platform for trading pre-owned goods. Built with React, Spring Boot, and MySQL. Features advanced filtering and JWT security.",
    tags: ["React", "Spring Boot", "MySQL"],
    image: "/assets/buy_loft.png",
    github: "https://github.com/mahesh-bollineni/buyloft.git"
  },
  {
    title: "ShieldText",
    description: "RSA Encryption tool ensuring end-to-end data confidentiality with optimized key generation logic and secure authentication.",
    tags: ["Java", "RSA", "Security"],
    image: "/assets/shield_text.png",
    github: "https://github.com/mahesh-bollineni/SheildText.git",
    live: "https://sheildtext.vercel.app/"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent rounded-full mb-4" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xl"
          >
            A showcase of my recent work in full-stack development and security.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -15 }}
              className="glass-card bg-white group overflow-hidden border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Custom Overlay */}
                <div className="absolute inset-0 bg-accent/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center gap-6 z-20">
                  {project.github && (
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-white text-accent rounded-full shadow-xl hover:bg-zinc-900 hover:text-white transition-colors flex items-center gap-2 font-bold"
                    >
                      <Github className="w-6 h-6" />
                      <span>CODE</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a 
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-zinc-900 text-white rounded-full shadow-xl hover:bg-white hover:text-accent transition-colors flex items-center gap-2 font-bold"
                    >
                      <ExternalLink className="w-6 h-6" />
                      <span>LIVE</span>
                    </motion.a>
                  )}
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg group-hover:scale-0 transition-transform duration-300 z-10">
                  <MousePointer2 className="w-5 h-5 text-accent animate-bounce" />
                </div>
              </div>

              <div className="p-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-bold text-zinc-900 group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
                <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 bg-zinc-50 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400 rounded-full border border-zinc-100 group-hover:bg-accent/5 group-hover:text-accent group-hover:border-accent/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
