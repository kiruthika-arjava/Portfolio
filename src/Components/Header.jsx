import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">M.G. Kiruthika nammatha</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#journey" className="hover:underline">Journey</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
