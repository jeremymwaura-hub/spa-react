import React, { useState } from 'react';
import Header from './components/Header.jsx';
import AddProjectForm from './components/AddProjectForm.jsx';
import ProjectList from './components/ProjectList.jsx';
import './styles/global.css';

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'Brand Identity — Aurum Coffee',
    description: 'Full visual identity system for a specialty coffee roaster. Included logomark, packaging design, and a brand style guide spanning typography, color, and photography direction.',
    tags: ['Branding', 'Packaging'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Editorial Campaign — Vena Magazine',
    description: 'Art direction and layout design for a six-page fashion editorial. Collaborated with photographers and stylists to produce a cohesive visual narrative around the theme of movement.',
    tags: ['Editorial', 'Art Direction'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Website Redesign — Kestrel Architecture',
    description: 'End-to-end redesign of a boutique architecture studio website. Focused on showcasing project photography with a minimal, grid-based layout that lets the work speak for itself.',
    tags: ['Web Design', 'UI/UX'],
    year: '2023',
  },
];

function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddProject = (newProject) => {
    setProjects((prev) => [{ ...newProject, id: Date.now() }, ...prev]);
  };

  const handleDeleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredProjects = projects.filter((project) => {
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <section className="form-section">
          <AddProjectForm onAdd={handleAddProject} />
        </section>
        <section className="list-section">
          <ProjectList
            projects={filteredProjects}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onDelete={handleDeleteProject}
            totalCount={projects.length}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
