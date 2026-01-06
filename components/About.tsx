
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-50 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        <div className="md:w-1/3 md:sticky md:top-32 transition-all">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-10">About Me</h2>
          <div className="w-full aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-zinc-100 dark:shadow-none">
            <img src="/Profile.png" alt="Pramod Mudugulla" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000 opacity-90" />
          </div>
        </div>

        <div className="md:w-2/3 space-y-20">
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl leading-[1.15] font-light text-zinc-900 dark:text-white tracking-tight">
              I am a Software Engineer based in Hyderabad, India, obsessed with the intersection of <span className="text-zinc-300 dark:text-zinc-700">scalable backend architecture</span> and high-fidelity user experiences.
            </p>
            <p className="text-xl leading-relaxed text-zinc-500 dark:text-zinc-400 font-light">
              With a foundation in Java and Python, I've spent the last few years building RESTful services, data-backed systems, and exploring the frontiers of Applied Generative AI. Currently, I am a Programmer Analyst Trainee at Cognizant, refining production-grade coding standards in Microservices and Spring Boot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Philosophy</h4>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                Code is poetry, but performance is the meter. I believe in minimalism, not just in UI, but in system architecture. Build for clarity, scale for future needs.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Interests</h4>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                When not debugging, I explore RAG systems, trade simulation models, and fine-tuning LLMs for professional workflows. I'm driven by curiosity and a desire to build tools that actually work.
              </p>
            </div>
          </div>

          <div className="pt-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-10">Skill Index</h4>
            <div className="flex flex-wrap gap-3">
              {["Spring Boot", "Django", "React", "PostgreSQL", "Gemini API", "LangChain", "Microservices", "Python", "SQL", "Java"].map(skill => (
                <span key={skill} className="px-6 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-full text-xs font-semibold hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 hover:border-zinc-900 dark:hover:border-white transition-all cursor-default shadow-sm dark:text-zinc-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
