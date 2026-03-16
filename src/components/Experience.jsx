import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Aries Information Technology",
    location: "Nellore, AP",
    period: "Jan 2024 – Mar 2024",
    description: [
      "Implemented core modules for the 'Smart Campus' management system using Spring Boot.",
      "Developed secure RESTful APIs for student enrollment and faculty information management.",
      "Optimized database queries in MySQL, resulting in a 15% reduction in API response times."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900"
          >
            Professional Experience
          </motion.h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-accent/20 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(255,59,59,0.5)]" />
              
              <div className="glass-card p-8 bg-white border-gray-100 shadow-xl shadow-gray-200/20 hover:border-accent/30 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">{exp.title}</h3>
                    <p className="text-accent font-bold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{exp.period}</p>
                    <p className="text-sm text-zinc-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-zinc-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
