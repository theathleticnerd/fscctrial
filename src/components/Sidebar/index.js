import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  textDecoration: "none",
  listStyle: "none",
  transition: "0.2s ease-in-out",
  color: "#fff",
  cursor: "pointer",

  "&:hover": {
    color: "#01bf71",
    transition: "0.2s ease-in-out",
  },
};

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <HashLink to="/" exact onClick={toggle} style={navStyle}>
            Home
          </HashLink>
          <HashLink to="/#pictures" exact onClick={toggle} style={navStyle}>
            Pictures
          </HashLink>
          <HashLink to="/#location" exact onClick={toggle} style={navStyle}>
            Location
          </HashLink>

          <HashLink to="/#about" onClick={toggle} style={navStyle}>
            About
          </HashLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute target="_blank" href="https://www.google.com">
            Call Now
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
