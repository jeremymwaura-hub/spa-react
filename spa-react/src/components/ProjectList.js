import React from 'react';
import ProjectCard from './ProjectCard';
import SearchBar from './SearchBar';
import '../styles/ProjectList.css';

/* ProjectList — search bar + grid of ProjectCard components */
function ProjectList({ projects, searchQuery, onSearchChange, onDelete, totalCount }) {
  return (
    <div className="project-list-section">
      <div className="project-list-header">
        <div className="project-list-meta">
          <h2 className="project-list-title">Projects</h2>
          <span className="project-count">
            {projects.length} / {totalCount}
          </span>
        </div>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>

      {projects.length === 0 ? (
        <div className="project-empty" role="status">
          {searchQuery
            ? `No projects match "${searchQuery}"`
            : 'No projects yet — add one above.'}
        </div>
      ) : (
        <ul className="project-grid" aria-label="Project list">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
