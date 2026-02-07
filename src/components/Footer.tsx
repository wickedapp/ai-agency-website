'use client';

import Link from 'next/link';

interface FooterProps {
  lang: 'en' | 'ja';
}

const content = {
  en: {
    company: 'KCC AI Solutions',
    tagline: 'Transforming Japanese businesses with AI.',
    services: {
      title: 'Services',
      items: ['AI Chatbot', 'Document Processing', 'Workflow Automation', 'Predictive Analytics', 'Quality Control', 'Custom Solutions'],
    },
    company_links: {
      title: 'Company',
      items: ['About Us', 'Case Studies', 'Process', 'Blog', 'Contact'],
    },
    legal: {
      title: 'Legal',
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
    copyright: '© 2024 KCC IT Solution. All rights reserved.',
    language: 'Language',
  },
  ja: {
    company: 'KCC AIソリューション',
    tagline: 'AIで日本企業のビジネスを変革。',
    services: {
      title: 'サービス',
      items: ['AIチャットボット', '文書処理', 'ワークフロー自動化', '予測分析', '品質管理', 'カスタムソリューション'],
    },
    company_links: {
      title: '会社情報',
      items: ['会社概要', '導入事例', '導入プロセス', 'ブログ', 'お問い合わせ'],
    },
    legal: {
      title: '法的情報',
      items: ['プライバシーポリシー', '利用規約', 'Cookieポリシー'],
    },
    copyright: '© 2024 KCC IT Solution. All rights reserved.',
    language: '言語',
  },
};

export default function Footer({ lang }: FooterProps) {
  const c = content[lang];

  return (
    <footer className="bg-[var(--color-accent)] text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-orange flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl">
                KCC<span className="text-[var(--color-primary)]">AI</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              {c.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <span>𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <span>in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                <span>📘</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{c.services.title}</h4>
            <ul className="space-y-2">
              {c.services.items.map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-white/70 hover:text-[var(--color-primary)] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">{c.company_links.title}</h4>
            <ul className="space-y-2">
              {c.company_links.items.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-[var(--color-primary)] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">{c.legal.title}</h4>
            <ul className="space-y-2">
              {c.legal.items.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-[var(--color-primary)] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">{c.copyright}</p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span>{c.language}:</span>
            <span className="text-white">🇯🇵 日本語</span>
            <span>/</span>
            <span className="text-white">🇺🇸 English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
