'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  User, 
  Briefcase, 
  Code2, 
  GraduationCap, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Linkedin, 
  Github, 
  MessageSquare,
  Send
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface SidebarNavProps {
  onOpenResume: () => void;
}

export default function SidebarNav({ onOpenResume }: SidebarNavProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'WORK', icon: Folder, href: '/work' },
    { label: 'ABOUT', icon: User, href: '/about' },
    { label: 'SKILLS', icon: Code2, href: '/skills' },
    { label: 'EXPERIENCE', icon: Briefcase, href: '/experience' },
    { label: 'EDUCATION', icon: GraduationCap, href: '/education' },
    { label: 'CONTACT', icon: Mail, href: '/contact' },
  ];

  return (
    <>
      {/* ========================================== */}
      {/* DESKTOP SIDEBAR NAVIGATION (Hidden on mobile) */}
      {/* ========================================== */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 bg-[#0c0f17] border-r border-white/10 z-50 flex-col justify-between p-6 overflow-y-auto">
        
        {/* Top Logo & Profile Header */}
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-500 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0a0e1a] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-outfit font-bold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
                Sadek<span className="text-sky-400">.</span>Soliman
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                Frontend & React Native
              </span>
            </div>
          </Link>

          {/* Navigation Pill Menu */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href === '/work' && pathname === '/');
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30 shadow-md shadow-sky-950/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {/* Left Active Line Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillIndicator"
                      className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-sky-400 to-blue-600 rounded-r-full"
                    />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar Footer */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          
          {/* CV & Hire CTA Buttons */}
          <div className="space-y-2">
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 glass-panel border border-white/10 hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>VIEW RESUME CV</span>
            </button>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 transition-all duration-300"
            >
              <Send className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </Link>
          </div>

          {/* Social Links & Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 justify-center">
              <a
                href={PORTFOLIO_DATA.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-panel text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="text-center">
              <span className="block text-xs font-outfit font-bold text-white tracking-wide">
                SADEK SOLIMAN
              </span>
              <span className="block text-[10px] font-mono text-slate-400">
                Portfolio 2026
              </span>
            </div>
          </div>

        </div>
      </aside>

      {/* ========================================== */}
      {/* MOBILE TOP NAVBAR (Visible on < lg screens) */}
      {/* ========================================== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#080a11]/90 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-600 p-0.5">
              <div className="w-full h-full bg-[#0a0e1a] rounded-[6px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <span className="font-outfit font-bold text-base text-white">
              Sadek<span className="text-sky-400">.</span>Soliman
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg glass-panel text-slate-300 hover:text-sky-400 text-xs font-mono font-semibold flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg glass-panel text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-4 border-t border-white/10 space-y-2 overflow-hidden"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (item.href === '/work' && pathname === '/');
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-colors ${
                      isActive ? 'bg-sky-500/20 text-sky-400' : 'text-slate-200 hover:text-sky-400 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-sky-400" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
