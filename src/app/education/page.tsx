'use client';

import ClientPageLayout from '@/components/ClientPageLayout';
import EducationLanguages from '@/components/EducationLanguages';

export default function EducationPage() {
  return (
    <ClientPageLayout>
      <div className="pt-8 sm:pt-12">
        <EducationLanguages />
      </div>
    </ClientPageLayout>
  );
}
