'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavbarProps {
  lang: 'en' | 'ja';
  onLangChange: (lang: 'en' | 'ja') => void;
}

const navItems = {
  en: [
    { href: '#services', label: 'Services' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#roi-calculator', label: 'ROI Calculator' },
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ],
  ja: [
    { href: '#services', label: 'サービス' },
    { href: '#case-studies', label: '導入事例' },
    { href: '#roi-calculator', label: 'ROI計算' },
    { href: '#about', label: '会社概要' },
    { href: '#process', label: '導入プロセス' },
    { href: '#contact', label: 'お問い合わせ' },
  ],
};

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-bold text-xl text-[var(--color-accent)]">
              KCC<span className="text-[var(--color-primary)]">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems[lang].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onLangChange(lang === 'en' ? 'ja' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-[var(--color-primary)] transition-colors"
            >
              <span className="text-sm font-medium">
                {lang === 'en' ? '🇯🇵 日本語' : '🇺🇸 English'}
              </span>
            </button>
            <Link href="#contact" className="btn-primary text-sm">
              {lang === 'en' ? 'Free Consultation' : '無料相談'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[var(--color-accent)] transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-[var(--color-accent)] transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-[var(--color-accent)] transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navItems[lang].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t">
                <button
                  onClick={() => onLangChange(lang === 'en' ? 'ja' : 'en')}
                  className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-center font-medium"
                >
                  {lang === 'en' ? '🇯🇵 日本語' : '🇺🇸 English'}
                </button>
                <Link href="#contact" className="flex-1 btn-primary text-center justify-center">
                  {lang === 'en' ? 'Contact' : '相談'}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
