import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/LayoutLanding";
import { Container, Row, Col } from "reactstrap";
import SimpleLineIcon from "react-simple-line-icons";

import styled from "styled-components";

import seba from "../img/seba.png";
import Contact from "../components/Contact";

const Top = styled.section`
  background-color: #000;
  color: #fff;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &::after {
    position: absolute;
    content: "";
    bottom: -5px;
    height: 5px;
    width: 100%;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
  }
  h1 {
    font-family: "Exo 2", sans-serif;
    font-size: 5rem;
    font-weight: 900;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: transparent;
    background-clip: text;
  }
  h2 {
    font-family: "merriweather", serif;
    font-size: 2rem;
  }
`;

const NavHome = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  font-family: "Exo 2", sans-serif;
  a {
    color: #fff;
    margin-right: 1rem;
    font-size: 700;
  }
`;

const About = styled.section`
  margin: 3rem 0;
  background-image: url(${seba});
  background-size: 25%;
  background-repeat: no-repeat;
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
  padding: 2rem 0;

  [class^="icon-"] {
    font-size: 3rem !important;
    margin-bottom: 2rem;
  }
  h3 {
    font-family: "Exo 2", sans-serif;
  }
`;
const Articles = styled.section`
  padding: 6rem 0;
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
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Top>
          <div className="container">
            <h1>Sebastian Zelonka</h1>
            <h2>UX Design , Front End Developer</h2>
          </div>
          <NavHome>
            <div className="container">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Services</Link>
              <Link to="/">Articles</Link>
              <Link to="/">Contact</Link>
            </div>
          </NavHome>
        </Top>
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
        <Services>
          <Container>
            <Row>
              <Col md="12" className="text-center mb-5">
                <h2>Sevicios</h2>
              </Col>
              <Col md="4" className="text-center">
                <SimpleLineIcon name="rocket" />
                <h3>Consultoría UX</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nihil aliquid id neque iste a blanditiis laudantium
                  ex tenetur itaque architecto sunt, illo, numquam non
                  accusantium tempora. Labore, facere fugiat.
                </p>
              </Col>
              <Col md="4" className="text-center">
                <SimpleLineIcon name="diamond" />
                <h3>UI Design</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nihil aliquid id neque iste a blanditiis laudantium
                  ex tenetur itaque architecto sunt, illo, numquam non
                  accusantium tempora. Labore, facere fugiat.
                </p>
              </Col>
              <Col md="4" className="text-center">
                <SimpleLineIcon name="wrench" />
                <h3>Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nihil aliquid id neque iste a blanditiis laudantium
                  ex tenetur itaque architecto sunt, illo, numquam non
                  accusantium tempora. Labore, facere fugiat.
                </p>
              </Col>
            </Row>
          </Container>
        </Services>
        <Articles>
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Article</h1>
            </div>
            {posts.map(({ node: post }) => (
              <div>
                <p>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <MainButton to={post.fields.slug}>Keep Reading</MainButton>
                </p>
              </div>
            ))}
          </div>
        </Articles>
        <ContactSection>
          <Container>
            <Row className="mb-5">
              <Col className="text-center">
                <h1>Contact</h1>
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
  query IndexQuery {
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
