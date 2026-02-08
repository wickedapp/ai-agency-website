'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './Icon';

interface ProcessProps {
  lang: 'en' | 'ja';
}

const content = {
  en: {
    tagline: 'How We Work',
    headline: 'Your Path to AI Transformation',
    subheadline: 'A proven process that ensures success at every step.',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'Free consultation to understand your challenges, goals, and current processes.',
        duration: '1-2 days',
        icon: 'search',
      },
      {
        number: '02',
        title: 'Assessment',
        description: 'AI readiness audit to identify the highest-impact opportunities for automation.',
        duration: '1 week',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: 'Proposal',
        description: 'Custom solution design with clear ROI projections and implementation roadmap.',
        duration: '1 week',
        icon: 'design',
      },
      {
        number: '04',
        title: 'Implementation',
        description: 'Agile development with regular demos, Japanese QA standards, and iterative refinement.',
        duration: '4-10 weeks',
        icon: 'gear',
      },
      {
        number: '05',
        title: 'Support',
        description: 'Ongoing optimization, 24/7 monitoring, and continuous improvement partnership.',
        duration: 'Ongoing',
        icon: 'handshake',
      },
    ],
  },
  ja: {
    tagline: '導入プロセス',
    headline: 'AI変革への道のり',
    subheadline: '各ステップで成功を保証する実績あるプロセス。',
    steps: [
      {
        number: '01',
        title: 'ヒアリング',
        description: '課題、目標、現行プロセスを理解するための無料コンサルティング。',
        duration: '1-2日',
        icon: 'search',
      },
      {
        number: '02',
        title: 'アセスメント',
        description: 'AI導入準備状況の監査と自動化による最大効果の機会特定。',
        duration: '1週間',
        icon: 'clipboard',
      },
      {
        number: '03',
        title: '提案',
        description: '明確なROI予測と導入ロードマップを含むカスタムソリューション設計。',
        duration: '1週間',
        icon: 'design',
      },
      {
        number: '04',
        title: '導入',
        description: '定期デモ、日本品質基準、反復的改善によるアジャイル開発。',
        duration: '4-10週間',
        icon: 'gear',
      },
      {
        number: '05',
        title: 'サポート',
        description: '継続的な最適化、24時間監視、継続的改善パートナーシップ。',
        duration: '継続',
        icon: 'handshake',
      },
    ],
  },
};

export default function Process({ lang }: ProcessProps) {
  const c = content[lang];

  return (
    <section id="process" className="section-padding bg-[var(--color-surface)] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/process-hero.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-semibold mb-4">
            {c.tagline}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-accent)] mb-4">
            {c.headline}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {c.subheadline}
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary-light)] -translate-y-1/2 z-0" />

          {/* Mobile: vertical timeline, Tablet: 2-col grid, Desktop: 5-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {c.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Icon name={step.icon} size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-medium">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
