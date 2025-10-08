import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-900 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Ben Portfolio</div>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link to="/skills" className="hover:text-blue-400 transition">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1 container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Ben Portfolio. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
