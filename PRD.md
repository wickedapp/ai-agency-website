# AI Agency Website — Product Requirements Document

**Project:** AI Agency Website for Japan Corporate Clients
**Owner:** T.G.R Jane / KCC IT Solution
**Date:** 2026-02-06
**Status:** Draft

---

## 1. Executive Summary

A modern, bilingual (English/Japanese) AI agency website targeting Japanese corporate clients. The site positions KCC as a trusted AI transformation partner — showcasing concrete, data-backed case studies on cost reduction, efficiency gains, and productivity improvements through AI and automation.

**Design:** Orange + White color scheme, modern/clean aesthetic, professional yet approachable.

---

## 2. Target Audience

| Segment | Description |
|---------|-------------|
| **Primary** | Japanese mid-to-large enterprises (100-5000+ employees) |
| **Decision Makers** | CTOs, CIOs, COOs, Digital Transformation leads |
| **Industries** | Manufacturing, Finance, Retail, Logistics, Healthcare, Professional Services |
| **Pain Points** | Rising labor costs, aging workforce, operational inefficiency, slow digital adoption |

---

## 3. Core Value Proposition

> "Transform your business with AI — proven results, measurable ROI, Japanese market expertise."

Key messaging pillars:
1. **Cost Reduction** — Automate repetitive tasks, reduce labor dependency
2. **Efficiency** — Streamline workflows, eliminate bottlenecks
3. **Productivity** — Augment human capability, faster decision-making
4. **Japan-Specific** — Understand Japanese business culture, compliance (個人情報保護法), local integration

---

## 4. Site Structure & Pages

### 4.1 Landing Page (Hero)
- Bold hero with animated stats counter (e.g., "40% average cost reduction")
- Tagline in EN/JP
- CTA: "See How AI Can Transform Your Business" → scrolls to case studies
- Trust badges: client logos, certifications, partnership logos

### 4.2 Services Page
Showcase AI/Automation services with concrete benefits:

| Service | Description | Impact Example |
|---------|-------------|----------------|
| **AI Chatbot & Customer Support** | 24/7 multilingual support automation | 60% reduction in support tickets, ¥15M/year saved |
| **Document Processing (OCR + AI)** | Automated invoice, contract, form processing | 80% faster processing, 95% accuracy |
| **Workflow Automation (RPA + AI)** | End-to-end business process automation | 50% reduction in manual tasks |
| **Predictive Analytics** | Demand forecasting, maintenance prediction | 30% reduction in inventory costs |
| **AI-Powered Quality Control** | Visual inspection, defect detection | 99.2% detection rate, 40% fewer defects shipped |
| **Custom AI Solutions** | Tailored models for specific business needs | ROI within 6-12 months |

### 4.3 Case Studies / Results Page (CRITICAL)
**This is the money page.** Each case study follows this structure:

#### Template:
- **Client:** Industry type (anonymized or named)
- **Challenge:** What problem they faced
- **Solution:** What we implemented
- **Results:** Hard numbers — cost saved, time reduced, productivity gained
- **Timeline:** How long to implement
- **Visual:** Before/After comparison chart

#### Example Case Studies to Feature:

**Case Study 1: Manufacturing — Quality Control AI**
- Challenge: Manual visual inspection — 15 inspectors, 3% defect escape rate
- Solution: AI-powered visual inspection system
- Results: **¥24M/year saved**, defect escape rate → 0.3%, 12 inspectors redeployed
- Timeline: 8 weeks implementation

**Case Study 2: Financial Services — Document Automation**
- Challenge: 200+ hours/month processing loan applications manually
- Solution: OCR + AI document extraction + automated routing
- Results: **70% faster processing**, **¥8M/year labor cost reduction**, error rate 5% → 0.5%
- Timeline: 6 weeks

**Case Study 3: Retail — Customer Support Chatbot**
- Challenge: 5,000+ monthly support inquiries, 8-hour response time
- Solution: AI chatbot with Japanese NLP, escalation to human for complex cases
- Results: **65% of inquiries resolved automatically**, response time → 30 seconds, **¥12M/year saved**
- Timeline: 4 weeks

**Case Study 4: Logistics — Demand Forecasting**
- Challenge: Overstocking causing ¥50M/year in waste
- Solution: AI demand prediction model using historical + market data
- Results: **35% reduction in overstock**, **¥18M/year saved**, forecast accuracy 72% → 94%
- Timeline: 10 weeks

**Case Study 5: HR — Recruitment Automation**
- Challenge: Screening 500+ resumes monthly, 40 hours/week HR time
- Solution: AI resume screening + candidate ranking
- Results: **80% reduction in screening time**, better candidate-job matching, **¥6M/year saved**
- Timeline: 3 weeks

