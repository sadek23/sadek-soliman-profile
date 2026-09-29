'use client';

import ClientPageLayout from '@/components/ClientPageLayout';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <ClientPageLayout>
      <div className="pt-8 sm:pt-12">
        <Contact />
      </div>
    </ClientPageLayout>
  );
}
