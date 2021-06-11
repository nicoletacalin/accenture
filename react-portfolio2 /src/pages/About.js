import React from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  AboutContainer,
  AboutTitle,
  DetailBlock,
  DetailPoint,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,


} from "../styles/About.styles";

const About = ({ history }) => {

  const office = require("../assets/images/aboutA.jpeg");

  return (
    <Wrapper>

      <Body>
        <ImageBackground backgroundImage={office}>
          <Overlay />
        </ImageBackground>
        <Container>
          <Hero>
            <Heading>Who we are</Heading>
            <Subtitle>

            </Subtitle>
          </Hero>
          <AboutContainer>
            <AboutTitle>What we believe</AboutTitle>
            <DetailBlock>
              <DetailPoint>

              </DetailPoint>
            </DetailBlock>

          </AboutContainer>

          <AboutContainer>
            <AboutTitle>How we work with clients</AboutTitle>
            <DetailBlock>
              <DetailPoint>

              </DetailPoint>
            </DetailBlock>
          </AboutContainer>

          <AboutContainer>
            <AboutTitle>Our community impact</AboutTitle>

            <DetailBlock>
              <DetailPoint>

              </DetailPoint>
            </DetailBlock>

          </AboutContainer>
        </Container>
      </Body>
    </Wrapper>
  );
};

export default withRouter(About);
