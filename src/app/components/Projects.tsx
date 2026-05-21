import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ProjectDrawer } from './ProjectDrawer';
import { projects } from './projects_list';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerDirection, setDrawerDirection] = useState<'left' | 'right'>('right');

  const handleProjectClick = (project: typeof projects[0], index: number) => {
    setSelectedProject(project);
    // Alternate between left and right for visual variety
    setDrawerDirection('right');
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">My Projects</h2>
          <p className="mb-12 text-center text-slate-600 max-w-2xl mx-auto">
            Academic and personal projects that demonstrate my technical skills
            and problem-solving abilities
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-slate-200 cursor-pointer"
                onClick={() => handleProjectClick(project, index)}>
                {/* <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white px-4 py-2 border-2 border-white rounded-lg">
                      View Details
                    </span>
                  </div>
                </div> */}
                <div className="p-6">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="mb-4 text-slate-600 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        direction={drawerDirection}
      />
    </>
  );
}
