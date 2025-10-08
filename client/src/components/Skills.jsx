// src/components/Skills.jsx
import React from "react";
import "../css/Skills.css"; // optional for custom styles

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <div className="skills-section min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-white shadow-lg rounded-lg p-6 text-center font-semibold text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
