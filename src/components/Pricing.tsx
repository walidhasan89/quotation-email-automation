import { useEffect, useRef, useState } from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';

interface PricingProps {
  darkMode: boolean;
}

const PLANS = [
  {
    name: 'Free',
    badge: null,
    monthlyPrice: 0,
    yearlyPrice: 0,
    monthlySuffix: '',
    yearlySuffix: '',
    description: 'Perfect for trying out RFQ AutoPilot',
    cta: 'Get Started Free',
    ctaStyle: 'secondary',
    features: [
      '30 RFQs per month',
      '10 AI Credits',
      'Basic Email detection',
      'Standard Templates',
      'Analytics Dashboard',
    ],
  },
  {
    name: 'Solo',
    badge: 'Most Popular',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    // $14.99 × 12 = $179.88 → save $30.88 → 17.2% ≈ 17%
    yearlySavingPct: 17,
    yearlySavingAmt: '30.88',
    description: 'For individual sales reps who quote daily',
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
    features: [
      '300 RFQs per month',
      '100 AI Credits',
      '200 Exports',
      'Email & Chat Support',
      'Custom Template',
      '5 Quote templates/month',
    ],
  },
  {
    name: 'Pro',
    badge: 'Best Value',
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    // $29.99 × 12 = $359.88 → save $60.88 → 16.9% ≈ 17%
    yearlySavingPct: 17,
    yearlySavingAmt: '60.88',
    description: 'For growing teams with high quote volume',
    cta: 'Start Free Trial',
    ctaStyle: 'gradient',
    features: [
      'Unlimited RFQs',
      '300 AI Credits',
      'Unlimited Exports',
      'Priority Support',
      'Unlimited Quote templates',
      'Analytics Dashboard',
    ],
  },
];

