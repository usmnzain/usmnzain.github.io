import React, { useState, useEffect, useRef } from "react";
import logo from '../images/logo.svg'
import resume from '../resume/usman_zain.pdf'

export default function Header(props) {
  const [cname, setCname] = useState('header')

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    if (window.pageYOffset > 5) {
      setCname("header shadow header-offset")
    }
    else {
      setCname("header")
    }
  }
  const { scrollTo, aboutRef, projectRef, contactRef } = props
  return (
    <div className={cname}>
      <img className='logo' src={logo} />
      <ul>
        <li><a onClick={() => { scrollTo(aboutRef.current) }}>About</a></li>
        <li><a onClick={() => { scrollTo(projectRef.current) }} >Projects</a></li>
        <li><a onClick={() => { scrollTo(contactRef.current) }} >Contact</a></li>
        <li className="resume-link"><a href={resume} target='_blank'>Resume</a></li>
      </ul>
    </div >
  );
}
