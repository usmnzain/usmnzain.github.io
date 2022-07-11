import React from "react";
import Slider from "react-slick";

function prevArrow(props) {
  return <i onClick={props.onClick} className="fas fa-angle-right"></i>;
}
export default function Carousal(props) {
  let settings = {
    infinite: true,
    mobileFirst: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <prevArrow />,
  };
  return (
    <Slider {...settings}>
      {props.images.map((item) => (
        <div className="project-img-container">
          <img className="project-img" alt={item} src={item} />
          <div class="overlay"></div>
        </div>
      ))}
    </Slider>
  );
}
