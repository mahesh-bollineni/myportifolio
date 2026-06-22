import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Koneru Lakshmaiah University",
    location: "Vijayawada, AP",
    period: "2023 – 2027",
    score: "CGPA: 8.7 / 10.0",
    details: "Focusing on Software Engineering, Data Structures & Algorithms, and Full-Stack Development."
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    location: "Nellore, AP",
    period: "2021 – 2023",
    score: "Total: 911 / 1000",
    details: "Andhra Pradesh State Board of Intermediate Education."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Himalaya EM School",
    location: "Nellore, AP",
    period: "Completed 2021",
    score: "",
    details: "Board of Secondary Education, Andhra Pradesh."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Education = () => {
  return (
    <section id="education" className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent rounded-full" 
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto relative px-4"
        >
          {/* Timeline central line animation */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[23px] top-0 w-[2px] bg-gradient-to-b from-accent via-accent/20 to-transparent"
          />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative pl-12 pb-16 last:pb-0"
            >
              {/* Timeline dot with pulse */}
              <div className="absolute left-[15px] top-2 z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(255,59,59,0.6)]" 
                />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-accent/30"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="glass-card p-8 bg-white border-gray-100 shadow-xl shadow-gray-200/20 hover:border-accent/30 transition-all group"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-accent transition-colors">{edu.degree}</h3>
                    <p className="text-accent font-bold text-lg mt-1">{edu.institution}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm font-bold text-zinc-400 font-mono uppercase tracking-widest">{edu.period}</p>
                    <p className="text-sm text-zinc-500 font-medium mt-1">{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {edu.score && (
                    <div className="inline-flex">
                      <p className="px-3 py-1 bg-accent/5 text-accent text-xs font-bold rounded-lg border border-accent/10">
                        {edu.score}
                      </p>
                    </div>
                  )}
                  <p className="text-zinc-500 leading-relaxed max-w-2xl">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
