'use client';

import { useState } from 'react';
import ClientPageLayout from '@/components/ClientPageLayout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ClientPageLayout>
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <Projects />
    </ClientPageLayout>
  );
}
