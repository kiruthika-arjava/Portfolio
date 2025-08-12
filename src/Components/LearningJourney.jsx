import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiC, SiCplusplus, SiTailwindcss } from "react-icons/si";

const LearningJourney = () => {
  const journey = [
    {
      year: "2024",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "C", icon: <SiC className="text-sky-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-sky-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      year: "2025",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-300" /> },
        { name: "Database", icon: <FaDatabase className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
  ];

  return (
    <section id="journey" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Learning Journey</h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          {journey.map((card, idx) => (
            <div key={idx} className="w-full md:w-72 bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105">
              <h3 className="text-xl font-semibold text-center mb-4">{card.year}</h3>
              <div className="grid grid-cols-2 gap-4">
                {card.skills.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <div className="text-3xl">{s.icon}</div>
                    <div className="text-sm font-medium">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
