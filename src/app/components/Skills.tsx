import React from "react";
import { Code2, Brain, BarChart3, Wrench } from "lucide-react";
import { skillCategories } from "../../assets/data/skill_list";

const GRADIENT_BAR = "linear-gradient(135deg, #5c53fc,  #d6a5f5 )";

interface SkillItemProps {
  name: string;
  level: number; // Percentage from 0 to 100
}

function SkillItem({ name, level }: SkillItemProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-slate-700 text-sm">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${level}%`,
            background: GRADIENT_BAR,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-10 lg:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Tech & Tool Stack
        </h2>
        <p className="mb-12 text-center text-slate-600 max-w-2xl mx-auto">
          Technologies and tools I've learned and worked with during my studies
          and projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all">
                {/* Icon - Centered */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List - Left Aligned for readability */}
                <div className="w-full text-left">
                  {category.skills.map((skill) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
