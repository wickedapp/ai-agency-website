'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './Icon';

interface HeroProps {
  lang: 'en' | 'ja';
}

const content = {
  en: {
    tagline: 'AI-Powered Business Transformation',
    headline: 'Cut Costs by 40%\nWith Proven AI Solutions',
    subheadline: 'Transform your operations with intelligent automation. Trusted by leading Japanese enterprises.',
    cta: 'See How AI Can Help',
    ctaSecondary: 'View Case Studies',
    stats: [
      { value: 40, suffix: '%', label: 'Average Cost Reduction' },
      { value: 200, suffix: '+', label: 'Hours Saved Monthly' },
      { value: 98, suffix: '%', label: 'Client Satisfaction' },
      { value: 6, suffix: 'mo', label: 'Average ROI Period' },
    ],
  },
  ja: {
    tagline: 'AIによる業務変革',
    headline: 'AIで業務コストを\n40%削減',
    subheadline: 'インテリジェントな自動化で業務を変革。日本の大手企業に信頼されています。',
    cta: 'AI活用の可能性を見る',
    ctaSecondary: '導入事例を見る',
    stats: [
      { value: 40, suffix: '%', label: '平均コスト削減' },
      { value: 200, suffix: '+', label: '月間削減時間' },
      { value: 98, suffix: '%', label: '顧客満足度' },
      { value: 6, suffix: 'ヶ月', label: '平均ROI回収期間' },
    ],
  },
};

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
}

export default function Hero({ lang }: HeroProps) {
  const c = content[lang];

  return (
    <section className="relative min-h-screen gradient-hero pattern-overlay overflow-hidden mt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[10%] w-32 h-32 rounded-3xl bg-[var(--color-primary)]/10 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[60%] left-[5%] w-24 h-24 rounded-2xl bg-[var(--color-accent)]/10 blur-sm"
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[30%] right-[20%] w-16 h-16 rounded-full bg-[var(--color-primary)]/15"
        />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-semibold mb-6"
            >
              {c.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-accent)] leading-tight mb-6 whitespace-pre-line"
            >
              {c.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8 max-w-lg"
            >
              {c.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#case-studies" className="btn-primary">
                {c.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#case-studies" className="btn-secondary">
                {c.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-main.png"
                alt="AI Business Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center">
                <Icon name="check" size={28} className="brightness-0 invert" />
              </div>
              <div>
                <p className="font-bold text-[var(--color-accent)]">{lang === 'en' ? 'Trusted' : '信頼'}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">{lang === 'en' ? '50+ Enterprises' : '50社以上の実績'}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {c.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-text-secondary)]/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-[var(--color-primary)]" />
        </div>
      </motion.div>
    </section>
  );
}