### 4.4 ROI Calculator (Interactive)
- User inputs: industry, number of employees, current process hours
- Output: Estimated cost savings, efficiency gains, payback period
- CTA: "Get a detailed analysis for your business"

### 4.5 About Us
- Company story / mission
- Team highlights
- Japan market expertise & cultural understanding
- Partnerships & certifications

### 4.6 Process / How We Work
1. **Discovery** — Free consultation, understand your challenges
2. **Assessment** — AI readiness audit, identify opportunities
3. **Proposal** — Custom solution design with ROI projection
4. **Implementation** — Agile development, Japanese QA standards
5. **Support** — Ongoing optimization, 24/7 monitoring

### 4.7 Blog / Insights
- AI trends in Japan market
- Industry-specific automation guides
- Success stories and thought leadership
- SEO-optimized for Japanese business keywords

### 4.8 Contact / CTA
- Consultation booking form
- Line / WhatsApp / Phone options (Line is critical for Japan)
- Office location(s)
- Japanese language support highlighted

---

## 5. Design Specifications

### 5.1 Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Orange | `#FF6B2C` |
| Primary Dark | Deep Orange | `#E55A1B` |
| Primary Light | Light Orange | `#FFF3ED` |
| Background | White | `#FFFFFF` |
| Surface | Off-White | `#FAFAFA` |
| Text Primary | Dark Gray | `#1A1A2E` |
| Text Secondary | Medium Gray | `#6B7280` |
| Accent | Dark Navy (for contrast) | `#16213E` |

### 5.2 Typography
- **Headings:** Inter or Noto Sans JP (supports Japanese)
- **Body:** Inter / Noto Sans JP
- **Stats/Numbers:** DM Sans or Poppins (for impact)

### 5.3 Design Language
- Clean, generous whitespace
- Large stat counters with animations
- Subtle gradient overlays (white to light orange)
- Card-based layouts for services and case studies
- Micro-animations on scroll (fade-up, counter animations)
- Data visualization elements (charts, before/after bars)
- No clutter — every element serves a purpose

### 5.4 Responsive
- Mobile-first approach
- Optimized for Japanese mobile browsing habits
- Fast load times (Japan users expect <2s)

---

## 6. Key Features

### 6.1 Must-Have (MVP)
- [ ] Bilingual toggle (EN/JP)
- [ ] Hero with animated stats
- [ ] Services page with impact metrics
- [ ] 5 detailed case studies with before/after visuals
- [ ] Interactive ROI calculator
- [ ] Contact form with Line integration
- [ ] Mobile responsive
- [ ] SEO optimized (JP + EN keywords)

### 6.2 Nice-to-Have (Phase 2)
- [ ] Live chat widget
- [ ] Video testimonials
- [ ] Blog / CMS integration
- [ ] Client portal
- [ ] A/B testing for CTAs
- [ ] Google Analytics + conversion tracking

---

## 7. Technical Stack (Recommended)

| Component | Technology | Reason |
|-----------|-----------|--------|
| Framework | Next.js 14+ | SSR for SEO, React ecosystem |
| Styling | Tailwind CSS | Rapid development, consistent design |
| Animations | Framer Motion | Smooth scroll animations, counters |
| i18n | next-intl | Bilingual EN/JP support |
| CMS | Headless (Strapi/Sanity) | Easy content updates |
| Hosting | Vercel or Cloudflare Pages | Fast CDN, Japan edge nodes |
| Analytics | GA4 + Hotjar | Track conversions + user behavior |

---

## 8. Content Strategy

### Key Messages (English)
- "Cut operational costs by 40% with AI automation"
- "From 200 hours to 60 — AI-powered efficiency"
- "Japanese businesses trust us to deliver measurable results"

### Key Messages (Japanese)
- "AIで業務コストを40%削減"
- "200時間の作業を60時間に — AI効率化"
- "確かな実績で日本企業のDXを支援"

### SEO Keywords
- AI automation Japan / AI自動化 日本
- Business efficiency AI / 業務効率化 AI
- Cost reduction automation / コスト削減 自動化
- RPA Japan / RPA 日本
- AI consulting Tokyo / AIコンサルティング 東京

---

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| Monthly visitors | 5,000+ within 6 months |
| Consultation requests | 20+/month |
| Avg. session duration | >2 minutes |
| Bounce rate | <40% |
| Conversion rate (visit → inquiry) | >3% |

---

## 10. Timeline

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| Phase 1: Design | 1-2 weeks | Wireframes, UI mockups, content plan |
| Phase 2: Development | 2-3 weeks | Full site build, responsive, animations |
| Phase 3: Content | 1 week | Case studies, copy, translations |
| Phase 4: Launch | 1 week | Testing, SEO setup, deployment |
| **Total** | **5-7 weeks** | **Full production site** |

