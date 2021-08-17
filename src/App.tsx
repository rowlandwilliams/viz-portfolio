import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="flex flex-col md:flex-row">
      <NavBar />
      <Projects />
    </div>
  );
}

export default App;
