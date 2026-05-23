import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen } from 'lucide-react';

interface AboutProps {
  onOpenEducation: () => void;
}

export function About({ onOpenEducation }: AboutProps) {
  return (
    <section id="about" className="py-8 md:py-10 lg:py-16 bg-white ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">About Me</h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="flex justify-center md:col-span-2">
            <ImageWithFallback
              src="src/assets/image/profile.png"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="text-center md:text-left mx-8 md:col-span-3">
            <p className="mb-4 text-slate-600 tracking-wide leading-relaxed">
              I’m a Computer Science Engineering graduate specializing in
              Artificial Intelligence, passionate about building AI-driven
              applications that solve real-world problems.
            </p>
            <p className="mb-6 text-slate-600 tracking-wide leading-relaxed">
              My interests include AI/ML, Deep Learning, Generative AI, LLM
              applications, and intelligent software systems. Through academic
              projects and internship experience, I’ve worked on end-to-end QA
              systems, real-time computer vision pipelines, and AI-powered web
              applications.
            </p>
            <p className="mb-6 text-slate-600 tracking-wide leading-relaxed">
              I enjoy combining strong software engineering practices with
              modern AI technologies to create scalable, user-focused solutions.
              I’m constantly learning new tools and exploring emerging
              technologies in the AI space.
            </p>
            {/* <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="mb-2 text-blue-500">10+</h4>
                <p className="text-slate-600">Projects Built</p>
              </div>
              <div>
                <h4 className="mb-2 text-blue-500">8.5</h4>
                <p className="text-slate-600">CGPA</p>
              </div>
              <div>
                <h4 className="mb-2 text-blue-500">5+</h4>
                <p className="text-slate-600">Certifications</p>
              </div>
              <div>
                <h4 className="mb-2 text-blue-500">∞</h4>
                <p className="text-slate-600">Willingness to Learn</p>
              </div>
            </div> */}
            <button
              onClick={onOpenEducation}
              className="px-10 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              View Education & Certifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