---

## 11. Image Assets — Nano Banana Generation Prompts

All images will be generated using Nano Banana Pro (Gemini 3 Pro Image) during development. This section defines prompts for each page/section with a consistent visual style.

### 11.1 Global Style Guide (Apply to ALL prompts)

**Base Style Suffix (append to every prompt):**
```
Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio
```

**Alternate Style for Icons/Cards:**
```
Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio
```

---

### 11.2 Landing Page (Hero Section)

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Hero Background** | `hero-bg.png` | Abstract visualization of AI neural network connections transforming into business growth arrows, flowing data streams forming an upward trajectory, subtle circuit patterns, confident forward motion. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Hero Illustration** | `hero-main.png` | Professional Japanese business team collaborating with AI visualization, holographic data dashboards floating around them, confident executives reviewing analytics, warm collaborative atmosphere, abstract AI assistant represented as elegant geometric light. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Stats Counter BG** | `stats-bg.png` | Abstract flowing data visualization, numbers and percentages transforming into upward charts, subtle grid pattern, dynamic but clean composition. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

---

### 11.3 Services Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Services Hero** | `services-hero.png` | Isometric view of interconnected AI services, modular blocks representing different automation solutions connected by glowing data streams, organized grid layout showing business ecosystem. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

#### Service Card Icons (1:1 ratio)

| Service | Filename | Prompt |
|---------|----------|--------|
| **AI Chatbot** | `icon-chatbot.png` | Friendly chat bubble with AI brain pattern inside, conversation flow visualization, warm and approachable. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Document Processing** | `icon-ocr.png` | Stack of documents transforming into organized digital data, scanning light beam effect, paper to digital conversion visualization. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Workflow Automation** | `icon-rpa.png` | Interconnected gear wheels with flowing automation arrows, process loop visualization, efficiency in motion. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Predictive Analytics** | `icon-analytics.png` | Crystal ball merged with data chart, trend line projecting into future, forecasting visualization with upward trajectory. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Quality Control** | `icon-qc.png` | Magnifying glass with AI eye scanning a checkmark, precision inspection visualization, quality assurance symbol. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Custom Solutions** | `icon-custom.png` | Puzzle pieces assembling into a lightbulb, customization and innovation visualization, tailored solution metaphor. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |

---

### 11.4 Case Studies Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Case Studies Hero** | `cases-hero.png` | Abstract success visualization, upward trending graphs emerging from real business scenarios, transformation journey from chaos to order, results-focused imagery. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

#### Case Study Illustrations

| Case Study | Filename | Prompt |
|------------|----------|--------|
| **Manufacturing QC** | `case-manufacturing.png` | Modern Japanese factory floor with AI vision system scanning products on conveyor belt, robotic inspection arm with glowing scanner, quality assurance automation visualization, precision and efficiency. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Finance Document** | `case-finance.png` | Financial documents flowing through AI processing pipeline, invoices and forms transforming into organized digital records, automated routing visualization, paper stacks reducing dramatically. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Retail Chatbot** | `case-retail.png` | Friendly AI chatbot interface helping multiple customers simultaneously, chat bubbles flowing smoothly, happy customer service visualization, 24/7 support representation with moon and sun. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Logistics Forecasting** | `case-logistics.png` | Warehouse with AI-optimized inventory, prediction charts floating above organized shelves, supply chain visualization with optimal stock levels, efficiency and waste reduction imagery. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **HR Recruitment** | `case-hr.png` | AI screening resumes from large pile, top candidates highlighted and rising to the top, talent matching visualization, efficient hiring funnel representation. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

