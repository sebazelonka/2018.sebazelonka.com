import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Navbar from "../components/Navbar";
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

const MainContent = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <MainContent>{children}</MainContent>
    <Footer />
  </Wrapper>
);

export default TemplateWrapper;
