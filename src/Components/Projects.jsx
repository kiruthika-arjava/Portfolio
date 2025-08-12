import React from "react";

const Projects = () => {
  const projects = [
    { title: "Bouquet Flower Shop", img: "/site.png", desc: "React + Tailwind boutique site" },
    { title: "Calculator", img: "/Calculator.png", desc: "JS based calculator UI" },
    { title: "Quiz Game", img: "/Game.png", desc: "Interactive quiz game" },
    // add more if needed
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
              <div className="h-44 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <div className="mt-4">
                  <a href="http://localhost:5174/" className="text-pink-500 font-medium hover:underline">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
