import { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

// my projects array - I am using this for the initial app state
const initialProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A website I made to showcase my work. Used HTML, CSS and a bit of JavaScript. It was my first real project and I learned a lot about flexbox.",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A simple todo list app where you can add and delete tasks. I built this when we were learning about state in React. It was challenging at first but I got it working!",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Fetches weather data from an API and displays it on the page. I used the OpenWeather API. This one taught me a lot about useEffect and fetch.",
  },
];

function App() {
  // state for the projects list
  const [projects, setProjects] = useState(initialProjects);

  // state for search
  const [searchTerm, setSearchTerm] = useState("");

  // this function adds a new project to the list
  function handleAddProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // this function deletes a project
  function handleDelete(id) {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  }

  // filter projects based on searchTerm
  const filteredProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Moringa Student Project Showcase</h1>

      <AddProjectForm onAddProject={handleAddProject} />

      <ProjectList
        projects={filteredProjects}
        onDelete={handleDelete}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default App;
