'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './Icon';

interface ServicesProps {
  lang: 'en' | 'ja';
}

const services = {
  en: [
    {
      icon: 'robot',
      title: 'AI Chatbot & Support',
      description: '24/7 multilingual customer support automation with advanced NLP.',
      impact: '60% reduction in support tickets',
      savings: '¥15M/year saved',
    },
    {
      icon: 'document',
      title: 'Document Processing',
      description: 'Automated invoice, contract, and form processing with OCR + AI.',
      impact: '80% faster processing',
      savings: '95% accuracy rate',
    },
    {
      icon: 'gear',
      title: 'Workflow Automation',
      description: 'End-to-end RPA + AI business process automation.',
      impact: '50% reduction in manual tasks',
      savings: 'Full process digitization',
    },
    {
      icon: 'chart',
      title: 'Predictive Analytics',
      description: 'Demand forecasting and maintenance prediction powered by ML.',
      impact: '30% reduction in inventory costs',
      savings: 'Data-driven decisions',
    },
    {
      icon: 'search',
      title: 'AI Quality Control',
      description: 'Visual inspection and defect detection with computer vision.',
      impact: '99.2% detection rate',
      savings: '40% fewer defects shipped',
    },
    {
      icon: 'tools',
      title: 'Custom AI Solutions',
      description: 'Tailored AI models for your specific business needs.',
      impact: 'ROI within 6-12 months',
      savings: 'Built for your workflow',
    },
  ],
  ja: [
    {
      icon: 'robot',
      title: 'AIチャットボット',
      description: '高度なNLPによる24時間多言語カスタマーサポート自動化。',
      impact: 'サポートチケット60%削減',
      savings: '年間¥1,500万コスト削減',
    },
    {
      icon: 'document',
      title: '文書処理自動化',
      description: 'OCR + AIによる請求書・契約書・申請書の自動処理。',
      impact: '処理速度80%向上',
      savings: '精度95%達成',
    },
    {
      icon: 'gear',
      title: 'ワークフロー自動化',
      description: 'RPA + AIによるエンドツーエンドの業務プロセス自動化。',
      impact: '手作業50%削減',
      savings: '完全デジタル化',
    },
    {
      icon: 'chart',
      title: '予測分析',
      description: 'MLによる需要予測・保守予測。',
      impact: '在庫コスト30%削減',
      savings: 'データ駆動の意思決定',
    },
    {
      icon: 'search',
      title: 'AI品質管理',
      description: 'コンピュータビジョンによる外観検査・欠陥検出。',
      impact: '検出率99.2%',
      savings: '出荷不良40%削減',
    },
    {
      icon: 'tools',
      title: 'カスタムAIソリューション',
      description: 'お客様のニーズに合わせたAIモデル開発。',
      impact: '6-12ヶ月でROI達成',
      savings: '業務に最適化',
    },
  ],
};

const content = {
  en: {
    tagline: 'Our Services',
    headline: 'AI Solutions That Deliver Results',
    subheadline: 'Each service is designed with measurable impact in mind. Real results for real business challenges.',
  },
  ja: {
    tagline: 'サービス',
    headline: '成果を出すAIソリューション',
    subheadline: '全サービスが測定可能な成果を目指して設計。ビジネス課題に対する確実な成果を。',
  },
};

export default function Services({ lang }: ServicesProps) {
  const c = content[lang];
  const s = services[lang];

  return (
    <section id="services" className="section-padding bg-[var(--color-surface)] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 relative aspect-[21/9] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/services-hero.png"
            alt="AI Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold mb-4">
              {c.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {c.headline}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl">
              {c.subheadline}
            </p>
          </div>
        </motion.div>

        {/* Services grid - 2x2 layout for first 4, then remaining */}
        <div className="grid sm:grid-cols-2 gap-6">
          {s.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover group"
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name={service.icon} size={48} />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-accent)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  <span className="text-sm font-medium text-[var(--color-accent)]">{service.impact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-green-600">{service.savings}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
