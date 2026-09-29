'use client';

import { useState } from 'react';
import SidebarNav from '@/components/SidebarNav';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';

export default function ClientPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080a11] text-slate-100 overflow-x-hidden selection:bg-sky-500 selection:text-white">
      {/* Persistent Left Sidebar Navigation & Mobile Header */}
      <SidebarNav onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Area */}
      <main className="lg:pl-72 pt-16 lg:pt-0 min-h-screen flex flex-col justify-between">
        <div>
          {children}
        </div>
        <Footer />
      </main>

      {/* Full CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
