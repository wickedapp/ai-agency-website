'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import ROICalculator from '@/components/ROICalculator';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlLang = searchParams.get('lang');
  const [lang, setLang] = useState<'en' | 'ja'>(() => {
    // Initialize from URL param if valid
    if (urlLang === 'en' || urlLang === 'ja') {
      return urlLang;
    }
    return 'ja';
  });

  // Sync state with URL param changes
  useEffect(() => {
    if (urlLang === 'en' || urlLang === 'ja') {
      setLang(urlLang);
    }
  }, [urlLang]);

  // Update URL when language changes via toggle
  const handleLangChange = (newLang: 'en' | 'ja') => {
    setLang(newLang);
    router.push(`?lang=${newLang}`, { scroll: false });
  };

  return (
    <main>
      <Navbar lang={lang} onLangChange={handleLangChange} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <CaseStudies lang={lang} />
      <ROICalculator lang={lang} />
      <About lang={lang} />
      <Process lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HomeContent />
    </Suspense>
  );
}
