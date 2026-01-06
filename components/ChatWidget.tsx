
import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Pramod. I'm here to answer any questions you have about my background, technical expertise, or current career availability. What can I tell you about?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await generateAIResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  /**
   * Helper to render text with basic markdown support (bold and lists)
   */
  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, lineIdx) => {
      // Handle bullet points
      const isListItem = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      const content = isListItem ? line.trim().substring(2) : line;

      // Parse bold markers **text**
      const parts = content.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, partIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={partIdx} className="font-bold text-zinc-950 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      if (isListItem) {
        return (
          <div key={lineIdx} className="flex gap-2 ml-1 my-1">
            <span className="text-zinc-400 dark:text-zinc-500">•</span>
            <span className="flex-1">{renderedLine}</span>
          </div>
        );
      }

      return (
        <p key={lineIdx} className={lineIdx > 0 ? 'mt-2' : ''}>
          {renderedLine}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-[85vw] sm:w-80 md:w-96 h-[500px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-5 bg-zinc-900 dark:bg-black text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                <span className="text-[10px] font-bold">PM</span>
              </div>
              <div>
                <h3 className="font-bold text-xs tracking-tight">Pramod's AI Me</h3>
                <p className="text-[9px] uppercase tracking-widest opacity-50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-zinc-50 dark:bg-zinc-900/30 hide-scrollbar transition-colors">
            <p className="text-[9px] text-zinc-400 dark:text-zinc-600 text-center uppercase tracking-[0.2em] font-bold py-2">
              Verified Professional Assistant
            </p>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 text-[13px] leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl rounded-tr-none' 
                    : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-2xl rounded-tl-none'
                }`}>
                  {formatMessageText(m.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-4 rounded-2xl rounded-tl-none flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-colors">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full px-5 py-3.5 bg-zinc-100 dark:bg-zinc-900 dark:text-white rounded-2xl text-[13px] focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white pr-12 transition-all placeholder:text-zinc-400"
              />
              <button 
                onClick={handleSend} 
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-2-9-18-9 18 9 2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group border-4 border-white dark:border-zinc-900"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-zinc-900 dark:border-white group-hover:scale-125 transition-transform"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
