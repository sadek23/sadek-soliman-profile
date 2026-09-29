'use client';

import ClientPageLayout from '@/components/ClientPageLayout';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <ClientPageLayout>
      <div className="pt-8 sm:pt-12">
        <About />
      </div>
    </ClientPageLayout>
  );
}
