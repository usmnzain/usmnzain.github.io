import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import resume from "../../assets/usman_zain.pdf";

export default function Header() {
  const [cname, setCname] = useState("header");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 5) {
      setCname("header shadow header-offset");
    } else {
      setCname("header");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>
      <ul>
        <li>
          <Link className="header-link" to="/about">
            About
          </Link>
        </li>
        {/* <li>
          <Link className="header-link" to="/projects">
            Projects
          </Link>
        </li> */}
        <li className="resume-link">
          <a href={resume} target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
