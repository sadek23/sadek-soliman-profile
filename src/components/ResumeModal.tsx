'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { X, Download, Printer, MapPin, Phone, Mail, Linkedin, CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Resume Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 shadow-2xl bg-[#0d121f] text-slate-100 z-10 my-8 overflow-hidden"
        >
          {/* Modal Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080a11]">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-sky-400" />
              <span className="font-outfit font-bold text-sm text-white">
                Sadek Soliman - Curriculum Vitae
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel text-xs font-semibold text-slate-300 hover:text-white hover:border-sky-500/50"
              >
                <Printer className="w-3.5 h-3.5 text-sky-400" />
                <span>Print CV</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg glass-panel text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto text-left">
            
            {/* CV Header */}
            <div className="border-b border-white/10 pb-6 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-outfit font-extrabold text-white">
                SADEK SOLIMAN
              </h1>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  {PORTFOLIO_DATA.personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  {PORTFOLIO_DATA.personalInfo.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-sky-400" />
                  {PORTFOLIO_DATA.personalInfo.email}
                </span>
                <a
                  href={PORTFOLIO_DATA.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sky-400 hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PORTFOLIO_DATA.personalInfo.summary}
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Core Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PORTFOLIO_DATA.skillCategories.map((cat) => (
                  <div key={cat.categoryName} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="font-outfit font-bold text-white block">
                      {cat.categoryName}
                    </span>
                    <p className="text-slate-300 leading-normal">
                      {cat.skills.map(s => s.name).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {PORTFOLIO_DATA.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2 border-b border-white/5 pb-4 last:border-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-outfit font-bold text-base text-white">
                        {exp.role} - <span className="text-sky-300">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-sky-400 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Selected Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-bold text-white">{proj.title}:</span>{' '}
                    <span className="text-slate-300">{proj.shortDescription}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                  Education & Certifications
                </h2>
                <ul className="space-y-1 text-xs text-slate-300">
                  {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <li key={idx}>
                      • <strong className="text-white">{edu.degree}</strong> - {edu.institution} ({edu.year})
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                  Languages
                </h2>
                <p className="text-xs text-slate-300">
                  {PORTFOLIO_DATA.languages.map(l => `${l.name}: ${l.level}`).join('  |  ')}
                </p>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="px-6 py-4 border-t border-white/10 bg-[#080a11] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close CV Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
