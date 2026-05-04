import React, { useState } from 'react';
import '../styles/ProjectCard.css';

/* ProjectCard — displays a single project with delete capability */
function ProjectCard({ project, onDelete }) {
  const [confirming, setConfirming] = useState(false);

  const handleDeleteClick = () => {
    if (confirming) {
      onDelete(project.id);
    } else {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
    }
  };

  return (
    <article className="project-card" aria-label={`Project: ${project.title}`}>
      <div className="project-card-body">
        <div className="project-card-top">
          <div className="project-card-meta">
            {project.year && <span className="project-year">{project.year}</span>}
            {project.tags &&
              project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
          </div>
          <button
            className={`btn-delete${confirming ? ' btn-delete--confirm' : ''}`}
            onClick={handleDeleteClick}
            aria-label={confirming ? 'Click again to confirm delete' : `Delete project: ${project.title}`}
            title={confirming ? 'Click again to confirm' : 'Delete project'}
          >
            {confirming ? 'Confirm?' : '×'}
          </button>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
      </div>
      <div className="project-card-footer">
        <button className="btn-view">View details →</button>
      </div>
    </article>
  );
}

export default ProjectCard;
