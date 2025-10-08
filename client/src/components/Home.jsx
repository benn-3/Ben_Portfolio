import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] text-center space-y-4">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Benny</h1>
      <p className="text-xl md:text-2xl text-gray-700">
        Full Stack Developer | React & Node.js Enthusiast
      </p>
      <a
        href="/projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
      >
        View Projects
      </a>
    </div>
  );
};

export default Home;
