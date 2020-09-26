import React from "react";
import Card from "./card";
import laf from "../images/lafw.png";
import brandmefy from "../images/brandmefy.png";
import nc from "../images/nc.png";

export default function Body() {
  return (
    <div className="body">
      <p className="heading text-center">Projects</p>
      <hr style={{ width: "10%" }} className="underline"></hr>
      <Card
        images={[laf]}
        demo={"https://lafootball.com"}
        github={null}
        title={"LaFootball"}
      >
        A football app that shows everything related to football. Livescores,
        betting odds, previous head to head matches, team information, league
        standing etc. It has woocommerce store connected through wordpress api
        and a custom mobile design. Users can save matches they want to follow.
      </Card>
      <Card
        images={[nc]}
        demo={"https://pure-wave-53978.herokuapp.com/"}
        github={null}
        title={"Nexus Capital"}
      >
        A real estate app with employee portal. Employees can post ads about
        different properties, users view ads, book appointments etc. Currently,
        this project only contains a dashboard for employees.
      </Card>
      <Card
        images={[brandmefy]}
        demo={"https://brandmefy.com/"}
        github={null}
        title={"Brandmefy"}
      >
        A startup that creates custom digital signage. Website is purely based
        on javascript. It has minimal design and is fully responsive.
      </Card>

      <p className="heading text-center">Contact Me</p>
      <hr style={{ width: "16%" }} className="underline"></hr>
      <div>
        <p className="contact-email">uszain@gmail.com</p>
      </div>
      <p className="copyright-text">Copyright ©2020 All rights reserved</p>
    </div>
  );
}
