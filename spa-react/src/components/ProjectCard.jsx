import "./ProjectCard.css";

// this is the card for each project
// I kept it simple so the content is easy to read
function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <div className="card-left">
        {/* i used an X as placeholder image like in the mockup */}
        <div className="card-image">X</div>
      </div>

      <div className="card-right">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <button className="delete-btn" onClick={() => onDelete(project.id)}>
        Delete
      </button>
    </div>
  );
}

export default ProjectCard;
