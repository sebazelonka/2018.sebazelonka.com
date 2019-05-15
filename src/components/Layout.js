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

      {/* Default Statcounter code for sebazelonka.com http://sebazelonka.com */}
      <script type="text/javascript">
        var sc_project=12008588; var sc_invisible=1; var sc_security="eb3986b8";
        var sc_https=1; var sc_remove_link=1;
      </script>
      <script
        type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async
      />
      <noscript>
        &lt;div class="statcounter"&gt;&lt;img class="statcounter"
        src="https://c.statcounter.com/12008588/0/eb3986b8/1/" alt="Web
        Analytics Made Easy - StatCounter"&gt;&lt;/div&gt;
      </noscript>
      {/* End of Statcounter Code */}
    </Helmet>
    <Navbar class="fixed" />
    <MainContent>{children}</MainContent>
    <Footer />
  </Wrapper>
);

export default TemplateWrapper;
