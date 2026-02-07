'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './Icon';

interface ROICalculatorProps {
  lang: 'en' | 'ja';
}

const industries = {
  en: [
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 1.2 },
    { value: 'finance', label: 'Financial Services', multiplier: 1.3 },
    { value: 'retail', label: 'Retail', multiplier: 1.1 },
    { value: 'logistics', label: 'Logistics', multiplier: 1.15 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 1.25 },
    { value: 'other', label: 'Other', multiplier: 1.0 },
  ],
  ja: [
    { value: 'manufacturing', label: '製造業', multiplier: 1.2 },
    { value: 'finance', label: '金融サービス', multiplier: 1.3 },
    { value: 'retail', label: '小売業', multiplier: 1.1 },
    { value: 'logistics', label: '物流', multiplier: 1.15 },
    { value: 'healthcare', label: '医療・ヘルスケア', multiplier: 1.25 },
    { value: 'other', label: 'その他', multiplier: 1.0 },
  ],
};

const content = {
  en: {
    tagline: 'ROI Calculator',
    headline: 'Calculate Your Potential Savings',
    subheadline: 'Get an instant estimate of how much AI automation could save your business.',
    industry: 'Your Industry',
    employees: 'Number of Employees',
    hours: 'Monthly Hours on Repetitive Tasks',
    hourlyRate: 'Average Hourly Labor Cost (¥)',
    calculate: 'Calculate Savings',
    results: {
      title: 'Your Estimated ROI',
      annual: 'Annual Savings',
      monthly: 'Monthly Savings',
      hours: 'Hours Saved/Month',
      payback: 'Payback Period',
      months: 'months',
    },
    cta: 'Get Detailed Analysis',
    disclaimer: 'Estimates based on industry averages. Actual results may vary.',
  },
  ja: {
    tagline: 'ROI計算',
    headline: '削減効果を計算',
    subheadline: 'AI自動化でどれだけコスト削減できるか、即座に見積もりを取得。',
    industry: '業種',
    employees: '従業員数',
    hours: '月間の定型業務時間',
    hourlyRate: '平均時給（¥）',
    calculate: '削減効果を計算',
    results: {
      title: '推定ROI',
      annual: '年間削減額',
      monthly: '月間削減額',
      hours: '月間削減時間',
      payback: '投資回収期間',
      months: 'ヶ月',
    },
    cta: '詳細分析を依頼',
    disclaimer: '業界平均に基づく推定値です。実際の結果は異なる場合があります。',
  },
};

export default function ROICalculator({ lang }: ROICalculatorProps) {
  const c = content[lang];
  const ind = industries[lang];

  const [industry, setIndustry] = useState('manufacturing');
  const [employees, setEmployees] = useState(100);
  const [hours, setHours] = useState(500);
  const [hourlyRate, setHourlyRate] = useState(3000);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => {
    const selectedIndustry = ind.find(i => i.value === industry);
    const multiplier = selectedIndustry?.multiplier || 1;
    
    // Assume 40% efficiency gain on average
    const efficiencyGain = 0.4;
    const hoursSaved = Math.round(hours * efficiencyGain * multiplier);
    const monthlySavings = hoursSaved * hourlyRate;
    const annualSavings = monthlySavings * 12;
    
    // Assume implementation cost is 3x monthly savings
    const implementationCost = monthlySavings * 3;
    const paybackMonths = Math.round(implementationCost / monthlySavings);

    return {
      hoursSaved,
      monthlySavings,
      annualSavings,
      paybackMonths: Math.min(paybackMonths, 12),
    };
  }, [industry, employees, hours, hourlyRate, ind]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="section-padding gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/roi-hero.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Industry */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.industry}
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    >
                      {ind.map((i) => (
                        <option key={i.value} value={i.value}>
                          {i.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Employees */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.employees}: <span className="text-[var(--color-primary)] font-bold">{employees}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={employees}
                      onChange={(e) => setEmployees(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                    />
                    <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                      <span>10</span>
                      <span>1000+</span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.hours}: <span className="text-[var(--color-primary)] font-bold">{hours}</span>
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="50"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                    />
                    <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                      <span>100</span>
                      <span>2000+</span>
                    </div>
                  </div>

                  {/* Hourly Rate */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.hourlyRate}: <span className="text-[var(--color-primary)] font-bold">¥{hourlyRate.toLocaleString()}</span>
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="500"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                    />
                    <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                      <span>¥1,000</span>
                      <span>¥10,000</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowResults(true)}
                    className="w-full btn-primary justify-center py-4 text-lg"
                  >
                    {c.calculate}
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className={`p-8 lg:p-12 gradient-dark text-white ${showResults ? '' : 'flex items-center justify-center'}`}>
                {showResults ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold mb-6">{c.results.title}</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-2xl p-6">
                        <div className="text-sm text-white/70 mb-1">{c.results.annual}</div>
                        <div className="text-4xl font-bold text-[var(--color-primary)] stat-number">
                          {formatCurrency(results.annualSavings)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-xl p-4">
                          <div className="text-xs text-white/70 mb-1">{c.results.monthly}</div>
                          <div className="text-xl font-bold stat-number">
                            {formatCurrency(results.monthlySavings)}
                          </div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                          <div className="text-xs text-white/70 mb-1">{c.results.hours}</div>
                          <div className="text-xl font-bold stat-number">
                            {results.hoursSaved}h
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-xs text-white/70 mb-1">{c.results.payback}</div>
                        <div className="text-xl font-bold stat-number">
                          {results.paybackMonths} {c.results.months}
                        </div>
                      </div>
                    </div>

                    <a href="#contact" className="block w-full btn-primary justify-center py-4 bg-white text-[var(--color-primary)] hover:bg-gray-100">
                      {c.cta}
                    </a>

                    <p className="text-xs text-white/50 text-center">
                      {c.disclaimer}
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-center text-white/50">
                    <div className="w-24 h-24 mx-auto mb-4 opacity-50">
                      <Icon name="chart" size={96} className="brightness-0 invert" />
                    </div>
                    <p>{lang === 'en' ? 'Fill in the form to see your results' : 'フォームに入力して結果を確認'}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
