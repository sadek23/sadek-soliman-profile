'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Layout, Smartphone, Cpu, Users, Award, Shield, Zap, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Layout,
      title: "Scalable Web Platforms",
      description: "Building production Next.js & React platforms with server-side rendering, clean monorepo architecture, and state optimization.",
      color: "from-blue-500/20 to-sky-500/20 text-sky-400 border-sky-500/30"
    },
    {
      icon: Smartphone,
      title: "React Native Mobile Solutions",
      description: "Delivering cross-platform iOS & Android mobile applications featuring payment gateways, social auth, and fluid native animations.",
      color: "from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30"
    },
    {
      icon: Cpu,
      title: "Seamless API Integration",
      description: "Connecting frontend engines with Laravel PHP, .NET, and Express REST APIs using @tanstack/react-query & Axios for data consistency.",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
    },
    {
      icon: Users,
      title: "Agile & UI/UX Excellence",
      description: "Translating Figma & Adobe XD designs into responsive, pixel-perfect interfaces while maintaining high delivery speed in Agile Scrum environments.",
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#080a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-outfit font-bold text-white tracking-tight"
          >
            Engineering High-Performance <span className="text-gradient">Digital Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            With over 6 years of expertise across Middle Eastern tech hubs (Saudi Arabia, Jordan, and Egypt), I bridge complex technical requirements with sleek, intuitive user experiences.
          </motion.p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${pillar.color} border flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-outfit font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-3xl glass-panel p-8 sm:p-10 border border-sky-500/20 relative overflow-hidden bg-gradient-to-r from-sky-950/30 via-slate-900/50 to-indigo-950/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400">Regional Impact</span>
              <h4 className="text-2xl font-outfit font-bold text-white">Cross-Border Delivery</h4>
              <p className="text-sm text-slate-300">
                Delivered enterprise products for Saudi government projects (TSG Qiyas), student fintech platforms (JeelPay KSA), and university e-learning engines (Eduarabia Jordan).
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Quality Commitment</span>
              <h4 className="text-2xl font-outfit font-bold text-white">Clean Architecture</h4>
              <p className="text-sm text-slate-300">
                Adhering strictly to modular component standards, strict TypeScript typing, Zustand/Redux state separation, and optimized network re-validation.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-purple-400">Collaborative Spirit</span>
              <h4 className="text-2xl font-outfit font-bold text-white">Agile & Remote Native</h4>
              <p className="text-sm text-slate-300">
                Adept in Jira, Notion, Trello, Git flow, code reviews, and remote async communication across cross-functional product teams.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
