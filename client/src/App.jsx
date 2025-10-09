import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-5 bg-gray-900 bg-opacity-80 shadow-lg sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-blue-400">Ben Portfolio</h1>
          <div className="flex gap-6 text-lg">
            <Link className="hover:text-blue-400 transition" to="/">Home</Link>
            <Link className="hover:text-blue-400 transition" to="/about">About</Link>
            <Link className="hover:text-blue-400 transition" to="/skills">Skills</Link>
            <Link className="hover:text-blue-400 transition" to="/projects">Projects</Link>
            <Link className="hover:text-blue-400 transition" to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Pages */}
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 bg-gray-900 text-gray-400 text-sm">
          © 2025 Ben Portfolio. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
