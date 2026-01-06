
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-xl">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-4">Journey</h4>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Professional Experience</h2>
            <p className="text-zinc-400 dark:text-zinc-500 text-lg font-light leading-relaxed">
              A detailed timeline of my technical contributions, impact, and growth across diverse engineering roles.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {EXPERIENCE_DATA.map((exp) => (
            <div 
              key={exp.id} 
              className="group border-t border-zinc-800 dark:border-zinc-100 py-16 hover:bg-zinc-800/30 dark:hover:bg-zinc-50/80 transition-all duration-500 px-0 md:px-8 first:border-t-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400 tracking-widest uppercase block mb-1">{exp.period}</span>
                  <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest">{exp.location}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-500">{exp.company}</h3>
                  <p className="text-zinc-400 dark:text-zinc-600 text-lg font-medium">{exp.role}</p>
                </div>
                <div className="md:col-span-5 space-y-8">
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-zinc-400 dark:text-zinc-600 text-lg leading-relaxed font-light flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 dark:bg-zinc-200 mt-2.5 shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-zinc-800 dark:bg-zinc-50 border border-zinc-700 dark:border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-300 dark:text-zinc-500 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
