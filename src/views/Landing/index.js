import React from "react";
import artwork from "../../assets/artwork.svg";
import ContactButtons from "../../components/ContactButtons";

export default function Landing() {
  return (
    <div className="landing">
      <div>
        <p>
          <span style={{ fontSize: "18px" }}>Hi, my name is</span>
          <br /> <span className="title">Usman Zain</span> <br />
          <span className="lead">
            I am a software engineer <br />
            and a web developer.
          </span>
        </p>

        <ContactButtons />
      </div>
      <div className="landing-artwork-container">
        <img className="landing-artwork" src={artwork} />
      </div>
    </div>
  );
}
