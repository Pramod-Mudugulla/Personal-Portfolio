
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="overflow-hidden">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-500 mb-8 animate-in slide-in-from-bottom-full duration-1000">
            Software Engineer & AI Enthusiast
          </p>
        </div>
        
        <div className="relative">
          <h1 className="text-huge font-bold text-zinc-900 dark:text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Pramod <br />
            <span className="text-zinc-200/80 dark:text-zinc-800">Mudugulla</span>
          </h1>
        </div>

        <div className="mt-14 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
            Crafting scalable backends and intelligent interfaces with a focus on performance, 
            precision, and premium user experience.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="group px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] active:scale-95"
            >
              View Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            
            <a 
              href="/resume.pdf" 
              download="Pramod_Mudugulla_Resume.pdf"
              className="px-10 py-5 bg-white dark:bg-transparent border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all flex items-center gap-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] active:scale-95"
            >
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4-4v12" />
              </svg>
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-5 bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#work" 
          onClick={(e) => scrollToSection(e, 'work')}
          className="text-zinc-300 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer" 
          aria-label="Scroll to work"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
