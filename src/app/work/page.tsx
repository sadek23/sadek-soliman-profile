'use client';

import ClientPageLayout from '@/components/ClientPageLayout';
import Projects from '@/components/Projects';

export default function WorkPage() {
  return (
    <ClientPageLayout>
      <div className="pt-8 sm:pt-12">
        <Projects />
      </div>
    </ClientPageLayout>
  );
}
