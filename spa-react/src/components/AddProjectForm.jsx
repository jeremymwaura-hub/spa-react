import { useState } from "react";
import "../styles/AddProjectForm.css";

// this component is the form for adding a new project
// I wrote this part while practicing React forms at Moringa
function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // make sure the fields are not empty
    if (title === "" || description === "") {
      alert("Please fill in all fields!");
      return;
    }

    // create a new project object
    const newProject = {
      id: Math.random(), // simple id for this practice app
      title: title,
      description: description,
    };

    // call the function from App.js
    onAddProject(newProject);

    // reset the form after submitting
    setTitle("");
    setDescription("");
  }

  return (
    <div className="form-container">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          rows="4"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProjectForm;
