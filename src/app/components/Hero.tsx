import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="mb-4 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Priya Sharma</span>
        </h1>
        <h2 className="mb-6 text-slate-300">
          Computer Science Graduate | Aspiring Full Stack Developer
        </h2>
        <p className="mb-8 text-slate-400 max-w-2xl mx-auto">
          Recent graduate passionate about building innovative web solutions. 
          Eager to apply my skills in React, JavaScript, and modern web technologies 
          to create meaningful digital experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </a>
    </section>
  );
}