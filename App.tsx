
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial state - default to light theme
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-white dark:bg-zinc-950">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <ChatWidget />

      {/* Decorative gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-100 dark:bg-zinc-900 blur-[100px] rounded-full -z-10 opacity-50 transition-colors duration-700"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-100 dark:bg-zinc-900 blur-[100px] rounded-full -z-10 opacity-50 transition-colors duration-700"></div>
    </div>
  );
};

export default App;
