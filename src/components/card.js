import React from "react";
import Carousal from "./carousal";

export default function Card(props) {
  return (
    <div className="project-card mb-5 shadow p-3 rounded">
      <div className="row">
        <div className="col-lg-5">
          <Carousal images={props.images} />
        </div>
        <div className="col">
          <p className="card-heading">{props.title}</p>
          <p>{props.children}</p>
          <a href={props.demo} className="btn btn-secondary mr-3">
            <i className="fas fa-external-link-alt mr-2"></i>
            Demo
          </a>
          {props.github !== null && (
            <a href={props.github} className="btn btn-secondary">
              <i className="fab fa-github-alt mr-2"></i>
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
