import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  BarChart,
  Github,
  Linkedin,
  Heart,
  Zap,
  Star
} from 'lucide-react';

const personalInfo = [
  { icon: <User className="w-5 h-5" />, label: "Name", value: "Mahesh Bollineni" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "mahesh.bollineni1623@gmail.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 9014285618" }, // Placeholder phone
  { icon: <GraduationCap className="w-5 h-5" />, label: "Degree", value: "B.Tech CSE" },
  { icon: <Calendar className="w-5 h-5" />, label: "Year", value: "Final Year" },
  { icon: <BarChart className="w-5 h-5" />, label: "CGPA", value: "8.7 / 10.0" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900"
          >
            About <span className="text-accent underline decoration-accent/20">Me</span>
          </motion.h2>
          <div className="h-1 w-20 bg-accent rounded-full mb-4" />
          <p className="text-zinc-500 max-w-2xl">
            Passionate developer building high-quality software solutions with a focus on clean code and user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sub-section 1: Personal Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-10 bg-white border-gray-100 shadow-2xl flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <User />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Personal Info</h3>
            </div>
            <div className="space-y-6">
              {personalInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-zinc-400 group-hover/item:text-accent group-hover/item:bg-accent/5 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{info.label}</p>
                    <p className="text-sm font-bold text-zinc-800">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sub-section 2: Professional Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 bg-white border-gray-100 shadow-2xl flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Zap />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Connect</h3>
            </div>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Find my latest open-source contributions and professional journey on these platforms.
            </p>
            <div className="grid gap-4 mt-auto">
              <a
                href="https://github.com/mahesh-bollineni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-zinc-900 text-white rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4 font-bold text-lg">
                  <Github className="w-6 h-6" /> GitHub
                </div>
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </a>
              <a
                href="https://linkedin.com/in/mahesh-bollineni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-[#0077b5] text-white rounded-2xl hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-4 font-bold text-lg">
                  <Linkedin className="w-6 h-6" /> LinkedIn
                </div>
                <Zap className="w-5 h-5 fill-white" />
              </a>
            </div>
          </motion.div>

          {/* Sub-section 3: Skills & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 bg-white border-gray-100 shadow-2xl flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Heart />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Interests</h3>
            </div>
            <p className="text-zinc-500 mb-8 leading-relaxed">
              Beyond coding, I have a deep interest in exploring new technologies and solving complex puzzles.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Problem Solving", "UI/UX Design", "Building Side Projects", "Learning New Technologies", "Open Source Contribution"].map((interest, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium hover:border-accent hover:text-accent text-zinc-600 transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
