import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Projects from "./views/Projects";
import Header from "./components/Header";
import About from "./views/About";

function App() {
  return (
    <div style={{ height: "100vh" }} className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
