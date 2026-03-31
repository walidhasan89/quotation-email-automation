import { useEffect, useRef } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  darkMode: boolean;
}

const BEFORE_STEPS = [
  { time: '0:00', activity: 'RFQ email arrives in inbox' },
  { time: '0:00–2:00', activity: 'Read and understand the request' },
  { time: '2:00–8:00', activity: 'Open attachment, identify line items' },
  { time: '8:00–15:00', activity: 'Switch to ERP/spreadsheet, look up each product' },
  { time: '15:00–25:00', activity: 'Check pricing, calculate discounts, compute totals' },
  { time: '25:00–35:00', activity: 'Open email, type quotation reply manually' },
  { time: '35:00–42:00', activity: 'Format table, add terms, proofread' },
  { time: '42:00–45:00', activity: 'Attach documents, double-check numbers' },
  { time: '45:00–47:00', activity: 'Send and log in CRM' },
];

const AFTER_STEPS = [
  { time: '0:00', activity: 'RFQ email arrives in inbox' },
  { time: '0:01', activity: 'AI detects RFQ and begins extraction' },
  { time: '0:30', activity: 'All data extracted, products matched, pricing applied' },
  { time: '1:00', activity: 'Professional quotation email drafted in your inbox' },
  { time: '1:00–3:00', activity: 'You review the quote, make any adjustments' },
  { time: '3:00–4:00', activity: 'Click send — quote delivered' },
];

const BEFORE_PAINS = [
  'Context switching between 4-5 applications',
  'Copy-paste errors between systems',
  'Inconsistent formatting across team members',
  'Forgotten terms or missing line items',
  'Customer waiting 2-4 hours (or longer) for response',
  'Repetitive work draining sales team energy',
];

const AFTER_BENEFITS = [
  'Everything happens inside your inbox',
  'Zero context switching',
  'Consistent, professional formatting every time',
  'All terms and conditions included automatically',
  'Customer receives quote in minutes',
  'Sales team focuses on relationships, not data entry',
];

const COMPARISON_ROWS = [
  { factor: 'Time per quote', before: '47 minutes', after: '4 minutes' },
  { factor: 'Quotes per day (per person)', before: '8-10', after: '60-80' },
  { factor: 'Error rate', before: '8-12%', after: '<1.5%' },
  { factor: 'Formatting consistency', before: 'Varies by person', after: '100% consistent' },
  { factor: 'Terms included', before: 'Sometimes forgotten', after: 'Always included' },
  { factor: 'Customer wait time', before: '2-8 hours', after: '5-15 minutes' },
  { factor: 'After-hours capability', before: 'None', after: 'AI drafts ready for morning review' },
  { factor: 'Team satisfaction', before: 'Low (repetitive work)', after: 'High (strategic work)' },
];

