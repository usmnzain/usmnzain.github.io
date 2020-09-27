import React from "react";

export default function Header() {
  return (
    <div className="header">
      <p className="title">&gt; Usman Zain</p>
      <p className="lead">
        I am a web developer based in Pakistan. My passion is building simple,
        beautiful user experiences.
      </p>
      <p className="resume">
        Take a look at my resume: <span><a href={`${process.env.PUBLIC_URL} /resume/usman_zain.pdf`}>usmanzain.pdf</a></span>
      </p>
      <p className="connect">
        Connect with me:
        <a href="https://twitter.com/usmnzen"><i className="fab fa-twitter-square"></i></a>
        <a href="https://github.com/usmnzain/"><i className="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/usman-zain-ul-abedin-17779894/"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:uszain@gmail.com"><i class="fas fa-envelope-square"></i></a>
      </p>
    </div >
  );
}
