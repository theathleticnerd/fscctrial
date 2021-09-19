import React from "react";
import logo from "../../images/logo1.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href="/">
              <a href="/" style={{ textDecoration: "none", color: "#fff" }}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",

                    margin: "0px",
                  }}
                  src={logo}
                />
              </a>
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/faithseniorcarecenter"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.google.co.in/search?ved=1t:65428&hl=en&q=Faith+Senior+Care+Center+(Geriatric+Care+Vellore)&ludocid=3910776654668614952&lsig=AB86z5WsHmofidrwqXLo0ImlkgB9#fpstate=lie"
                target="_blank"
                aria-label="Google"
              >
                <FaGoogle />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.google.com/maps?cid=3910776654668614952&hl=en"
                target="_blank"
                aria-label="Google"
              >
                <HiLocationMarker />
              </SocialIconLink>

              {/* <SocialIconLink
                href="https://www.instagram.com/tedxvitapuniversity/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/tedxvitap?s=08"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/tedxvitap"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
