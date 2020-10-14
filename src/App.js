import React, { useRef } from "react";
import Landing from "./components/landing";
import Projects from "./components/projects";
import Header from "./components/header"
import About from "./components/about"
import Contact from './components/contact'

function App() {

  const scrollTo = e => {
    e.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header scrollTo={scrollTo} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />

      <div style={{ marginTop: '100px' }} className="container body">
        <div style={{ 'height': '100vh' }} className="row">
          <Landing scrollTo={scrollTo} contactRef={contactRef} />
        </div>
        <div ref={aboutRef} className='row'>
          <About />
        </div>
        <div ref={projectRef} className="row">
          <Projects />
        </div>
        <div ref={contactRef} className='row'>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
