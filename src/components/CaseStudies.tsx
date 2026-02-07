'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CaseStudiesProps {
  lang: 'en' | 'ja';
}

const caseStudies = {
  en: [
    {
      id: 'manufacturing',
      industry: 'Manufacturing',
      image: '/images/cases/case-manufacturing.png',
      title: 'AI-Powered Quality Control',
      challenge: 'Manual visual inspection with 15 inspectors and 3% defect escape rate.',
      solution: 'Implemented AI-powered visual inspection system with real-time defect detection.',
      results: [
        { value: '¥24M', label: 'Annual Savings' },
        { value: '0.3%', label: 'Defect Escape Rate' },
        { value: '12', label: 'Staff Redeployed' },
      ],
      timeline: '8 weeks',
      quote: 'The AI system catches defects our human inspectors were missing. Game changer.',
    },
    {
      id: 'finance',
      industry: 'Financial Services',
      image: '/images/cases/case-finance.png',
      title: 'Document Automation',
      challenge: '200+ hours/month processing loan applications manually.',
      solution: 'OCR + AI document extraction with automated routing and validation.',
      results: [
        { value: '70%', label: 'Faster Processing' },
        { value: '¥8M', label: 'Labor Cost Reduction' },
        { value: '0.5%', label: 'Error Rate (from 5%)' },
      ],
      timeline: '6 weeks',
      quote: 'Processing time went from days to hours. Our team now focuses on high-value work.',
    },
    {
      id: 'retail',
      industry: 'Retail',
      image: '/images/cases/case-retail.png',
      title: 'AI Customer Support',
      challenge: '5,000+ monthly support inquiries with 8-hour average response time.',
      solution: 'AI chatbot with Japanese NLP and smart escalation to human agents.',
      results: [
        { value: '65%', label: 'Auto-Resolved' },
        { value: '30sec', label: 'Response Time' },
        { value: '¥12M', label: 'Annual Savings' },
      ],
      timeline: '4 weeks',
      quote: 'Customers love the instant responses. CSAT scores are at an all-time high.',
    },
    {
      id: 'logistics',
      industry: 'Logistics',
      image: '/images/cases/case-logistics.png',
      title: 'Demand Forecasting',
      challenge: 'Overstocking causing ¥50M/year in waste and storage costs.',
      solution: 'AI demand prediction using historical data, market trends, and seasonality.',
      results: [
        { value: '35%', label: 'Overstock Reduction' },
        { value: '¥18M', label: 'Annual Savings' },
        { value: '94%', label: 'Forecast Accuracy' },
      ],
      timeline: '10 weeks',
      quote: 'We finally have visibility into what we actually need. No more guessing.',
    },
    {
      id: 'hr',
      industry: 'HR / Recruitment',
      image: '/images/cases/case-hr.png',
      title: 'Recruitment Automation',
      challenge: 'Screening 500+ resumes monthly, consuming 40 hours/week of HR time.',
      solution: 'AI resume screening with candidate ranking and skills matching.',
      results: [
        { value: '80%', label: 'Time Saved' },
        { value: '¥6M', label: 'Annual Savings' },
        { value: '2x', label: 'Better Matches' },
      ],
      timeline: '3 weeks',
      quote: 'The quality of candidates reaching interviews has dramatically improved.',
    },
    {
      id: 'healthcare',
      industry: 'Healthcare',
      image: '/images/cases/case-healthcare.png',
      title: 'Patient Scheduling AI',
      challenge: 'High no-show rates (18%) and inefficient appointment scheduling causing revenue loss.',
      solution: 'AI-powered scheduling optimization with predictive no-show detection and automated reminders.',
      results: [
        { value: '60%', label: 'No-Show Reduction' },
        { value: '¥15M', label: 'Revenue Recovered' },
        { value: '25%', label: 'More Appointments' },
      ],
      timeline: '6 weeks',
      quote: 'Our clinic runs smoother than ever. Patients appreciate the smart reminders.',
    },
    {
      id: 'insurance',
      industry: 'Insurance',
      image: '/images/cases/case-insurance.png',
      title: 'Claims Processing AI',
      challenge: 'Claims processing taking 14 days average with 12% error rate in manual reviews.',
      solution: 'AI claims assessment with fraud detection, document verification, and auto-approval for standard claims.',
      results: [
        { value: '3 days', label: 'Processing Time' },
        { value: '¥22M', label: 'Annual Savings' },
        { value: '95%', label: 'Auto-Approval Rate' },
      ],
      timeline: '12 weeks',
      quote: 'Customers get paid faster, fraud is caught earlier. Win-win.',
    },
    {
      id: 'realestate',
      industry: 'Real Estate',
      image: '/images/cases/case-realestate.png',
      title: 'Property Valuation AI',
      challenge: 'Manual property valuations taking 3-5 days, limiting deal velocity.',
      solution: 'AI valuation model using market data, property features, and comparable sales analysis.',
      results: [
        { value: '2 hours', label: 'Valuation Time' },
        { value: '97%', label: 'Accuracy Rate' },
        { value: '3x', label: 'Deal Throughput' },
      ],
      timeline: '8 weeks',
      quote: 'We can now make offers the same day. Competitive advantage is huge.',
    },
    {
      id: 'accounting',
      industry: 'Accounting',
      image: '/images/cases/case-accounting.png',
      title: 'Invoice Automation',
      challenge: 'Processing 2,000+ invoices monthly with 3 FTEs, frequent matching errors.',
      solution: 'AI invoice capture, 3-way matching, and automated GL coding with exception handling.',
      results: [
        { value: '90%', label: 'Touchless Processing' },
        { value: '¥10M', label: 'Annual Savings' },
        { value: '99.5%', label: 'Accuracy' },
      ],
      timeline: '5 weeks',
      quote: 'Month-end close went from 5 days to 2. The accuracy improvement alone was worth it.',
    },
    {
      id: 'legal',
      industry: 'Legal',
      image: '/images/cases/case-legal.png',
      title: 'Contract Analysis AI',
      challenge: 'Reviewing 100+ contracts monthly, missing critical clauses and renewal dates.',
      solution: 'AI contract analysis with risk scoring, clause extraction, and obligation tracking.',
      results: [
        { value: '75%', label: 'Review Time Saved' },
        { value: '¥8M', label: 'Risk Avoided' },
        { value: '100%', label: 'Clause Detection' },
      ],
      timeline: '7 weeks',
      quote: 'We never miss a renewal deadline now. The risk identification is incredibly valuable.',
    },
  ],
  ja: [
    {
      id: 'manufacturing',
      industry: '製造業',
      image: '/images/cases/case-manufacturing.png',
      title: 'AI品質検査システム',
      challenge: '15名の検査員による目視検査、不良流出率3%。',
      solution: 'リアルタイム欠陥検出AIシステムを導入。',
      results: [
        { value: '¥2,400万', label: '年間コスト削減' },
        { value: '0.3%', label: '不良流出率' },
        { value: '12名', label: '配置転換' },
      ],
      timeline: '8週間',
      quote: '人の目では見逃していた欠陥をAIが検出。品質が劇的に向上しました。',
    },
    {
      id: 'finance',
      industry: '金融サービス',
      image: '/images/cases/case-finance.png',
      title: '文書処理自動化',
      challenge: 'ローン申請処理に月200時間以上の手作業。',
      solution: 'OCR + AI文書抽出と自動ルーティング・検証システム。',
      results: [
        { value: '70%', label: '処理速度向上' },
        { value: '¥800万', label: '人件費削減' },
        { value: '0.5%', label: 'エラー率（5%→）' },
      ],
      timeline: '6週間',
      quote: '処理時間が数日から数時間に。チームは付加価値の高い業務に集中できます。',
    },
    {
      id: 'retail',
      industry: '小売業',
      image: '/images/cases/case-retail.png',
      title: 'AIカスタマーサポート',
      challenge: '月5,000件以上の問い合わせ、平均応答時間8時間。',
      solution: '日本語NLP搭載AIチャットボットとスマートエスカレーション。',
      results: [
        { value: '65%', label: '自動解決率' },
        { value: '30秒', label: '応答時間' },
        { value: '¥1,200万', label: '年間削減' },
      ],
      timeline: '4週間',
      quote: '即座の回答にお客様も大満足。顧客満足度は過去最高です。',
    },
    {
      id: 'logistics',
      industry: '物流',
      image: '/images/cases/case-logistics.png',
      title: '需要予測AI',
      challenge: '過剰在庫による年間¥5,000万の廃棄・保管コスト。',
      solution: '履歴データ・市場トレンド・季節性を活用したAI需要予測。',
      results: [
        { value: '35%', label: '過剰在庫削減' },
        { value: '¥1,800万', label: '年間削減' },
        { value: '94%', label: '予測精度' },
      ],
      timeline: '10週間',
      quote: '本当に必要な量が見えるようになりました。もう当て推量は不要です。',
    },
    {
      id: 'hr',
      industry: '人事・採用',
      image: '/images/cases/case-hr.png',
      title: '採用プロセス自動化',
      challenge: '月500件以上の履歴書スクリーニングに週40時間。',
      solution: 'AI履歴書スクリーニングと候補者ランキング・スキルマッチング。',
      results: [
        { value: '80%', label: '時間削減' },
        { value: '¥600万', label: '年間削減' },
        { value: '2倍', label: 'マッチング精度' },
      ],
      timeline: '3週間',
      quote: '面接に進む候補者の質が劇的に向上しました。',
    },
    {
      id: 'healthcare',
      industry: '医療',
      image: '/images/cases/case-healthcare.png',
      title: '患者予約AI最適化',
      challenge: '高いノーショー率（18%）と非効率な予約管理による収益損失。',
      solution: 'AI予約最適化、ノーショー予測、自動リマインダーシステム。',
      results: [
        { value: '60%', label: 'ノーショー削減' },
        { value: '¥1,500万', label: '収益回復' },
        { value: '25%', label: '予約数増加' },
      ],
      timeline: '6週間',
      quote: 'クリニックの運営がこれまでにないほどスムーズに。患者様もリマインダーを喜んでいます。',
    },
    {
      id: 'insurance',
      industry: '保険',
      image: '/images/cases/case-insurance.png',
      title: '保険金請求AI処理',
      challenge: '請求処理に平均14日、手動審査のエラー率12%。',
      solution: 'AI請求査定、不正検知、書類検証、標準請求の自動承認。',
      results: [
        { value: '3日', label: '処理時間' },
        { value: '¥2,200万', label: '年間削減' },
        { value: '95%', label: '自動承認率' },
      ],
      timeline: '12週間',
      quote: 'お客様への支払いが早くなり、不正も早期発見。まさにWin-Win。',
    },
    {
      id: 'realestate',
      industry: '不動産',
      image: '/images/cases/case-realestate.png',
      title: '物件評価AI',
      challenge: '手動での物件評価に3〜5日かかり、取引スピードに影響。',
      solution: '市場データ、物件特性、類似物件分析を活用したAI評価モデル。',
      results: [
        { value: '2時間', label: '評価時間' },
        { value: '97%', label: '精度' },
        { value: '3倍', label: '取引処理量' },
      ],
      timeline: '8週間',
      quote: '当日中にオファーを出せるようになりました。競争優位性が大幅に向上。',
    },
    {
      id: 'accounting',
      industry: '経理',
      image: '/images/cases/case-accounting.png',
      title: '請求書処理自動化',
      challenge: '月2,000件以上の請求書処理に3名のFTE、照合エラーも頻発。',
      solution: 'AI請求書読取、3ウェイマッチング、自動仕訳と例外処理。',
      results: [
        { value: '90%', label: '自動処理率' },
        { value: '¥1,000万', label: '年間削減' },
        { value: '99.5%', label: '精度' },
      ],
      timeline: '5週間',
      quote: '月次決算が5日から2日に短縮。精度向上だけでも導入の価値がありました。',
    },
    {
      id: 'legal',
      industry: '法務',
      image: '/images/cases/case-legal.png',
      title: '契約書分析AI',
      challenge: '月100件以上の契約書レビュー、重要条項や更新日の見落とし。',
      solution: 'AI契約分析、リスクスコアリング、条項抽出、義務追跡。',
      results: [
        { value: '75%', label: 'レビュー時間削減' },
        { value: '¥800万', label: 'リスク回避' },
        { value: '100%', label: '条項検出率' },
      ],
      timeline: '7週間',
      quote: '更新期限を見逃すことがなくなりました。リスク特定機能は非常に価値があります。',
    },
  ],
};

