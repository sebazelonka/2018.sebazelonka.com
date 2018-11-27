import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";
import SimpleLineIcon from "react-simple-line-icons";
import styled from "styled-components";

import Contact from "../components/Contact";

import seba from "../img/about.png";
import aboutTop from "../img/about-top.png";

const Top = styled.section`
  background-image: url(${aboutTop});
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
const About = styled.section`
  margin: 3rem 0;
`;

const Quote = styled.section`
  margin: 5rem 0;
  .wrapper {
    position: relative;
    padding-left: 3rem;
    &::after {
      content: "";
      position: absolute;
      left: 15px;
      width: 10px;
      top: 0;
      background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
      bottom: 0;
      z-index: 1;
    }
  }
  .quote {
    font-family: "merriweather", serif;
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;
  }
  .author {
    font-family: "Exo 2", sans-serif;
    font-weight: 700;
  }
`;

const Services = styled.section`
  background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
  padding: 4rem 0 1rem;

  [class^="icon-"] {
    font-size: 3rem !important;
    margin-bottom: 2rem;
  }
  h3 {
    font-family: "Exo 2", sans-serif;
  }
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px dotted #000;
  }
`;

const Articles = styled.section`
  padding: 6rem 0;
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .title {
    font-family: "exo 2", sans-serif;
    color: #333;
    font-weight: 700;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
`;

const ContactSection = styled.section`
  padding: 6rem 0;
`;

const MainButton = styled(Link)`
  font-family: "Exo 2", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 15px;
  line-height: 1;
  &:hover {
    color: #000;
    text-decoration: none;
  }
`;

export default class IndexPage extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", function() {
      var nav = document.getElementsByTagName("nav")[0];
      nav.classList.toggle("sticky", window.scrollY > window.innerHeight - 64);
    });
  }
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Top />
        <About>
          <Container>
            <Row>
              <Col md={{ size: 6, offset: 3 }}>
                <p>
                  Hi, I'm Sebastian, a Product Designer from Buenos Aires,
                  Argentina. I have more than 10 years of experience on Digital
                  Products and I've worked on several projects from different
                  industries: B2B, B2C, Non Profit Orgs, Volunteer.{" "}
                </p>
                <p>
                  I like to start new endeavors because I love to discover,
                  learn and understand specific problems from different worlds.
                </p>
                <p>
                  Because of the type of clients I primarily work with, I’m not
                  able to display some of the work I did. If you would like to
                  see some examples or something a bit more specific, please get
                  in touch and I’d be happy to send you some examples! Usually,
                  you can find me hanging out on Twitter both in Spanish and
                  English. I would love to hear you!
                </p>
                <h3>Experience</h3>
                <ul>
                  <li>Freelance 2008 - Present </li>
                  <li>Onapsis 2016 - 2018</li>
                  <li>Wolox 2015 - 2016</li>
                  <li>Aquicore 2014 - 2015</li>
                  <li>Zauber 2011 - 2013</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </About>
        <Quote>
          <Container>
            <Row>
              <Col md={{ size: 6, offset: 3 }} className="wrapper">
                <p className="quote">
                  I worked with Sebastian and depended on him to provide UX
                  designs and workflows to ensure proposed features would both
                  work within the existing product UI and enhance the experience
                  of our users. Sebastian always provided clear designs and
                  typically provide alternate designs in order to present the
                  best possible options.
                </p>
                <p className="author">
                  Alex Horan • Director of Product Management, Onapsis
                </p>
              </Col>
            </Row>
          </Container>
        </Quote>
        <section>
          <img src={seba} alt="" className="img-fluid" />
        </section>

        <ContactSection>
          <Container>
            <Row className="mb-5">
              <Col className="text-center">
                <h1>Get in touch</h1>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 8, offset: 2 }}>
                <Contact />
              </Col>
            </Row>
          </Container>
        </ContactSection>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query About {
    allMarkdownRemark(limit: 1) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
