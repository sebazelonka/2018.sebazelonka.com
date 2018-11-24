import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Wrapper = styled.div`
  font-family: "merriweather", serif;
  font-size: 1.125rem;
  line-height: 2rem;
  h1,
  h2,
  h3 {
    font-family: "Exo 2", sans-serif;
    font-weight: 700;
  }
`;

const LandingTemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <div>{children}</div>
    <Footer />
  </Wrapper>
);

export default LandingTemplateWrapper;
