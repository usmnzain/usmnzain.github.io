import React from "react";
import Card from "../../components/Card";
import laf from "../../assets/lafw.png";
import brandmefy from "../../assets/brandmefy.png";
import nc from "../../assets/nc.png";

export default function Projects() {
  return (
    <div className="section">
      <p className="heading text-center">Some things I've built</p>
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
    </div>
  );
}
