import React, { useState } from 'react';
import { Project, projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { LayoutGrid, Sparkles, Filter } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'case-studies' | 'mobile-apps' | 'design-systems'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.filterCategory === filter;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Selected Works & Case Studies
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Proof Through Product Thinking
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 font-normal">
            Real UX breakdowns, information architecture refinements, and high-fidelity interactive prototypes built in Figma.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-surface-200/90 rounded-2xl border border-white/10 self-start sm:self-auto">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'case-studies', label: 'UX Case Studies' },
            { key: 'mobile-apps', label: 'Mobile App UI' },
            { key: 'design-systems', label: 'Design Systems' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === tab.key
                  ? 'bg-brand-violet text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with Framer-style variable scale */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
            isWide={filter === 'all' && index === 0}
          />
        ))}
      </div>

    </section>
  );
};
