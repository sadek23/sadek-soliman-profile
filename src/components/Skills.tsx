'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Code2, Layers, Cpu, Database, CheckCircle, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map(c => c.categoryName)];

  const categoryIcons: Record<string, any> = {
    'Front-End & Mobile': Code2,
    'UI Frameworks & Styling': Layers,
    'Backend & APIs Integration': Cpu,
    'Databases & Tools': Database,
  };

  const filteredCategories = activeCategory === 'All'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(c => c.categoryName === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern bg-[#080a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-outfit font-bold text-white tracking-tight"
          >
            Core Tech <span className="text-gradient">Skillset</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            A battle-tested technology stack refined over 6+ years of building web applications, native mobile apps, and enterprise systems.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/5 border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Skill Cards */}
        <div className="space-y-10">
          {filteredCategories.map((cat, idx) => {
            const IconComp = categoryIcons[cat.categoryName] || Code2;
            return (
              <motion.div
                key={cat.categoryName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white">
                      {cat.categoryName}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 rounded-2xl border transition-all duration-300 ${
                        skill.isPrimary
                          ? 'bg-gradient-to-r from-sky-950/40 via-blue-950/20 to-slate-900/40 border-sky-500/40 shadow-lg shadow-sky-500/10'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle
                            className={`w-4 h-4 ${
                              skill.isPrimary ? 'text-sky-400' : 'text-slate-400'
                            }`}
                          />
                          <span className="font-outfit font-semibold text-sm text-white">
                            {skill.name}
                          </span>
                        </div>
                        {skill.isPrimary && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 uppercase">
                            Primary
                          </span>
                        )}
                      </div>

                      {skill.level && (
                        <div className="space-y-1">
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className={`h-full rounded-full ${
                                skill.isPrimary
                                  ? 'bg-gradient-to-r from-sky-400 to-blue-500'
                                  : 'bg-slate-500'
                              }`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