#### Before/After Comparison Graphics

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Before State** | `comparison-before.png` | Stressed office worker surrounded by paper stacks, chaotic desk with overflowing documents, clock showing long hours, inefficient manual process visualization, muted colors leaning gray. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, muted gray and navy (#16213E) color palette suggesting inefficiency, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, no text or logos, 16:9 aspect ratio |
| **After State** | `comparison-after.png` | Relaxed professional at clean organized desk, AI assistant handling tasks in background, streamlined digital workflow, charts showing improvement, bright and optimistic atmosphere. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

---

### 11.5 ROI Calculator Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Calculator Hero** | `roi-hero.png` | Interactive calculator visualization with growing money plants, investment transforming into returns, coins stacking upward, positive ROI trajectory, financial growth through AI investment. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Calculator Icon** | `icon-calculator.png` | Modern calculator merged with growth chart, financial calculation visualization, ROI assessment symbol. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |

---

### 11.6 About Us Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **About Hero** | `about-hero.png` | Professional team silhouettes with Japan and global connections, bridge between AI technology and Japanese business culture, partnership and trust visualization. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Team Culture** | `about-team.png` | Diverse professional team collaborating around holographic AI interface, Japanese and international team members working together, innovation and expertise visualization. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Japan Expertise** | `about-japan.png` | Subtle Tokyo skyline silhouette with AI neural patterns overlaid, cherry blossom petals transforming into data points, Japanese cultural elements merged with technology. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

---

### 11.7 Process / How We Work Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Process Hero** | `process-hero.png` | Elegant journey visualization from initial meeting to successful launch, stepping stones across water leading to transformation, clear pathway forward. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

#### Process Step Icons

| Step | Filename | Prompt |
|------|----------|--------|
| **Discovery** | `process-1-discovery.png` | Magnifying glass examining business puzzle pieces, discovery and exploration visualization, finding opportunities. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Assessment** | `process-2-assessment.png` | Clipboard with AI readiness checklist, diagnostic scanning visualization, evaluating current state. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Proposal** | `process-3-proposal.png` | Blueprint document with lightbulb, solution design visualization, custom plan creation. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Implementation** | `process-4-implementation.png` | Gears turning with progress arrow, building and development visualization, active construction phase. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Support** | `process-5-support.png` | Handshake with circular refresh arrows, ongoing partnership visualization, continuous improvement. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |

---

### 11.8 Blog / Insights Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Blog Hero** | `blog-hero.png` | Open book transforming into digital knowledge stream, insights and ideas flowing upward, thought leadership visualization, knowledge sharing. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Blog Placeholder** | `blog-placeholder.png` | Abstract pattern with AI and business elements, generic article thumbnail, professional placeholder. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |

---

### 11.9 Contact Page

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Contact Hero** | `contact-hero.png` | Open door with warm light inviting in, welcoming gesture visualization, bridge connecting two sides, beginning of partnership imagery. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) and white (#FFFFFF) color palette with dark navy (#16213E) accents, soft gradients, generous negative space, professional Japanese corporate sensibility, subtle geometric shapes, warm and trustworthy, no text or logos, 16:9 aspect ratio |
| **Contact Icon** | `icon-contact.png` | Speech bubble with handshake inside, communication and partnership initiation visualization. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |

---

### 11.10 Miscellaneous / Global Assets

| Asset | Filename | Prompt |
|-------|----------|--------|
| **Pattern Background** | `pattern-bg.png` | Subtle geometric pattern with AI circuit elements, repeatable tile design, light and unobtrusive background texture. Style: Modern minimalist pattern, orange (#FF6B2C) at 10% opacity on white (#FFFFFF) background, simple geometric shapes, seamless tile, no text, 1:1 aspect ratio |
| **Divider Graphic** | `divider.png` | Flowing wave with data points, section separator visualization, elegant transition element. Style: Modern minimalist corporate illustration, clean vector-like aesthetic, orange (#FF6B2C) gradient fading to white, horizontal orientation, no text, 4:1 aspect ratio |
| **Loading Animation Frame** | `loading.png` | AI brain with rotating elements, processing visualization, active thinking state. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **Success State** | `icon-success.png` | Checkmark with celebration elements, task completion visualization, positive outcome. Style: Flat modern icon illustration, orange (#FF6B2C) primary with white background, simple geometric shapes, minimal detail, clean lines, corporate professional, no text, 1:1 aspect ratio |
| **CTA Button BG** | `cta-bg.png` | Subtle gradient with forward arrow elements, action-oriented background, encouraging click. Style: Modern minimalist gradient, orange (#FF6B2C) to deep orange (#E55A1B), subtle geometric shapes, horizontal orientation, no text, 3:1 aspect ratio |

---

### 11.11 Generation Checklist

| Category | Count | Status |
|----------|-------|--------|
| Hero Images (16:9) | 10 | ⬜ Pending |
| Service Icons (1:1) | 6 | ⬜ Pending |
| Case Study Illustrations (16:9) | 5 | ⬜ Pending |
| Before/After Graphics (16:9) | 2 | ⬜ Pending |
| Process Step Icons (1:1) | 5 | ⬜ Pending |
| Miscellaneous (various) | 7 | ⬜ Pending |
| **Total Assets** | **35** | ⬜ Pending |

---

### 11.12 Generation Commands Reference

**For 16:9 Hero Images (1K resolution):**
```bash
uv run /opt/homebrew/lib/node_modules/openclaw/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[PROMPT FROM TABLE]" \
  --filename "assets/[FILENAME]" \
  --resolution 1K
```

**For 1:1 Icons (1K resolution):**
```bash
uv run /opt/homebrew/lib/node_modules/openclaw/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[PROMPT FROM TABLE]" \
  --filename "assets/icons/[FILENAME]" \
  --resolution 1K
```

---

*Next step: Review this PRD, then proceed to wireframes and development.*
