import React from "react";
import profile from "../assets/ben.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 md:px-20 text-center md:text-left gap-10">
      
      {/* Left: Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={profile}
          alt="Benny"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-xl object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-4 leading-tight">
          Hi, I'm <span className="text-white">Benny 👋</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer <br /> React • Node.js • MongoDB Enthusiast
        </p>

        <a
          href="/projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg transition duration-300"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
