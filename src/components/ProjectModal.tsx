'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/portfolioData';
import { X, CheckCircle2, Layers, Cpu, Code2, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 bg-[#0a0e1a]/95 text-left z-10 my-8 overflow-hidden"
        >
          {/* Top Decorative Gradient */}
          <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.accentColor}`} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-white/30 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6 pt-2">
            
            {/* Optional Screenshot Header */}
            {project.imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-white/10 max-h-56 relative bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Category & Role */}
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold text-white bg-gradient-to-r ${project.accentColor}`}>
                {project.category}
              </span>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
                Role: {project.role}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-4xl font-outfit font-bold text-white">
              {project.title}
            </h3>

            {/* Full Description */}
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {project.fullDescription}
            </p>

            {/* Key Engineering Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-outfit font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Architecture & Highlights</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-outfit font-bold text-white uppercase tracking-wider">
                <Code2 className="w-4 h-4 text-sky-400" />
                <span>Technologies Used</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-sky-500/10 text-sky-300 border border-sky-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-sky-300 bg-sky-500/20 border border-sky-500/40 hover:bg-sky-500/30 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-sky-400" />
                    <span>Visit Live Website / Platform</span>
                  </a>
                )}

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                    <span>Open on Google Play Store</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
