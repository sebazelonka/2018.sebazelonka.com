import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";
import SimpleLineIcon from "react-simple-line-icons";
import styled from "styled-components";

import seba from "../img/seba.png";
import { Contact } from "../components/Contact";

const Top = styled.section`
  background-color: #000;
  color: #fff;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "Exo 2", sans-serif;
    font-size: 5rem;
    font-weight: 900;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  h2 {
    font-family: "merriweather", serif;
    font-size: 2rem;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const About = styled.section`
  margin: 5rem 0;
  min-height: 75vh;
  @media (min-width: 768px) {
    background-image: url(${seba});
    background-size: 30%;
    background-repeat: no-repeat;
  }
  a {
    color: #000;
    text-decoration: none;
    div {
      font-size: 2rem !important;
      display: inline-flex;
      margin: 2rem 1rem 0 0;
      transition: 0.25s;
      &:hover {
        transform: scale(1.25);
      }
    }
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
  .article-item {
    padding: 1rem;
    min-height: 15rem;
    display: flex;
    flex-direction: column;
    color: #fff;
    background: #000;
    border-radius: 15px;
    transition: 0.25s;
    margin-bottom: 1rem;

    .title {
      font-size: 1.5rem;
      background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
    .date {
      font-size: 0.75rem;
      margin: auto 0 0;
    }
    .bottom {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      [class^="icon-"] {
        background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
      }
    }
    &:hover {
      text-decoration: none;
      color: #fff;
      transform: scale(1.1);
      transition: 0.25s;
    }
  }
`;

const ContactSection = styled.section`
  padding: 6rem 0;
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
        <Top>
          <div className="container">
            <h1>Sebastian Zelonka</h1>
            <h2>UX Design, Front End Developer</h2>
          </div>
        </Top>
        <About>
          <Container>
            <Row>
              <Col md={{ size: 5, offset: 4 }}>
                <h1>Born in Argentina, working worldwide</h1>
                <p>
                  Hi, I'm Sebastian, a Product Designer from Buenos Aires,
                  Argentina.
                </p>
                <p>
                  I have 8+ years of experience on Digital Products and I've
                  worked on several projects from different industries: B2B,
                  B2C, Non Profit Orgs, Volunteer.
                </p>
                <p>I like starting new endeavors and challenges.</p>
                <p>
                  I love to discover, learn and understand problems to find the
                  simpler solutions.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 5, offset: 4 }}>
                <a
                  href="https://www.linkedin.com/in/sebastianzelonka/"
                  target="blank"
                >
                  <SimpleLineIcon name="social-linkedin" />
                </a>
                <a href="https://github.com/sebazelonka" target="blank">
                  <SimpleLineIcon name="social-github" />
                </a>
                <a href="https://twitter.com/sebazelonka" target="blank">
                  <SimpleLineIcon name="social-twitter" />
                </a>
              </Col>
            </Row>
          </Container>
        </About>
        <Services>
          <Container>
            <Row>
              <Col md="12" className="text-center mb-5">
                <h2>Skills</h2>
              </Col>
              <Col md="4" className="text-center mb-5">
                <SimpleLineIcon name="rocket" />
                <h3>UX Consultant</h3>
                <p>
                  Define customer experience vision and success criterias to
                  have amazing experiences around your products to create happy
                  customers.
                </p>
              </Col>
              <Col md="4" className="text-center mb-5">
                <SimpleLineIcon name="diamond" />
                <h3>UI/UX Design</h3>
                <p>
                  Follow the User Centered Design process to define, create and
                  test great User Interfaces and flows that are easy to use.
                </p>
              </Col>
              <Col md="4" className="text-center mb-5">
                <SimpleLineIcon name="wrench" />
                <h3>FrontEnd Dev</h3>
                <p>
                  Handcrafted websites to improve online presence working with
                  high standards providing mobile and accesible sites.
                </p>
              </Col>
            </Row>
          </Container>
        </Services>
        <Articles>
          <Container>
            <Row className="mb-5">
              <Col className="text-center">
                <h1>Latest Articles</h1>
              </Col>
            </Row>
            <Row>
              {posts.map(({ node: post }) => (
                <Col key={post.frontmatter.date} md="4">
                  <Link to={post.fields.slug} className="article-item">
                    <h2 className="title">{post.frontmatter.title}</h2>
                    <div className="bottom">
                      <p className="date">{post.frontmatter.date}</p>
                      <SimpleLineIcon name="eyeglass" />
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </Articles>
        <ContactSection>
          <Container>
            <Row className="mb-5">
              <Col className="text-center">
                <h1>Get in Touch</h1>
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
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
