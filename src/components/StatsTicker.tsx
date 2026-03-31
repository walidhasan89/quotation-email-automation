import { Zap, TrendingUp, Clock, Users, Shield, Star } from 'lucide-react';

interface StatsTickerProps {
  darkMode: boolean;
}

const ITEMS = [
  { icon: Zap, text: '11x Faster Quote Response' },
  { icon: TrendingUp, text: '34% Higher Win Rate' },
  { icon: Clock, text: 'Average 4 Min Per Quote' },
  { icon: Users, text: '500+ Sales Teams' },
  { icon: Shield, text: 'Enterprise-Grade Security' },
  { icon: Star, text: '4.8/5 Average Rating' },
  { icon: Zap, text: '92% Fewer Quotation Errors' },
  { icon: TrendingUp, text: '4.5 Hours Saved Daily' },
  { icon: Clock, text: '100% Formatting Consistency' },
  { icon: Users, text: 'Gmail & Outlook Support' },
  { icon: Shield, text: '14-Day Free Trial' },
  { icon: Star, text: 'No Credit Card Required' },
];

export default function StatsTicker({ darkMode }: StatsTickerProps) {
  // duplicate items for seamless loop
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className={`py-5 border-y overflow-hidden ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="ticker-wrap">
        <div className="ticker-content animate-ticker gap-10" style={{ width: 'max-content' }}>
          {doubled.map((item, i) => {
            const Icon = item.icon;
            return (
              <span
                key={i}
                className={`inline-flex items-center gap-2.5 mr-10 text-sm font-semibold flex-shrink-0 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                <Icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                {item.text}
                <span className={`mx-2 ${darkMode ? 'text-slate-700' : 'text-slate-300'}`}>•</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
