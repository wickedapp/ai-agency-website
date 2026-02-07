'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './Icon';

interface AboutProps {
  lang: 'en' | 'ja';
}

const content = {
  en: {
    tagline: 'About Us',
    headline: 'Your AI Transformation Partner',
    subheadline: 'We bring global AI expertise with deep understanding of Japanese business culture.',
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '50+', label: 'Projects Delivered' },
      { value: '¥500M+', label: 'Client Savings' },
      { value: '98%', label: 'Client Retention' },
    ],
    values: [
      {
        icon: 'target',
        title: 'Results-Focused',
        description: 'We measure success by your ROI, not just project delivery.',
      },
      {
        icon: 'handshake',
        title: 'True Partnership',
        description: 'We work alongside your team, not as external vendors.',
      },
      {
        icon: 'japan',
        title: 'Japan Expertise',
        description: 'We understand Japanese business culture, compliance, and market needs.',
      },
      {
        icon: 'innovation',
        title: 'Innovation-Driven',
        description: 'We stay at the cutting edge of AI technology to bring you the best solutions.',
      },
    ],
  },
  ja: {
    tagline: '会社概要',
    headline: 'AIトランスフォーメーション\nパートナー',
    subheadline: 'グローバルなAI専門知識と日本のビジネス文化への深い理解を兼ね備えています。',
    stats: [
      { value: '5+', label: '年の実績' },
      { value: '50+', label: 'プロジェクト' },
      { value: '¥5億+', label: 'クライアント削減額' },
      { value: '98%', label: '継続率' },
    ],
    values: [
      {
        icon: 'target',
        title: '成果重視',
        description: 'プロジェクト完了ではなく、ROIで成功を測定します。',
      },
      {
        icon: 'handshake',
        title: '真のパートナーシップ',
        description: '外部ベンダーとしてではなく、お客様のチームと共に。',
      },
      {
        icon: 'japan',
        title: '日本市場の専門性',
        description: '日本のビジネス文化、コンプライアンス、市場ニーズを理解。',
      },
      {
        icon: 'innovation',
        title: 'イノベーション志向',
        description: 'AI技術の最先端を追求し、最良のソリューションを提供。',
      },
    ],
  },
};

export default function About({ lang }: AboutProps) {
  const c = content[lang];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.png"
                alt="KCC AI Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/30 to-transparent" />
            </div>
            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4"
            >
              {c.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)] stat-number">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-semibold mb-4">
              {c.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-accent)] mb-4 whitespace-pre-line">
              {c.headline}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              {c.subheadline}
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {c.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center flex-shrink-0">
                    <Icon name={value.icon} size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-accent)] mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
