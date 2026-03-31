import { useEffect, useRef } from 'react';
import { Package, BarChart3, RefreshCw, Flag, Globe } from 'lucide-react';

interface UseCasesProps {
  darkMode: boolean;
}

const WORKFLOWS = [
  {
    icon: Package,
    emoji: '1️⃣',
    number: '01',
    title: 'Quick Single-Item Quotation',
    scenario: 'A customer emails asking for the price of one specific product or service.',
    steps: [
      'AI detects the product mention in the email',
      'Matches product to your catalog instantly',
      'Pulls current pricing including customer-specific rates',
      'Generates a clean, simple quotation email',
      'Draft ready for review in under 60 seconds',
    ],
    bestFor: 'Standard pricing inquiries, catalog products, service quotes',
    timeSaved: '15-20 min per quote',
    color: 'from-blue-500 to-blue-600',
    bgGlow: 'rgba(59,130,246,0.15)',
  },
  {
    icon: BarChart3,
    emoji: '📊',
    number: '02',
    title: 'Complex Multi-Line Quotation',
    scenario: 'A buyer sends a list of 10, 50, or 200+ items they need quoted — via email body, attached PDF, or Excel spreadsheet.',
    steps: [
      'AI extracts all line items from any format',
      'Matches each item to your product catalog',
      'Applies quantity-based pricing for each line',
      'Calculates subtotals, discounts, and grand total',
      'Flags unmatched items for manual review',
    ],
    bestFor: 'Wholesale orders, project-based procurement, distributor & manufacturer requests',
    timeSaved: '45-90 min per quote',
    color: 'from-violet-500 to-violet-600',
    bgGlow: 'rgba(139,92,246,0.15)',
  },
  {
    icon: RefreshCw,
    emoji: '🔄',
    number: '03',
    title: 'Returning Customer Quick Quote',
    scenario: 'An existing customer requests updated pricing on items they have ordered before.',
    steps: [
      'AI recognizes customer from email address and history',
      'Pulls previous order details and pricing',
      'Applies current pricing or contract rates',
      'Highlights any price changes since last order',
      'Generates quote with customer\'s preferred format',
    ],
    bestFor: 'Ongoing supplier relationships, contract customers, subscription renewals',
    timeSaved: '20-30 min per quote',
    color: 'from-emerald-500 to-emerald-600',
    bgGlow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: Flag,
    emoji: '🏁',
    number: '04',
    title: 'Time-Sensitive Bid Quotation',
    scenario: 'A formal RFQ arrives with a deadline, specific format requirements, and detailed specifications.',
    steps: [
      'AI detects deadline urgency and prioritizes processing',
      'Extracts all specifications and compliance requirements',
      'Generates quotation matching requested format',
      'Includes required certifications and documentation references',
      'Alerts team about approaching deadline',
    ],
    bestFor: 'Government tenders, institutional procurement, competitive bids',
    timeSaved: '1-3 hours per bid',
    color: 'from-orange-500 to-orange-600',
    bgGlow: 'rgba(249,115,22,0.15)',
  },
  {
    icon: Globe,
    emoji: '🌍',
    number: '05',
    title: 'Multi-Currency International Quote',
    scenario: 'An overseas customer requests pricing in their local currency with international shipping terms.',
    steps: [
      'AI detects customer language and region',
      'Converts pricing to requested currency with live rates',
      'Calculates international shipping and duties estimates',
      'Applies appropriate incoterms',
      'Generates quotation in customer\'s language',
    ],
    bestFor: 'Export businesses, global suppliers, international trade',
    timeSaved: '30-60 min per quote',
    color: 'from-pink-500 to-pink-600',
    bgGlow: 'rgba(236,72,153,0.15)',
  },
];

export default function UseCases({ darkMode }: UseCasesProps) {
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
      id="use-cases"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-300'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center max-w-3xl mx-auto mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
              darkMode ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            📋 USE CASES
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Quotation Workflows for{' '}
            <span className="gradient-text">Every Business Scenario</span>
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether you handle simple single-item pricing requests or complex multi-line RFQs with technical specifications,{' '}
            RFQ AutoPilot's{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
              RFQ automation software
            </a>{' '}
            adapts to your workflow — from small businesses to large manufacturers and distributors.
          </p>
        </div>

        {/* SEO industry callout */}
        <div className={`reveal mb-10 p-5 rounded-2xl border text-sm leading-relaxed ${darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500 shadow-sm'}`}>
          <span className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Industry coverage: </span>
          RFQ AutoPilot is purpose-built for{' '}
          <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>manufacturers</a>,{' '}
          <a href="https://rfqautopilot.com/rfq-software-for-distributors" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>distributors</a>,{' '}
          <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>export companies</a>,{' '}
          <a href="https://rfqautopilot.com/rfq-software-small-business" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>small businesses</a>, and{' '}
          <a href="https://rfqautopilot.com/procurement-chrome-extension" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>procurement teams</a>.
          {' '}It supports quality workflows aligned with{' '}
          <a href="https://www.iso.org/iso-9001-quality-management.html" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>ISO 9001</a>,{' '}
          <a href="https://www.sae.org/standards/content/as9100d/" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>AS9100D</a>,{' '}
          <a href="https://www.iatfglobaloversight.org/" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>IATF 16949</a>, and{' '}
          <a href="https://www.nist.gov/mep" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>NIST MEP</a>{' '}
          procurement standards, handling complex{' '}
          <a href="https://en.wikipedia.org/wiki/Bill_of_materials" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 hover:no-underline ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Bill of Materials (BOM)</a>{' '}
          quote requests with full traceability.
        </div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {WORKFLOWS.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <div
                key={workflow.number}
                className={`reveal reveal-delay-${(index % 3) + 1} card-hover relative rounded-3xl p-7 border overflow-hidden group ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm shadow-slate-200/50'
                }`}
              >
                {/* Glow effect */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: workflow.bgGlow }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${workflow.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      Workflow {workflow.number}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {workflow.title}
                  </h3>

                  <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <em>{workflow.scenario}</em>
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {workflow.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <div
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${workflow.color}`}
                        />
                        <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`p-3 rounded-xl border ${
                      darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className={`text-xs font-semibold ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          Best for
                        </p>
                        <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          {workflow.bestFor}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className={`text-xs font-semibold ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          Time saved
                        </p>
                        <p className={`text-sm font-bold mt-0.5 bg-gradient-to-r ${workflow.color} bg-clip-text text-transparent`}>
                          {workflow.timeSaved}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
