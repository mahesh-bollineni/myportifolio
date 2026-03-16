import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-center text-zinc-900"
        >
          Let's Connect
        </motion.h2>
        <div className="h-1 w-20 bg-accent rounded-full mb-16" />

        <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-10 flex flex-col gap-8 bg-white border-gray-100"
          >
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-accent/5 rounded-2xl group-hover:bg-accent/10 transition-colors">
                <Mail className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Email</p>
                <p className="text-lg font-bold text-zinc-800">mahesh.bollineni1623@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-accent/5 rounded-2xl group-hover:bg-accent/10 transition-colors">
                <Phone className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-zinc-400 font-medium">Phone</p>
                <p className="text-lg font-bold text-zinc-800">+91 9014285618</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4 pt-8 border-t border-gray-100">
              <a href="https://github.com/mahesh-bollineni" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 text-zinc-600 rounded-2xl hover:bg-accent hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mahesh-bollineni" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 text-zinc-600 rounded-2xl hover:bg-accent hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            <input type="text" placeholder="Name" className="bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors text-zinc-800 font-medium" />
            <input type="email" placeholder="Email" className="bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors text-zinc-800 font-medium" />
            <textarea placeholder="Message" rows="4" className="bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:outline-none focus:border-accent transition-colors text-zinc-800 font-medium resize-none"></textarea>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
