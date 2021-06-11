import React, { Component, createRef, Fragment } from "react";
import {
  Hero,
  TitleTab,
  Title,
  TechniqueTitle,
  Introduction,
  InfoTitle,
  InfoText,
  QuickInfo,
  InfoClient,
  Paragraph,
  InfoListContainer,
  InfoSubtitle,
  ClientHeader,
  CaseWrapper,
  Problem,
  Results,
  Subheading,
  BackButton,
  BackArrow
} from "../styles/Case.styles";
import { withRouter } from "react-router";

// Has a scroll function to detect if the body is a black background and therefore
// Has to switch the backbutton to a black background

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: ""
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      introTop: this.introRef.current.getBoundingClientRect().top - 40
    });
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/work");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);

        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }

  componentWillUnmount() {
    if (this.state.toBack) {
      window.scrollTo(0, 0);
    }
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const introTop = this.introRef.current.getBoundingClientRect().top;
    if (introTop < 40) {
      this.setState({
        hasBackground: true
      });
      this.props.setNavBackground(true);
    } else {
      this.setState({
        hasBackground: false
      });
      this.props.setNavBackground(false);
    }
  };

  render() {
    const hero = require("../assets/cases/AI.jpeg");
    const backButton = require("../assets/icons/back.png");
    return (
      <Fragment>
        <BackButton
          onClick={() => this.setState({ toBack: true, hasBackground: false })}
          toBack={this.state.toBack}
          hasBackground={this.state.hasBackground}
        >
          <BackArrow src={backButton} alt="Back home" />
        </BackButton>
        <CaseWrapper>
          <Hero image={hero}>
            <div>
              <TitleTab>
                <ClientHeader>Case Study</ClientHeader>
                <Title>AI helps power coral reef restoration</Title>
                <TechniqueTitle>
                  Accenture teamed up with technology and industry partners to develop an innovative solution for restoring the reefs.
                </TechniqueTitle>
              </TitleTab>
            </div>
          </Hero>
          <Introduction ref={this.introRef}>
            <QuickInfo>
              <InfoText>
                <InfoClient>Artificial Intelligence</InfoClient>
                <InfoTitle>Call for change</InfoTitle>
                <InfoSubtitle>

                </InfoSubtitle>
                <Paragraph>
                  Coral reefs are among the planet’s most precious natural resources, and the most precarious. These diverse ecosystems—home to a quarter of all global marine life—protect shorelines from tropical storms, provide food and income for 100 million people and produce $36 billion in economic value annually. But reefs are endangered: threatened by everything from destructive fishing methods to warming temperatures to unsustainable coastal development.
                </Paragraph>
                <Paragraph>
                Restoring reefs depends first upon accurately assessing their overall health, but traditional monitoring efforts are time-intensive and unreliable, often yielding inaccurate results. There had to be a smarter way.
                </Paragraph>
              </InfoText>
              <InfoListContainer>

              </InfoListContainer>
            </QuickInfo>
            <Problem>
              <Subheading>When tech meets human ingenuity</Subheading>
              <Paragraph>
                Accenture teamed up with technology and industry partners and a coral conservation foundation in El Nido, Philippines to develop an innovative solution for restoring the reefs. Project: CORaiL, an artificial intelligence-powered system for monitoring fish populations, was born, and the system was deployed in a reef in the Philippines in 2019.
              </Paragraph>
              <Paragraph>
               At the heart of the endeavor is a cost-effective edge computing solution that observes, classifies and measures marine life. Strategically placed smart cameras, installed underwater and equipped with the Accenture Video Analytics Services Platform (VASP) and Intel hardware, allow for non-invasive observations. The cameras detect and photograph marine life and deep learning algorithms are applied to count and classify the fish.
              </Paragraph>

            </Problem>
          </Introduction>

          <Results>
            <Subheading>A valuable difference</Subheading>
            <Paragraph>
              To date, Project: CORaiL has collected more than 71,000 images, which researchers use to gauge reef health by analyzing fish populations in real-time, essentially doing hands-on monitoring without disrupting the underwater environment.
            </Paragraph>
            <Paragraph>
              While its features are specific to marine use cases, additional applications of the technology could include studying the migration rate of fish to colder climates and monitoring intrusion in protected underwater areas.
            </Paragraph>
            <Paragraph>
              Project: CORaiL demonstrates how creative thinking, cutting-edge technology and collaborative partnerships can navigate truly uncharted waters, stretching the boundaries of what’s possible and providing critical information to help make better decisions about how we live and work in a changing and fragile world.
            </Paragraph>

          </Results>

        </CaseWrapper>
      </Fragment>
    );
  }
}

export default withRouter(Case);
