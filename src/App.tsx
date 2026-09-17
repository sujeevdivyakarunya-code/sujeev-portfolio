import React, { useState } from 'react';
import { Project, projectsData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterComparator } from './components/BeforeAfterComparator';
import { FigmaLiveEmbed } from './components/FigmaLiveEmbed';
import { UXPhilosophy } from './components/UXPhilosophy';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#07070a] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-300 relative">
        
        {/* Top Frosted Navbar */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenContact={handleOpenContact} />
          <FigmaLiveEmbed />
          <BeforeAfterComparator />
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <UXPhilosophy />
          <SkillsMatrix />
          <ExperienceTimeline />
          <ContactSection />
        </main>

        {/* Footer with Real-time Clock */}
        <Footer />

        {/* Interactive Case Study Reader Modal */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
