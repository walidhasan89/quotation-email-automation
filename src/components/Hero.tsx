import { useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle2, Trophy, Zap, Clock, TrendingUp, Mail, Chrome } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = heroRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden ${
        darkMode ? 'hero-bg-dark' : 'hero-bg-light'
      }`}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 animate-float ${
            darkMode ? 'bg-blue-600' : 'bg-blue-300'
          }`}
        />
        <div
          className={`absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 animate-float-delayed ${
            darkMode ? 'bg-indigo-700' : 'bg-indigo-300'
          }`}
        />
        <div
          className={`absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 ${
            darkMode ? 'bg-violet-600' : 'bg-violet-300'
          }`}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${darkMode ? 'rgba(59,130,246,0.25)' : 'rgba(59,130,246,0.15)'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.4,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="reveal flex justify-center mb-8 pt-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
              darkMode
                ? 'bg-blue-950/60 border-blue-500/30 text-blue-300 shadow-lg shadow-blue-900/20'
                : 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm shadow-blue-100'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>AI-Powered Quotation Email Automation</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                darkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'
              }`}
            >
              Free
            </span>
          </div>
        </div>

        {/* H1 */}
        <div className="reveal reveal-delay-1 text-center max-w-5xl mx-auto mb-6">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Automate Quotation Emails —{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">From RFQ Detection</span>
            {' '}to Quote Reply
            <br className="hidden lg:block" />
            {' '}in Minutes
          </h1>
        </div>

        {/* Subheadline */}
        <div className="reveal reveal-delay-2 text-center max-w-3xl mx-auto mb-10">
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            The fastest quote wins the deal. Stop typing quotation emails manually and let AI generate professional, accurate quote replies inside your inbox —{' '}
            <strong className={darkMode ? 'text-white' : 'text-slate-900'}>automatically.</strong>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl shadow-blue-500/30"
          >
            <Chrome className="w-5 h-5" />
            <span>Start Automating Quotes Free</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <button
            onClick={() => {
              document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold border-2 transition-all duration-300 cursor-pointer ${
              darkMode
                ? 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-300 hover:bg-blue-950/30'
                : 'border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/50'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                darkMode
                  ? 'border-slate-600 group-hover:border-blue-500 group-hover:bg-blue-950/50'
                  : 'border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50'
              }`}
            >
              <Play className="w-3 h-3 ml-0.5" />
            </div>
            <span>See How It Works</span>
          </button>
        </div>

        {/* Trust badges */}
        <div className="reveal reveal-delay-4 flex flex-wrap gap-x-6 gap-y-2 justify-center items-center mb-14">
          {[
            { icon: CheckCircle2, text: 'Average reply time under 5 minutes' },
            { icon: Mail, text: 'Works inside Gmail & Outlook' },
            { icon: Zap, text: '14-day free trial' },
          ].map(({ icon: Icon, text }) => (
            <span
              key={text}
              className={`flex items-center gap-1.5 text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
            >
              <Icon className="w-4 h-4 text-blue-500" />
              {text}
            </span>
          ))}
        </div>

        {/* Speed Stat Banner */}
        <div className="reveal reveal-delay-5 max-w-3xl mx-auto mb-16">
          <div
            className={`relative rounded-2xl p-6 border overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border-blue-800/30'
                : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100'
            }`}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #6366f1 0%, transparent 50%)`,
              }}
            />
            <div className="relative z-10 flex items-start gap-3 justify-center">
              <Trophy
                className={`w-6 h-6 flex-shrink-0 mt-0.5 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`}
              />
              <p
                className={`text-sm sm:text-base font-medium leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
              >
                Companies using quotation email automation respond{' '}
                <strong className="gradient-text text-xl font-black">11x faster</strong>{' '}
                and win{' '}
                <strong className="gradient-text text-xl font-black">34% more deals</strong>{' '}
                than competitors relying on manual quote replies.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Clock, value: '4 min', label: 'Avg. quote reply time', color: 'text-blue-500', bg: darkMode ? 'bg-blue-950/40' : 'bg-blue-50', border: darkMode ? 'border-blue-900/40' : 'border-blue-100' },
            { icon: TrendingUp, value: '34%', label: 'More deals won', color: 'text-emerald-500', bg: darkMode ? 'bg-emerald-950/40' : 'bg-emerald-50', border: darkMode ? 'border-emerald-900/40' : 'border-emerald-100' },
            { icon: Zap, value: '11x', label: 'Faster than manual', color: 'text-violet-500', bg: darkMode ? 'bg-violet-950/40' : 'bg-violet-50', border: darkMode ? 'border-violet-900/40' : 'border-violet-100' },
            { icon: CheckCircle2, value: '500+', label: 'Sales teams trust us', color: 'text-orange-500', bg: darkMode ? 'bg-orange-950/40' : 'bg-orange-50', border: darkMode ? 'border-orange-900/40' : 'border-orange-100' },
          ].map(({ icon: Icon, value, label, color, bg, border }) => (
            <div
              key={label}
              className={`card-hover text-center p-5 rounded-2xl border ${bg} ${border}`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
              <div
                className={`text-3xl font-black mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}
              >
                {value}
              </div>
              <div
                className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Inbox Preview Visual */}
        <div className="reveal mt-16 max-w-2xl mx-auto">
          <div
            className={`rounded-3xl border overflow-hidden shadow-2xl ${
              darkMode
                ? 'bg-slate-900 border-slate-700 shadow-slate-950/80'
                : 'bg-white border-slate-200 shadow-slate-200/80'
            }`}
          >
            {/* Window chrome */}
            <div
              className={`flex items-center gap-2 px-5 py-3.5 border-b ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div
                className={`ml-3 flex-1 h-6 rounded-md text-xs flex items-center px-3 ${
                  darkMode ? 'bg-slate-700 text-slate-400' : 'bg-white text-slate-400 border border-slate-200'
                }`}
              >
                Gmail — Inbox
              </div>
            </div>

            {/* Email rows */}
            <div className="p-4 space-y-2">
              {[
                { from: 'john@techparts.com', subject: 'RFQ — 150 Units Part #A2291', time: '9:01 AM', badge: 'RFQ Detected', badgeColor: 'bg-blue-500' },
                { from: 'procurement@globalco.com', subject: 'Need pricing on 5 items — urgent', time: '9:14 AM', badge: 'Quote Draft Ready', badgeColor: 'bg-emerald-500' },
                { from: 'buyer@medequip.net', subject: 'Request for Quotation — Q4 Order', time: '9:28 AM', badge: 'Processing...', badgeColor: 'bg-violet-500' },
              ].map((email, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                    darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-50'
                  } ${i === 1 ? (darkMode ? 'bg-blue-950/30 ring-1 ring-blue-500/20' : 'bg-blue-50 ring-1 ring-blue-200') : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                      i === 0 ? 'from-blue-500 to-blue-600' : i === 1 ? 'from-emerald-500 to-emerald-600' : 'from-violet-500 to-violet-600'
                    } flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {email.from.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs font-semibold truncate ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        {email.from}
                      </span>
                      <span className={`text-xs flex-shrink-0 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {email.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-xs truncate ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {email.subject}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 text-xs font-bold px-2 py-1 rounded-full text-white ${email.badgeColor}`}
                  >
                    {email.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Status bar */}
            <div
              className={`flex items-center justify-between px-5 py-3 border-t ${
                darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                🤖 RFQ AutoPilot active
              </span>
              <span className={`text-xs font-semibold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                ● 2 quotes ready to send
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
