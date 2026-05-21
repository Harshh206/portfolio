import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, X, Calendar, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  type: string;
  duration: string;
  features: string[];
}

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  direction?: 'left' | 'right';
}

export function ProjectDrawer({ project, isOpen, onClose, direction = 'right' }: ProjectDrawerProps) {
  if (!project) return null;

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={onClose}
        />
      )}
      <div 
        className={`fixed top-0 ${direction === 'left' ? 'left-0' : 'right-0'} h-full w-full md:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300 ${
          isOpen 
            ? 'translate-x-0' 
            : direction === 'left' ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <h3 className="text-xl">Project Details</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <ImageWithFallback 
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              {project.type}
            </span>
            <span className="flex items-center gap-1 text-sm text-slate-600">
              <Calendar className="w-4 h-4" />
              {project.duration}
            </span>
          </div>

          <h2 className="mb-4">{project.title}</h2>
          
          <p className="text-slate-700 mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-blue-500" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {/* <a 
              href={project.liveUrl}
              className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a> */}
            <a 
              href={project.githubUrl}
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
