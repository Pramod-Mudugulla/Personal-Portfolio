
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
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

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Experience', id: 'experience' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[70] transition-all duration-700 ${
        isScrolled || isMenuOpen
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl py-4 border-b border-zinc-100 dark:border-zinc-800' 
          : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="z-[80]">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
              className="text-xl font-bold tracking-tighter hover:opacity-70 transition-all active:scale-95 dark:text-white"
            >
              PM.
            </a>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 text-[13px] font-medium tracking-wide">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-2 md:space-x-6">
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
              className="hidden sm:inline-block px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-105 transition-all active:scale-95 shadow-lg"
            >
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-zinc-900 dark:text-white z-[80]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'w-6 absolute top-2 rotate-45' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 rounded-full ${isMenuOpen ? 'w-6 absolute top-2 -rotate-45' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-[60] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="h-full flex flex-col justify-center px-10 space-y-12">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Navigation</p>
            {navLinks.map((link, idx) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white transition-all transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className={`space-y-6 pt-10 border-t border-zinc-100 dark:border-zinc-900 transition-all transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: `400ms` }}>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">Quick Actions</p>
            <div className="flex flex-col space-y-4">
              <a 
                href="/resume.pdf" 
                download="Pramod_Mudugulla_Resume.pdf"
                className="text-lg font-medium text-zinc-900 dark:text-white flex items-center gap-2"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4-4v12" />
                </svg>
              </a>
              <a 
                href="mailto:pramodmudugulla@gmail.com"
                className="text-lg font-medium text-zinc-900 dark:text-white flex items-center gap-2"
              >
                Email Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
