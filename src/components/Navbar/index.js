import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo1.jpg";
import Ria from "../../images/Ria.jpg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SocialIconLink,
} from "./NavbarElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const navStyle = {
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",

  "&.active": {
    borderBottom: "3px solid #01bf71",
  },
};

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <a href="/" style={{ marginTop: "25px" }}>
              {" "}
              <img
                style={{
                  width: "150px",
                  height: "150px",

                  margin: "0px",
                }}
                src={logo}
              />
            </a>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <HashLink to="/" exact style={navStyle}>
                  Home
                </HashLink>
              </NavItem>
              <NavItem>
                <HashLink to="/#pictures" exact style={navStyle}>
                  Pictures
                </HashLink>{" "}
              </NavItem>
              <NavItem>
                <HashLink to="/#location" exact style={navStyle}>
                  Location
                </HashLink>{" "}
              </NavItem>

              <NavItem>
                <HashLink to="/#about" style={navStyle}>
                  About Us
                </HashLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink target="_blank" href="http://tedxvitapuniversity.in">
                Call Now
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