export default function Pricing({ darkMode }: PricingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [yearly, setYearly] = useState(false);

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
      id="pricing"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 blur-3xl opacity-10 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}
          style={{ borderRadius: '0 0 50% 50%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
              darkMode ? 'bg-blue-950/60 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}
          >
            💰 PRICING
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Start free. Upgrade when you need more power. No surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="reveal flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setYearly(false)}
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
              !yearly
                ? darkMode
                  ? 'bg-slate-700 text-white'
                  : 'bg-white text-slate-900 shadow-sm border border-slate-200'
                : darkMode
                ? 'text-slate-400 hover:text-slate-300'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
              yearly ? 'bg-gradient-to-r from-blue-500 to-blue-600' : darkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300 ${
                yearly ? 'left-6' : 'left-0.5'
              }`}
            />
          </button>

          <button
            onClick={() => setYearly(true)}
            className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              yearly
                ? darkMode
                  ? 'bg-slate-700 text-white'
                  : 'bg-white text-slate-900 shadow-sm border border-slate-200'
                : darkMode
                ? 'text-slate-400 hover:text-slate-300'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Yearly
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                yearly
                  ? darkMode
                    ? 'bg-emerald-900/80 text-emerald-300'
                    : 'bg-emerald-100 text-emerald-700'
                  : darkMode
                  ? 'bg-emerald-900/40 text-emerald-400'
                  : 'bg-emerald-50 text-emerald-600'
              }`}
            >
              Save up to 17%
            </span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, index) => {
            const isPopular = plan.badge === 'Most Popular';
            const isBest = plan.badge === 'Best Value';
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const monthlyEquiv = plan.yearlyPrice > 0 ? (plan.yearlyPrice / 12).toFixed(2) : null;

            return (
              <div
                key={plan.name}
                className={`reveal reveal-delay-${index + 1} relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? 'ring-2 ring-blue-500 scale-105 shadow-2xl shadow-blue-500/20'
                    : isBest
                    ? darkMode
                      ? 'bg-slate-900 border border-slate-800'
                      : 'bg-white border border-slate-200 shadow-xl'
                    : darkMode
                    ? 'bg-slate-900 border border-slate-800'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {/* Popular / Best badge strip */}
                {plan.badge && (
                  <div
                    className={`text-center py-2 text-xs font-bold ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        : isBest
                        ? 'bg-gradient-to-r from-violet-500 to-violet-600 text-white'
                        : ''
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-7">
                  <div className="mb-6">
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-7">
                    <div className="flex items-end gap-1">
                      <span
                        className={`text-5xl font-black ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {price === 0 ? 'Free' : `$${price}`}
                      </span>
                      {price > 0 && (
                        <span className={`text-sm mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          /{yearly ? 'yr' : 'mo'}
                        </span>
                      )}
                    </div>

                    {yearly && price > 0 && monthlyEquiv && (
                      <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        ${monthlyEquiv}/month billed annually
                      </p>
                    )}

                    {/* Yearly savings callout */}
                    {yearly && 'yearlySavingPct' in plan && plan.yearlySavingPct && (
                      <div
                        className={`inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full text-xs font-bold ${
                          darkMode ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        🎉 Save {plan.yearlySavingPct}% — ${plan.yearlySavingAmt}/year
                      </div>
                    )}

                    {/* Monthly original price crossed out when yearly */}
                    {yearly && plan.monthlyPrice > 0 && (
                      <p className={`text-xs mt-1 line-through ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
                        ${(plan.monthlyPrice * 12).toFixed(2)}/yr without discount
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-7">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            isPopular
                              ? 'bg-blue-500'
                              : isBest
                              ? 'bg-violet-500'
                              : darkMode
                              ? 'bg-slate-700'
                              : 'bg-slate-100'
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isPopular || isBest ? 'text-white' : darkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}
                          />
                        </div>
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold transition-all duration-300 group ${
                      plan.ctaStyle === 'primary' || plan.ctaStyle === 'gradient'
                        ? 'btn-primary text-white shadow-lg shadow-blue-500/25'
                        : darkMode
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* No credit card note */}
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-6 text-center">
          {['💳 No credit card required', '🔒 Cancel anytime', '✅ 14-day free trial on paid plans'].map((item) => (
            <span key={item} className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {item}
            </span>
          ))}
        </div>

        {/* Install CTA Section */}
        <div id="install" className="reveal mt-24">
          <div
            className={`relative rounded-3xl p-10 lg:p-16 overflow-hidden border text-center ${
              darkMode
                ? 'bg-gradient-to-br from-blue-950/60 to-indigo-950/60 border-blue-800/30'
                : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
            }`}
          >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-blue-500" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-15 bg-indigo-500" />
            </div>

            <div className="relative z-10">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 ${
                  darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'
                }`}
              >
                🚀 START IN MINUTES
              </div>

              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Your Next RFQ Is Already Waiting.{' '}
                <span className="gradient-text">Quote It in 4 Minutes.</span>
              </h2>

              <p
                className={`text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Every quotation email you type manually is time your competitor uses to respond first. RFQ AutoPilot's{' '}
                <a href="https://rfqautopilot.com/quotation-email-automation" className={`underline underline-offset-2 ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}>
                  quotation email automation
                </a>{' '}
                gives you the speed advantage that wins deals. Start today — your first automated quote is free.
              </p>

              {/* Quick setup steps */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-10 max-w-2xl mx-auto">
                {[
                  { step: '1', label: 'Connect', desc: 'Link Gmail or Outlook (60 sec)' },
                  { step: '2', label: 'Configure', desc: 'Upload products & set pricing (1 hr)' },
                  { step: '3', label: 'Quote', desc: 'AI drafts your first quote' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`flex-1 p-4 rounded-2xl border ${
                      darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold flex items-center justify-center mx-auto mb-2">
                      {item.step}
                    </div>
                    <p className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.label}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto mb-10">
                {[
                  { icon: '⚡', value: '11x', label: 'Faster response' },
                  { icon: '📈', value: '34%', label: 'Higher win rate' },
                  { icon: '🎯', value: '92%', label: 'Fewer errors' },
                  { icon: '😊', value: '4.5h', label: 'Saved per rep/day' },
                  { icon: '🔄', value: '100%', label: 'Consistent quotes' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-3 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white/80 border-slate-200'
                    }`}
                  >
                    <div className="text-xl mb-1">{stat.icon}</div>
                    <div className={`text-lg font-black gradient-text`}>{stat.value}</div>
                    <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl shadow-blue-500/30"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start Free 14-Day Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Trust */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  '⭐⭐⭐⭐⭐ 4.8/5 rating',
                  '🔒 Enterprise-grade security',
                  '💳 No credit card for trial',
                  '✅ Gmail & Outlook',
                  '🏆 500+ sales teams',
                ].map((item) => (
                  <span key={item} className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item}
                  </span>
                ))}
              </div>

              {/* Guarantee */}
              <div
                className={`mt-8 p-5 rounded-2xl border text-left max-w-2xl mx-auto ${
                  darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Speed Guarantee
                    </p>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      If your average quotation reply time does not drop by at least 60% within 30 days of using RFQ AutoPilot, we will extend your trial for another 30 days free — plus provide dedicated setup assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
