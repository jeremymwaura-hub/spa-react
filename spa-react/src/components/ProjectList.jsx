import ProjectCard from "./ProjectCard";
import "./ProjectList.css";

// this component shows all the projects
// It also has a search box so I can filter by title
function ProjectList({ projects, onDelete, searchTerm, onSearchChange }) {
  return (
    <div className="project-list-container">
      {/* search input */}
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />

      {/* show all projects */}
      <div className="projects-wrapper">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProjectList;
