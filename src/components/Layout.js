import React from "react";
import Helmet, { Title } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "./Footer";

import favicon from "../img/favicon.png";

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
  padding-top: 58px;
  min-height: calc(100vh - 58px);
`;

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet>
      <Title>
        Sebastian Zelonka | Where UX Design meets Front End Development
      </Title>
      <link rel="icon" type="image/png" href={favicon} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-49715544-1"
      />
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments); }
        gtag('js', new Date());
      
        gtag('config', 'UA-49715544-1');`}
      </script>
    </Helmet>
    <Navbar class="fixed" />
    <MainContent>{children}</MainContent>
    <Footer />
  </Wrapper>
);

export default TemplateWrapper;
