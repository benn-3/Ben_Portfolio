// src/components/Projects.jsx
import React from "react";
import "../css/Projects.css";

const projects = [
  { title: "Portfolio Website", description: "My personal portfolio built with React and Tailwind.", link: "#" },
  { title: "Task Manager", description: "A full-stack task management app using MERN.", link: "#" },
  { title: "E-commerce App", description: "Online store project with cart functionality.", link: "#" },
];

const Projects = () => {
  return (
    <div className="projects min-h-screen p-10 bg-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
