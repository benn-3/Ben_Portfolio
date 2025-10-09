import React from "react";

// Import all skill icons
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactLogo from "../assets/react.png";
import node from "../assets/node.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import vscode from "../assets/vscode.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import canva from "../assets/canva.png";
import jenkins from "../assets/jenkins.png";
import kubernetes from "../assets/kubernetes.png";
import docker from "../assets/docker.png";
import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import kali from "../assets/kali.png";

const Skills = () => {
  const skills = {
    Languages: [
      { name: "C", img: c },
      { name: "C++", img: cpp },
      { name: "Python", img: python },
      { name: "Java", img: java },
      { name: "JavaScript", img: js },
      { name: "HTML", img: html },
      { name: "CSS", img: css },
    ],
    "Frameworks & Libraries": [
      { name: "React", img: reactLogo },
      { name: "Node.js", img: node },
     
    ],
    Databases: [
      { name: "MySQL", img: mysql },
      { name: "MongoDB", img: mongodb },
    ],
    "Tools & Platforms": [
      { name: "VS Code", img: vscode },
      { name: "Git", img: git },
      { name: "GitHub", img: github },
      { name: "Canva", img: canva },
      { name: "Jenkins", img: jenkins },
      { name: "Kubernetes", img: kubernetes },
      { name: "Docker", img: docker },
      { name: "AWS", img: aws },
      { name: "Azure", img: azure },
    ],
    "Cybersecurity & Networking": [
      { name: "Kali Linux", img: kali },
    ],
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-center px-6 py-16">
      <h2 className="text-4xl font-bold text-blue-400 mb-12">My Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col items-center bg-gray-700 px-4 py-3 rounded-xl hover:bg-blue-500 transition-colors duration-200 w-28"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 mb-2 object-contain"
                  />
                  <span className="text-white text-sm font-medium">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
