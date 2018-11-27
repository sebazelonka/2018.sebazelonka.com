import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import Navbar from "../components/Navbar";
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
  min-height: calc(100vh - 7rem);
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar class="fixed" />
    <MainContent>{children}</MainContent>
    <Footer />
  </Wrapper>
);

export default TemplateWrapper;
