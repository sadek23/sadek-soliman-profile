'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowRight, Sparkles, MapPin, Download, Briefcase, Code, Layers, Smartphone, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const techBadges = [
    { name: 'React.js', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' },
    { name: 'Next.js', color: 'from-slate-700/30 to-slate-900/30 text-white border-white/20' },
    { name: 'React Native', color: 'from-sky-500/20 to-indigo-500/20 text-sky-400 border-sky-500/30' },
    { name: 'TypeScript', color: 'from-blue-600/20 to-blue-800/20 text-blue-400 border-blue-500/30' },
    { name: 'Tailwind CSS', color: 'from-teal-500/20 to-cyan-500/20 text-teal-300 border-teal-500/30' },
    { name: 'Redux / Zustand', color: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30' },
    { name: 'Laravel API Integration', color: 'from-rose-500/20 to-red-500/20 text-rose-300 border-rose-500/30' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient glowing gradient spheres */}
      <div className="bg-glow-orb-1 top-20 left-1/4 animate-pulse-glow" />
      <div className="bg-glow-orb-2 top-40 right-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-sky-500/30 shadow-lg shadow-sky-500/10"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                Available for Senior Roles & Consulting
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-outfit font-extrabold tracking-tight text-white leading-none">
                Sadek <span className="text-gradient">Soliman</span>
              </h1>
              <p className="text-xl sm:text-2xl font-outfit font-medium text-sky-400">
                Senior Frontend Developer & React Native Specialist
              </p>
            </motion.div>

            {/* Tagline / Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {PORTFOLIO_DATA.personalInfo.summary}
            </motion.p>

            {/* Location & Key Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Alexandria, Egypt (Remote Work Specialist)</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span>6+ Years Regional Experience</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 glass-panel border border-white/10 hover:border-sky-500/50 hover:text-sky-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download / View CV</span>
              </button>
            </motion.div>

            {/* Tech Pill List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 space-y-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Stack & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border bg-gradient-to-r ${badge.color} backdrop-blur-md`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Visual Card / Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-30 blur-xl group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              {/* Main Visual Profile Glass Container */}
              <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
                
                {/* Header Badge Inside Card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                      <Code className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-lg text-white">Full Lifecycle Dev</h3>
                      <p className="text-xs text-slate-400 font-mono">Saudi Arabia • Jordan • Egypt</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    6+ YRS
                  </span>
                </div>

                {/* Impact Stat Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-sky-500/30 transition-all duration-300"
                    >
                      <div className="text-2xl sm:text-3xl font-outfit font-extrabold text-gradient-cyan">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-200 mt-1">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {m.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Strengths Checklist */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Engineering Highlights
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Next.js & React App Architecture Specialist</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Cross-Platform React Native App Delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Fintech Payment Gateways & E-Learning Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Agile, Monorepos & High UI/UX Standards</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
