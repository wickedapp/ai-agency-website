import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KCC AI Solutions | AIで業務効率化 - Transform Your Business with AI",
  description: "日本企業のAI導入を支援。コスト削減40%、業務効率化、生産性向上を実現。AI chatbot, document automation, predictive analytics, quality control. 無料相談受付中。",
  keywords: "AI automation Japan, AI自動化, 業務効率化, コスト削減, RPA, AIコンサルティング, 東京",
  openGraph: {
    title: "KCC AI Solutions | Transform Your Business with AI",
    description: "Proven AI solutions for Japanese enterprises. 40% cost reduction, measurable ROI.",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
