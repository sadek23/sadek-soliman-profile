'use client';

import ClientPageLayout from '@/components/ClientPageLayout';
import Skills from '@/components/Skills';

export default function SkillsPage() {
  return (
    <ClientPageLayout>
      <div className="pt-8 sm:pt-12">
        <Skills />
      </div>
    </ClientPageLayout>
  );
}
