// src/components/About.jsx
import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about min-h-screen p-10 bg-gray-50">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg mb-4">
        I am a passionate developer with experience in building full-stack web applications.
        I love learning new technologies and improving my skills.
      </p>
      <p className="text-lg">
        Skills: JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS
      </p>
    </div>
  );
};

export default About;
