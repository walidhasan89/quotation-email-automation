import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

const FAQS = [
  {
    q: 'How does the email quote generator work inside Gmail and Outlook?',
    a: 'RFQ AutoPilot installs as a browser extension for Gmail or an add-in for Outlook. It operates directly within your email interface — no separate application needed. When an RFQ email arrives, the system processes it in the background and creates a draft reply with the complete quotation. You review the draft in your normal inbox view and send it like any other email. Your customer sees a regular email from your address, not from a third-party tool.',
  },
  {
    q: 'Can I generate quotation in Gmail without switching to another tool?',
    a: "Absolutely. That is exactly what RFQ AutoPilot is designed for. You can generate quotation in Gmail without ever leaving your inbox. The AI reads the incoming RFQ, extracts data, applies your pricing, and creates a draft reply — all within Gmail. You review, edit if needed, and click send. The entire workflow happens in one tab.",
  },
  {
    q: 'Will automated replies look robotic or templated to my customers?',
    a: "No. RFQ AutoPilot generates quotation emails that match your natural communication style. You customize the tone, language, greeting, and closing. You add personalization tokens that insert customer names, reference previous interactions, and include relevant details. The result reads like a thoughtful, personally written email — because you control every element of how it sounds.",
  },
  {
    q: 'What if the AI gets a price wrong in the quotation?',
    a: "Every automated quotation is created as a draft for your review before sending. You always see the quote before your customer does. The AI applies your pricing rules exactly as configured — it does not guess or estimate prices. If a product match is uncertain, the system flags that line item in yellow so you can verify it manually. You maintain full control over every number that leaves your inbox.",
  },
  {
    q: 'Can I automate quote replies email for different product categories?',
    a: "Yes. You can create separate quotation templates and pricing rules for different product categories, divisions, or business lines. When the AI detects which category the RFQ falls into, it automatically selects the correct template, applies the right pricing structure, and includes category-specific terms. This works whether you sell industrial parts, technology products, building materials, or services.",
  },
  {
    q: 'How does the system handle RFQs that need manager approval before sending?',
    a: "RFQ AutoPilot includes a built-in approval workflow. You set thresholds such as quote value above $50,000, discount exceeding 15%, or new customer first order. When a generated quote hits any threshold, it routes to the designated approver via email notification. The approver reviews, approves, or adjusts the quote — then it returns to the sender for final delivery. The entire approval process stays within email.",
  },
  {
    q: 'Can I track which quotation emails have been opened or responded to?',
    a: "Yes. RFQ AutoPilot includes quote tracking that shows: whether the customer opened your quotation email, how many times they viewed it, whether they clicked on any attached documents, time elapsed since quote was sent, and automated follow-up reminders at intervals you set. This helps your team prioritize follow-ups on engaged prospects and re-engage those who have not opened their quotes.",
  },
  {
    q: 'Does quotation reply automation work for services, not just products?',
    a: "Yes. The system handles service quotations including hourly rate calculations, project-based pricing, milestone payment schedules, scope of work descriptions, service level agreements, and custom service packages. You configure service templates just like product templates, and the AI applies them based on the type of request detected.",
  },
  {
    q: 'How many quotation emails can the system generate per day?',
    a: "Processing capacity depends on your plan: Starter Plan: up to 100 quotes per month. Professional Plan: up to 500 quotes per month. Enterprise Plan: unlimited quotes. There is no per-day cap within your monthly allocation. If you receive 50 RFQs on Monday morning, all 50 will be processed and drafts generated within minutes.",
  },
  {
    q: 'Can multiple team members use quotation email automation on the same account?',
    a: "Yes. RFQ AutoPilot supports multi-user teams with individual inboxes connected per team member, shared product catalog and pricing database, role-based permissions (admin, quoter, approver, viewer), quote assignment and routing rules, team performance dashboard, and collision detection preventing duplicate quotes on the same RFQ. Professional and Enterprise plans include multi-user functionality.",
  },
];

export default function FAQ({ darkMode }: FAQProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);

  // Only animate the section header — NOT the FAQ items themselves
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      // Toggle: open if closed, close if open
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className={`py-24 lg:py-32 relative overflow-hidden ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — uses its own observer, not affecting FAQ items */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${
              darkMode
                ? 'bg-blue-950/60 text-blue-300 border border-blue-500/20'
                : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}
          >
            ❓ FAQ
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-4 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Frequently Asked Questions About{' '}
            <span className="gradient-text">Quotation Email Automation</span>
          </h2>
        </div>

        {/* FAQ Items — always fully rendered, no reveal classes, CSS height transition */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                  darkMode
                    ? `bg-slate-950 ${isOpen ? 'border-blue-800/50' : 'border-slate-800'}`
                    : `bg-white shadow-sm ${isOpen ? 'border-blue-200' : 'border-slate-200'}`
                }`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 cursor-pointer ${
                    isOpen
                      ? darkMode
                        ? 'bg-slate-900/50'
                        : 'bg-blue-50/50'
                      : darkMode
                      ? 'hover:bg-slate-900/50'
                      : 'hover:bg-slate-50'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold leading-snug ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 text-blue-500'
                        : darkMode
                        ? 'text-slate-500'
                        : 'text-slate-400'
                    }`}
                  />
                </button>

                {/*
                  Answer panel — ALWAYS in the DOM.
                  Height animates via max-height CSS transition.
                  This prevents the IntersectionObserver / layout-shift disappearing bug.
                */}
                <div
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    className={`px-6 pb-6 border-t ${
                      darkMode ? 'border-slate-800' : 'border-slate-100'
                    }`}
                  >
                    <p
                      className={`text-sm leading-relaxed pt-4 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.4s',
          }}
        >
          <p className={`text-sm mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Still have questions?
          </p>
          <a
            href="mailto:support@rfqautopilot.com"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
