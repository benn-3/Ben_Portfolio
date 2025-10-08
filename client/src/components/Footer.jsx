// src/components/Footer.jsx
import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>© 2025 Benny Hinn. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-blue-400">GitHub</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
        <a href="#" className="hover:text-blue-400">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
