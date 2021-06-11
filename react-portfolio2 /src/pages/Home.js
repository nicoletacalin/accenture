import React from "react";
import { withRouter } from "react-router-dom";
import "../assets/images/office.jpeg";
import {
  Wrapper,
  Article,
  Title,
  Caption,
  Emphasis,
  CoverSheet,
  CoverImg,

} from "../styles/Home.styles";

const Home = ({ history }) => {
  const background = require("../assets/images/sweet.jpeg");
  const accenture = require("../assets/images/accenture-logo.png")
  return (
    <Wrapper>
      <Article>
        <Title><CoverImg src={accenture} alt="accenture" /></Title>
        <Caption>
          <Emphasis>Our purpose: </Emphasis>
          To deliver on the promise of technology
          and human ingenuity.
          We embrace the power of change to create 360° value
for our clients, people and communities.
        </Caption>
      </Article>
      <Article>
        <CoverSheet />
        <CoverImg src={background} alt="sweet" />
      </Article>
    </Wrapper>
  );
};

export default withRouter(Home);
