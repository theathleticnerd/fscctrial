import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about" classname="about_container">
      <div className="about_inner_container">
        <div className="left1">
          <p>
            "When living alone is no longer an option. Welcome to an old home,
            where one could enjoy retirement and homely nutritious food. Faith
            Senior Care Center ensures 24/7 care and both Independent and
            Assisted Living with both Short/Long term stay. Attendant room is
            included if needed."
          </p>
        </div>
        <div className="right1">
          <h2 style={{ fontFamily: "Josefin Sans" }}>About FSCC</h2>
          <h5 style={{ fontFamily: "Josefin Sans" }}>
            {" "}
            Faith Senior Care Center
          </h5>
        </div>
      </div>
      <div className="about_inner_container">
        <div className="right1">
          <h1 style={{ fontFamily: "Josefin Sans" }}>
            Where's <br /> FSCC
          </h1>
        </div>
        <div className="left1">
          <p>
            No.14, 5th Cross St, Extension, Bharathi Nagar, Katpadi, Vellore,
            Tamil Nadu 632007. <br />
            Come, pay us a visit and see for yourself! <br />
            (Find us on Google Maps and Facebook)
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
