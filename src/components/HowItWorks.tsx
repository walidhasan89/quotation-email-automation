import { useEffect, useRef } from 'react';
import { MailSearch, Search, Sparkles, Rocket, Timer } from 'lucide-react';

interface HowItWorksProps {
  darkMode: boolean;
}

const STEPS = [
  {
    number: '01',
    icon: MailSearch,
    emoji: '📥',
    title: 'AI Scans Your Inbox for Quote Requests',
    description:
      "The moment an email arrives, RFQ AutoPilot's AI scans the subject line, body text, and attachments to determine whether it contains a request for quotation. Our Gmail Chrome extension for sales automatically identifies RFQs even when customers use informal language like 'can you send pricing' or 'need a quote on these items.' No manual tagging or forwarding required.",
    bullets: [
      'Natural language processing analyzes email intent',
      'Attachment scanner identifies PDFs, Excel files, and images',
      'Priority scoring ranks urgent requests higher',
      'Duplicate detection prevents processing the same RFQ twice',
      'Notification alerts your team when a new RFQ is detected',
    ],
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(59,130,246,0.3)',
  },
  {
    number: '02',
    icon: Search,
    emoji: '🔍',
    title: 'AI Extracts Requirements and Matches Your Products',
    description:
      'Once an RFQ is detected, our AI RFQ processing tool extracts every relevant detail — product names, part numbers, quantities, specifications, delivery requirements, and special instructions — including RFQ data extraction from PDF attachments and Excel files. The AI then matches these requirements against your product catalog and pricing database automatically.',
    bullets: [
      'Line items parsed from email body, tables, and attachments',
      'Fuzzy matching connects customer descriptions to your SKUs',
      'Quantity and unit validation checks for accuracy',
      'Historical pricing pulled for repeat customers',
      'Missing information flagged for your review before quoting',
    ],
    color: 'from-violet-500 to-violet-600',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    number: '03',
    icon: Sparkles,
    emoji: '✨',
    title: 'Professional Quote Reply Drafted Instantly',
    description:
      "RFQ AutoPilot's automated quotation response engine builds a complete, professional quotation email using your branding, pricing rules, terms, and preferred format. The AI applies customer-specific discounts, calculates totals, adds delivery timelines, and formats everything into a polished reply ready for your approval.",
    bullets: [
      'Your quotation template populated with extracted data',
      'Pricing rules applied including volume discounts and customer tiers',
      'Delivery dates calculated based on inventory and lead times',
      'Terms and conditions appended automatically',
      'Professional formatting with your company branding',
    ],
    color: 'from-emerald-500 to-emerald-600',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    number: '04',
    icon: Rocket,
    emoji: '🚀',
    title: 'One-Click Review and Send from Your Inbox',
    description:
      'The finished quotation email appears as a draft reply in your Gmail or Outlook inbox. Review the quote, make any adjustments, and hit send. Your customer receives a professional quotation in minutes — not hours or days. You maintain full control while eliminating 90% of the manual work.',
    bullets: [
      'Draft placed in your inbox thread for seamless conversation flow',
      'Editable fields allow quick price or quantity adjustments',
      'Approval workflow routes high-value quotes to managers',
      'Sent quote tracked for follow-up reminders',
      'CRM updated automatically with quote details',
    ],
    color: 'from-orange-500 to-orange-600',
    glow: 'rgba(249,115,22,0.3)',
  },
];

export default function HowItWorks({ darkMode }: HowItWorksProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            darkMode ? 'bg-blue-600' : 'bg-blue-300'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-8 ${
            darkMode ? 'bg-violet-700' : 'bg-violet-200'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
              darkMode
                ? 'bg-blue-950/60 text-blue-300 border border-blue-500/20'
                : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}
          >
            ⚙️ HOW IT WORKS
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            How Automated Quotation Response Works —{' '}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot transforms your inbox into an intelligent quoting machine. Here is exactly how the{' '}
            <a
              href="https://rfqautopilot.com/quotation-email-automation"
              className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
              quotation reply automation
            </a>{' '}
            process works from the moment an RFQ lands in your email to the second a professional quote leaves your outbox.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-20">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${index + 1} flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-6xl font-black opacity-10 leading-none ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                      style={{ boxShadow: `0 8px 24px ${step.glow}` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-base leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {step.description}
                  </p>

                  <div
                    className={`p-5 rounded-xl border ${
                      darkMode
                        ? 'bg-slate-900/60 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                        darkMode ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      What happens behind the scenes
                    </p>
                    <ul className="space-y-2">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <div
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${step.color}`}
                          />
                          <span
                            className={`text-sm ${
                              darkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Card */}
                <div className="flex-1 max-w-md w-full">
                  <div
                    className={`card-hover relative rounded-3xl p-8 border overflow-hidden ${
                      darkMode
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'
                    }`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${step.color}`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl">{step.emoji}</span>
                        <span
                          className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}
                        >
                          Step {step.number}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div
                          className={`h-3 rounded-full w-3/4 ${
                            darkMode ? 'bg-slate-700' : 'bg-slate-100'
                          }`}
                        />
                        <div
                          className={`h-3 rounded-full w-full ${
                            darkMode ? 'bg-slate-700' : 'bg-slate-100'
                          }`}
                        />
                        <div
                          className={`h-3 rounded-full w-2/3 ${
                            darkMode ? 'bg-slate-700' : 'bg-slate-100'
                          }`}
                        />

                        <div
                          className={`mt-4 p-4 rounded-xl border ${
                            darkMode
                              ? 'bg-slate-800/50 border-slate-700'
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}
                            />
                            <div
                              className={`h-2.5 rounded-full w-24 ${
                                darkMode ? 'bg-slate-600' : 'bg-slate-200'
                              }`}
                            />
                          </div>
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-2 mt-2">
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  darkMode ? 'bg-slate-600' : 'bg-slate-300'
                                }`}
                              />
                              <div
                                className={`h-2 rounded-full ${
                                  darkMode ? 'bg-slate-700' : 'bg-slate-200'
                                }`}
                                style={{ width: `${60 + i * 10}%` }}
                              />
                            </div>
                          ))}
                        </div>

                        <div
                          className="flex items-center gap-2 mt-3 p-3 rounded-lg"
                          style={{
                            background: darkMode
                              ? `linear-gradient(135deg, ${step.glow.replace('0.3', '0.15')}, transparent)`
                              : `linear-gradient(135deg, ${step.glow.replace('0.3', '0.08')}, transparent)`,
                          }}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}
                          />
                          <span
                            className={`text-xs font-semibold ${
                              darkMode ? 'text-blue-300' : 'text-blue-700'
                            }`}
                          >
                            Processing complete ✓
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Callout */}
        <div className="reveal mt-20 text-center space-y-4">
          <div
            className={`inline-flex items-center gap-3 px-8 py-5 rounded-2xl border ${
              darkMode
                ? 'bg-blue-950/40 border-blue-500/20'
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <Timer className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <p
              className={`text-base font-semibold ${
                darkMode ? 'text-blue-200' : 'text-blue-800'
              }`}
            >
              ⏱️ Total time from RFQ received to quote sent:{' '}
              <strong className="gradient-text text-lg">3-5 minutes</strong>{' '}
              <span
                className={`font-normal ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                (vs. 45-90 minutes manually)
              </span>
            </p>
          </div>
          {/* SEO contextual links */}
          <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Works as a{' '}
            <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}>
              Gmail Chrome extension for sales
            </a>
            {' '}and as an{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'}`}>
              Outlook add-in for RFQ
            </a>
            {' '}processing — no separate application needed.
          </p>
        </div>
      </div>
    </section>
  );
}
