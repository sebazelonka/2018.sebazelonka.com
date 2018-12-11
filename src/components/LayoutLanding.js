import React from "react";
import Helmet, { Title } from "react-helmet";
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
    <Helmet>
      <Title>
        Sebastian Zelonka | Where UX Design meets Front End Development jajajaj
      </Title>
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
    <>{children}</>
    <Footer />
  </Wrapper>
);

export default LandingTemplateWrapper;
