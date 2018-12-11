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
  padding-top: 64px;
  min-height: calc(100vh - 7rem);
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="Sebastian Zelonka | Where UX Design meets Front End Development" />
    <Navbar class="fixed" />
    <MainContent>{children}</MainContent>
    <Footer />
  </Wrapper>
);

export default TemplateWrapper;
