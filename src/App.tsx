import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import UseCases from './components/UseCases';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage first
    const stored = localStorage.getItem('rfq-theme');
    if (stored) return stored === 'dark';
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('rfq-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#020617';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('rfq-theme')) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <Hero darkMode={darkMode} />

        {/* Animated stats ticker */}
        <StatsTicker darkMode={darkMode} />

        {/* How It Works */}
        <HowItWorks darkMode={darkMode} />

        {/* Features / Template Customization */}
        <Features darkMode={darkMode} />

        {/* Use Cases / Workflows */}
        <UseCases darkMode={darkMode} />

        {/* Before / After */}
        <BeforeAfter darkMode={darkMode} />

        {/* Pricing + Install CTA */}
        <Pricing darkMode={darkMode} />

        {/* FAQ */}
        <FAQ darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Mobile Sticky Bottom Bar */}
      <StickyBar darkMode={darkMode} />
    </div>
  );
}
