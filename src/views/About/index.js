import React from "react";

export default function About() {
  return (
    <div className="section">
      <div>
        <p className="heading">About Me</p>
        <hr className="underline"></hr>
      </div>
      <div>
        <div>
          <p className="about-text">
            Hi, my name is Usman Zain. I am a research assistant at Micro
            Electronics Research Lab. I develop software for embedded RISC-V
            devices and design RISC-V based SoC and processors using the Chisel
            programming language. I have also worked as a web/mobile developer
            previously for a startup. My interests are compilers, embbeded
            system programming, rtl design using modern languages. Some of my
            skills and expertise are listed below.
          </p>
          <div className="about-skills">
            <p className="about-text">
              &#8594; React/React Native
              <br />
              &#8594; Linux
              <br />
              &#8594; Scala
              <br />
            </p>
            <p className="about-text">
              &#8594; C/C++
              <br />
              &#8594; Python
              <br />
              &#8594; C#
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
