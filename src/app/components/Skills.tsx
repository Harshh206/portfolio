import { Code2, Palette, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design']
  },
  {
    icon: Database,
    title: 'Backend & Database',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs']
  },
  {
    icon: Palette,
    title: 'Programming',
    skills: ['JavaScript', 'Java', 'Python', 'C++', 'Data Structures']
  },
  {
    icon: Wrench,
    title: 'Tools & Others',
    skills: ['Git/GitHub', 'VS Code', 'Figma', 'Postman', 'Linux']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-4 text-center">Technical Skills</h2>
        <p className="mb-12 text-center text-slate-600 max-w-2xl mx-auto">
          Technologies and tools I've learned and worked with during my studies and projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}