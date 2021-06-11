import React from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";
// import { HomeLink, TextLink } from "../styles/Work.styles";
import { withRouter } from "react-router";

const Contact = ({ history }) => {


  return (
    <Wrapper>
      <Container>
        <Header>jobs@accenture.com</Header>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
