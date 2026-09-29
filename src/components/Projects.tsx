'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { ArrowUpRight, Sparkles, Code, Smartphone, Layers, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Fintech',
    'Web Platform',
    'React Native Mobile',
    'E-Learning',
    'Logistics & Marketplace'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-grid-pattern bg-[#080a11]">
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
            <span>Featured Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-outfit font-bold text-white tracking-tight"
          >
            Selected <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg"
          >
            Explore enterprise platforms, mobile applications, and web tools built across Saudi Arabia, Jordan, and Egypt.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-white/5 border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Top Graphic / Image Banner */}
                  <div className={`h-48 relative bg-gradient-to-br ${project.accentColor} overflow-hidden`}>
                    
                    {project.imageUrl ? (
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] z-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] via-transparent to-black/60" />
                      </div>
                    ) : (
                      <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
                    )}

                    {/* Top Badges */}
                    <div className="relative z-10 p-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase tracking-wider shadow-md">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Role & Title Overlay */}
                    <div className="absolute bottom-4 left-5 right-5 z-10">
                      <span className="text-[11px] font-mono text-sky-300 font-semibold uppercase tracking-wider block drop-shadow">
                        {project.role}
                      </span>
                      <h3 className="text-xl font-outfit font-bold text-white drop-shadow-md leading-tight">
                        {project.title}
                      </h3>
                    </div>

                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {project.shortDescription}
                    </p>

                    {/* Highlights bullet snippets */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 2).map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 space-y-4">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons matching mockup */}
                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r from-sky-500/20 via-blue-600/30 to-indigo-500/20 border border-sky-400/40 hover:border-sky-400 hover:bg-sky-500/30 transition-all duration-300 shadow-md group-hover:shadow-sky-500/20"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-mono text-sky-300 bg-white/5 border border-white/10 hover:border-sky-400/40 hover:text-white transition-all duration-300"
                        >
                          <ExternalLink className="w-3 h-3 text-sky-400" />
                          <span>Live Web</span>
                        </a>
                      )}
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-mono text-emerald-300 bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:text-white transition-all duration-300"
                        >
                          <ExternalLink className="w-3 h-3 text-emerald-400" />
                          <span>Google Play</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for full project details */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
