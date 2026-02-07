'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import ROICalculator from '@/components/ROICalculator';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ja'>('ja');

  return (
    <main>
      <Navbar lang={lang} onLangChange={setLang} />
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
