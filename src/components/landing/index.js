import React from "react";

export default function Landing( props ) {
    return (
        <div className="landing">
            <p>
                <span style={{ fontSize: '18px' }}>Hi, my name is</span>
                <br /> <span className="title">Usman Zain</span> <br />
                <span className="lead">I am a software engineer <br />and a web developer.</span>
            </p>

            <button onClick={()=>{props.scrollTo(props.contactRef.current)}} className="landing-button">Get In Touch</button>
        </div >
    );
}
