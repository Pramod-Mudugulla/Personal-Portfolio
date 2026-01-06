
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl py-4 border-b border-zinc-100 dark:border-zinc-800' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 items-center">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <a 
            href="#" 
            onClick={scrollToTop}
            className="text-xl font-bold tracking-tighter hover:opacity-70 transition-all active:scale-95 dark:text-white"
          >
            PM.
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="col-span-2 flex justify-center space-x-6 md:space-x-12 text-[13px] font-medium tracking-wide">
          <a 
            href="#work" 
            onClick={(e) => scrollToSection(e, 'work')}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
          >
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, 'experience')}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Right: Theme Toggle & Resume */}
        <div className="flex justify-end items-center space-x-6">
          <button 
            onClick={toggleTheme}
            className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-90"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <a 
            href="/resume.pdf" 
            download="Pramod_Mudugulla_Resume.pdf"
            className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all active:scale-95 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
