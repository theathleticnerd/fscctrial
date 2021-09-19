import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <div id="location">
      <FeatureContainer>
        <h1>Pay Us a Visit...</h1>
        <p>
          No.14, 5th Cross St, Extension, Bharathi Nagar, Katpadi, Vellore,
          Tamil Nadu 632007 <br />- We're waiting
        </p>
        <a
          href="https://maps.google.com/maps?cid=3910776654668614952&hl=en"
          target="_blank"
        >
          <FeatureButton>View Us on Maps</FeatureButton>
        </a>
      </FeatureContainer>
    </div>
  );
};

export default Feature;
