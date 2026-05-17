import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="mb-4">Let's Connect</h2>
        <p className="mb-8 text-slate-400 max-w-2xl mx-auto">
          I'm actively looking for entry-level opportunities where I can
          contribute and grow as a developer. Feel free to reach out if you'd
          like to discuss potential opportunities or just connect!
        </p>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="mailto:harsh206patel@gmail.com"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg transition-colors flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Harshh206/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-patel206/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500">
            © 2026 Harsh Patel. Open to opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}