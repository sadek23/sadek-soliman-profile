'use client';

import ClientPageLayout from '@/components/ClientPageLayout';
import Experience from '@/components/Experience';

export default function ExperiencePage() {
  return (
    <ClientPageLayout>
      <div className="pt-8 sm:pt-12">
        <Experience />
      </div>
    </ClientPageLayout>
  );
}
