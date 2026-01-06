
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-40 px-6 bg-zinc-50/50 dark:bg-zinc-900/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-4">Portfolio</h4>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 dark:text-white">Selected Work</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-lg font-light leading-relaxed">
              A curation of engineering challenges, AI experiments, and production-grade applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Engineering', 'AI / ML', 'Product'].map(tag => (
              <span key={tag} className="px-5 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/5] bg-zinc-200 dark:bg-zinc-800 overflow-hidden mb-8 rounded-[2.5rem] relative shadow-2xl shadow-zinc-200 dark:shadow-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                />

                {project.liveUrl && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-900 dark:text-white shadow-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Live Project
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl">Explore Case Study</span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mb-3 uppercase tracking-[0.2em]">{project.tech.slice(0, 3).join(' • ')}</p>
              <h3 className="text-3xl font-bold mb-3 tracking-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 dark:text-white transition-colors">{project.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-light text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-8 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-md">
          <div className="modal-content max-w-5xl w-full bg-white dark:bg-zinc-950 relative rounded-[3rem] shadow-2xl overflow-hidden border border-transparent dark:border-zinc-800">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 z-20 p-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-16 lg:p-24 overflow-y-auto max-h-[90vh] hide-scrollbar relative">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-4 block">Case Study / {selectedProject.role}</span>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight dark:text-white max-w-2xl">{selectedProject.title}</h2>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 whitespace-nowrap"
                  >
                    Visit Live Site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                <div className="md:col-span-8 space-y-16">
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">The Challenge</h4>
                    <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">{selectedProject.details.problem}</p>
                  </section>
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Approach</h4>
                    <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">{selectedProject.details.approach}</p>
                  </section>
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Outcome</h4>
                    <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 dark:text-zinc-300 font-light">{selectedProject.details.outcome}</p>
                  </section>
                </div>
                <div className="md:col-span-4 space-y-12">
                  <div className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem]">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">Stack</h4>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <li key={t} className="px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-full text-[10px] font-bold text-zinc-600 dark:text-zinc-400 shadow-sm">{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4">Timeline</h4>
                    <p className="text-lg font-medium dark:text-white">2024 - 2025</p>
                  </div>
                </div>
              </div>

              <img src={selectedProject.image} alt="Detail" className="w-full h-auto rounded-[2.5rem] shadow-2xl opacity-90" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;