const content = {
  en: {
    tagline: 'Case Studies',
    headline: 'Proven Results, Real Impact',
    subheadline: 'See how Japanese enterprises are transforming their operations with our AI solutions.',
    challenge: 'Challenge',
    solution: 'Solution',
    results: 'Results',
    timeline: 'Timeline',
  },
  ja: {
    tagline: '導入事例',
    headline: '実績と成果',
    subheadline: '日本企業がAIソリューションでどのように業務を変革しているかご覧ください。',
    challenge: '課題',
    solution: '解決策',
    results: '成果',
    timeline: '導入期間',
  },
};

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const c = content[lang];
  const cases = caseStudies[lang];
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="case-studies" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
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

        {/* Case study tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cases.map((cs, index) => (
            <button
              key={cs.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCase === index
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'bg-gray-100 text-[var(--color-text-secondary)] hover:bg-gray-200'
              }`}
            >
              {cs.industry}
            </button>
          ))}
        </div>

        {/* Active case study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cases[activeCase].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--color-surface)] rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={cases[activeCase].image}
                  alt={cases[activeCase].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium mb-3">
                    {cases[activeCase].industry}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {cases[activeCase].title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-2">
                      {c.challenge}
                    </h4>
                    <p className="text-[var(--color-text-primary)]">
                      {cases[activeCase].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-2">
                      {c.solution}
                    </h4>
                    <p className="text-[var(--color-text-primary)]">
                      {cases[activeCase].solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-4">
                    {c.results}
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {cases[activeCase].results.map((result) => (
                      <div key={result.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                        <div className="text-2xl font-bold text-[var(--color-accent)] stat-number">
                          {result.value}
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline & Quote */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-4 py-2 bg-[var(--color-primary-light)] rounded-full">
                    <span className="text-sm font-medium text-[var(--color-primary)]">
                      {c.timeline}: {cases[activeCase].timeline}
                    </span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 italic text-[var(--color-text-secondary)]">
                  &ldquo;{cases[activeCase].quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
