import React from "react";

export default function Header() {
  return (
    <div className="header">
      <p className="title">> Usman Zain</p>
      <p className="lead">
        I am web developer based in Pakistan. My passion is building simple,
        beautiful user experiences.
      </p>
      <p className="resume">
        Take a look at my resume: <span>usmanzain.pdf</span>
      </p>
      <p className="connect">
        Connect with me:
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-github-square"></i>
        <i className="fab fa-linkedin"></i>
        <i class="fas fa-envelope-square"></i>
      </p>
    </div>
  );
}
