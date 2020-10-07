import React from "react";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Header from "./components/header"

function App() {
  return (
    <div className="container">
      <div className='row'>
        <Header />
      </div>
      <div style={{ 'height': '100vh' }} className="row">
        <Landing />
      </div>
      <div className="row">
        <Projects />
      </div>
    </div>
  );
}

export default App;
