import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  NumberList,
  Current,
  SliderContainer,
  SlideWrapper,
  LinkWrap,
  Overlay,
  ContentWrap,
  CaseTitle,
  Button,
  SlickSwitch,
  Section,
  Spanner,
  Subtitle,

} from "../styles/Work.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = ({ history }) => {
  const [carouselSet, setCarousel] = useState(false);
  const [currentSlide, setSlide] = useState(1);
  const [animateHome] = useState(false);
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  const carousel = useRef(null);

  useEffect(() => {
    animateHome &&
      setTimeout(() => {
        history.push("/");
      }, 400);
  }, [animateHome, history]);

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 1000);
  }, [toCase, history]);

  if (!carouselSet) {
    setCarousel(true);
  }

  const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (old, next) => setSlide(next + 1)
  };

  const PreviousIcon = require("../assets/icons/left-arrow.png");
  const NextIcon = require("../assets/icons/right-arrow.png");

  const CaseOne = require("../assets/cases/AI.jpeg");
  const CaseTwo = require("../assets/cases/seeds.jpeg");
  const CaseThree = require("../assets/cases/water.jpeg");
  const CaseFour = require("../assets/cases/schoolforjustice-hero.jpg");
  const CaseFive = require("../assets/cases/damtotdamloop-hero.jpg");

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <>
      <Wrapper>

        <Section>
          <SliderContainer {...settings} ref={carousel} toCase={!!toCase}>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseOne} active={toCase === "/case"}>
                  <Overlay
                    active={!!toCase}
                    onMouseDown={e => setCoords(e.nativeEvent.x)}
                    onMouseUp={e => handleCaseSwap(e.nativeEvent, "/case")}
                  >
                    <ContentWrap>
                      <CaseTitle>
                        Artificial Intelligence
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>Raise the reef: AI helps power coral reef restoration</Subtitle>
                      <Subtitle>Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseTwo}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        Accenture Federal Services
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>USDA seeds of success</Subtitle>
                      <Subtitle>How the USDA’s online portal equips farmers to grow their businesses.</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseThree}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        Investment Banking
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>Securities firm digitizes its advisory business</Subtitle>
                      <Subtitle>We helped a leading Japanese securities firm redefine its customer relationships by leveraging modern technology.</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseFour}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        High Tech
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>Fortifying with partner experience</Subtitle>
                      <Subtitle>Using digital and intelligent automation, Lenovo elevated its partner experience for better loyalty and win rate</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseFive}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        Digital Government Innovation
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>Scaling contact tracing to keep employees safe</Subtitle>
                      <Subtitle>NASA deploys a modern unified application for COVID contact tracing, enabling thousands of employees and contractors to return to work safely.</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
          </SliderContainer>
          <NumberList navigating={!!toCase}>
            <SlickSwitch onClick={() => carousel.current.slickPrev()}>
              <Button src={PreviousIcon} alt="Previous case" />
            </SlickSwitch>
            <Current>
              <p>0{currentSlide} / 05</p>
            </Current>
            <SlickSwitch onClick={() => carousel.current.slickNext()}>
              <Button src={NextIcon} alt="Next case" />
            </SlickSwitch>
          </NumberList>
        </Section>
      </Wrapper>
    </>
  );
};

export default withRouter(Work);
