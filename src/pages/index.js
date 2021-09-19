import React, { useState } from "react";
import { GlobalStyle } from "../globalStyles";
import Hero from "../components/Hero";

import Feature from "../components/Feature";
import Footer from "../components/Footer";

import About from "../components/About/about.js";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import CardComponent from "../components/Teams/CardContainer";
import CardContainer from "../components/Teams/CardContainer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />

      <div id="pictures" style={{ position: "absolute" }}>
        <CardContainer style={{ height: "1000px" }} />
      </div>

      <CardComponent />

      <Feature />

      <About />

      <Footer />
    </>
  );
}

export default Home;
