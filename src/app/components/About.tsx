import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen } from 'lucide-react';

interface AboutProps {
  onOpenEducation: () => void;
}

export function About({ onOpenEducation }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1686213011418-e0caa4aef2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMHN0dWRlbnR8ZW58MXx8fHwxNzY1OTgyNTM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Profile"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="mb-4">Fresh Graduate Ready to Make an Impact</h3>
            <p className="mb-4 text-slate-600">
              I recently graduated with a Bachelor's degree in Computer Science. During my 
              studies, I developed a strong foundation in programming, web development, and 
              software engineering principles.
            </p>
            <p className="mb-6 text-slate-600">
              I'm passionate about learning new technologies and solving real-world problems 
              through code. I've completed several academic and personal projects that showcase 
              my ability to build functional web applications.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
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
            </div>
            <button
              onClick={onOpenEducation}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Education & Certifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}