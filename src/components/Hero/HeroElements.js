import styled from "styled-components";
import ImgBg from "../../images/6.jpeg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 110vh;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 650px) {
    background-position: 13%;
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-family: sans-serif;
  font-size: clamp(3rem, 1vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e62b1e;
  letter-spacing: 3px;

  @media screen and (max-width: 650px) {
    font-size: clamp(2.5rem, 10vw, 5rem);
  }
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 3rem);
  margin-bottom: 10px;
  font-family: sans-serif;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e62b1e;
  color: #fff;
  transition: 0.2s ease-out;
  outline: none;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #e62b1e;
  }
`;
