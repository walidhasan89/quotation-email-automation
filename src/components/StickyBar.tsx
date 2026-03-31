import { ArrowRight } from 'lucide-react';

interface StickyBarProps {
  darkMode: boolean;
}

export default function StickyBar({ darkMode }: StickyBarProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden border-t ${
        darkMode
          ? 'bg-slate-950/95 border-slate-800'
          : 'bg-white/95 border-slate-200'
      }`}
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          Automate your next quote →
        </p>
        <a
          href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white flex-shrink-0"
        >
          <span>Try Free</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
