import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    title: "Algorithms and Data Structures",
    issuer: "Coursera",
    link: "https://coursera.org/share/1ed46949ff4792eab7df85c9061be465",
  },
  {
    title: "Building CI/CD Pipelines",
    issuer: "Coursera",
    link: "https://coursera.org/share/7d8cac0ba102a7638e7e5cc736904e0f",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "Coursera",
    link: "https://coursera.org/share/a7123a7357a09f358c2b02f4bd8e46de",

  },
  {
    title: "Spring Framework Basics",
    issuer: "Coursera",
    link: "https://coursera.org/share/9ac7fcaedd9771ce1b3a450d9f572c69",

  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/ae9e668a557d",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" }
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-32 px-8 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6"
          >
            <ShieldCheck className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-zinc-900"
          >
            Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1 bg-accent rounded-full mb-4"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-10 flex flex-col justify-between group bg-white hover:border-accent border-gray-100 shadow-2xl shadow-gray-200/20 perspective-1000"
            >
              <div>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner"
                >
                  <Award className="w-7 h-7" />
                </motion.div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-accent transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-zinc-500 font-bold tracking-wide uppercase text-[10px]">
                  Verified by <span className="text-zinc-900">{cert.issuer}</span>
                </p>
              </div>

              <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-50">
                <span className="text-xs font-black text-zinc-300 uppercase tracking-[0.3em]">
                  {cert.date}
                </span>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-accent font-black text-sm uppercase tracking-wider"
                >
                  Verify <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
