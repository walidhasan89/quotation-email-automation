import { Zap, ExternalLink, Mail, User } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`relative border-t overflow-hidden ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      {/* SEO Internal Links — visually subtle but crawlable */}
      <div className={`border-b ${darkMode ? 'border-slate-800/60' : 'border-slate-200/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Explore Solutions
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { label: 'RFQ Automation Software', href: 'https://rfqautopilot.com/rfq-automation-software' },
              { label: 'RFQ Email Management Tool', href: 'https://rfqautopilot.com/rfq-email-management-tool' },
              { label: 'RFQ Software for Manufacturers', href: 'https://rfqautopilot.com/rfq-software-for-manufacturers' },
              { label: 'AI RFQ Processing Tool', href: 'https://rfqautopilot.com/ai-rfq-processing-tool' },
              { label: 'Quotation Email Automation', href: 'https://rfqautopilot.com/quotation-email-automation' },
              { label: 'RFQ Data Extraction from PDF', href: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf' },
              { label: 'Gmail Chrome Extension for Sales', href: 'https://rfqautopilot.com/gmail-chrome-extension-for-sales' },
              { label: 'RFQ Software for Distributors', href: 'https://rfqautopilot.com/rfq-software-for-distributors' },
              { label: 'RFQ Management for Export Companies', href: 'https://rfqautopilot.com/rfq-management-for-export-companies' },
              { label: 'Outlook Add-in for RFQ', href: 'https://rfqautopilot.com/outlook-add-in-for-rfq' },
              { label: 'Procurement Chrome Extension', href: 'https://rfqautopilot.com/procurement-chrome-extension' },
              { label: 'RFQ Software for Small Business', href: 'https://rfqautopilot.com/rfq-software-small-business' },
              { label: 'AI RFQ Generator', href: 'https://rfqautopilot.com/ai-rfq-generator' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors duration-200 ${
                  darkMode
                    ? 'text-slate-500 hover:text-blue-400'
                    : 'text-slate-400 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Clickable logo → home */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="RFQ AutoPilot — back to home"
            >
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot"
                className="h-8 w-auto transition-opacity duration-200 group-hover:opacity-80"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = 'none';
                  const next = el.nextElementSibling as HTMLElement;
                  if (next) next.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="items-center gap-2">
                <div className="w-7 h-7 rounded-lg btn-primary flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  RFQ AutoPilot
                </span>
              </div>
            </a>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              AI-powered quotation email automation that turns RFQs into professional quote replies inside Gmail and Outlook — in minutes, not hours.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        const el = document.querySelector(item.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        else window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products — eye-catchy cards */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Our Products
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: 'ReplyChief',
                  desc: 'LinkedIn AI Co-pilot',
                  href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
                  gradient: 'from-blue-500 via-blue-600 to-indigo-600',
                  emoji: '💼',
                  glow: 'group-hover:shadow-blue-500/30',
                },
                {
                  label: 'AdminPalette',
                  desc: 'Shopify Admin Tools',
                  href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
                  gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
                  emoji: '🛍️',
                  glow: 'group-hover:shadow-emerald-500/30',
                },
                {
                  label: 'RFQ AutoPilot',
                  desc: 'Quotation Automation',
                  href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
                  gradient: 'from-violet-500 via-purple-500 to-blue-500',
                  emoji: '⚡',
                  glow: 'group-hover:shadow-violet-500/30',
                  current: true,
                },
              ].map((product) => (
                <li key={product.label}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 ${
                      darkMode
                        ? 'hover:bg-slate-800/80'
                        : 'hover:bg-white hover:shadow-sm'
                    } ${product.current ? (darkMode ? 'bg-slate-800/50 ring-1 ring-blue-500/30' : 'bg-white shadow-sm ring-1 ring-blue-200') : ''}`}
                  >
                    {/* Gradient icon tile */}
                    <div
                      className={`relative w-9 h-9 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-sm flex-shrink-0 shadow-md transition-all duration-300 group-hover:shadow-lg ${product.glow} group-hover:scale-105`}
                    >
                      {product.emoji}
                      {/* Shine overlay */}
                      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span
                          className={`text-sm font-semibold ${
                            darkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                          }`}
                        >
                          {product.label}
                        </span>
                        {product.current && (
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                              darkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-600'
                            }`}
                          >
                            ← You're here
                          </span>
                        )}
                        <ExternalLink
                          className={`w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity ${
                            darkMode ? 'text-slate-400' : 'text-slate-400'
                          }`}
                        />
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {product.desc}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:support@rfqautopilot.com"
                  className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a
                  href="https://walidhasan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <User className="w-4 h-4 flex-shrink-0" />
                  Author
                </a>
              </li>
              <li>
                <a
                  href="https://inoviqa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm transition-colors duration-200 ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  About Inoviqa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright — no install button */}
        <div
          className={`mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
          <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            © 2026 RFQ AutoPilot. A Product of{' '}
            <a
              href="https://inoviqa.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold transition-colors duration-200 ${
                darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inoviqa
            </a>
          </p>

          {/* Standards / authority links — subtle SEO outbound */}
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {[
              { label: 'ISO 9001', href: 'https://www.iso.org/iso-9001-quality-management.html' },
              { label: 'AS9100D', href: 'https://www.sae.org/standards/content/as9100d/' },
              { label: 'IATF 16949', href: 'https://www.iatfglobaloversight.org/' },
              { label: 'NIST MEP', href: 'https://www.nist.gov/mep' },
              { label: 'BOM Reference', href: 'https://en.wikipedia.org/wiki/Bill_of_materials' },
            ].map((ref) => (
              <a
                key={ref.href}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs px-2.5 py-1 rounded-md border transition-colors duration-200 ${
                  darkMode
                    ? 'border-slate-800 text-slate-600 hover:text-slate-400 hover:border-slate-700'
                    : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300'
                }`}
              >
                {ref.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
