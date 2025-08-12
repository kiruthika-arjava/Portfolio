import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import LearningJourney from "./Components/LearningJourney";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LearningJourney />
        <img src="./public/Calculator.png"></img>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
