import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Database, 
  Globe, 
  Cpu, 
  Boxes, 
  Layers, 
  Wind, 
  Braces,
  GitBranch,
  Container,
  Layout,
  Server,
  Figma,
  Laptop
} from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Java", icon: <Cpu className="w-4 h-4" />, color: "#E76F00" },
      { name: "C", icon: <Terminal className="w-4 h-4" />, color: "#A8B9CC" },
      { name: "Python", icon: <FileCode className="w-4 h-4" />, color: "#3776AB" },
      { name: "JavaScript", icon: <FileCode className="w-4 h-4" />, color: "#F7DF1E" },
      { name: "SQL", icon: <Database className="w-4 h-4" />, color: "#4479A1" },
      { name: "HTML", icon: <Globe className="w-4 h-4" />, color: "#E34F26" },
      { name: "CSS", icon: <Wind className="w-4 h-4" />, color: "#1572B6" }
    ]
  },
  {
    title: "Frameworks & APIs",
    icon: <Boxes className="w-6 h-6" />,
    skills: [
      { name: "Spring Boot", icon: <Server className="w-4 h-4" />, color: "#6DB33F" },
      { name: "React", icon: <Layout className="w-4 h-4" />, color: "#61DAFB" },
      { name: "REST APIs", icon: <Braces className="w-4 h-4" />, color: "#FF6C37" },
      { name: "JWT", icon: <Layers className="w-4 h-4" />, color: "#000000" }
    ]
  },
  {
    title: "Tools & Infrastructure",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: "MySQL", icon: <Database className="w-4 h-4" />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, color: "#336791" },
      { name: "Docker", icon: <Container className="w-4 h-4" />, color: "#2496ED" },
      { name: "Git", icon: <GitBranch className="w-4 h-4" />, color: "#F05032" },
      { name: "Postman", icon: <Terminal className="w-4 h-4" />, color: "#FF6C37" },
      { name: "Linux", icon: <Terminal className="w-4 h-4" />, color: "#FCC624" },
      { name: "Figma", icon: <Figma className="w-4 h-4" />, color: "#F24E1E" },
      { name: "VS Code", icon: <Laptop className="w-4 h-4" />, color: "#007ACC" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900"
          >
            Technical Stack
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
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-8 hover:border-accent group bg-white border-gray-100 flex flex-col shadow-2xl shadow-gray-200/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500"
                >
                  {cat.icon}
                </motion.div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors text-zinc-800">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(255, 59, 59, 0.05)',
                      borderColor: 'rgba(255, 59, 59, 0.2)'
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-zinc-600 transition-all cursor-default group/skill shadow-sm"
                  >
                    <span 
                      className="transition-colors"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
