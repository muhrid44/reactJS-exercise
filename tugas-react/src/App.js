import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Article from "./components/Article";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Article />
    </div>
  );
}

export default App;
