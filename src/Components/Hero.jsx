import React from "react";

const Hero = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="flex-shrink-0">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden transform transition hover:scale-105">
            <img src="/Public/keerthi.jpg" alt="Kiruthika" className="w-full h-full object-cover object-top" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi, I'm Kiruthika <span className="animate-wave">👋</span></h2>
          <p className="mt-4 max-w-2xl text-lg opacity-95">
            A passionate Web Developer skilled in React, Tailwind, C, C++, DB and more. I love creating modern,
            interactive, and user-friendly web applications.
          </p>

          <a href="#projects" className="inline-block mt-6 bg-white text-pink-500 font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
