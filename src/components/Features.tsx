import { useEffect, useRef } from 'react';
import { Building2, DollarSign, FileText, MessageSquare, BookOpen } from 'lucide-react';

interface FeaturesProps {
  darkMode: boolean;
}

const CUSTOMIZATION_AREAS = [
  {
    icon: Building2,
    emoji: '🏢',
    title: 'Company Branding & Visual Identity',
    result: 'Every quotation email looks professionally branded and consistent, building buyer confidence.',
    options: [
      'Upload your company logo and brand colors',
      'Set custom email signatures for each team member',
      'Define header and footer layouts',
      'Apply consistent fonts and formatting',
      'Add promotional banners or seasonal messaging',
    ],
    color: 'from-blue-500 to-blue-600',
    bgLight: 'from-blue-50 to-blue-100/50',
    bgDark: 'from-blue-950/40 to-blue-900/20',
    border: 'border-blue-200',
    borderDark: 'border-blue-800/40',
  },
  {
    icon: DollarSign,
    emoji: '💲',
    title: 'Flexible Pricing Presentation',
    result: 'Present pricing in the format your customers expect, reducing back-and-forth clarification emails.',
    options: [
      'Line item pricing with individual totals',
      'Tiered pricing tables showing volume discounts',
      'Bundle pricing with package savings highlighted',
      'Currency formatting for international quotes',
      'Tax display options (inclusive, exclusive, by region)',
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgLight: 'from-emerald-50 to-emerald-100/50',
    bgDark: 'from-emerald-950/40 to-emerald-900/20',
    border: 'border-emerald-200',
    borderDark: 'border-emerald-800/40',
  },
  {
    icon: FileText,
    emoji: '📋',
    title: 'Automated Terms, Conditions & Compliance',
    result: 'Never forget critical terms again. Every quote includes the right legal and commercial language automatically.',
    options: [
      'Payment terms (Net 30, Net 60, custom)',
      'Delivery terms and incoterms',
      'Warranty and return policies',
      'Quote validity periods',
      'Minimum order requirements',
    ],
    color: 'from-violet-500 to-violet-600',
    bgLight: 'from-violet-50 to-violet-100/50',
    bgDark: 'from-violet-950/40 to-violet-900/20',
    border: 'border-violet-200',
    borderDark: 'border-violet-800/40',
  },
  {
    icon: MessageSquare,
    emoji: '💬',
    title: 'Professional Tone That Matches Your Voice',
    result: 'Automated quotation responses feel personal and human, not robotic or templated.',
    options: [
      'Formal, semi-formal, or friendly tone settings',
      'Custom greeting and closing phrases',
      'Language selection for international customers',
      'Personalization tokens (customer name, company)',
      'Upsell and cross-sell suggestion tone',
    ],
    color: 'from-orange-500 to-orange-600',
    bgLight: 'from-orange-50 to-orange-100/50',
    bgDark: 'from-orange-950/40 to-orange-900/20',
    border: 'border-orange-200',
    borderDark: 'border-orange-800/40',
  },
  {
    icon: BookOpen,
    emoji: '📚',
    title: 'Create Templates for Every Scenario',
    result: 'The right template is applied automatically based on RFQ type, customer segment, or product category.',
    options: [
      'Standard single-product quote',
      'Multi-line item quotation',
      'Rush order pricing template',
      'Repeat customer reorder template',
      'Government/institutional format',
    ],
    color: 'from-pink-500 to-pink-600',
    bgLight: 'from-pink-50 to-pink-100/50',
    bgDark: 'from-pink-950/40 to-pink-900/20',
    border: 'border-pink-200',
    borderDark: 'border-pink-800/40',
  },
];

export default function Features({ darkMode }: FeaturesProps) {
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
      id="features"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-8 ${
            darkMode ? 'bg-violet-600' : 'bg-violet-200'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
              darkMode ? 'bg-violet-950/60 text-violet-300 border border-violet-500/20' : 'bg-violet-50 text-violet-700 border border-violet-200'
            }`}
          >
            🎨 TEMPLATE CUSTOMIZATION
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Customize Every Quotation Email to{' '}
            <span className="gradient-text">Match Your Brand</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Your quotation emails represent your company. Our{' '}
            <a href="https://rfqautopilot.com/ai-rfq-generator" className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              AI RFQ generator
            </a>{' '}
            and{' '}
            <a href="https://rfqautopilot.com/rfq-email-management-tool" className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              RFQ email management tool
            </a>{' '}
            give you complete control over branding, formatting, pricing presentation, terms, and tone — so every automated quote looks like your best sales rep wrote it personally.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CUSTOMIZATION_AREAS.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`reveal reveal-delay-${index + 1} card-hover rounded-3xl p-7 border relative overflow-hidden group ${
                  darkMode
                    ? `bg-gradient-to-br ${area.bgDark} ${area.borderDark}`
                    : `bg-gradient-to-br ${area.bgLight} ${area.border}`
                }`}
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${area.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl">{area.emoji}</span>
                </div>

                <h3
                  className={`text-lg font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {area.title}
                </h3>

                <ul className="space-y-2 mb-5">
                  {area.options.map((option) => (
                    <li key={option} className="flex items-start gap-2.5">
                      <div
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${area.color}`}
                      />
                      <span
                        className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                      >
                        {option}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Result */}
                <div
                  className={`mt-auto pt-4 border-t ${
                    darkMode ? 'border-slate-700/50' : 'border-white/60'
                  }`}
                >
                  <p
                    className={`text-xs font-semibold leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    <strong className={`${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Result:{' '}
                    </strong>
                    {area.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? 'border-blue-500/50 text-blue-300 hover:bg-blue-950/50'
                : 'border-blue-300 text-blue-700 hover:bg-blue-50'
            }`}
          >
            See sample quotation templates — View Templates →
          </a>
        </div>
      </div>
    </section>
  );
}
