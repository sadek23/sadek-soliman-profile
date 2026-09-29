'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, ShieldCheck, Award, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function EducationLanguages() {
  const certIcons: Record<string, any> = {
    GraduationCap,
    ShieldCheck,
    Award
  };

  return (
    <section id="education" className="py-24 relative bg-[#080a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Academic & Professional Credentials</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-outfit font-bold text-white tracking-tight"
              >
                Education & <span className="text-gradient">Certifications</span>
              </motion.h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => {
                const IconComponent = certIcons[edu.icon] || GraduationCap;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-outfit font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-sky-300">
                        {edu.institution}
                      </p>
                      <span className="inline-block text-xs font-mono text-slate-400 pt-1">
                        {edu.year}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Languages & Global Reach */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono uppercase tracking-widest"
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Multilingual & Remote Work</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-outfit font-bold text-white tracking-tight"
              >
                Languages <span className="text-gradient">& Reach</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6"
            >
              {PORTFOLIO_DATA.languages.map((lang, idx) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-outfit font-bold text-base text-white">
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono font-semibold text-sky-400 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
                      {lang.level}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Native Arabic for MENA & GCC client communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Very good professional English for remote international engineering teams</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
