import React from 'react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isWide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, isWide = false }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className={`glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-300 ${
        isWide ? 'md:col-span-2' : 'col-span-1'
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View Case Study: ${project.title}`}
    >
      
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-mono">{project.year}</span>
          </div>

          {project.statsBadge && (
            <span className="text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {project.statsBadge.value}
            </span>
          )}
        </div>

        {/* Title and Subtitle */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-brand-purple transition-colors duration-200 mb-1 flex items-start justify-between gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-brand-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 mt-1" />
        </h3>

        <p className="text-xs text-brand-cyan font-medium mb-4">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
          {project.summary}
        </p>
      </div>

      {/* Interactive Vector Mockup Graphic */}
      <div className="my-2 mb-6">
        <ProjectMockup type={project.mockupType} />
      </div>

      {/* Tags and Action Bar */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.skills.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-200 text-slate-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple group-hover:text-brand-cyan transition-colors"
        >
          <span>Read Deep Dive</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
