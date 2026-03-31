import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const NOTIFICATIONS = [
  { company: 'TechParts Co.', time: '2 minutes ago', quotes: '3 minutes' },
  { company: 'GlobalSupply Inc.', time: '7 minutes ago', quotes: '4 minutes' },
  { company: 'MedEquip Solutions', time: '12 minutes ago', quotes: '2 minutes' },
  { company: 'BuildRight Corp.', time: '18 minutes ago', quotes: '5 minutes' },
  { company: 'AutoParts Direct', time: '24 minutes ago', quotes: '3 minutes' },
  { company: 'ProSource Ltd.', time: '31 minutes ago', quotes: '4 minutes' },
];

interface SocialProofProps {
  darkMode: boolean;
}

export default function SocialProof({ darkMode }: SocialProofProps) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const notif = NOTIFICATIONS[current];

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl border max-w-xs ${
          darkMode
            ? 'bg-slate-900/95 border-slate-700 shadow-slate-950/50'
            : 'bg-white/95 border-slate-200 shadow-slate-200/50'
        }`}
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className="gradient-text">{notif.company}</span> just sent an automated quote in{' '}
            <strong>{notif.quotes}</strong>
          </p>
          <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {notif.time}
          </p>
        </div>
      </div>
    </div>
  );
}
