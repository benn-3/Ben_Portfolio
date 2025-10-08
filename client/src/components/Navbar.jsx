// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Benny Hinn</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
