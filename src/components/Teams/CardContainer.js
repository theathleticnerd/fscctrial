import React, { useState } from "react";
import Card from "./Card";
import Team1 from "./team1.json";
import "./card_container.css";
function CardContainer() {
  const [cards, setcard] = useState("");

  return (
    <div>
      <div className="main">
        <br />
        <br />

        <h3
          style={{
            textAlign: "center",
            backgroundColor: "#000",
            margin: "30px",
            paddingTop: "10px",
          }}
        >
          Pictures
        </h3>

        <div className="flex_container">
          {Team1.map((card) => (
            <Card
              imgurl={card.imgurl}
              name={card.name}
              profession={card.profession}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
