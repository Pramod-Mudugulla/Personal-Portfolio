
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-zinc-900 dark:bg-black text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-bold tracking-tighter mb-10">Let's talk.</h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12 max-w-sm font-light">
              I’m currently open to new opportunities starting June 2025. Whether you have a project or just want to say hi, reach out.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:pramodmudugulla@gmail.com" 
                className="text-2xl hover:text-zinc-400 transition-colors block underline underline-offset-8 decoration-zinc-700 dark:decoration-zinc-800 hover:decoration-zinc-400"
              >
                pramodmudugulla@gmail.com
              </a>
              <div className="flex space-x-8 pt-6">
                <a 
                  href="https://www.linkedin.com/in/pramod-kumar-reddy-mudugulla-software-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors relative group"
                >
                  LinkedIn
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-400 transition-all group-hover:w-full"></span>
                </a>
                <a 
                  href="https://github.com/Pramod-Mudugulla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors relative group"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-400 transition-all group-hover:w-full"></span>
                </a>
                <a 
                  href="https://ghost-share.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors relative group"
                >
                  GhostShare
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-400 transition-all group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-focus-within:text-white transition-colors">Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="What's your name?" 
                className="w-full bg-transparent border-b border-zinc-800 dark:border-zinc-900 py-4 focus:outline-none focus:border-white transition-colors text-xl font-light"
              />
            </div>
            <div className="space-y-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-focus-within:text-white transition-colors">Email</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Where can I reply?" 
                className="w-full bg-transparent border-b border-zinc-800 dark:border-zinc-900 py-4 focus:outline-none focus:border-white transition-colors text-xl font-light"
              />
            </div>
            <div className="space-y-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-focus-within:text-white transition-colors">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your idea..." 
                className="w-full bg-transparent border-b border-zinc-800 dark:border-zinc-900 py-4 focus:outline-none focus:border-white transition-colors text-xl font-light resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="px-10 py-5 bg-white dark:bg-zinc-100 text-zinc-900 rounded-full font-bold text-sm tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-4 disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                <>
                  Message Sent
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <footer className="mt-40 pt-10 border-t border-zinc-800 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4">
          <p>© 2026 Pramod Mudugulla. Built with precision.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