export default function BeforeAfter({ darkMode }: BeforeAfterProps) {
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
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
              darkMode ? 'bg-orange-950/60 text-orange-300 border border-orange-500/20' : 'bg-orange-50 text-orange-700 border border-orange-200'
            }`}
          >
            🔄 BEFORE / AFTER
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Manual Typing vs.{' '}
            <span className="gradient-text">One-Click Quotation Reply</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Experience the transformation from painful manual quoting to effortless automated quotation emails.
          </p>
        </div>

        {/* Side by side before/after */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* BEFORE */}
          <div
            className={`rounded-3xl p-7 border ${
              darkMode ? 'bg-red-950/20 border-red-900/40' : 'bg-red-50 border-red-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-red-500">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                  BEFORE
                </span>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  The Old Way — 47 Minutes Per Quote
                </h3>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2 mb-6">
              {BEFORE_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-3 rounded-xl ${
                    i === BEFORE_STEPS.length - 1
                      ? darkMode ? 'bg-red-900/20' : 'bg-red-100/80'
                      : darkMode ? 'bg-slate-800/50' : 'bg-white/80'
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold whitespace-nowrap ${
                      darkMode ? 'text-red-400' : 'text-red-600'
                    }`}
                  >
                    {step.time}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {step.activity}
                  </span>
                </div>
              ))}
            </div>

            <div className={`text-sm font-bold mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Pain Points:
            </div>
            <ul className="space-y-2">
              {BEFORE_PAINS.map((pain) => (
                <li key={pain} className="flex items-start gap-2">
                  <span className="text-red-500 text-base flex-shrink-0">😤</span>
                  <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pain}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div
            className={`rounded-3xl p-7 border ${
              darkMode ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50 border-emerald-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-emerald-500">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  AFTER
                </span>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  The New Way — 4 Minutes Per Quote
                </h3>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2 mb-6">
              {AFTER_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-3 rounded-xl ${
                    i === AFTER_STEPS.length - 1
                      ? darkMode ? 'bg-emerald-900/20' : 'bg-emerald-100/80'
                      : darkMode ? 'bg-slate-800/50' : 'bg-white/80'
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold whitespace-nowrap ${
                      darkMode ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  >
                    {step.time}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {step.activity}
                  </span>
                </div>
              ))}
            </div>

            <div className={`text-sm font-bold mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Benefits:
            </div>
            <ul className="space-y-2">
              {AFTER_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="text-emerald-500 text-base flex-shrink-0">😊</span>
                  <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div
          className={`reveal overflow-hidden rounded-2xl mb-10 ${
            darkMode
              ? 'bg-slate-900/80 ring-1 ring-slate-700/60 shadow-2xl shadow-slate-950/60'
              : 'bg-white border border-slate-200 shadow-sm'
          }`}
        >
          {/* Table Header Bar */}
          <div
            className={`px-6 py-4 border-b ${
              darkMode
                ? 'bg-slate-800/70 border-slate-700/60'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Side-by-Side Comparison
            </h3>
          </div>
          <div className={`overflow-x-auto ${darkMode ? 'bg-transparent' : 'bg-white'}`}>
            <table className="w-full">
              <thead>
                <tr
                  className={
                    darkMode
                      ? 'bg-slate-800/50 border-b border-slate-700/50'
                      : 'bg-slate-100'
                  }
                >
                  <th
                    className={`text-left px-6 py-3 text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Factor
                  </th>
                  <th
                    className={`text-left px-6 py-3 text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-red-400' : 'text-red-600'
                    }`}
                  >
                    Manual Process
                  </th>
                  <th
                    className={`text-left px-6 py-3 text-xs font-bold uppercase tracking-wider ${
                      darkMode ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  >
                    RFQ AutoPilot
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.factor}
                    className={`transition-colors duration-200 ${
                      darkMode
                        ? `border-b border-slate-700/40 ${
                            i % 2 === 0
                              ? 'bg-slate-900/60'
                              : 'bg-slate-800/25'
                          } hover:bg-slate-700/40`
                        : `border-b border-slate-100 ${
                            i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                          } hover:bg-blue-50/50`
                    }`}
                  >
                    <td
                      className={`px-6 py-4 text-sm font-medium ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {row.factor}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${
                        darkMode ? 'text-red-400/90' : 'text-red-600'
                      }`}
                    >
                      {row.before}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm font-semibold ${
                        darkMode ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    >
                      {row.after}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonial */}
        <div className="reveal">
          <div
            className={`rounded-2xl p-7 border-l-4 border-blue-500 ${
              darkMode ? 'bg-blue-950/20 border-blue-900/40' : 'bg-blue-50 border-blue-200'
            }`}
          >
            <p
              className={`text-lg font-medium italic leading-relaxed mb-4 ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              "We went from dreading Monday morning RFQ pileups to actually looking forward to them. What used to take our team until Wednesday is now done by 10 AM Monday."
            </p>
            <p className={`text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              — Sales Director, B2B Electronics Distributor
            </p>
          </div>
        </div>

        {/* SEO note */}
        <div className={`reveal mt-8 p-4 rounded-xl border text-sm leading-relaxed ${darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
          💡 The automated process also handles{' '}
          <a href="https://rfqautopilot.com/rfq-data-extraction-from-pdf" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            RFQ data extraction from PDF
          </a>{' '}
          attachments and Excel files — no manual copy-paste required.
        </div>

        {/* CTA */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white shadow-lg shadow-blue-500/25"
          >
            <span>See the Before/After in a Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
