'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, Code2, Linkedin, Mail, Phone, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Logo & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0e1a] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <span className="font-outfit font-bold text-xl text-white">
                Sadek<span className="text-sky-400">.</span>Soliman
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Senior Frontend Developer & React Native Specialist with 6+ years of experience delivering scalable web and mobile software solutions.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-sky-400 transition-colors">Skills Matrix</a></li>
              <li><a href="#experience" className="hover:text-sky-400 transition-colors">Experience Timeline</a></li>
              <li><a href="#projects" className="hover:text-sky-400 transition-colors">Featured Projects</a></li>
              <li><a href="#education" className="hover:text-sky-400 transition-colors">Education & Credentials</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact / Hire Me</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Direct Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200">
              Connect Directly
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Sadek Soliman. Crafted with Next.js, React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
