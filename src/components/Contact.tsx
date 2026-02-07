'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from './Icon';

interface ContactProps {
  lang: 'en' | 'ja';
}

const content = {
  en: {
    tagline: 'Get Started',
    headline: 'Let\'s Transform Your Business',
    subheadline: 'Schedule a free consultation and discover how AI can revolutionize your operations.',
    form: {
      name: 'Your Name',
      email: 'Email Address',
      company: 'Company Name',
      phone: 'Phone Number',
      industry: 'Industry',
      employees: 'Number of Employees',
      message: 'Tell us about your challenges',
      submit: 'Request Free Consultation',
      submitting: 'Sending...',
      success: 'Thank you! We\'ll be in touch within 24 hours.',
    },
    contact: {
      title: 'Direct Contact',
      email: 'contact@kcc-ai.jp',
      phone: '+81 3-XXXX-XXXX',
      line: 'LINE: @kcc-ai',
      address: 'Tokyo, Japan',
    },
    industries: ['Manufacturing', 'Financial Services', 'Retail', 'Logistics', 'Healthcare', 'Other'],
    employeeOptions: ['1-50', '51-100', '101-500', '501-1000', '1000+'],
  },
  ja: {
    tagline: 'お問い合わせ',
    headline: 'ビジネスを変革しましょう',
    subheadline: '無料相談を予約して、AIがどのように業務を革新できるかご確認ください。',
    form: {
      name: 'お名前',
      email: 'メールアドレス',
      company: '会社名',
      phone: '電話番号',
      industry: '業種',
      employees: '従業員数',
      message: '課題についてお聞かせください',
      submit: '無料相談を申し込む',
      submitting: '送信中...',
      success: 'ありがとうございます！24時間以内にご連絡いたします。',
    },
    contact: {
      title: '直接お問い合わせ',
      email: 'contact@kcc-ai.jp',
      phone: '+81 3-XXXX-XXXX',
      line: 'LINE: @kcc-ai',
      address: '東京都',
    },
    industries: ['製造業', '金融サービス', '小売業', '物流', '医療・ヘルスケア', 'その他'],
    employeeOptions: ['1-50名', '51-100名', '101-500名', '501-1000名', '1000名以上'],
  },
};

export default function Contact({ lang }: ContactProps) {
  const c = content[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-hero.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-semibold mb-4">
              {c.tagline}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-accent)] mb-4">
              {c.headline}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              {c.subheadline}
            </p>

            {/* Contact info */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-[var(--color-accent)]">{c.contact.title}</h3>
              <div className="space-y-3">
                <a href={`mailto:${c.contact.email}`} className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <Icon name="email" size={20} />
                  </span>
                  {c.contact.email}
                </a>
                <a href={`tel:${c.contact.phone}`} className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <Icon name="phone" size={20} />
                  </span>
                  {c.contact.phone}
                </a>
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <Icon name="chat" size={20} />
                  </span>
                  {c.contact.line}
                </div>
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center">
                    <Icon name="location" size={20} />
                  </span>
                  {c.contact.address}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <Icon name="check" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">{c.form.success}</h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.form.company} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.form.industry}
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all">
                      <option value="">--</option>
                      {c.industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      {c.form.employees}
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all">
                      <option value="">--</option>
                      {c.employeeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    {c.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? c.form.submitting : c.form.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
